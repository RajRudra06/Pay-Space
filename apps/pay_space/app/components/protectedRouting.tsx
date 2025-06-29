"use client"

import { useSession } from "next-auth/react"

export default function ProtectedRouting({fallback,children}:{fallback:React.ReactNode,children:React.ReactNode}){
    const {data:session,status}=useSession();
    if(status=="loading"){
        return(
            <div>Loading...</div>
        )
    }
    if(status=="unauthenticated" || !session){
        return fallback || (
            <div className="text-red-500 text-center p-4">
              User not authenticated, try signing in.
            </div>
          )
      }

      return children
 }