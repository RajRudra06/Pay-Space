import Image from "next/image";
import styles from "./page.module.css";
import "tailwind-config/globals.css";
import {Card} from "@repo/ui/card"
import prisma from "@repo/db/prisma"


// ... rest of your app
export default function Home() {
  return (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <h1 className="text-8xl font-bold text-red-600">Hello Tailwind! DOCS</h1>
    <Card></Card>
    <div className="flex items-center justify-center h-screen">
  <div className="border border-green-600 rounded-md p-8">
    I am centered with a black border!
  </div>
</div>

  </div>
  );
}