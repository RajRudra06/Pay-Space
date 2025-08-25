-- AlterTable
ALTER TABLE "public"."DebitCardApplication" ADD COLUMN     "accountReference" TEXT DEFAULT 'notdefined',
ADD COLUMN     "customerRef" TEXT DEFAULT 'notdefined',
ADD COLUMN     "requestID" TEXT DEFAULT 'notdefined';
