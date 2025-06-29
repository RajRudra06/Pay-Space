import ProtectedRouting from "../components/protectedRouting"

export default function ConnectBank(){

    return(
        <>
              <ProtectedRouting fallback={null}>
                <div>
                    Connect a new bank account
                </div>
            </ProtectedRouting>

        </>
        
    )
}