import { NextRequest,NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@pay_space/app/lib/auth";
import prisma from "@repo/db/prisma";
import { Accounts } from "@repo/db/client";
const BANK_API_URL=process.env.BANK_API_URL;
const PAY_SPACE_ID=process.env.NEXT_PUBLIC_CLIENT_ID;
const PAY_SPACE_SECRET=process.env.BANK_PAY_SPACE_SECRET;
const basicAuth = Buffer.from(`${PAY_SPACE_ID}:${PAY_SPACE_SECRET}`).toString("base64");


export async function POST(req:NextRequest){
    const session = await getServerSession(authOptions);
    let bankName:string|undefined;
    let orgType:string|undefined;

    const {bankNameBankTransaction}=await req.json();

    if(!session){
        return NextResponse.json({
            msg:"User not logged in, unauthenticated, please sign in",done:false
        },{status:401})
    }

    const doesUserExist=await prisma.user.findFirst({
        where:{
            email:session!.user?.email,
            // email:"rudrarajpurohit06@gmail.com",
            isVerified:true
        }

    })

 
        if(!bankNameBankTransaction){
            const defaultBankCheck=await prisma.defaultAccount.findFirst({
                where:{
                    user_id:doesUserExist?.id,
                }
            })
        
            if(!defaultBankCheck){
                const doesUserLinkedAccountExists=await prisma.linkedBankToken.findFirst({
                    where:{
                        user_id:doesUserExist?.id,
                    }
                })
                bankName=doesUserLinkedAccountExists?.bankName;
    
                // find a way to get the default account for the non stored bank
                orgType="savings"
            }
            else{
                bankName=defaultBankCheck.bankName.toUpperCase();
                orgType=defaultBankCheck.accOrgType
            }
        }
    
        else if(bankNameBankTransaction==="pay_space"){
            // make a txn call to pay space txn table
        }
        else{
            bankName=bankNameBankTransaction.toUpperCase();
            orgType="savings"
        }
    
        const doesUserLinkedAccountExists=await prisma.linkedBankToken.findFirst({
            where:{
                user_id:doesUserExist?.id,
                // later bankName should be of default bank, technically if default account selected then bank related to it is default bank, make a db call at BE of pay space when user selects a default acc/bank
                bankName:bankName
            }
        })
    
        if(doesUserLinkedAccountExists?.expiresAt! < new Date()){
    
            // cron job to renew tokens
            return NextResponse.json({
                msg:`Token expired, ${PAY_SPACE_ID} should renew`,done:false
            },{status:401})
        }
    
        const bankAPIAccountList=await fetch(`${BANK_API_URL}/${bankName}/getAccounts`,{method:'POST',
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':`Basic ${basicAuth}`
                },
                body:JSON.stringify({
                    access_token:`${doesUserLinkedAccountExists?.accessToken}`,
                    // user_email:"rudrarajpurohit06@gmail.com"
                    "user_email":session.user?.email
                })
                
                })
    
        const bankAPIAccountListRes=await bankAPIAccountList.json();
        const totalBalance = bankAPIAccountListRes.accounts.reduce(
            (sum: number, account: any) => sum + parseInt(account.accountBalance),
            0
          );
    
          if (!bankAPIAccountList.ok) {
            throw new Error(`Bank API call failed with status ${bankAPIAccountList.status}`);
          }
          
        if(bankAPIAccountListRes.done){
            return NextResponse.json({
                msg:`Legible account found`,done:true,accounts:bankAPIAccountListRes.accounts,totalBalance:totalBalance,defaultAccType:orgType
            },{status:200})
        }
    
        return NextResponse.json({
            msg:bankAPIAccountListRes.msg,done:false,},{status:401})
    

   
    
}
