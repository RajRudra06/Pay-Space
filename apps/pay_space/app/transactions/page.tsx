import ProtectedRouting from "../components/protectedRouting"
export default function TransactionHistory(){
    return(
        <ProtectedRouting fallback={null}>
             <div>
                Txn History
            </div>
        </ProtectedRouting>
       
    )
}