"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_1 = require("./src/generated/prisma");
var dotenv_1 = require("dotenv");
dotenv_1.default.config({ path: '../../.env' });
var url = process.env.DATABASE_URL_DB_BANK;
console.log("url333333--->", url);
var prisma_Bank = new prisma_1.PrismaClient({ datasourceUrl: url });
exports.default = prisma_Bank;
