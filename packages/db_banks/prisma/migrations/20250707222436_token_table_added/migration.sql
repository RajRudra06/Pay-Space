/*
  Warnings:

  - Made the column `client_id` on table `CommercialClients` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "CommercialClients" ALTER COLUMN "client_id" SET NOT NULL;

-- CreateTable
CREATE TABLE "Tokens" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "client_id" TEXT NOT NULL,
    "hashedToken" TEXT NOT NULL,
    "created_At" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "revoked" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Tokens_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Tokens_user_id_client_id_idx" ON "Tokens"("user_id", "client_id");

-- AddForeignKey
ALTER TABLE "Tokens" ADD CONSTRAINT "Tokens_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tokens" ADD CONSTRAINT "Tokens_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "CommercialClients"("client_id") ON DELETE RESTRICT ON UPDATE CASCADE;
