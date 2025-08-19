/*
  Warnings:

  - You are about to drop the column `DOB` on the `SanctionsList` table. All the data in the column will be lost.
  - You are about to drop the column `nationalCountry` on the `SanctionsList` table. All the data in the column will be lost.
  - You are about to drop the column `sanctionCountry` on the `SanctionsList` table. All the data in the column will be lost.
  - You are about to drop the column `sanctionReason` on the `SanctionsList` table. All the data in the column will be lost.
  - You are about to drop the column `sourceList` on the `SanctionsList` table. All the data in the column will be lost.
  - Added the required column `nationalcountry` to the `SanctionsList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sanctioncountry` to the `SanctionsList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sanctionreason` to the `SanctionsList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sourcelist` to the `SanctionsList` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."SanctionsList" DROP COLUMN "DOB",
DROP COLUMN "nationalCountry",
DROP COLUMN "sanctionCountry",
DROP COLUMN "sanctionReason",
DROP COLUMN "sourceList",
ADD COLUMN     "dob" TIMESTAMP(3),
ADD COLUMN     "nationalcountry" TEXT NOT NULL,
ADD COLUMN     "sanctioncountry" TEXT NOT NULL,
ADD COLUMN     "sanctionreason" TEXT NOT NULL,
ADD COLUMN     "sourcelist" "public"."SourcesList" NOT NULL;
