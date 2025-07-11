import { NextResponse,NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import  {authOptions}  from "@pay_space/app/lib/auth"
import prisma from "@repo/db/prisma";


export async function POST(req: NextRequest) {
    const session = await getServerSession(authOptions);
    const {user_email,bank}=await req.json();

    try{

        if (!session) {
            return NextResponse.json({ msg: "not allowed",allowed:false }, { status: 401 });
          }

          const doesUserExist=await prisma.user.findFirst({
            where:{
                email:user_email
            }
          })

          console.log("---->>>>",doesUserExist,"bank--->",bank)

          if(!doesUserExist){
            return NextResponse.json({ msg: "not allowed, no user exits",allowed:false }, { status: 401 });

          }

          const doesTokenExists=await prisma.linkedBankToken.findFirst({
            where:{
                user_id:doesUserExist.id,
                bankName:bank
            }
          })

          console.log("---->>>>------",doesTokenExists)

          if(doesTokenExists){
            return NextResponse.json({ msg: "alreadyexist",allowed:false },{status:200});
          }
        
          return NextResponse.json({ msg: "allowed",allowed:true },{status:200});

    }catch(err){
        return NextResponse.json({ msg: "not allowed, unknown server err",allowed:false }, { status: 401 });

    }
  
    
  }

