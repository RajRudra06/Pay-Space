/*
  Warnings:

  - Added the required column `counterPartyID` to the `Transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `counterPartyType` to the `Transactions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Transactions" ADD COLUMN     "counterPartyID" TEXT NOT NULL,
ADD COLUMN     "counterPartyType" TEXT NOT NULL;
