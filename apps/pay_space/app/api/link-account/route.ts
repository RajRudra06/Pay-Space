import { NextResponse,NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import  {authOptions}  from "@pay_space/app/lib/auth"


export async function GET(req: NextRequest) {
    const session = await getServerSession(authOptions);


    try{

        if (!session) {
            return NextResponse.json({ msg: "not allowed",allowed:false }, { status: 401 });
          }
        
          return NextResponse.json({ msg: "allowed",allowed:true },{status:200});

    }catch(err){
        return NextResponse.json({ msg: "not allowed, unknown server err",allowed:false }, { status: 401 });

    }
  
    
  }

