import Link from "next/link";
import TransactionsTabs from "./transactionTabs";
import { Accounts } from "../lib/accounts";

export default function RecentTransaction({accounts,defaultAccount}:{accounts:Accounts[],defaultAccount:Accounts}){

    return(
        <>
        <div className="mt-10 flex justify-between">
            <div className="recent-transaction-label text-xl font-bold">
                Recent Transactions
            </div>
            <div>
            <Link 
  className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-gray-700 bg-white border-2 border-gray-200 shadow-sm hover:border-indigo-400 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 hover:text-indigo-700 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 ease-in-out" 
  href="/transactions"
>
  View all
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
</Link>
            </div>
        </div>
              
        <div className="">
            <TransactionsTabs accounts={accounts} defaultAccount={defaultAccount}/>
        </div>
        </>
    )
}