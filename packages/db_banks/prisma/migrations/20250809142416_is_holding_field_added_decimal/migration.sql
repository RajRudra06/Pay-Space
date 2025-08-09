/*
  Warnings:

  - You are about to drop the column `isHolding` on the `Accounts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Accounts" DROP COLUMN "isHolding",
ADD COLUMN     "hold_amount" DECIMAL(65,30) NOT NULL DEFAULT 0;
