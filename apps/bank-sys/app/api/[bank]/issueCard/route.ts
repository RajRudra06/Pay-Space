import { NextResponse,NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import { authOptionsBankSys } from "../../../lib/auth";
import prisma_Bank from "@repo/db_banks/prisma_client";
import { Bank_name } from "@repo/db_banks/src/generated/prisma";
import bcrypt from "bcrypt"
import { KYCQueue } from "../../../lib/kycQueue";
import { KYCProcessTime } from "../../../lib/getProcesstime";


export async function POST(req: NextRequest,{params}:{params:{bank:string}}) {


   try {

    const {bank}=params;
    const bankName=bank.toLowerCase();
    const session=await getServerSession(authOptionsBankSys)
    const {fullName,DOB,Gender,nationalIDType,nationalIDNumber,phoneNumber,email,addressLine1,addressLine2,City,State,postalCode,Country,cardType,cardNetwork,cardVariant,dailyATMLimit,dailyPOSLimit,nomineeFullName,nomineeRelationship,emergencyContact,deliveryTime,acc_number,accType,acc_name,OTP,monthlyIncome,employment_type,existing_loan,loanAmount}=await req.json();

    if(!session){
        return NextResponse.json(
            { msg: "Unauthenticated Session, try logging again", done: false },
            { status: 401 }
          );
    }

    // check if user exist 

    const doesUserExists=await prisma_Bank.user.findUnique({
        where: {
            email_bankName: {
              email: email!,         // make sure it's not null/undefined
              bankName: bankName as Bank_name
            }
          }
    })

    if(!doesUserExists){
        return NextResponse.json(
            { msg: "User not found for this email", done: false },
            { status: 404 }
        ); 
    }

    // check if account of user exist 
    const doesUserAccountExists=await prisma_Bank.accounts.findUnique({
        where:{
            user_id_bank_acc_name_type:{
                user_id:doesUserExists.id,
                bank:bankName as Bank_name,
                type:accType,
                acc_name:acc_name
            }
        }
    })

    if(!doesUserAccountExists||doesUserAccountExists.status!=="active"){
        return NextResponse.json(
            { msg: "Sender Account not found or currently not active, check with bank", done: false },
            { status: 403 }
          );
    }
    
    const getHashedOTP=await prisma_Bank.verification.findFirst({
        where:{
            user_id:doesUserExists.id,
            usage:"issueCard",

        },
        orderBy:{
            expiresAt:'desc'
        }
    })

    if (!getHashedOTP || getHashedOTP.expiresAt < new Date()) {
        return NextResponse.json({
          msg: "OTP expired or invalid, please request a new one",
          done: false
        }, { status: 400 });
    }

    const isOTPValid=await bcrypt.compare(OTP,getHashedOTP.otp);

    if(!isOTPValid){
        return NextResponse.json(
            { msg: "Wrong OTP entered, check and try again", done: false },
            { status: 400 }
        );
    }

    const kycRef=crypto.randomUUID();
    const processAt=KYCProcessTime('EKYC');

    const kycQueuing=await prisma_Bank.$transaction(async (txn)=>{

        const deleteOTPs=await txn.verification.deleteMany({
            where:{
                id:getHashedOTP.id,
                usage:"issueCard"
            }
        })

        if(deleteOTPs.count === 0){
            return {
                debitCardApplication:false,
                deleteOTPs:false,
            }
        }

        // make a entry in debit card application 
        const debitCardApplication=await txn.debitCardApplication.create({
            data:{
                user_id:doesUserExists.id,
                fullName:fullName,
                DOB:DOB,
                bankName:bankName as Bank_name,
                Gender:Gender,
                nationlIDType:nationalIDType,
                nationalIDNumber:nationalIDNumber,
                phoneNumber:phoneNumber,
                email:email,
                addressLine1:addressLine1,
                addressLine2:addressLine2,
                City:City,
                State:State,
                postalCode:postalCode,
                Country:Country,
                acc_id:doesUserAccountExists.acc_id,
                acc_number:doesUserAccountExists.acc_number,
                acc_name:doesUserAccountExists.acc_name,
                cardType:cardType,
                cardNetwork:cardNetwork,
                cardVariant:cardVariant,
                dailyATMLimit:dailyATMLimit,
                dailyPOSLimit:dailyPOSLimit,
                nomineeFullName:nomineeFullName,
                nomineeRelationship:nomineeRelationship,
                emergencyContact:emergencyContact,
                deliveryTime:deliveryTime,
                kycStatus:"KYC_PENDING",
                status:"UnderProcess",
                kycQueueRef:kycRef,
                retryCount:0,
                riskNumber:0,
                IncomeMontly:monthlyIncome,
                employment_type:employment_type,
                existing_Loans:existing_loan,
                loanAmount:loanAmount
            }
        })
    
        if(!debitCardApplication){
            return {
                deleteOTPs:true,
                debitCardApplication:false
            }
        }

        return {
            deleteOTPs:true,
            debitCardApplication:true
        }

    })

    if(!kycQueuing.debitCardApplication||!kycQueuing.deleteOTPs){
        return NextResponse.json({
            msg: "Kyc queuing could not be completed, try later",
            done: false
        });
    }

    const delayMs = processAt ? processAt.getTime() - Date.now() : 0;

    try {
        const job = await KYCQueue.add(
          'process-kyc',
          { kycRef },
          { delay: delayMs > 0 ? delayMs : 0 }
        );

        console.log(`Queued KYC job: ${job.id} for ${kycRef}`);

        return NextResponse.json({
            msg: "KYC started, and is under review",
            done: true
        });

    } catch (err) {
        return NextResponse.json({
            msg: "DB txn completed but job couldn't be queued",
            done: false
        });
      }


// (BIN (product type), customer details, delivery type, personalization options.)
// set status = CARD_ISSUING

// issuer will make a DB call to its own record and make an entry
// then a webhook (or a nodejs worker) of issuer will create the card
// issuer stores PAN, CVV, expiry encrypted and PAN hashed  // (ensures no plaintext sensitive data at rest)
// no plaintext PAN/CVV leaves issuer DB  // (security improvement)

// once this entry is made, worker(issuer) will update its own DB to change status internally
// issuer then makes an API call to bank-sys sending:
// - masked PAN (e.g., **** **** **** 1234)
// - issuer token to identify the cardholder  // (minimal & secure issuer → bank-sys communication)
// bank-sys updates its DB and sets status = ISSUED
// bank-sys sends email to user to activate the card

// user starts activation: enters OTP sent to email and sets a PIN
// PIN stored encrypted
// bank-sys updates status = ACTIVE
// API call to issuer also sent to mark card as activated


   }
   catch (error) {
    return NextResponse.json({
        msg: error instanceof Error ? error.message : "Internal Server Error",
        done: false
    }, { status: 500 });
}

}

