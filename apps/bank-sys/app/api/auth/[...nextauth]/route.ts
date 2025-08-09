import { authOptionsBankSys } from "../../../lib/auth";
import NextAuth from "next-auth/next"
const handler=NextAuth(authOptionsBankSys);

export{handler as GET, handler as POST};
