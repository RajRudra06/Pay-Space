-- CreateEnum
CREATE TYPE "Txn_status" AS ENUM ('success', 'failed', 'pending');

-- CreateEnum
CREATE TYPE "Acc_status" AS ENUM ('active', 'closed', 'frozen');

-- CreateEnum
CREATE TYPE "Txn_type" AS ENUM ('credit', 'debit');

-- CreateEnum
CREATE TYPE "Acc_type" AS ENUM ('savings', 'checking', 'wallet', 'joint', 'business');

-- CreateEnum
CREATE TYPE "Txn_channel" AS ENUM ('upi', 'wallet', 'netbanking', 'card', 'cheque', 'cheque_DD', 'RTGS', 'NEFT');

-- CreateEnum
CREATE TYPE "Bank_name" AS ENUM ('icici', 'sbi', 'hdfc', 'ubi');

-- CreateEnum
CREATE TYPE "Txn_Cat" AS ENUM ('Utilities', 'Insurance', 'Dine', 'Shopping', 'Entertainment', 'Travel', 'Load_EMI', 'Savings_Transfers', 'Investments', 'Education', 'Health', 'Income', 'Taxes');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT,
    "username" TEXT,
    "number" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CommercialClients" (
    "id" SERIAL NOT NULL,
    "client_id" TEXT NOT NULL,
    "assigned_date" TIMESTAMP(3) NOT NULL,
    "sharedSecret" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CommercialClients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Accounts" (
    "acc_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "acc_name" TEXT NOT NULL,
    "acc_number" TEXT NOT NULL,
    "status" "Acc_status" NOT NULL,
    "type" "Acc_type" NOT NULL,
    "bank" "Bank_name" NOT NULL,
    "balance" DECIMAL(12,2) NOT NULL,
    "connectedToMain" BOOLEAN NOT NULL,
    "created_At" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Accounts_pkey" PRIMARY KEY ("acc_id")
);

-- CreateTable
CREATE TABLE "Transactions" (
    "txn_id" SERIAL NOT NULL,
    "acc_id" INTEGER NOT NULL,
    "status" "Txn_status" NOT NULL,
    "type" "Txn_type" NOT NULL,
    "created_At" TIMESTAMP(3) NOT NULL,
    "channel" "Txn_channel" NOT NULL,
    "counterPartyID" TEXT NOT NULL,
    "counterPartyType" TEXT NOT NULL,
    "category" "Txn_Cat" NOT NULL,
    "Amount" INTEGER,

    CONSTRAINT "Transactions_pkey" PRIMARY KEY ("txn_id")
);

-- CreateTable
CREATE TABLE "Verification" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "otp" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Verification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Auth_codes" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "client_id" TEXT NOT NULL,
    "redirect_uri" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "used" BOOLEAN NOT NULL DEFAULT false,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "Auth_codes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tokens" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "client_id" TEXT NOT NULL,
    "hashedToken" TEXT NOT NULL,
    "created_At" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "revoked" BOOLEAN NOT NULL DEFAULT false,
    "bankName" TEXT NOT NULL,

    CONSTRAINT "Tokens_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_number_key" ON "User"("number");

-- CreateIndex
CREATE UNIQUE INDEX "CommercialClients_client_id_key" ON "CommercialClients"("client_id");

-- CreateIndex
CREATE UNIQUE INDEX "CommercialClients_sharedSecret_key" ON "CommercialClients"("sharedSecret");

-- CreateIndex
CREATE INDEX "CommercialClients_client_id_idx" ON "CommercialClients"("client_id");

-- CreateIndex
CREATE INDEX "CommercialClients_expiresAt_idx" ON "CommercialClients"("expiresAt");

-- CreateIndex
CREATE UNIQUE INDEX "Accounts_user_id_bank_acc_name_type_key" ON "Accounts"("user_id", "bank", "acc_name", "type");

-- CreateIndex
CREATE INDEX "Auth_codes_user_id_client_id_idx" ON "Auth_codes"("user_id", "client_id");

-- CreateIndex
CREATE INDEX "Auth_codes_code_idx" ON "Auth_codes"("code");

-- CreateIndex
CREATE INDEX "Auth_codes_expiresAt_idx" ON "Auth_codes"("expiresAt");

-- CreateIndex
CREATE INDEX "Tokens_user_id_client_id_idx" ON "Tokens"("user_id", "client_id");

-- CreateIndex
CREATE UNIQUE INDEX "Tokens_user_id_bankName_key" ON "Tokens"("user_id", "bankName");

-- AddForeignKey
ALTER TABLE "Accounts" ADD CONSTRAINT "Accounts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transactions" ADD CONSTRAINT "Transactions_acc_id_fkey" FOREIGN KEY ("acc_id") REFERENCES "Accounts"("acc_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Verification" ADD CONSTRAINT "Verification_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Auth_codes" ADD CONSTRAINT "Auth_codes_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tokens" ADD CONSTRAINT "Tokens_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "CommercialClients"("client_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tokens" ADD CONSTRAINT "Tokens_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

