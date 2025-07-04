"use client"
import Image from "next/image";
import styles from "./page.module.css";
import "tailwind-config/globals.css";
import { useSession } from "next-auth/react"
import {useEffect, useState} from "react"
import useUserStore from "@pay_space/app/utils/userDetails";
import Landing from "./components/landing";
import NavBar from "./components/NavBar";
import SideBar from "./components/sideBar";
import IntroPage from "./components/intro";
import BankAccountCard from "./components/bankAccountCard";
import RecentTransaction from "./components/recentTransactions";
import { Accounts } from "./lib/accounts";

export default function Home() {

  const { data: session,status } = useSession();
  const [userBankAccounts,setUserBankAccounts]=useState<Accounts[]>()
  const [defaultAccount,setDefaultAccount]=useState<Accounts>()
  
  const { username, email, balance,number, setUsername,setEmail,setNumber,setBalance, incrementBalance,decrementBalance } = useUserStore();
  const totalBalance = userBankAccounts?.map(account => account.balance).reduce((sum, balance) => sum + balance, 0)

  
  useEffect(() => {
    if (session?.user) {
      const user = session.user as {
        email: string;
        username: string;
        number: string;
        balance: number;
      };

      // fetch api to get accounts of the a given author, get all accounts
      // setAllAccounts
  
      setUsername(user.username)
      setEmail(user.email)
      setNumber(user.number)
      setDefaultAccount(userBankAccounts?.[0])
      // settotalbalance
      setUserBankAccounts([{id:"nmn",name:"first",balance:9000},{id:"nnmn",name:"firsbt",balance:9000},{id:"jnmn",name:"first",balance:9000}])
      setBalance(totalBalance||0)
  
    }
  }, [session]);

   if(status=="unauthenticated"){
    return (
      <div className="">
        <Landing/>
      </div>
    )
  }

  // if (!userBankAccounts || !defaultAccount) {
  //   return <div>Loading...</div>;
  // }
  
  return (
    <div>
      <IntroPage username={username} />
      <div className="px-2 py-3 my-1 mx-5">
      <BankAccountCard bankNames={userBankAccounts?.map(account=>account.name) || []} numberOfAccount={userBankAccounts?.length||0} totalBalance={totalBalance||0} balances={userBankAccounts?.map(account=>account.balance) || []}/>
      {/* @ts-ignore */}
      <RecentTransaction defaultAccount={defaultAccount} accounts={userBankAccounts||[]} />
      </div>
    </div>
  );
}

