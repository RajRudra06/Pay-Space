import { NextRequest,NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@pay_space/app/lib/auth";
import prisma from "@repo/db/prisma";
import { BankId } from "@pay_space/app/lib/banksMetaData";


export async function GET(req:NextRequest){

    try{

        const session = await getServerSession(authOptions);


        if(!session){
            return NextResponse.json({
                msg:"User not logged in, unauthenticated, please sign in",done:false
            },{status:401})
        }


        const doesUserExist=await prisma.user.findFirst({
            where:{
                email:session.user?.email
            }
        })

        if(!doesUserExist){
            return NextResponse.json({
                msg:"User does not exist",done:false
            },{status:401})
        }

        const findConnectedBankAccounts=await prisma.linkedBankToken.findMany({
            where:{
                user_id:doesUserExist.id
            },
            select:{
                bankName:true
            }
        })

        if(!findConnectedBankAccounts){
            return NextResponse.json({done:false,msg:"No connected banks found for the user"})
        }

        const connectedBankIds: BankId[] = [
            ...findConnectedBankAccounts.map((b) => b.bankName.toLowerCase() as BankId),
            "pay_space",
          ];
          

        const defaultbank=await prisma.defaultAccount.findFirst({
            where:{
                user_id:doesUserExist.id
            }
        })
          
        return NextResponse.json({banks:connectedBankIds,done:true,msg:"Connected banks found",defaultbank:defaultbank?.bankName})


    }
    catch(err){
            return NextResponse.json({
                            msg:"Internal server error happened while retrieving connected banks",done:false
                        },{status:401})
    }
}