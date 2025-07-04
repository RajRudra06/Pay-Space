-- CreateEnum
CREATE TYPE "Txn_status" AS ENUM ('success', 'failed', 'pending');

-- CreateEnum
CREATE TYPE "Acc_status" AS ENUM ('active', 'closed', 'frozen');

-- CreateEnum
CREATE TYPE "Txn_type" AS ENUM ('credit', 'debit');

-- CreateEnum
CREATE TYPE "Acc_type" AS ENUM ('savings', 'checking', 'wallet', 'joint', 'business');

-- CreateEnum
CREATE TYPE "Txn_channel" AS ENUM ('upi', 'wallet', 'netbanking', 'card');

-- CreateEnum
CREATE TYPE "Bank_name" AS ENUM ('icici', 'sbi', 'hdfc', 'ubi');

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
    "category" TEXT NOT NULL,

    CONSTRAINT "Transactions_pkey" PRIMARY KEY ("txn_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_number_key" ON "User"("number");

-- AddForeignKey
ALTER TABLE "Accounts" ADD CONSTRAINT "Accounts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transactions" ADD CONSTRAINT "Transactions_acc_id_fkey" FOREIGN KEY ("acc_id") REFERENCES "Accounts"("acc_id") ON DELETE RESTRICT ON UPDATE CASCADE;
