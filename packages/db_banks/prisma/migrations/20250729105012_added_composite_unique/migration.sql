/*
  Warnings:

  - A unique constraint covering the columns `[number,bankName]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email,bankName]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "User_email_key";

-- DropIndex
DROP INDEX "User_number_key";

-- CreateIndex
CREATE UNIQUE INDEX "User_number_bankName_key" ON "User"("number", "bankName");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_bankName_key" ON "User"("email", "bankName");
