import { userDetailsSchema } from "../../../lib/userDetailSchema";
import generateAccountNumber from "../../../lib/generateAccountNumber";
import { generateAccountName } from "../../../lib/generateAccountName"; // ← Changed import
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptionsBankSys } from "../../../lib/auth";
import prisma_Bank from "@repo/db_banks/prisma_client";
import { Bank_name } from "@repo/db_banks/src/generated/prisma/client";

export async function POST(req: NextRequest, { params }: { params: { bank: Bank_name } }) {

    const bankNameUpperCase = params.bank;
    const bankName=bankNameUpperCase.toLowerCase();
    const session = await getServerSession(authOptionsBankSys);

    if(!session){
        return NextResponse.json(
            { msg: "Unauthenticated Session, try logging again", done: false },
            { status: 401 }
          );
    }

    try { 
        const body = await req.json();
        const { accountId,amount } = body;

        const [accName, rest] = accountId.split(" - ");
        const accType = rest.split(" ")[0];

        const doesUserExist = await prisma_Bank.user.findFirst({
            where: {
                bankName: bankName as Bank_name, 
                OR: [
                    { email: session.user?.email },
                ]
            }
        });

        if (!doesUserExist) {
            return NextResponse.json({
                msg: "User not found, try signing up",
                done: false
            });
        }

        const doesUserAccountExists=await prisma_Bank.accounts.findUnique({
            where:{
                user_id_bank_acc_name_type:{
                    user_id:doesUserExist?.id,
                    bank:bankName as Bank_name,
                    acc_name:accName,
                    type:accType
                }
               
            }
        })

        if(!doesUserAccountExists){
            return NextResponse.json(
                { msg: "No account found for selected option", done: false },
                { status: 401 }
              );
        }

        const addBalance=await prisma_Bank.accounts.update({
            where:{
                acc_id:doesUserAccountExists.acc_id
            },
            data:{
            
                balance:{
                    increment:amount
                }
            }
        })
        
        return NextResponse.json(
            { msg: "amount succesfully added", done: true },
            { status: 200 }
          );


    } catch (error: any) {
        
        return NextResponse.json({
            msg: "Internal Server Error",
            done: -1,
            error: {
                name: error?.name || "UnknownError",
                message: error?.message || "Something went wrong",
                meta: error?.meta || null,
                stack: error?.stack || null
            }
        });
    }
}