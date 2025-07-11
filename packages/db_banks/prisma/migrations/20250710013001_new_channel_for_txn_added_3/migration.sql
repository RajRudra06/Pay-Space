/*
  Warnings:

  - Changed the type of `category` on the `Transactions` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Txn_Cat" AS ENUM ('Utilities', 'Insurance', 'Dine', 'Shopping', 'Entertainment', 'Travel', 'Load_EMI', 'Savings_Transfers', 'Investments', 'Education', 'Health', 'Income', 'Taxes');

-- AlterTable
ALTER TABLE "Transactions" DROP COLUMN "category",
ADD COLUMN     "category" "Txn_Cat" NOT NULL;
