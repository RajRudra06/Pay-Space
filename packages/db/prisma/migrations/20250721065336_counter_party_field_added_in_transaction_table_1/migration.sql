/*
  Warnings:

  - You are about to drop the column `amount` on the `Transactions` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Transactions" DROP COLUMN "amount",
ADD COLUMN     "Amount" INTEGER NOT NULL DEFAULT 0;
