import { NextResponse,NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import  {authOptions}  from "@pay_space/app/lib/auth"


export async function POST(req: NextRequest) {
    const session = await getServerSession(authOptions);
  
    if (!session) {
      return NextResponse.json({ msg: "not allowed" }, { status: 401 });
    }
  
    return NextResponse.json({ msg: "allowed" });
  }

