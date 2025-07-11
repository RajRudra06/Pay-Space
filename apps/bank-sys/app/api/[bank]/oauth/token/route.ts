import { NextResponse,NextRequest } from "next/server";
import prisma from "@repo/db_banks/prisma_client"
import crypto from "crypto"
import bcrypt from "bcrypt"
import { Bank_name } from "@repo/db_banks/src/generated/prisma/client";
import { sendMail } from "pay_space/app/lib/send_mail"
import { transporter } from "pay_space/app/lib/email_transporter";
import { sendingFormat } from "pay_space/app/lib/send_mail";
import { SentMessageInfo } from 'nodemailer';

export async function POST(req: NextRequest,{params}:{params:{bank:string}}) {

    const {client_id,user_email}=await req.json();
    const { bank } = params;
    const bankName=bank.toLowerCase();

    try{
    
        // verify commercial client
        const doesCommercialClientExists=await prisma.commercialClients.findFirst({
            where:{
                client_id:client_id,
            }
        })

        const doesUserExists=await prisma.user.findFirst({
            where:{
                email:user_email,
            }
        })

        // does user hava account ?
        const doesUserAccountExists=await prisma.accounts.findFirst({
            where:{
                user_id:doesUserExists?.id,
                bank:bankName as Bank_name
            }
        })

        if(doesCommercialClientExists&&doesUserExists&&doesUserAccountExists){
            // send otp 

            const prevOTP=await prisma.verification.deleteMany({
                where: {
                  user_id: doesUserExists.id,
                  type: "email"
                },
            });

            const generateOTP=()=>{
                return crypto.randomInt(100000,999999).toString();
              }
    
              const otp=generateOTP();
              const hashedOTP=await bcrypt.hash(otp,10);
              const expiresAt = new Date(Date.now() + 5 * 60 * 1000); 

              const insertAuth=await prisma.verification.create({
                data:{
                    user_id:doesUserExists.id,
                    otp:hashedOTP,
                    type:"email",
                    expiresAt:expiresAt
                }
              })

              const toSendMailFormat: sendingFormat = {
                receiverEmail: doesUserExists.email!,
                transporter: transporter,      
                otp: otp,                      
                username: doesUserExists.username! 
            }
    
            const sentMail:SentMessageInfo=await sendMail(toSendMailFormat);
    
            if (sentMail.accepted.length > 0) {
                return NextResponse.json({ msg: 'OTP sent successfully',done:true,res:sentMail.accepted},{ status: 200 });
            } 
            return NextResponse.json({ msg: 'OTP not sent',done:false,res:sentMail.accepted},{ status: 200 });

        }
        
        else {

            if(!doesUserAccountExists){
                return NextResponse.json({ msg:`No bank account found for this user.`,done:false}, { status: 200 });
            }
            return NextResponse.json({ msg:`Client/User DNE`,done:false}, { status: 200 });
        }

    }catch(err){
        return NextResponse.json({ msg: "not allowed, unknown server err",done:false,err:err }, { status: 401 });

    }

}

