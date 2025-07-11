
import { userStore } from "@repo/store";

export default function useUserStore() {
  const {setbankCardCalled, setUsername, setEmail, setNumber, setBalance, incrementBalance, decrementBalance } = userStore();
  const username = userStore((state) => state.username);
  const email = userStore((state) => state.email);
  const number = userStore((state) => state.number);
  const balance = userStore((state) => state.balance);
  const bankCardCalled=userStore((state)=>state.bankCardCalled)

  return {
    username,
    email,
    number,
    balance,
    bankCardCalled,
    setbankCardCalled,
    setUsername,
    setEmail,
    setNumber,
    setBalance,
    incrementBalance,
    decrementBalance,
    
  };
}
