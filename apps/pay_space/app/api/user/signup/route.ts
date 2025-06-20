// apps/user/src/app/api/create-user/route.ts
import { NextResponse,NextRequest } from "next/server";
import prisma from "@repo/db/prisma"
import { userSchema } from "@repo/validation";
import bcrypt from "bcrypt"

export async function POST(req:NextRequest) {
    const body=await req.json();
    const res=userSchema.safeParse(body);

    try {
      if(!res.success){
        return NextResponse.json({msg:"User Schema not followed",done:false})
      }

      const userAlreadyExist=await prisma.user.findFirst({
        where: {
          OR: [
            { email: res.data.email },
            { number: res.data.number }
          ]
        }
      });
      
      if(userAlreadyExist){
        return NextResponse.json({
          msg:"User already exist",done:false
        })
      }

      const hashedPassword=await bcrypt.hash(res.data.password,10);
      const insertUser=await prisma.user.create({
        data:{
          email:res.data.email,
          username:res.data.username,
          number:res.data.number,
          password:hashedPassword
        }
      })

      return NextResponse.json({msg:"User signed up 🎉",done:true})
    } catch (error) {
      return NextResponse.json({msg:"Internal Server Error",done:-1,error:error})
    }
}
