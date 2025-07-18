"use client"
import TransactionsTabs from "./transactionTabs";
import { Accounts } from "../lib/accounts";
import { BankId } from "../lib/banksMetaData";

export default function RecentBankTransactions({
  accounts,
  defaultAccount,
  bank
}: {
  accounts: Accounts[];
  defaultAccount: Accounts;
  bank:BankId
}) {
  return (
    <>
      <div className="mt-12 px-8">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold text-slate-800">
            Linked Bank Accounts
          </h2>
          <p className="text-sm text-slate-500">
            These are the accounts linked with your <span className="font-bold text-gray-700"> {bank.toUpperCase()}  </span> bank.
          </p>
        </div>
      </div>

      <div className="mt-6 px-8">
        <TransactionsTabs
          accounts={accounts}
          defaultAccount={defaultAccount}
        />
      </div>
    </>
  );
}
