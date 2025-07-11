import { NextRequest,NextResponse } from "next/server";
import prisma_Bank from "@repo/db_banks/prisma_client";
import bcrypt from "bcrypt"

export function maskedAccountOutput(acc_number:string):string{
    if(acc_number.length<4||!acc_number) return "****"

    const last4=acc_number.slice(-4);
    const mask="*".repeat(acc_number.length-4);
    return mask+last4;
}   

export async function authMediator(req:NextRequest,user_email:string,access_token:string,bank:string){
    const authHeader=req.headers.get('Authorization');
    const bankName=bank.toUpperCase();
    if(!authHeader || !authHeader.startsWith("Basic ")){
        return { error: "Missing or invalid Authorization header",status:401,ok:false};
    }

    const base64Credentials = authHeader.split(" ")[1];
    const decoded = Buffer.from(base64Credentials!, "base64").toString();
    const [client_id,sharedSecret]=decoded.split(":");

    const checkCommercialClientDetails=await prisma_Bank.commercialClients.findUnique({
        where:{
            client_id:client_id,
        }
    })

    if(!checkCommercialClientDetails){
        return { error: "No client found with given client id",id:client_id,status:401,ok:false }

    }

    const comapreClientSecrets=await bcrypt.compare(sharedSecret!,checkCommercialClientDetails.sharedSecret);

    if(!comapreClientSecrets){
        return { error: "Invalid Client Secret",status:401,ok:false };
    }

    const doesUserExist=await prisma_Bank.user.findFirst({
        where:{
            email:user_email
        }
    })

    if(!doesUserExist){
        return {done:false,msg:"No user found with the given mail at our system",status:400,ok:false}
    }

    const doesTokenExists=await prisma_Bank.tokens.findFirst({
        where:{
            client_id:client_id,
            user_id:doesUserExist!.id,
            bankName:bankName

        }
    })

    if(!doesTokenExists || doesTokenExists.expiresAt.getTime()<Date.now() || doesTokenExists?.revoked){
        return {done:false,msg:`No valid token found for the client either expired/revoked or no token at all`,status:200,ok:false}
    }

    const comapreTokens=await bcrypt.compare(access_token,doesTokenExists.hashedToken)

    if(!comapreTokens){
        return {done:false,msg:`Invalid token, access denied`,token:access_token,status:401,ok:false}

    }

    return{done:false,msg:`all ok, auth and token verified`,ok:true,user_id:doesTokenExists.user_id}
}