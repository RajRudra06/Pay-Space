"use client"
import { useSession } from "next-auth/react"
import useUserStore from "@pay_space/app/utils/userDetails";

export default function Profile(){
    const {data:session,status}=useSession();
    const { username, email, balance,number, setUsername,setEmail,setNumber,setBalance, incrementBalance,decrementBalance } = useUserStore();

    if(status=="loading"){
        return(
            <div>
                Fetching details...
            </div>
        )
    }

    else if(status=="unauthenticated"){
        return(
            <div>
                User not authenticated, try logging again
            </div>
        )
    }
    

    return (
        <div>

            Username: {username}
            Email:  {email}
            Phone Number:   {number}
            Balance:    {balance}

            OR

            Username: {session?.user?.name}
            Email:  {session?.user?.email}
            {/* @ts-ignore */}
            Phone Number:   {session?.user?.number}
            Balance:    {balance}
        </div>
    )
}