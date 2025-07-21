"use client"
import ProtectedRouting from "../components/protectedRouting"
import TransactionIntro from "../components/transactionIntro"
import RecentBankTransactions from "../components/recentBankTransactions";
import { useSession } from "next-auth/react";
import { useState,useEffect } from "react";
import { Accounts } from "../lib/accounts";
import axios from "axios"
import { toast } from "react-hot-toast";
import BankDropdown from "../components/bankDropdown";
import { BankId, } from "../lib/banksMetaData";
import Loading from "../loading";
import TransactionTable from "../components/transactionTable";
import PaginationControls from "../components/paginationControls";

export default function TransactionHistory(){

    const { data: session,status } = useSession();
    const [userBankAccounts,setUserBankAccounts]=useState<Accounts[]>()
    const [defaultAccount,setDefaultAccount]=useState<Accounts>()
    const [totalBalance,setTotalBalance]=useState(0);
    const [connectedBanks, setConnectedBanks] = useState<BankId[]>([]);
    const [selectedBankId, setSelectedBankId] = useState<BankId | null>(null);
    const [bankSwitchLoading, setBankSwitchLoading] = useState(false); 
    const [cuurBankId,setCurrBankId]=useState<BankId | null>("pay_space");
    const [transactions,setTransactions]=useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [page, setPage] = useState(1);



    const API_URL=process.env.NEXT_PUBLIC_API_URL_DEV

    async function retrieveConnectedBanks(){
        try{
            const connectedBanks=await axios.get(`${API_URL}/connected-banks`);
            if(connectedBanks.data.done){
                setConnectedBanks(connectedBanks.data.banks);
                setSelectedBankId(connectedBanks.data.defaultbank)
            }
           
        }
        catch(error){
            toast.error("Unknown error occured, Please try again later");
        }
    }

    async function retrieveConnectedBankAccounts(bankId: BankId) {
        setBankSwitchLoading(true);
        setCurrBankId(bankId);
    
        try {
           if(bankId!=="pay_space") {const getAccounts = await axios.post(`${API_URL}/account-info`, {
                bankNameBankTransaction: bankId,
            });
    
            if (getAccounts.data.done) {
                const accounts: Accounts[] = getAccounts.data.accounts;
                setUserBankAccounts(accounts);
    
                const defaultAccType = getAccounts.data.defaultAccType;
                const defaultAcc = accounts.find(
                    (acc) => acc.accountType === defaultAccType
                );
    
                setDefaultAccount(defaultAcc ?? accounts[0]);
            }}
        } catch (err) {
            toast.error("Unknown error occured, Please try again later");
        } finally {
            setBankSwitchLoading(false); 
        }
    }

    async function getPaySpaceTransactions(currentPage=1) {
        setBankSwitchLoading(true);
        setCurrBankId("pay_space");

        try {
            const getTransactions = await axios.post(`${API_URL}/account-info/txn-details/pay-space_txn`,{
                page:currentPage,
                limit:10
            });
    
            if (getTransactions.data.done) {
                setTransactions(getTransactions.data.transactions);
                setTotalPages(getTransactions.data.meta.totalPages);
                setPage(getTransactions.data.meta.page);
    
            }

            else if(!getTransactions.data.done){
                toast.error("error-",getTransactions.data.msg);
            }
        } catch (err) {
            toast.error("Unknown error occured, Please try again later");
        } finally {
            setBankSwitchLoading(false); 
        }
    }
    

    useEffect(()=>{
        retrieveConnectedBanks()
    },[])

    useEffect(() => {
        if (selectedBankId!=="pay_space") {
          retrieveConnectedBankAccounts(selectedBankId!);
        }
        else{
            getPaySpaceTransactions();
        }
    }, [selectedBankId]);

    if(connectedBanks.length===0||!selectedBankId){
        return(
            <Loading />
        )
    }

    return(
        <ProtectedRouting fallback={null}>
            <>
            <div className="mb-10 flex flex-row items-center gap-4">
                <TransactionIntro />
                {(connectedBanks.length > 0 && selectedBankId)?(
                    <BankDropdown
                    bankIds={connectedBanks}
                    value={selectedBankId}
                    onChange={(id) => setSelectedBankId(id)}
                    />
                ):""}
            </div>
                        {bankSwitchLoading ? (
            <Loading />
            ) : (
            cuurBankId !== "pay_space" ? (
                <RecentBankTransactions
                bank={selectedBankId}
                defaultAccount={defaultAccount!}
                accounts={userBankAccounts || []}
                />
            ) : <div>
                <div>
                    </div>
                    <div>
                    </div> 
                    
                    <div className="mt-12 px-8">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold text-slate-800">
          Transactions via Pay Space
          </h2>
          <p className="text-sm text-slate-500">
          All transfers you’ve initiated directly through Pay Space.
          </p>
        </div>
      </div>
                    <TransactionTable isLoading={bankSwitchLoading} data={transactions} />

                        {transactions.length>=1?<PaginationControls 
            currentPage={page}
            totalPages={totalPages}
            onPageChange={(newPage) => getPaySpaceTransactions(newPage)}
            />:null}</div>
                        )}


            </>
        </ProtectedRouting>
    )
}
