import  {authOptions}  from "@pay_space/app/lib/auth"
import NextAuth from "next-auth/next"
const handler=NextAuth(authOptions);

export{handler as GET, handler as POST};
