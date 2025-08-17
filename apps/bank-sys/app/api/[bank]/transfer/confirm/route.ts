import { NextRequest,NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptionsBankSys } from "../../../../lib/auth";
import prisma_Bank from "@repo/db_banks/prisma_client";
import { Bank_name, Txn_Cat } from "@repo/db_banks/src/generated/prisma/client";
import { Txn_channel } from "@repo/db_banks/src/generated/prisma/client";
import crypto from "crypto";
import { ProcessTime } from "../../../../lib/getProcesstime";
import { transactionQueue } from "../../../../lib/transactionQueue";
import bcrypt from "bcrypt"

export async function POST(req:NextRequest,{params}:{
    params:{bank:Bank_name}
}){
    
    const session = await getServerSession(authOptionsBankSys);
    const bankNameUpperCase = params.bank;
    const bankName=bankNameUpperCase.toLowerCase();
    const { beneficiaryName,beneficiaryAccNumber,beneficiaryBank,beneficiaryIFSC,amountToTransferRaw,transferMethod,purpose,senderAccountName,beneficiaryEmail,OTP } = await req.json();

    const amountToTransfer = parseInt(amountToTransferRaw, 10);


    if(!session){
        return NextResponse.json(
            { msg: "Unauthenticated Session, try logging again", done: false },
            { status: 403 }
          );
    }

    try{

        const doesSenderExist = await prisma_Bank.user.findFirst({
            where: {
                
                bankName: bankName as Bank_name, 
                email: session.user?.email ,
                
            }
        });

        if (!doesSenderExist) {
            return NextResponse.json(
                { msg: "Sender not found for this bank", done: false },
                { status: 404 }
            );
        }

        const doesSenderAccountExist=await prisma_Bank.accounts.findFirst({
            where:{
                user_id:doesSenderExist?.id,
                bank:bankName as Bank_name,
                acc_name:senderAccountName
            }
        })

        if(!doesSenderAccountExist || doesSenderAccountExist.status!=="active"){
            return NextResponse.json(
                { msg: "Sender Account not found or currently not active, check with bank", done: false },
                { status: 403 }
              );
        }
        
        const doesBeneficiaryExist=await prisma_Bank.user.findFirst({
            where:{
                bankName:beneficiaryBank.toLowerCase() as Bank_name,
                username:beneficiaryName,
                email:beneficiaryEmail
            }
        })

        if(!doesBeneficiaryExist){
            return NextResponse.json(
                { msg: "No Beneficiary found for given details of Beneficiary", done: false },
                { status: 404 }
              );
        }

        const doesBeneficiaryAccountExist=await prisma_Bank.accounts.findFirst({
            where:{
                user_id:doesBeneficiaryExist!.id,
                acc_number:beneficiaryAccNumber,
                bank:beneficiaryBank.toLowerCase() as Bank_name,
                ifscCode:beneficiaryIFSC
            }
        })

        if(doesBeneficiaryAccountExist?.status!=="active" || !doesBeneficiaryAccountExist){
            return NextResponse.json(
                { msg: "Beneficiary account is not active or does not exist, funds cannot be transferred", done: false },
                { status: 403 }
              );
        }

        if (doesSenderAccountExist.acc_id === doesBeneficiaryAccountExist.acc_id) {
            return NextResponse.json(
                { msg: "Cannot transfer to the same account", done: false },
                { status: 400 }
            );
        }

        const getHashedOTP = await prisma_Bank.verification.findFirst({
            where: {
              user_id: doesSenderExist.id,
              usage:"transfer",
            },
            orderBy: {
              expiresAt: 'desc'
            }
          });

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

        const transfer=await prisma_Bank.$transaction(async (txn)=>{

            const deleteOTP=await txn.verification.deleteMany({
                where:{
                    id:getHashedOTP.id,
                    usage:"transfer"
                }
            })

            const senderAcc = await txn.accounts.findFirst({
                where: { acc_id: doesSenderAccountExist.acc_id },
                select: { balance: true, hold_amount: true }
            });
        
            if (
                !senderAcc || 
                senderAcc.balance.minus(senderAcc.hold_amount).lt(amountToTransfer)
              ) {
                throw new Error("Insufficient available funds");
              }

            const holdAmount=await txn.accounts.update({
                where: { acc_id: doesSenderAccountExist.acc_id },
                data: { hold_amount: { increment: amountToTransfer } }
            });

            const txnRef = crypto.randomUUID();
            const processAt = ProcessTime(transferMethod);


            const insertDebit=await txn.transactions.create({
                data:{
                    acc_id:doesSenderAccountExist.acc_id,
                    status:'pending' as const,
                    type:'debit' as const,
                    channel:transferMethod as Txn_channel,
                    counterPartyID:doesBeneficiaryExist.username!,
                    process_At:processAt,
                    counterPartyType:transferMethod as Txn_channel,
                    category:purpose as Txn_Cat,
                    Amount:amountToTransfer,
                    txnRef:txnRef,
                    created_At:new Date()
                }
            })

            const insertCredit=await txn.transactions.create({
                data:{
                    acc_id:doesBeneficiaryAccountExist.acc_id,
                    status:'pending' as const,
                    type:'credit' as const,
                    channel:transferMethod as Txn_channel,
                    counterPartyID:doesSenderExist.username!,
                    counterPartyType:transferMethod as Txn_channel,
                    process_At:processAt,
                    category:purpose as Txn_Cat,
                    Amount:amountToTransfer,
                    txnRef:txnRef,
                    created_At:new Date()

                }
            })

            const delayMs = processAt!.getTime() - Date.now();

            await transactionQueue.add(
                'process-transaction',
                { txnRef: txnRef },  
                { delay: delayMs > 0 ? delayMs : 0 } 
              );
            
            return {

                debitLog:insertDebit,
                creditLog:insertCredit
            }
        })

        if (!transfer.debitLog || !transfer.creditLog)
        {
            return NextResponse.json({
                msg: "Transaction could not be completed",
                done: false
            });
        }

        return NextResponse.json({
            msg: "Transaction completed",
            done: true
        });

    }
    catch (error) {
        return NextResponse.json({
            msg: error instanceof Error ? error.message : "Internal Server Error",
            done: false
        }, { status: 500 });
    }
    

}