/*
  Warnings:

  - Added the required column `kycQueueRef` to the `DebitCardApplication` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DebitCardApplication" ADD COLUMN     "kycQueueRef" TEXT NOT NULL;
