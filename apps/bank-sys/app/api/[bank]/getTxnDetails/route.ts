import prisma_Bank from "@repo/db_banks/prisma_client";
import { NextRequest,NextResponse } from "next/server";
import { Bank_name } from "@repo/db_banks/src/generated/prisma/client";
import { authMediator, } from "../../../utils/authMediator";



export async function POST(req:NextRequest,{params}:{params:{bank:string}}){
    const {bank}=params;
    const { searchParams } = new URL(req.url);

    const page=parseInt(searchParams.get("page")||"1");
    const limit=parseInt(searchParams.get("limit")||"7");

    const offset=(page-1)*limit;


    const bankName=bank.toLowerCase();
    const {access_token,user_email,acc_name}=await req.json();
    
    try{
        const res=await authMediator(req,user_email,access_token,bankName);

        if(res.ok){
            // decrypt account numbers
            const findUserAccount=await prisma_Bank.accounts.findFirst({
                where:{
                    bank:bankName as Bank_name,
                    user_id:res.user_id,
                    connectedToMain:true,
                    acc_name:acc_name
                }
            })
    
            // for now direct names but later when bank login is done masking+encyption of sensitive info
            const [getTransactionsPerAccount,totalTransactions]=await Promise.all([
                prisma_Bank.transactions.findMany({
                    where:{
                        acc_id:findUserAccount?.acc_id,
                    },
                    skip:offset,
                    take:limit,
                    orderBy:{
                        created_At:"desc"
                    }
                }),

                prisma_Bank.transactions.count({
                    where: {
                      acc_id: findUserAccount?.acc_id,
                    },
                  }),

            ])
    
            return NextResponse.json(
                {
                  done: true,
                  msg: "Legible transactions found for the given account",
                  transactions: getTransactionsPerAccount,
                  meta: {
                    page:page,
                    limit:limit,
                    totalTransactions:totalTransactions,
                    totalPages: Math.ceil(totalTransactions / limit),
                  },
                },
                { status: 200 }
              );
            }

        else{
            return NextResponse.json({done:false,msg:`Error occured--->${res.msg}`},{status:200})
        }
    
    }
    
        
    catch(err){
        return NextResponse.json({done:false,msg:`Internal Server Error, try again later`},{status:400})
    }

}
