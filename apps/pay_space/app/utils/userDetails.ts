
import { userStore } from "@repo/store";

export default function useUserStore() {
  const { setUsername, setEmail, setNumber, setBalance, incrementBalance, decrementBalance } = userStore();
  const username = userStore((state) => state.username);
  const email = userStore((state) => state.email);
  const number = userStore((state) => state.number);
  const balance = userStore((state) => state.balance);

  return {
    username,
    email,
    number,
    balance,
    setUsername,
    setEmail,
    setNumber,
    setBalance,
    incrementBalance,
    decrementBalance
  };
}
