"use client"
import { useBalance } from "@repo/store"
import ProtectedRouting from "../components/protectedRouting"

export default function Balance() {
  const balance = useBalance()
  
  return (
    <ProtectedRouting fallback={null}>
      <div>
          {/* @ts-ignore */}
          <h1>Your Balance: ${balance}</h1>
      </div>
    </ProtectedRouting>
    
  )
}