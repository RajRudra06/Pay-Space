import { create } from 'zustand';
import Transaction from "pay_space/app/lib/transactions"

interface TransactionStore {
  transactions: Transaction[];
  setTransactions: (txns: Transaction[]) => void;
  getTransactionByIndex: (index: number) => Transaction | undefined;
  getTransactionByName: (name: string) => Transaction | undefined; 
}

export const useTransactionStore = create<TransactionStore>((set, get) => ({
  transactions: [],
  setTransactions: (txns) => set({ transactions: txns }),
  getTransactionByIndex: (index) => get().transactions[index],
  getTransactionByName: (name) =>
    get().transactions.find((txn) => txn.counterPartyID === name), 
}));
