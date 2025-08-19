import { Bank_name } from "@repo/db/client";
import { NextRequest,NextResponse } from "next/server";
import crypto from "crypto"

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
                done: false
            }, { status: 400 }); 
        }

        if (!timestamp || Math.abs(new Date(timestamp).getTime() - new Date().getTime()) > 5 * 60 * 1000) 
        {
            return NextResponse.json({ error: "Timestamp expired",   done: false}, { status: 401 });
        }

        if (authHeader !== `Bearer ${process.env.BANK_SYS_CLIENT_CARD_ISSUER_API_KEY}`) 
        {
            return NextResponse.json({
                msg:"Unauthorised access",
                done: false
            }, { status: 401 }); 
        }

        if (clientId !== process.env.BANK_SYS_CLIENT_ID_CARD_ISSUER) 
        {
            return NextResponse.json({ error: "Invalid Client ID",      done: false}, { status: 401 });
        }

        const computedSignature = crypto.createHmac("sha256", CARD_ISSUER_SIGNATURE_KEY!).update(rawBody).digest("hex");

        if (computedSignature !== signature) {
            return NextResponse.json({ error: "Invalid Signature", done: false }, { status: 401,             
            });
        }

        const body = JSON.parse(rawBody);

        const {issuer_Bank_Sys_Shared_Secret}=body;


        if (issuer_Bank_Sys_Shared_Secret !== process.env.BANK_SYS_CLIENT_CARD_ISSUER_SECRET) 
        {
            return NextResponse.json({ error: "Invalid Bank Shared Secret",done: false}, { status: 403 });
        }



    }
    catch (error) {
        return NextResponse.json({
            msg: error instanceof Error ? error.message : "Internal Server Error from card Issuer",
            done: false
        }, { status: 500 });
    }

}