/*
  Warnings:

  - The values [EUR,CHF,RUB] on the enum `Currency` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "public"."Currency_new" AS ENUM ('INR', 'USD', 'CAD', 'EUR_DE', 'CNY', 'JPY', 'GBP', 'EUR_FR', 'EUR_IT', 'AUD');
ALTER TABLE "public"."BIN_NUMBERS" ALTER COLUMN "Currency" TYPE "public"."Currency_new" USING ("Currency"::text::"public"."Currency_new");
ALTER TYPE "public"."Currency" RENAME TO "Currency_old";
ALTER TYPE "public"."Currency_new" RENAME TO "Currency";
DROP TYPE "public"."Currency_old";
COMMIT;
