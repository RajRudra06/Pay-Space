import { PrismaClient } from "./src/generated/prisma";
import dotenv from "dotenv";

dotenv.config({ path: '../../.env' });

const url = process.env.DATABASE_URL;

const prisma_Bank = new PrismaClient({datasourceUrl: url});

export default prisma_Bank;
