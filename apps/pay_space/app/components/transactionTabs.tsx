'use client'
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../components/ui/tabs"
import { useEffect, useState } from "react"
import TransactionTable from "./transactionTable"
import { Accounts } from "../lib/accounts"
import DefaultCard from "./bankCard"
import axios from "axios"
import { useTransactionStore } from "@repo/store"
import { toast } from "react-hot-toast"
import Loading from "../loading"

const API_URL=process.env.NEXT_PUBLIC_API_URL_DEV;


export default function TransactionsTabs({accounts, defaultAccount}:{accounts:Accounts[], defaultAccount:Accounts}) {

  const [transactions2, setTransactions2] = useState<any[]>([])
  const [isLoading,setIsLoading]=useState(false);

  const {setTransactions,transactions}=useTransactionStore();

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
    
    
    if(val){
      setVal(false)
    }
    else{
      setVal(true)

    }
    fetchTransactions();
  }, [activeTab])

  useEffect(() => {
    if (accounts && accounts.length > 0) {
      setActiveTab(accounts[0].accountName); // reset tab on account change
    }
  }, [accounts]);
  
  
  async function fetchTransactions() {

    if (!activeAccount) {
      console.log("No active account found, skipping API call");
      return;
    }

    try {
      setIsLoading(true)

      const getTxnForAccount=await axios.post(`${API_URL}/account-info/txn-details`,{
          acc_name:activeAccount?.accountName,
          bankAcc:activeAccount?.accountBank
      })

      if(getTxnForAccount.data.done){
        setTransactions(getTxnForAccount.data.txns)
        setTransactions2(getTxnForAccount.data.txns)

      }

      setIsLoading(false)
    }
    catch
    (err) {
      setIsLoading(false)

      toast.error(`Error fetching transction detail-${err}`)
    }
  }

  if (!accounts || accounts.length === 0) {
    return <div>Loading accounts...</div>
  }
  
  return (
    
    <>
    
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList  className="px-6">
          {accounts?.map(account => (
          <TabsTrigger
          key={account.accountName}
          value={account.accountName}
          className={`
            text-xl font-medium px- py-1 m-1 rounded-lg 
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

        {isLoading ? (
                <Loading />
            ) : (
              <TransactionTable isLoading={isLoading} data={transactions} />

            )}
        </TabsContent>
      </Tabs>
    </>
  )
}