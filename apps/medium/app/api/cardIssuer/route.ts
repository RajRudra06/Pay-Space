import { Bank_name } from "@repo/db/client";
import { NextRequest,NextResponse } from "next/server";
import crypto from "crypto"
import prisma_Medium from "@repo/db_medium/prisma";

const CARD_ISSUER_SIGNATURE_KEY=process.env.CARD_ISSUER_SIGNATURE_KEY


export async function POST(req:NextRequest,{params}:{params:{bank:Bank_name}}){

    try{

        const rawBody =await req.text();

        const authHeader = req.headers.get("Authorization");
        const clientId = req.headers.get("x-client-id");
        const signature = req.headers.get("x-signature");
        const timestamp = req.headers.get("x-timestamp");

        if (!authHeader || !clientId || !signature || !timestamp) {
            return NextResponse.json({
                msg:"Missing required headers",
                done: -1
            }, { status: 400 }); 
        }

        if (!timestamp || Math.abs(new Date(timestamp).getTime() - new Date().getTime()) > 5 * 60 * 1000) 
        {
            return NextResponse.json({ error: "Timestamp expired",   done: -1}, { status: 401 });
        }

        if (authHeader !== `Bearer ${process.env.BANK_SYS_CLIENT_CARD_ISSUER_API_KEY}`) 
        {
            return NextResponse.json({
                msg:"Unauthorised access",
                done: -1
            }, { status: 401 }); 
        }

        if (clientId !== process.env.BANK_SYS_CLIENT_ID_CARD_ISSUER) 
        {
            return NextResponse.json({ error: "Invalid Client ID",      done: -1}, { status: 401 });
        }

        const computedSignature = crypto.createHmac("sha256", CARD_ISSUER_SIGNATURE_KEY!).update(rawBody).digest("hex");

        if (computedSignature !== signature) {
            return NextResponse.json({ error: "Invalid Signature", done: -1 }, { status: 401,             
            });
        }

        const body = JSON.parse(rawBody);

        const {requestID,customerRef,productRequested,cardHolder,deliveryDetails,dailyLimit,issuer_Bank_Sys_Shared_Secret,accountReference}=body;


        if (issuer_Bank_Sys_Shared_Secret !== process.env.BANK_SYS_CLIENT_CARD_ISSUER_SECRET) 
        {
            return NextResponse.json({ error: "Invalid Bank Shared Secret",done: -1}, { status: 403 });
        }

        // look the DB for same customer ref, name and accref to see if already gotten or not if yes start with that if not make a DB entry and start 

        // one type of advanced KYC

        // card network communication 

        // pan(luhn), cvv 

        // doing advance KYC

        // contact network



        // BIN logic and PAN generation

            // get BIN acc to the customer req

            // const getBIN=await prisma_Medium.bIN_NUMBERS.findFirst({
            //     where:{
            //         network:productRequested.cardNetwork,
            //         productType:productRequested.cardTypeMoney,
            //         Tier:productRequested.cardVariant,
            //         Country:deliveryDetails.address.Country
            //     }
            // })

            // if(!getBIN){
            //     return NextResponse.json({
            //         msg:"No BIN found for the requested product",
            //         done:false
            //     },{status:400})
            // }

            return NextResponse.json({
                msg:"Request started to work",done:true
            })

    }
    catch (error) {
        return NextResponse.json({
            msg: error instanceof Error ? error.message : "Internal Server Error from card Issuer",
            done: -1
        }, { status: 500 });
    }

}