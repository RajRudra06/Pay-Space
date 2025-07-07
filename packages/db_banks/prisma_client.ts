import { PrismaClient } from "./src/generated/prisma";
import dotenv from "dotenv";

dotenv.config({ path: '../../.env' });

const url = process.env.DATABASE_URL_DB_BANK;

console.log("url333333--->",url)

const prisma_Bank = new PrismaClient({datasourceUrl: url});

export default prisma_Bank;
