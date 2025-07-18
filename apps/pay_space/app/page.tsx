"use client"

import "tailwind-config/globals.css";
import { useSession } from "next-auth/react"
import {useEffect, useState,useMemo} from "react"
import useUserStore from "@pay_space/app/utils/userDetails";
import Landing from "./components/landing";
import IntroPage from "./components/intro";
import BankAccountCard from "./components/bankAccountCard";
import RecentTransaction from "./components/recentTransactions";
import { Accounts } from "./lib/accounts";
import axios from "axios"
import { toast } from "react-hot-toast";
import Loading from "./loading";

export default function Home() {

  const { data: session,status } = useSession();
  const [userBankAccounts,setUserBankAccounts]=useState<Accounts[]>()
  const [defaultAccount,setDefaultAccount]=useState<Accounts>()
  const [totalBalance,setTotalBalance]=useState(0);


  const API_URL=process.env.NEXT_PUBLIC_API_URL_DEV
  
  const { username, setUsername,setEmail,setNumber,bankCardCalled,setbankCardCalled} = useUserStore();
  
  async function getAllAccounts() {
    const getAccounts=await axios.post(`${API_URL}/account-info`,{
      bankNameBankTransaction:false
    }); 

    if(getAccounts.data.done){  
        setUserBankAccounts(getAccounts.data.accounts)
        setTotalBalance(getAccounts.data.totalBalance)
        setbankCardCalled(true);

        if(!getAccounts.data.defaultAccType){
          setDefaultAccount(getAccounts.data.accounts[0])
        }

        const defaultAcc = getAccounts.data.accounts.find(
          (account: Accounts) => account.accountType === getAccounts.data.defaultAccType
        );
        
        if (!defaultAcc) {
          setDefaultAccount(getAccounts.data.accounts[0]);
        } else {
          setDefaultAccount(defaultAcc);
        }
        
    }

    else{
      toast.error("Error fetching bank details-->",getAccounts.data.msg)
    }

  }

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
      getAllAccounts();

    }
  }, []);

  
   if(status=="unauthenticated"){
    return (
      <div className="">
        <Landing/>
      </div>
    )
  }

  if (!userBankAccounts) {
    return <div><Loading /></div>;
  }
  
  return (
    <div>
      <IntroPage username={username} />
      <div className="px-2 py-3 my-5 mx-5">
      <BankAccountCard bankNames={userBankAccounts?.map(account=>account.accountName) || []} numberOfAccount={userBankAccounts?.length||0} totalBalance={totalBalance||0} balances={userBankAccounts?.map(account=>account.accountBalance) || []}/>
      {/* @ts-ignore */}
      <RecentTransaction defaultAccount={defaultAccount} accounts={userBankAccounts||[]} />
      </div>
    </div>
  );
}

