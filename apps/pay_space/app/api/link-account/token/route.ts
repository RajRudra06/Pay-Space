import { NextResponse,NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import  {authOptions}  from "@pay_space/app/lib/auth"
import prisma from "@repo/db/prisma";

const BANK_API=process.env.BANK_API_URL;
const PAY_SPACE_ID=process.env.NEXT_PUBLIC_CLIENT_ID;
const PAY_SPACE_SECRET=process.env.BANK_PAY_SPACE_SECRET;
const basicAuth = Buffer.from(`${PAY_SPACE_ID}:${PAY_SPACE_SECRET}`).toString("base64");
const PAY_SPACE_URL_CALLBACK=process.env.NEXT_PUBLIC_PAY_SPACE_URL

export async function POST(req: NextRequest) {
    const session = await getServerSession(authOptions);

    const {user_email,code,bankName}=await req.json();


    try{

        if (!session) {
            return NextResponse.json({ msg: "user not verified make sure you are logged in pay space",done:false }, { status: 401 });
          }

          const doesUserExist=await prisma.user.findFirst({
            where:{
                email:user_email
            }
          })

          // check if the req user exists and logged in
          if(!doesUserExist){
            return NextResponse.json({ msg: "No user with this email exists, make sure you have a account with Pay Space",done:false },{status:200});

          }

          // ask for exchange token by sending code and shared secret
          const excahngeToken=await fetch(`${BANK_API}/${bankName}/oauth/token/exchange`,{
            method:'POST',
            headers:{
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": `Basic ${basicAuth}`,
            },
            body: new URLSearchParams({
                code: code,
                client_id:PAY_SPACE_ID!,
                redirect_uri: `${PAY_SPACE_URL_CALLBACK!}/connect-bank/callback`,
                grant_type: "authorization_code",
                user_email:user_email
              }).toString()

          })

          const excahngeTokenRes=await excahngeToken.json();


          if(excahngeTokenRes.done){

                const createPseudoAccount=await prisma.linkedBankToken.create({
                    data:{
                        user_id:doesUserExist.id,
                        bankName:bankName,
                        accessToken:excahngeTokenRes.token,
                        expiresAt:new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
                    }
                })

                return NextResponse.json({
                    msg:`Token created and stored on ${PAY_SPACE_ID}`,done:true
                },{status:200})

          }

          else{
            console.log("error at pay/api/link-account/token",excahngeTokenRes)

            return NextResponse.json({
                msg:`Token exchange error occured, try again`,done:false,msgg:excahngeTokenRes.msg
            },{status:401})
          }
        

    }catch(err){
        return NextResponse.json({ msg: "not allowed, unknown server err",done:false,err:err }, { status: 401 });

    }
  
    
  }

