import { NextRequest,NextResponse } from "next/server";
import crypto from "crypto"
import prisma_Medium from "@repo/db_medium/prisma";
import axios from "axios"
import Fuse from "fuse.js";
import { runCheck } from "../../../lib/runSanctionsCheck";

const SANCTION_SYS_SIGNATURE_KEY=process.env.SANCTION_SYS_SIGNATURE_KEY
const SANCTION_LIST_CHECK_URL=process.env.SANCTION_LIST_CHECK_URL

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
                done: -1
            }, { status: 400 }); 
        }

        if (!timestamp || Math.abs(new Date(timestamp).getTime() - new Date().getTime()) > 5 * 60 * 1000) 
        {
            return NextResponse.json({ error: "Timestamp expired",   done: -1}, { status: 401 });
        }

        if (authHeader !== `Bearer ${process.env.SANCTION_VERIFICATION_API_KEY}`) 
        {
            return NextResponse.json({
                msg:"Unauthorised access",
                done: -1
            }, { status: 401 }); 
        }

        if (clientId !== process.env.SANCTION_BANK_SYS_CLIENT_ID) 
        {
            return NextResponse.json({ error: "Invalid Client ID",done: -1}, { status: 401 });
        }

        const computedSignature = crypto.createHmac("sha256", SANCTION_SYS_SIGNATURE_KEY!).update(rawBody).digest("hex");

        if (computedSignature !== signature) {
            return NextResponse.json({ error: "Invalid Signature", done: -1 }, { status: 401,             
            });
        }

        const body = JSON.parse(rawBody);

        const {fullName,DOB,nationalCountry,sanction_Bank_Sys_Shared_Secret}=body;

        if (sanction_Bank_Sys_Shared_Secret !== process.env.SANCTION_BANK_SYS_SHARED_SECRET) 
        {
            return NextResponse.json({ error: "Invalid Bank Shared Secret",done: -1}, { status: 403 });
        }

        const checkSanction=await runCheck({fullName,DOB,nationalCountry})

        if(checkSanction.flagSanction===false){
            return NextResponse.json({
                msg:"Sanction Checks passed",
                done: true
            }, { status: 200 });
        }

        else{
            return NextResponse.json({
                msg:"Sanction Checks not passed",
                done: false,
                score:checkSanction.score,
                reason:checkSanction.reason,
                sourceList:checkSanction.sourceList
            }, { status: 200 });
        }
        
    }

    catch (error) {
        return NextResponse.json({
            msg: error instanceof Error ? error.message : "Internal Server Error",
            done: -1
        }, { status: 500 });
    }
}