"use client"
import Image from "next/image";
import styles from "./page.module.css";
import "tailwind-config/globals.css";
import { useSession } from "next-auth/react"
import {useEffect} from "react"
import useUserStore from "@pay_space/app/utils/userDetails";

export default function Home() {

  const { data: session,status } = useSession();
  
  const { username, email, balance,number, setUsername,setEmail,setNumber,setBalance, incrementBalance,decrementBalance } = useUserStore();
  
  useEffect(() => {
    if (session?.user) {
      const user = session.user as {
        email: string;
        username: string;
        number: string;
        balance: number;
      };
  
      setUsername(user.username)
      setEmail(user.email)
      setNumber(user.number)
      setBalance(user.balance)
  
    }
  }, [session]);
  

  if(status=="loading"){
    return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        Loading...
      </div>
  );
  }

  else if(status=="unauthenticated"){
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          User not authenticated, try logging again
        </div>
    )
  }

  return (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <h1 className="text-8xl font-bold text-red-600">Hello Tailwind! PAY_SPACE
      
      </h1>
    </div>
  );
}
