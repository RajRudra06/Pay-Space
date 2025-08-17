-- CreateEnum
CREATE TYPE "public"."SourcesList" AS ENUM ('OFAC', 'UN', 'EU');

-- CreateTable
CREATE TABLE "public"."SanctionsList" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,
    "DOB" TIMESTAMP(3),
    "nationalCountry" TEXT NOT NULL,
    "sanctionCountry" TEXT NOT NULL,
    "sanctionReason" TEXT NOT NULL,
    "sourceList" "public"."SourcesList" NOT NULL,

    CONSTRAINT "SanctionsList_pkey" PRIMARY KEY ("id")
);
