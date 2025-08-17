/*
  Warnings:

  - Added the required column `IncomeMontly` to the `DebitCardApplication` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employment_type` to the `DebitCardApplication` table without a default value. This is not possible if the table is not empty.
  - Added the required column `loanAmount` to the `DebitCardApplication` table without a default value. This is not possible if the table is not empty.
  - Added the required column `riskNumber` to the `DebitCardApplication` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "employment_type" AS ENUM ('Salaried', 'SelfEmployed', 'Student', 'Unemployed');

-- AlterTable
ALTER TABLE "DebitCardApplication" ADD COLUMN     "IncomeMontly" INTEGER NOT NULL,
ADD COLUMN     "employment_type" "employment_type" NOT NULL,
ADD COLUMN     "existing_Loans" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "loanAmount" INTEGER NOT NULL,
ADD COLUMN     "riskNumber" INTEGER NOT NULL;
