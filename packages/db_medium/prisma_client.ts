import dotenv from "dotenv";
import {PrismaClient} from "./generated/prisma"
dotenv.config({ path: '../../.env' });

const url = process.env.DATABASE_URL_MEDIUM;

const prisma_Medium = new PrismaClient({datasourceUrl: url});

export default prisma_Medium;


