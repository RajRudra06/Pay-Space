import { Landmark } from "lucide-react"

export default function DefaultCard(props: { bankname: string, balance: number, accountType: string }) {

    const formatBalance = (balance: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'INR'
        }).format(balance);
    };

    return (
        <>
            <div className="flex justify-between bg-gradient-to-r from-slate-100 to-slate-50 p-6 rounded-xl m-6 mt-8 mb-8 shadow-lg border border-slate-200 hover:shadow-xl hover:border-indigo-400 hover:-translate-y-0.5 transform transition-all duration-200 ease-in-out">
                <div className="flex justify-center items-center gap-6">

                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center shadow-md">
                        <Landmark className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-md text-slate-800 font-semibold flex flex-col">
                        <div className="text-lg font-bold">
                            {props.bankname}
                        </div>
                        <div className="font-bold text-xl text-emerald-700">
                            {formatBalance(props.balance)}
                        </div>
                    </div>
                </div>

                <div className="rounded-lg bg-gradient-to-r from-slate-600 to-slate-700 text-white px-4 w-15 h-9 text-md font-medium shadow-md flex items-center justify-center">
    {props.accountType}
</div>
            </div>

        </>

    )
}