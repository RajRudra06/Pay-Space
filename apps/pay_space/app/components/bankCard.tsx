import { Landmark } from "lucide-react"

export default function DefaultCard(props:{bankname:string,balance:number,accountType:string}){

    const formatBalance = (balance: number) => {
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'INR'
        }).format(balance);
      };

    return(
        <>
        <div className="flex justify-between bg-gray-100 p-3 rounded-lg m-6 mt-8 mb-8 p-5">
        <div className="flex justify-center items-center gap-6">
            
            <div className="w-10 h-10 bg-indigo-200 rounded-full flex items-center justify-center">
                <Landmark className="w-5 h-5 text-indigo-700" />
            </div>
            <div className="text-md text-gray-700 font-semibold flex flex-col">
               <div>
                    {props.bankname}
                </div> 
                <div className="font-bold text-md text-indigo-700">
                    {formatBalance(props.balance)}
                </div> 
            </div>
        </div>

        <div className="rounded-lg bg-indigo-200 text-blue-700 w-15 h-7 m-1 text-sm p-1">
            {props.accountType}
        </div>
        </div>
       
        </>
        
    )
}