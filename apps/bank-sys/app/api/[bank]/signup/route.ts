import { NextRequest,NextResponse } from "next/server";
import prisma_Bank from "@repo/db_banks/prisma_client";
import bcrypt from "bcrypt"
import { signupUserSchema } from "../../../lib/userDetailSchema";

export async function POST(req: NextRequest) {
    const body=await req.json();
    const parsedRes=signupUserSchema.safeParse(body)
    const lowercaseBank=body.bankName.toLowerCase();

    try {
      if(!parsedRes.success){
        return NextResponse.json({msg:"User Schema not followed",done:false})
      }

      const userAlreadyExist = await prisma_Bank.user.findFirst({
        where: {
          OR: [
            {
              bankName: lowercaseBank,
              email: parsedRes.data.email,
            },
            {
              bankName: lowercaseBank,
              number: parsedRes.data.phoneNumber,
            },
          ],
        },
      });
      

      if(userAlreadyExist){
        return NextResponse.json({
          msg:"User already exist",done:false
        })
      }

      const hashedPassword=await bcrypt.hash(parsedRes.data.password,10);

      console.log("parsedbody",parsedRes.data.email,"parsedbody",parsedRes.data.fullName,"parsedbody",parsedRes.data.phoneNumber,"parsedbody",lowercaseBank)
      // create the new user
      const insertNewUser = await prisma_Bank.user.create({
        data: {
          email: parsedRes.data.email,
          username:parsedRes.data.fullName,
          number: parsedRes.data.phoneNumber,
          password: hashedPassword, 
          isVerified:true,
          bankName:lowercaseBank
        }
      });

      return NextResponse.json({msg:"User signed up 🎉",done:true})
    } catch (error) {
      return NextResponse.json({msg:`Internal Server Error`,done:-1,error:error})
    }

}