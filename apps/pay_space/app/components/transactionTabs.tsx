'use client'
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../components/ui/tabs"
import { useEffect, useState } from "react"
import TransactionTable from "./transactionTable"
import { Accounts } from "../lib/accounts"
import DefaultCard from "./bankCard"
import axios from "axios"

export default function TransactionsTabs({accounts, defaultAccount}:{accounts:Accounts[], defaultAccount:Accounts}) {
  console.log("FROM RECENT TRASNAC2222",defaultAccount,"accounts--->222",accounts)
  const API_URL=process.env.NEXT_PUBLIC_API_URL_DEV;

  const [transactions, setTransactions] = useState<any[]>([])
  const [activeTab, setActiveTab] = useState(() => {
    return accounts && accounts.length > 0 ? accounts[0].accountName : ""
  })
  const[val,setVal]=useState(true);
  
  useEffect(() => {
    if (accounts && accounts.length > 0 && !activeTab) {
      setActiveTab(accounts[0].accountName)
    }
  }, [accounts, activeTab])
  
  const activeAccount = accounts.find(acc => acc.accountName === activeTab)
  
  useEffect(() => {
    // Replace this with  actual fetch
    
    if(val){
      setTransactions(mockTransactions)
      setVal(false)
    }
    else{
      setTransactions(mockTransactions2)
      setVal(true)

    }
    fetchTransactions();
  }, [activeTab])
  
  async function fetchTransactions() {
    console.log(activeTab)
    try {

      const getTxnForAccount=await axios.post(`${API_URL}/account-info/txn-details`,{
          acc_name:activeAccount?.accountName,
          bankAcc:activeAccount?.accountBank
      })

      if(getTxnForAccount.data.done){
        setTransactions(getTxnForAccount.data.txns)
      }



      // setTransactions(data fetched from here)
    }
    catch {
    }
  }
  
  // Mock accounts data 
  const mockTransactions = [
    {
      transactionName: "Salary",
      amount: 50000,
      status: "Success",
      date: "2025-06-01",
      category: "Income",
      txn_id: "TXN1001",
      c: "credit",
      accountId: "1" // abc account
    },
    {
      transactionName: "Grocery Shopping",
      amount: -3200,
      status: "Success",
      date: "2025-06-03",
      category: "Food",
      txn_id: "TXN1002",
      c: "debit",
      accountId: "1" // abc account
    },
    {
      transactionName: "Electricity Bill",
      amount: -2100,
      status: "Pending",
      date: "2025-06-05",
      category: "Utilities",
      txn_id: "TXN1003",
      c: "debit",
      accountId: "2" // def account
    },
    {
      transactionName: "Freelance Project",
      amount: 15000,
      status: "Success",
      date: "2025-06-06",
      category: "Income",
      txn_id: "TXN1004",
      c: "credit",
      accountId: "2" // def account
    },
  ]


  const mockTransactions2 = [
    {
      transactionName: "Salary new 2",
      amount: 5000,
      status: "Pending",
      date: "2025-06-01",
      category: "Income",
      txn_id: "TXN1001",
      c: "credit",
      accountId: "1" // abc account
    },
    {
      transactionName: "Grocery Shopping",
      amount: -200,
      status: "Success",
      date: "2025-06-03",
      category: "Food",
      txn_id: "TXN1002",
      c: "debit",
      accountId: "1" // abc account
    },
    {
      transactionName: " Bill",
      amount: -200,
      status: "Pending",
      date: "2025-06-05",
      category: "Utilities",
      txn_id: "TXN1003",
      c: "debit",
      accountId: "2" // def account
    },
    {
      transactionName: "Freelance Project",
      amount: 15000,
      status: "Success",
      date: "2025-06-06",
      category: "Income",
      txn_id: "TXN1004",
      c: "credit",
      accountId: "2" // def account
    },
  ]
  if (!accounts || accounts.length === 0) {
    return <div>Loading accounts...</div>
  }
  
  return (
    
    <>
    
     
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList >
          {accounts?.map(account => (
          <TabsTrigger
          key={account.accountName}
          value={account.accountName}
          className={`
            text-lg font-medium px-4 py-1 m-1 rounded-lg 
            border border-transparent 
            text-blue-800 transition-all duration-200
            data-[state=active]:bg-blue-700 
            data-[state=active]:text-white 
            data-[state=active]:border-blue-800 
            hover:bg-blue-100 mt-10
          `}
        >
          {account.accountName}
        </TabsTrigger>
        
          ))}
        </TabsList>

        {activeAccount && (
        <DefaultCard
          balance={activeAccount.accountBalance}
          bankname={activeAccount.accountName}
          accountType={activeAccount.accountType}
        />
      )}
        
        <TabsContent value={activeTab}>
          <TransactionTable data={transactions} />
        </TabsContent>
      </Tabs>
    </>
  )
}