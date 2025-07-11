import { create } from "zustand"
import {persist} from "zustand/middleware"

interface BalanceState {
    username:string
    email:string
    number:string
    balance: number
    bankCardCalled:boolean
    setbankCardCalled:(bankCardCalled:boolean)=>void
    setUsername: (username: string) => void
    setEmail: (email: string) => void
    setNumber:(number:string)=>void
    setBalance: (balance: number) => void
    incrementBalance: (amount: number) => void
    decrementBalance: (amount: number) => void
}

export const userStore = create(
    persist<BalanceState>(
      (set) => ({
        username: "",
        email: "",
        number: "",
        balance: 0,
        bankCardCalled:false,
        setbankCardCalled:(bankCardCalled)=>set({bankCardCalled}),
        setUsername: (username) => set({ username }),
        setEmail: (email) => set({ email }),
        setNumber: (number) => set({ number }),
        setBalance: (balance) => set({ balance }),
        incrementBalance: (amount) => set((state) => ({ balance: state.balance + amount })),
        decrementBalance: (amount) => set((state) => ({ balance: state.balance - amount })),
      }),
      {
        name: "user-store", 
      }
    )
  )