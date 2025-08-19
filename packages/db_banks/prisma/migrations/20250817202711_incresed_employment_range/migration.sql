/*
  Warnings:

  - The values [Salaried,SelfEmployed,Student,Unemployed] on the enum `employment_type` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "public"."employment_type_new" AS ENUM ('SALARIED', 'GOVT_PSU', 'SELF_EMPLOYED', 'STUDENT', 'UNEMPLOYED', 'RETIRED');
ALTER TABLE "public"."DebitCardApplication" ALTER COLUMN "employment_type" TYPE "public"."employment_type_new" USING ("employment_type"::text::"public"."employment_type_new");
ALTER TYPE "public"."employment_type" RENAME TO "employment_type_old";
ALTER TYPE "public"."employment_type_new" RENAME TO "employment_type";
DROP TYPE "public"."employment_type_old";
COMMIT;
