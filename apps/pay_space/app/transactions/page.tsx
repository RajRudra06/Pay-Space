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

export default function TransactionHistory(){

    const { data: session,status } = useSession();
    const [userBankAccounts,setUserBankAccounts]=useState<Accounts[]>()
    const [defaultAccount,setDefaultAccount]=useState<Accounts>()
    const [totalBalance,setTotalBalance]=useState(0);
    const [connectedBanks, setConnectedBanks] = useState<BankId[]>([]);
    const [selectedBankId, setSelectedBankId] = useState<BankId | null>(null);
    const [bankSwitchLoading, setBankSwitchLoading] = useState(false); // ⏳

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

        try{
            setBankSwitchLoading(true); 

            const getAccounts = await axios.post(`${API_URL}/account-info`, {
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
              setBankSwitchLoading(false); 
    
            } 
        }
        catch(err){
            toast.error("Unknown error occured, Please try again later");
        }
       

    }

    useEffect(()=>{
        retrieveConnectedBanks()
    },[])

    useEffect(() => {
        if (selectedBankId) {
          retrieveConnectedBankAccounts(selectedBankId);
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
                <RecentBankTransactions bank={selectedBankId} defaultAccount={defaultAccount!} accounts={userBankAccounts||[]} />
            )}

            </>
        </ProtectedRouting>
    )
}
