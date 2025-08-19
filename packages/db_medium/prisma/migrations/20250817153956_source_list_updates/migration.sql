-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "public"."SourcesList" ADD VALUE 'DFAT';
ALTER TYPE "public"."SourcesList" ADD VALUE 'HM_TREASURY';
ALTER TYPE "public"."SourcesList" ADD VALUE 'CANADA_SANCTIONS';
ALTER TYPE "public"."SourcesList" ADD VALUE 'MOFA_JAPAN';
