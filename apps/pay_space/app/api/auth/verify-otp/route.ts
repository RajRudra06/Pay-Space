import { NextResponse,NextRequest } from "next/server";
import prisma from "@repo/db/prisma"
import bcrypt from "bcrypt"
import crypto from "crypto"
import {Resend} from "resend"
import { getOTPEmailTemplate } from "@pay_space/app/lib/email_template";
import {z} from "zod"
import { sendMail } from "@pay_space/app/lib/send_mail";
import { transporter } from "@pay_space/app/lib/email_transporter";
import { sendingFormat } from "@pay_space/app/lib/send_mail";
import { SentMessageInfo } from 'nodemailer';

export async function POST(req:NextRequest) {


    const body=await req.json();

    const types = body.type ? "email" : "number";

    try{

        const userDetails=await prisma.user.findFirst({
            where: {
              OR: [
                { email: body.email },
                { number: body.number }
              ]
            }
          });

          if(!userDetails){
            return NextResponse.json({
              msg:"User not found, try signing up",done:false
            })
          }

        const verificationDetails=await prisma.verification.findFirst({
            where:{
                user_id:userDetails!.id,
                type:types
            },
            orderBy: {
                expiresAt: 'desc'  
              }
          });

          if(userDetails.isVerified){
            return NextResponse.json({
                msg:"Already Verified",done:false
              })
          }

          if (!verificationDetails) {
            return NextResponse.json({ msg: "No OTP found", done: false });
          }
          
          if (verificationDetails.expiresAt < new Date()) {
            return NextResponse.json({ msg: "OTP expired, request a new one", done: false });
          }

          const isCorrectOTP=await bcrypt.compare(body.otp,verificationDetails!.otp)

          if(!isCorrectOTP){
            return NextResponse.json({msg:"Wrong OTP, try again",done:false})
          }

          const updatedVerification = await prisma.user.update({
            where: {
              id: userDetails!.id, 
            },
            data: {
              isVerified:true
            },
          });

          const prevOTP=await prisma.verification.deleteMany({
            where: {
              user_id: userDetails!.id,
              type: types
            },
          });
          return NextResponse.json({ msg: 'Correct OTP, verified Succesfully',done:true});          

    }
    catch(error){

        return NextResponse.json({msg:"Internal Server Error",done:-1,error:error})
    }

}