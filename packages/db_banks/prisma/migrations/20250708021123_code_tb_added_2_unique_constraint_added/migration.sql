/*
  Warnings:

  - A unique constraint covering the columns `[user_id,bankName]` on the table `Tokens` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `bankName` to the `Tokens` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tokens" ADD COLUMN     "bankName" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Tokens_user_id_bankName_key" ON "Tokens"("user_id", "bankName");
