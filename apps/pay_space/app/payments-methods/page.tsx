import ProtectedRouting from "../components/protectedRouting"

export default function PaymentMethods(){
    return (
        <ProtectedRouting fallback={null}>
            <div>
                choose to upadte card or upi
             </div>
        </ProtectedRouting>
        
    )
}