import { Bank_name } from "@repo/db_banks/src/generated/prisma/client";

export default function Landing({bank}:{bank:Bank_name}){
   return(
    <div>
        Landing of {bank}
    </div>
   ) 
}