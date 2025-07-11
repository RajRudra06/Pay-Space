import Link from "next/link";
import TransactionsTabs from "./transactionTabs";
import { Accounts } from "../lib/accounts";

export default function RecentTransaction({accounts,defaultAccount}:{accounts:Accounts[],defaultAccount:Accounts}){

    console.log("FROM RECENT TRASNAC",defaultAccount,"accounts--->",accounts)
    return(
        <>
        <div className="mt-10 flex justify-between">
            <div className="recent-transaction-label text-xl font-bold">
                Recent Transactions
            </div>
            <div>
                <Link className="rounded-lg p-2 text-gray-600 border-2 border-gray-200 font-semibold" href="/transactions">View all</Link>
            </div>
        </div>
              
        <div className="">
            <TransactionsTabs accounts={accounts} defaultAccount={defaultAccount}/>
        </div>
        </>
    )
}