/*
  Warnings:

  - Added the required column `accOrgType` to the `DefaultAccount` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DefaultAccount" ADD COLUMN     "accOrgType" "Acc_type" NOT NULL;
