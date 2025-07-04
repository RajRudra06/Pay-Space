import FormatCurrency from "./formatCurrency"
import DoughNutChart from "./doughnutChart"

export default function BankAccountCard({numberOfAccount,totalBalance,bankNames,balances}:{numberOfAccount:number,totalBalance:number,bankNames:string[],balances:number[]}) {
  return (
    <div className="bg-gray-100 rounded-lg">
      <div className="flex gap-6 border-1 border-gray-200 rounded-lg p-3 shadow-lg bg-white hover:shadow-xl transition-shadow items-center">
        <div className="w-40 h-40">
          <DoughNutChart labels={['abc','bcd']} balances={balances} bankNames={bankNames}/>
        </div>

        <div className="flex flex-col gap-3 w-40 h-40 justify-center">
          <div className="text-lg font-semibold">Bank Accounts: {numberOfAccount}</div>
          <div>
            <div className="text-md text-gray-400 font-medium">Total Current Balance</div>
            <div className="text-2xl text-gray-700 font-bold mt-1">
              <FormatCurrency amount={totalBalance} locale="en-IN" currency="INR" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
