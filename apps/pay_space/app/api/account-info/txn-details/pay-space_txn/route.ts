import { authOptions } from "@pay_space/app/lib/auth";
import { getServerSession } from "next-auth";
import { NextRequest,NextResponse } from "next/server";
import prisma from "@repo/db/prisma";

export async function POST(req:NextRequest){
    const session=await getServerSession(authOptions);

    // const { searchParams } = new URL(req.url);
    // const page=parseInt(searchParams.get("page")||"1");
    // const limit=parseInt(searchParams.get("limit")||"7");

    const body = await req.json(); 


    const page = Number.isInteger(body.page) ? body.page : parseInt(body.page) || 1;
    const limit = Number.isInteger(body.limit) ? body.limit : parseInt(body.limit) || 10;

    const offset=(page-1)*limit;

    if(!session){
        return NextResponse.json({
            msg:"User not logged in, unauthenticated, please sign in",done:false
        },{status:401})
    }

    const doesUserExist=await prisma.user.findFirst({
        where:{
            email:session.user?.email,
            isVerified:true
        }
    })

    if(!doesUserExist){
        return NextResponse.json({
            msg:"No such user found",done:false
        },{status:401})
    }

    const [getTransactionsPerAccount,totalTransactions]=await Promise.all([
        prisma.transactions.findMany({
            where:{
                user_id:doesUserExist?.id,
            },
            skip:offset,
            take:limit,
            orderBy:{
                created_At:"desc"
            }
        }),

        prisma.transactions.count({
            where: {
              user_id: doesUserExist?.id,
            },
          }),

    ])

    return NextResponse.json(
        {
          done: true,
          msg: "Legible transactions found",
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