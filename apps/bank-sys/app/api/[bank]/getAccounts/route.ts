import prisma_Bank from "@repo/db_banks/prisma_client";
import { NextRequest,NextResponse } from "next/server";
import bcrypt from "bcrypt"
import { Bank_name } from "@repo/db_banks/src/generated/prisma/client";
import { authMediator } from "web/app/utils/authMediator";
import { maskedAccountOutput } from "web/app/utils/authMediator"; 


  
export async function POST(req:NextRequest,{params}:{params:{bank:string}}){
    const {bank}=params;
    const bankName=bank.toLowerCase();
    const {access_token,user_email}=await req.json();

   
    try{

        const res=await authMediator(req,user_email,access_token,bankName);

        if(res.ok){
    
        // decrypt account numbers
        const findUserAccounts=await prisma_Bank.accounts.findMany({
            where:{
                bank:bankName as Bank_name,
                user_id:res.user_id,
                connectedToMain:true
            }
        })
    
        const maskedAccounts=findUserAccounts.map((acc)=>{
            return{
                accountName:acc.acc_name,
                accountNumber:maskedAccountOutput(acc.acc_number),
                accountStatus:acc.status,
                accountType:acc.type,
                accountBank:acc.bank,
                accountBalance:acc.balance,
                createdAt:acc.created_At
            }
           
        })
    
        return NextResponse.json({done:true,msg:`Legible account found`,accounts:maskedAccounts!},{status:200})
    
        }
    
        else{
            return NextResponse.json({done:false,msg:`Error occured--->${res.msg}`},{status:200})
        }

    }

    catch(err){
        return NextResponse.json({done:false,msg:`Internal Server Error, try again later`},{status:400})
    }
   
}
