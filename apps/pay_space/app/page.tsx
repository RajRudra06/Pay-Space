"use client"
import Image from "next/image";
import styles from "./page.module.css";
import "tailwind-config/globals.css";
import { useSession } from "next-auth/react"
import {useEffect} from "react"
import useUserStore from "@pay_space/app/utils/userDetails";
import Landing from "./components/landing";
import NavBar from "./components/NavBar";
import SideBar from "./components/sideBar";
import IntroPage from "./components/intro";
import BankAccountCard from "./components/bankAccountCard";

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
  

  // if(status=="loading"){
  //   return (
  //   <div className="min-h-screen bg-gray-100 flex items-center justify-center">
  //       Loading...
  //     </div>
  // );
  // }

   if(status=="unauthenticated"){
    return (
      <div className="">
                <Landing/>

        </div>
    )
  }

  return (
    <div>
      
     <IntroPage username={username} />
     <div className="px-2 py-3 my-10 mx-5">
     <BankAccountCard numberOfAccount={2} balance={9000}/>

     </div>
    </div>
  );
}

