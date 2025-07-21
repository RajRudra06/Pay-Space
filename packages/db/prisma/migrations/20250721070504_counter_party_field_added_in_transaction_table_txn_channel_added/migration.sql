-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "Txn_channel" ADD VALUE 'cheque';
ALTER TYPE "Txn_channel" ADD VALUE 'cheque_DD';
ALTER TYPE "Txn_channel" ADD VALUE 'RTGS';
ALTER TYPE "Txn_channel" ADD VALUE 'NEFT';
