"use client"

import { signOut } from "next-auth/react"
import { userStore } from "@repo/store"


export default function useSignOut(){
    const {setBalance,setEmail,setUsername,setNumber}=userStore()

    const handleSignOut=()=>{
        signOut()
        setBalance(0)
        setEmail("")
        setNumber("")
        setUsername("")
    }

    return handleSignOut
}