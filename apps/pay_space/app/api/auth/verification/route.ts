import { NextResponse,NextRequest } from "next/server";
import prisma from "@repo/db/prisma"
import bcrypt from "bcrypt"
import crypto from "crypto"
import { sendMail } from "@pay_space/app/lib/send_mail";
import { transporter } from "@pay_space/app/lib/email_transporter";
import { sendingFormat } from "@pay_space/app/lib/send_mail";
import { SentMessageInfo } from 'nodemailer';

export async function POST(req:NextRequest) {


    const body=await req.json();

    const types = body.type ? "email" : "number";

    try{

        const doesUserExist=await prisma.user.findFirst({
            where: {
              OR: [
                { email: body.email },
                { number: body.number }
              ]
            }
          });

    
          if(!doesUserExist){
            return NextResponse.json({
              msg:"User not found, try signing up",done:false
            })
          }

          if(doesUserExist.isVerified){
            return NextResponse.json({
                msg:"Already Verified",done:false
              })
          }

          const prevOTP=await prisma.verification.deleteMany({
            where: {
              user_id: doesUserExist.id,
              type: types
            },
          });

          // otp generation and hashed insertion 
          const generateOTP=()=>{
            return crypto.randomInt(100000,999999).toString();
          }
          const otp=generateOTP();
          const hashedOTP=await bcrypt.hash(otp,10);
          const expiresAt = new Date(Date.now() + 5 * 60 * 1000); 
          const insertAuth=await prisma.verification.create({
            data:{
                user_id:doesUserExist.id,
                otp:hashedOTP,
                type:types,
                expiresAt:expiresAt
            }
          })

          if(types=="email"){
                const toSendMailFormat: sendingFormat = {
                    receiverEmail: doesUserExist.email!,
                    transporter: transporter,      
                    otp: otp,                      
                    username: doesUserExist.username! 
                }
        
                const sentMail:SentMessageInfo=await sendMail(toSendMailFormat);
        
                if (sentMail.accepted.length > 0) {
                    return NextResponse.json({ msg: 'OTP sent succesfully',done:true,res:sentMail.accepted});
                } 
            
                }

          else if(types=="number"){
            return NextResponse.json({ msg: 'OTP sent succesfully',done:true});

          }
          

          
          return NextResponse.json({ msg: 'OTP not sent',done:false});          

    }
    catch(error){
        console.log("ijabdsfijbadsjf---->",error)

        return NextResponse.json({msg:"Internal Server Error",done:-1,error:error})
        console.log(error)
    }

}