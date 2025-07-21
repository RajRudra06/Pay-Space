import { NextRequest,NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@pay_space/app/lib/auth";
import prisma from "@repo/db/prisma";
const BANK_API_URL=process.env.BANK_API_URL;
const PAY_SPACE_ID=process.env.NEXT_PUBLIC_CLIENT_ID;
const PAY_SPACE_SECRET=process.env.BANK_PAY_SPACE_SECRET;
const basicAuth = Buffer.from(`${PAY_SPACE_ID}:${PAY_SPACE_SECRET}`).toString("base64");

export async function POST(req:NextRequest){
    try{

        const session = await getServerSession(authOptions);
        const body = await req.json(); 

        const { acc_name, bankAcc } = body;
        const page = Number.isInteger(body.page) ? body.page : parseInt(body.page) || 1;
        const limit = Number.isInteger(body.limit) ? body.limit : parseInt(body.limit) || 10;

        if(!session){
            return NextResponse.json({
                msg:"User not logged in, unauthenticated, please sign in",done:false
            },{status:401})
        }

        const doesUserExist=await prisma.user.findFirst({
            where:{
                email:session.user?.email,
                isVerified:true
            }
        })

        if(!doesUserExist){
            return NextResponse.json({
                msg:"No such user found",done:false
            },{status:401})
        }

        const bankName=bankAcc?.toUpperCase();

        const doesUserLinkedAccountExists=await prisma.linkedBankToken.findFirst({
            where:{
                user_id:doesUserExist?.id,
                bankName:bankName
            }
        })
        console.log("---->poppeer",doesUserLinkedAccountExists)

        if(doesUserLinkedAccountExists?.expiresAt! < new Date() || !doesUserLinkedAccountExists){

            // cron job to renew tokens
            return NextResponse.json({
                msg:`Token expired, ${PAY_SPACE_ID} should renew or no token exists`,done:false
            },{status:401})
        }

        const bankTxnList=await fetch(`${BANK_API_URL}/${bankName.toLowerCase()}/getTxnDetails?page=${page}&limit=${limit}`,{method:'POST',
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':`Basic ${basicAuth}`
                },
                body:JSON.stringify({
                    access_token:`${doesUserLinkedAccountExists?.accessToken}`,
                    email:session.user?.email,
                    acc_name:acc_name
                })
                
        })
        console.log("---->",bankTxnList)


        const bankTxnListRes=await bankTxnList.json();

        if (!bankTxnList.ok) {
            return NextResponse.json({msg:`Bank API call failed with status ${bankTxnList.status}`,done:false});
        }
        
        if(bankTxnListRes.done){
            return NextResponse.json({
                msg:`Legible txns found`,done:true,txns:bankTxnListRes.transactions,meta:bankTxnListRes.meta},{status:200})
        }

        return NextResponse.json({
            msg:bankTxnListRes.msg,done:false,},{status:401})
        

    }
    catch(err){
        return NextResponse.json({
            msg:`Internal server error --> ${err}`,done:false,},{status:401})
        
    }
    
}