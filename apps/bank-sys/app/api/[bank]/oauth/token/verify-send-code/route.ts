import { NextResponse,NextRequest } from "next/server";
import prisma from "@repo/db_banks/prisma_client"
import bcrypt from "bcrypt"
import crypto from "crypto"


export async function POST(req:NextRequest) {


    const {client_id,user_email,otp,redirect_uri}=await req.json();

    try{

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

          if(!doesCommercialClientExists||!doesUserExists){
            return NextResponse.json({
              msg:"User not found, try signing up",done:false
            })
          }

        const verificationDetails=await prisma.verification.findFirst({
            where:{
                user_id:doesUserExists!.id,
                type:"email"
            },
            orderBy: {
                expiresAt: 'desc'  
              }
          });

          if (!verificationDetails) {
            return NextResponse.json({ msg: "No OTP found", done: false });
          }
          
          if (verificationDetails.expiresAt < new Date()) {
            return NextResponse.json({ msg: "OTP expired, request a new one", done: false });
          }

          const isCorrectOTP=await bcrypt.compare(otp,verificationDetails!.otp)

          if(!isCorrectOTP){
            return NextResponse.json({msg:"Wrong OTP, try again",done:false})
          }

          const generateCode=()=>{
            return crypto.randomInt(100000,999999).toString();
          }

          const prevCode=await prisma.auth_codes.deleteMany({
            where: {
              user_id: doesUserExists.id,
              client_id:client_id,
              redirect_uri:redirect_uri           
            },
          });

          const code=generateCode();
          const hashedCode=await bcrypt.hash(code,10);
          const expiresAt = new Date(Date.now() + 1 * 60 * 1000); 
          const createdAt=new Date();


          const insertAuth=await prisma.auth_codes.create({
            data:{
                user_id:doesUserExists.id,
                code:hashedCode,
                client_id:client_id,
                redirect_uri:redirect_uri,
                createdAt:createdAt,
                expiresAt:expiresAt,

            }
          })

          const prevOTP=await prisma.verification.deleteMany({
            where: {
              user_id: doesUserExists!.id,
              type: "email"
            },
          });

          return NextResponse.json({ msg: 'Correct OTP, verified Succesfully',code:code,done:true});          

    }
    catch(error:any){

        return NextResponse.json({msg:"Internal Server Error",done:-1,error:error.message})
    }

}