import { NextRequest,NextResponse } from "next/server";
import prisma from "@repo/db_banks/prisma_client"
import bcrypt from "bcrypt"
import crypto from "crypto"
import { Bank_name } from "@repo/db_banks/src/generated/prisma/client";

function generateAccessToken(): string {
    return crypto.randomBytes(32).toString("hex"); 
}

export async function POST(req:NextRequest,{params}:{params:{bank:string}}){

    const bodyText = await req.text();
    const paramsBody = new URLSearchParams(bodyText);

    const code = paramsBody.get("code");
    const redirectUri = paramsBody.get("redirect_uri");
    const grantType = paramsBody.get("grant_type");
    const user_email=paramsBody.get("user_email")

    const { bank } = params;
    const bankString=bank.toLowerCase();

    try{

        if (!code || !redirectUri || !grantType || !user_email) {
            return NextResponse.json({ 
              error: "invalid_request", 
              msg: "Missing required parameters" 
            }, { status: 400 });
          }

        // make sure valid client
        const authHeader = req.headers.get("Authorization");
        if (!authHeader || !authHeader.startsWith("Basic ")) {
          return NextResponse.json({ error: "Missing or invalid Authorization header" }, { status: 401 });
        }

        const base64Credentials = authHeader.split(" ")[1];
        const decoded = Buffer.from(base64Credentials!, "base64").toString();
        const [client_id,sharedSecret]=decoded.split(":");

        // look for this client and shared secret
        const doesClientExist=await prisma.commercialClients.findFirst({
            where:{
                client_id:client_id
            }
        })

        if(!doesClientExist){
            return NextResponse.json({ msg: `No commercial partner ${client_id} found.`,done:false,err:"invalid_client" },{status:401});
        }

        const compareClientSecret=await bcrypt.compare(sharedSecret!,doesClientExist!.sharedSecret);

        if(!compareClientSecret){
            return NextResponse.json({ msg: `Wrong shared secret by the commercial partner.`,done:false },{status:401});

        }

        const doesUserExist=await prisma.user.findFirst({
            where:{
                email:user_email
            }
        })
    
        if(!doesUserExist){
            return NextResponse.json({ msg: `No bank account found for this user, make a account with the ${bank}`,done:false },{status:401});
        }

        const getCode=await prisma.auth_codes.findFirst({
            where:{
                user_id:doesUserExist.id,
                client_id:client_id,
                redirect_uri:redirectUri!
            }
        })
        if(!getCode){
            return NextResponse.json({ msg: `No code found with the given:  Commercial Client ${client_id} and user ${user_email}`,done:false },{status:401});

        }

        const compareCodes=await bcrypt.compare(code!,getCode.code);


        if(!compareCodes || getCode.expiresAt<new Date() || getCode.used || grantType !== "authorization_code"){
            return NextResponse.json({ msg: `WrongCode/AlreadyUsed/Expired/Incorrect Grant type, try again`,done:false },{status:401});

        }
          
        const rawGeneratedToken = generateAccessToken();

        const hashedToken = await bcrypt.hash(rawGeneratedToken,10);

        const expiry = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

        await prisma.$transaction(async (tx) => {

            await tx.tokens.create({
              data: {
                user_id: doesUserExist.id,
                client_id: client_id!,
                bankName:bank,
                hashedToken: hashedToken,
                expiresAt: expiry
              }
            });
          
            await tx.auth_codes.update({
              where: { id: getCode.id },
              data: { used: true }
            });

            await tx.accounts.updateMany({
                where:{user_id:doesUserExist.id,bank:bankString as 
                Bank_name},
                data:{connectedToMain:true}
            })
          });

        return NextResponse.json({ msg: `Code verified and token sent to ${client_id}`,done:true,token:rawGeneratedToken },{status:200});

    }catch(err){
        return NextResponse.json({ 
            error: "server_error", 
            error_description: "Internal server error on token page" 
        }, { status: 500 });
}


}