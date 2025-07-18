import Transaction from "../lib/transactions";
import Loading from "../loading";

export default function TransactionTable({ data, isLoading }: { data: Transaction[], isLoading: boolean }) {
  if (isLoading) {
    return <Loading />;
  }
  
  if (data.length === 0) {
    return (
      <div className="text-center mt-8 p-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200">
        <p className="text-lg text-slate-600 font-medium">No Transactions Found</p>
        <p className="text-sm text-slate-500 mt-2">Your transaction history will appear here</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto mt-6 shadow-xl rounded-2xl bg-white border border-slate-200">
      <table className="min-w-full text-sm">
        <thead className="bg-gray-600 text-white">
          <tr>
            <th className="px-6 py-4 text-left font-semibold uppercase tracking-wider">Transaction</th>
            <th className="px-6 py-4 text-left font-semibold uppercase tracking-wider">Amount</th>
            <th className="px-6 py-4 text-left font-semibold uppercase tracking-wider">Status</th>
            <th className="px-6 py-4 text-left font-semibold uppercase tracking-wider">Date</th>
            <th className="px-6 py-4 text-left font-semibold uppercase tracking-wider">Channel</th>
            <th className="px-6 py-4 text-left font-semibold uppercase tracking-wider">Category</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200">
          {data.map((txn, i) => (
            <tr 
              key={i}
              className={`transition-all duration-200 hover:scale-[1.01] hover:shadow-md ${
                txn.type === "credit" 
                  ? "bg-gradient-to-r from-emerald-50 to-green-50 hover:from-emerald-100 hover:to-green-100 border-l-4 border-emerald-400" 
                  : "bg-gradient-to-r from-rose-50 to-red-50 hover:from-rose-100 hover:to-red-100 border-l-4 border-rose-400"
              }`}
            >
              <td className="px-6 py-4 font-semibold text-slate-800">
                {txn.counterPartyID}
              </td>

              <td className={`px-6 py-4 font-bold text-lg ${
                txn.type === "credit" ? "text-emerald-600" : "text-rose-600"
              }`}>
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${
                    txn.type === "credit" ? "bg-emerald-500" : "bg-rose-500"
                  }`}></span>
                  {txn.type === "credit" ? "+" : "-"}
                  {new Intl.NumberFormat("en-IN", {
                    style: "currency",
                    currency: "INR",
                  }).format(txn.Amount)}
                </div>
              </td>

              <td className="px-6 py-4">
                <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide ${
                  txn.status === "success"
                    ? "bg-emerald-100 text-emerald-800 border-2 border-emerald-300"
                    : txn.status === "pending"
                    ? "bg-amber-100 text-amber-800 border-2 border-amber-300"
                    : "bg-rose-100 text-rose-800 border-2 border-rose-300"
                }`}>
                  <span className={`w-2 h-2 rounded-full mr-2 ${
                    txn.status === "success"
                      ? "bg-emerald-500"
                      : txn.status === "pending"
                      ? "bg-amber-500"
                      : "bg-rose-500"
                  }`}></span>
                  {txn.status}
                </span>
              </td>

              <td className="px-6 py-4 text-slate-700 font-medium">
                {new Date(txn.created_At).toLocaleString("en-US", {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                })}
              </td>

              <td className="px-6 py-4 text-slate-600 font-medium">
                {txn.channel || "N/A"}
              </td>

              <td className="px-6 py-4">
                <span className="inline-block px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-bold uppercase tracking-wide shadow-md">
                  {txn.category}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}