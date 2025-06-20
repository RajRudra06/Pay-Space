import { userStore } from "../stores/balance"

export const useBalance = () => {
  const balance = userStore((state) => state.balance)
  return balance 
}