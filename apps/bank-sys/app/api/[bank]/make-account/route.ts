import { userDetailsSchema } from "../../../lib/userDetailSchema";
import generateAccountNumber from "../../../lib/generateAccountNumber";
import { generateAccountName } from "../../../lib/generateAccountName"; 
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptionsBankSys } from "../../../lib/auth";
import prisma_Bank from "@repo/db_banks/prisma_client";
import { Bank_name } from "@repo/db_banks/src/generated/prisma/client";
import { encrypt } from "../../../lib/encyption";
import { generateRandomIFSC } from "../../../lib/generateIFSC";

export async function POST(req: NextRequest, { params }: { params: { bank: Bank_name } }) {
    
  let accountName: string;
let isUniqueName = false;
    const bankNameUpperCase = params.bank;
    const bankName=bankNameUpperCase.toLowerCase();

    const session = await getServerSession(authOptionsBankSys);
    if(!session){
        return NextResponse. json(
            { msg: "Unauthenticated Session, try logging again", done: false },
            { status: 401 }
          );
    }

    try { 
        const body = await req.json();
        const { formData } = body;
        console.log(body);
        const res = userDetailsSchema.safeParse(formData);

        console.log("zod errorr--->", res);

        if (!res.success) {
            return NextResponse.json({ msg: "User Schema not followed", done: false });
        }
        console.log("before does user exist");

        const doesUserExist = await prisma_Bank.user.findFirst({
            where: {
                bankName: bankName as Bank_name, 
                OR: [
                    { email: res.data.email },
                    // { number: res.data.phone }
                ]
            }
        });

        console.log("ID userreer--->", doesUserExist!.id)

        if (!doesUserExist) {
            return NextResponse.json({
                msg: "User not found, try signing up",
                done: false
            });
        }

        const accountFormation = await prisma_Bank.$transaction(async (txn) => {

          do {
            accountName = generateAccountName(); // ← Function call
            const existingAccName = await txn.accounts.findFirst({
                where: { 
                    user_id: doesUserExist.id,
                    bank: bankName as Bank_name,
                    acc_name: accountName 
                }
            });
            isUniqueName = !existingAccName;
        } while (!isUniqueName);
            
        // check number of accounts for a person

        const numberOfAccounts=await txn.accounts.count({
          where:{
            user_id:doesUserExist.id,
            bank:bankName as Bank_name
          }
        })

        console.log("number of accounts check type--->",numberOfAccounts)


        if(numberOfAccounts>=5){
          return {
            account: -1,
            details: -1
        };
        }

        const checkType=await txn.accounts.findFirst({
          where:{
            user_id:doesUserExist.id,
            type:res.data.accountType
          }
        })

        console.log("account check type--->",checkType)

        if(checkType){
          return {
            account: 0,
            details: 0
        };
        }

            // create a account first with bank account details
            const insertBankAccount = await txn.accounts.create({
                data: {
                    user_id: doesUserExist!.id,
                    acc_number: encrypt(generateAccountNumber()),
                    status: "active",
                    type: res.data.accountType,
                    bank: bankName as Bank_name,
                    balance: 0,
                    connectedToMain: false,
                    created_At: new Date(),
                    acc_name: accountName,
                    ifscCode:generateRandomIFSC(bankNameUpperCase)
                }
            });

            // insert misc details of user after account creation
            const insertBankAccountDetails = await txn.accountsDetails.create({
                data: {
                    acc_id: insertBankAccount.acc_id,
                    user_id: doesUserExist!.id,
                    firstName: res.data.firstName,
                    lastName: res.data.lastName,
                    DOB: res.data.dateOfBirth,
                    Gender: res.data.gender,
                    fatherName: res.data.fatherName,
                    motherName: res.data.motherName,
                    aadhaarNumber: res.data.aadharNumber,
                    panNumber: res.data.panNumber,
                    email: res.data.email,
                    phoneNumber: res.data.phone,
                    address: res.data.address,
                    City: res.data.city,
                    State: res.data.state,
                    pincode: res.data.pincode,
                    Occupation: res.data.occupation,
                    monthlyIncome: res.data.monthlyIncome,
                    nomineeFirstname: res.data.nomineeFirstName,
                    nomineeLastname: res.data.nomineeLastName,
                    relationship: res.data.nomineeRelation
                }
            });

            return {
                account: insertBankAccount,
                details: insertBankAccountDetails
            };
        });

        console.log("printing results of accountformation--->", accountFormation);

        if(accountFormation.account===-1&&accountFormation.details===-1){
          return NextResponse.json({ msg: "Maximum limit reached for acccount creation for a user", done: false });

        }

        if(accountFormation.account===0&&accountFormation.details===0){
          return NextResponse.json({ msg: "Account type alreadt exists, try opening a different type", done: false });

        }

        if (accountFormation.account && accountFormation.details) {
            return NextResponse.json({ msg: "Account created 🎉", done: true });
        } else {
            return NextResponse.json({ msg: "form account txn failed", done: false });
        }

    } catch (error: any) {
        console.error("Full error ->", error);
        
        return NextResponse.json({
            msg: "Internal Server Error",
            done: -1,
            error: {
                name: error?.name || "UnknownError",
                message: error?.message || "Something went wrong",
                meta: error?.meta || null,
                stack: error?.stack || null
            }
        });
    }
}