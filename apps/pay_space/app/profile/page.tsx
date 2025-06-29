"use client"
import { useSession } from "next-auth/react"
import useUserStore from "@pay_space/app/utils/userDetails";
import ProtectedRouting from "../components/protectedRouting";

export default function Profile(){
    const {data:session,status}=useSession();
    const { username, email, balance,number, setUsername,setEmail,setNumber,setBalance, incrementBalance,decrementBalance } = useUserStore();

    return (
    <ProtectedRouting fallback={null}>
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
    </ProtectedRouting>
    )
}