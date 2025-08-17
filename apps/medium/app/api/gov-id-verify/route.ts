import { NextRequest,NextResponse } from "next/server";
import crypto from "crypto"

const BANK_SYS_SIGNATURE_KEY=process.env.BANK_SYS_SIGNATURE_KEY

export async function POST(req:NextRequest){
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

        if (authHeader !== `Bearer ${process.env.VERIFICATION_API_KEY}`) 
        {
            return NextResponse.json({
                msg:"Unauthorised access",
                done: false
            }, { status: 401 }); 
        }

        if (clientId !== process.env.BANK_SYS_CLIENT_ID) 
        {
            return NextResponse.json({ error: "Invalid Client ID",      done: false}, { status: 401 });
        }

        const computedSignature = crypto.createHmac("sha256", BANK_SYS_SIGNATURE_KEY!).update(rawBody).digest("hex");

        if (computedSignature !== signature) {
            return NextResponse.json({ error: "Invalid Signature", done: false }, { status: 401,             
            });
        }

        const body = JSON.parse(rawBody);

        const {NationalIDType,NationalIDNumber,fullName,DOB,bank_sys_Client_Secret}=body;

        if (bank_sys_Client_Secret !== process.env.BANK_SYS_SHARED_SECRET) 
        {
            return NextResponse.json({ error: "Invalid Bank Shared Secret",done: false}, { status: 403 });
        }

        // random pass/fail
        const pass = Math.random() < 0.8;

        if (pass===true) {
            return NextResponse.json({
              status: "verified",
              referenceId: crypto.randomUUID(),
              done:true
            });
        } 
        
        else 
        {
            return NextResponse.json({
              status: "failed",
              reason: "ID could not be verified",
              referenceId: crypto.randomUUID(),
              done:false}, { status: 400 });
        }

    }

    catch (error) {
        return NextResponse.json({
            msg: error instanceof Error ? error.message : "Internal Server Error",
            done: false
        }, { status: 500 });
    }
}