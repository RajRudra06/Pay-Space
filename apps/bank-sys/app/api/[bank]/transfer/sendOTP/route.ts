import { NextRequest,NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptionsBankSys } from "../../../../lib/auth";
import { setEngine } from "crypto";
import prisma_Bank from "@repo/db_banks/prisma_client";
import { Bank_name } from "@repo/db_banks/src/generated/prisma/client";
import crypto from "crypto"
import bcrypt from "bcrypt"
import { sendingFormat } from "pay_space/app/lib/send_mail";
import { transporter } from "pay_space/app/lib/email_transporter";
import { sendMail } from "pay_space/app/lib/send_mail";
import { SentMessageInfo } from "nodemailer";

export async function GET(req:NextRequest,{params}:{
    params:{bank:Bank_name}
}){
    
    const session = await getServerSession(authOptionsBankSys);
    const bankNameUpperCase = params.bank;
    const bankName=bankNameUpperCase.toLowerCase();

    if(!session){
        return NextResponse.json(
            { msg: "Unauthenticated Session, try logging again", done: false },
            { status: 401 }
          );
    }

    try{

        const doesUserExist = await prisma_Bank.user.findFirst({
            where: {
                bankName: bankName as Bank_name, 
                OR: [
                    { email: session.user?.email },
                ]
            }
        });

        const prevOTP=await prisma_Bank.verification.deleteMany({
            where: {
              user_id: doesUserExist!.id,
              type: "email"
            },
          });

          const generateOTP=()=>{
            return crypto.randomInt(100000,999999).toString();
          }
          const otp=generateOTP();

          const hashedOTP=await bcrypt.hash(otp,10);
          const expiresAt = new Date(Date.now() + 5 * 60 * 1000); 

          const insertAuth=await prisma_Bank.verification.create({
            data:{
                user_id:doesUserExist!.id,
                otp:hashedOTP,
                type:"email",
                expiresAt:expiresAt
            }
          })

          const toSendMailFormat: sendingFormat = {
            receiverEmail: doesUserExist!.email!,
            transporter: transporter,      
            otp: otp,                      
            username: doesUserExist!.username! 
        }

        const sentMail:SentMessageInfo=await sendMail(toSendMailFormat);

        if (sentMail.accepted.length > 0) {
            return NextResponse.json({ msg: 'OTP sent successfully',done:true,res:sentMail.accepted},{ status: 200 });
        } 
        return NextResponse.json({ msg: 'OTP not sent',done:false,res:sentMail.accepted},{ status: 200 });


    }catch(error){
        
        return NextResponse.json({
            msg: "Internal Server Error",
            done: -1,
            error: error
        });

    }

}