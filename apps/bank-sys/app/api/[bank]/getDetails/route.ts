import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptionsBankSys } from "../../../lib/auth";
import { Bank_name } from "@repo/db_banks/src/generated/prisma/client";
import prisma_Bank from "@repo/db_banks/prisma_client";
import { decrypt } from "../../../lib/encyption";

export async function GET(req:NextRequest,{params}:{params:{bank:Bank_name}}){

    try{

        const session=await getServerSession(authOptionsBankSys);
    const bank=params.bank;

    if(!session){
        return NextResponse.json({
            done:false,
            msg:"User not logged in, try sigining in"
        },{status:401})
    }

    const doesUserExist=await prisma_Bank.user.findFirst({
        where:{
            bankName:bank,
            email:session.user?.email,
        }
    })

    if(!doesUserExist){
        return NextResponse.json({
            done:false,
            msg:"no user found, try signing up"
        },{status:404})
    }

    if(!doesUserExist.isVerified){
        return NextResponse.json({
            done:false,
            msg:"user not verified, verify now"
        },{status:401})
    }

    const getAccounts=await prisma_Bank.accounts.findMany({
        where:{
            user_id:doesUserExist.id,
            bank:bank
        }
    })

    const accountsToSend=getAccounts.map((acc)=>({
        accName:acc.acc_name,
        accNumber:decrypt(acc.acc_number),
        accType:acc.type,
        balance:acc.balance,
        createdAt:acc.created_At,
        status:acc.status
    }))

    console.log("Accounts get and to send---->",doesUserExist.id,accountsToSend,getAccounts)

    return NextResponse.json({
        msg:"user details and accounts fetched.",accounts:accountsToSend,acc2:getAccounts,user:{
            email: doesUserExist.email,
            password: doesUserExist.password,
            fullName: doesUserExist.username,
            phoneNumber: doesUserExist.number,
            dob: doesUserExist.DOB},done:true
    })

    }
    catch(err){

        console.log("decruting error",err)

        return NextResponse.json({
            msg:"Internal error occured",done:-1,error:err
        },{status:400})
    }
    

}