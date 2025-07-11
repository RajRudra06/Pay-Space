/*
  Warnings:

  - A unique constraint covering the columns `[user_id,bank,acc_name,type]` on the table `Accounts` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Accounts_user_id_bank_acc_name_type_key" ON "Accounts"("user_id", "bank", "acc_name", "type");
