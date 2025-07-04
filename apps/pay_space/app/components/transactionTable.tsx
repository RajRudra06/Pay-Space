export default function TransactionTable({ data }: { data: any[] }) {
  if (!data.length) {
    return <p className="text-sm text-gray-500 text-center mt-4">No transactions</p>;
  }

  return (
    <div className="overflow-x-auto mt-6 shadow-md rounded-xl">
      <table className="min-w-full bg-white text-sm rounded-xl overflow-hidden">
        <thead className="bg-gray-100 text-gray-500 text-md uppercase tracking-wide text-left">
          <tr>
            <th className="px-6 py-4">Transaction</th>
            <th className="px-6 py-4">Amount</th>
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4">Date</th>
            <th className="px-6 py-4">Channel</th>
            <th className="px-6 py-4">Category</th>
          </tr>
        </thead>
        <tbody>
          {data.map((txn, i) => (
            <tr 
              key={i}
              className={`border-t hover:bg-gray-50 transition-all duration-150 ${
                txn.c === "credit" ? "bg-green-50" : "bg-red-50"
              } text-lg font-bold`}
            >
              <td className="px-6 py-4 font-medium text-gray-800">{txn.transactionName}</td>

              <td
                className={`px-6 py-4 font-semibold ${
                  txn.c === "credit" ? "text-green-600" : "text-red-500"
                }`}
              >
                {new Intl.NumberFormat("en-IN", {
                  style: "currency",
                  currency: "INR",
                }).format(txn.amount)}
              </td>

              <td className="px-6 py-4">
                <span
                  className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                    txn.status === "Success"
                      ? "bg-green-100 border-2 border-green-600 text-green-700"
                      : txn.status === "Pending"
                      ? "bg-yellow-100 border-2 border-yellow-500 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  ● {txn.status}
                </span>
              </td>

              <td className="px-6 py-4 text-gray-700">
                {new Date(txn.date).toLocaleString("en-US", {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                })}
              </td>

              <td className="px-6 py-4 text-gray-600">{txn.channel || "N/A"}</td>

              <td className="px-6 py-4">
                <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-xs font-medium">
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
