-- CreateEnum
CREATE TYPE "public"."Network" AS ENUM ('MasterCard', 'Visa', 'RuPay');

-- CreateEnum
CREATE TYPE "public"."ProductType" AS ENUM ('Debit', 'Credit', 'Prepaid');

-- CreateEnum
CREATE TYPE "public"."Tier" AS ENUM ('Classic', 'Gold', 'Platinum');

-- CreateEnum
CREATE TYPE "public"."Country" AS ENUM ('IN', 'USA', 'CAN', 'DE', 'CN', 'JP', 'GB', 'FR', 'IT', 'AU');

-- CreateEnum
CREATE TYPE "public"."Currency" AS ENUM ('INR', 'USD', 'CAD', 'EUR', 'CNY', 'JPY', 'GBP', 'AUD', 'CHF', 'RUB');

-- CreateTable
CREATE TABLE "public"."BIN_NUMBERS" (
    "id" SERIAL NOT NULL,
    "network" "public"."Network" NOT NULL,
    "productType" "public"."ProductType" NOT NULL,
    "Tier" "public"."Tier" NOT NULL,
    "BIN" TEXT NOT NULL,
    "BIN_Length" INTEGER NOT NULL,
    "Country" "public"."Country" NOT NULL,
    "Currency" "public"."Currency" NOT NULL,

    CONSTRAINT "BIN_NUMBERS_pkey" PRIMARY KEY ("id")
);
