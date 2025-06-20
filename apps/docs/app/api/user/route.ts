// apps/user/src/app/api/create-user/route.ts
import { NextResponse } from "next/server";
import prisma from "@repo/db/prisma"

export async function GET() {
  try {
    const user = await prisma.user.create({
      data: {
        name: "He__kklnjbllo",
        email: "wooukjhvkjhvboogie__ygorld@elkjnxample.com", // Make sure email is unique if email is a unique field
      },
    });

    return NextResponse.json({ msg:"Done" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
