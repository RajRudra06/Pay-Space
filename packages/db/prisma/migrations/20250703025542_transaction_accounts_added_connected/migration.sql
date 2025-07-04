/*
  Warnings:

  - Added the required column `connectedToMain` to the `Accounts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Accounts" ADD COLUMN     "connectedToMain" BOOLEAN NOT NULL;
