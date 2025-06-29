import ProtectedRouting from "../components/protectedRouting"

export default function TransferFunds(){
    return(
        <ProtectedRouting fallback={null}>    
        <div>
            Transfer mode of payment
        </div>
        </ProtectedRouting>  
    )
}