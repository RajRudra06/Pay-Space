"use client"
import { useBalance } from "@repo/store"

export default function Balance() {
  const balance = useBalance()
  
  return (
    <div>
        {/* @ts-ignore */}
      <h1>Your Balance: ${balance}</h1>
    </div>
  )
}