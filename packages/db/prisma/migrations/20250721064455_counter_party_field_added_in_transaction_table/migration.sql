-- AlterTable
ALTER TABLE "Transactions" ADD COLUMN     "counterPartyID" TEXT NOT NULL DEFAULT 'null',
ADD COLUMN     "counterPartyType" TEXT NOT NULL DEFAULT 'null';
