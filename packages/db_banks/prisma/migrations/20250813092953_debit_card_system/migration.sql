-- CreateEnum
CREATE TYPE "POSLimit" AS ENUM ('60000', '250000', '400000');

-- CreateEnum
CREATE TYPE "DailyATMLimit" AS ENUM ('30000', '60000', '100000');

-- CreateEnum
CREATE TYPE "NationalIDType" AS ENUM ('Aadhaar', 'PAN_Card', 'Passport', 'Voter_ID', 'Driving_License');

-- CreateEnum
CREATE TYPE "CardType" AS ENUM ('Physical', 'Virtual');

-- CreateEnum
CREATE TYPE "KYCStatus" AS ENUM ('KYC_PENDING', 'KYC_PASSED', 'KYC_FAILED');

-- CreateEnum
CREATE TYPE "DebitCardStatus" AS ENUM ('UnderProcess', 'Issued', 'Activated', 'Deactivated', 'Blocked', 'Suspended', 'Closed', 'Expired', 'Rejected');

-- CreateEnum
CREATE TYPE "CardVariant" AS ENUM ('Classic', 'Platinum', 'Gold', 'Custom');

-- CreateEnum
CREATE TYPE "CardNetwork" AS ENUM ('Visa', 'MasterCard', 'RuPay');

-- AlterTable
ALTER TABLE "Verification" ADD COLUMN     "usage" TEXT;

-- CreateTable
CREATE TABLE "DebitCard" (
    "id" SERIAL NOT NULL,
    "debitCardApplicationID" INTEGER NOT NULL,
    "processorToken" TEXT NOT NULL,
    "processorID" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "acc_id" INTEGER NOT NULL,
    "activationDeadline" TIMESTAMP(3),
    "applicationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "estimatedDeliveryDate" TIMESTAMP(3),
    "approvalDate" TIMESTAMP(3),
    "trackingID" INTEGER NOT NULL,
    "status" "DebitCardStatus" NOT NULL DEFAULT 'UnderProcess',
    "panNumber" TEXT NOT NULL,
    "expiryDate" TIMESTAMP(3) NOT NULL,
    "hashedCVV" TEXT NOT NULL,
    "pinHash" TEXT NOT NULL,
    "lastUsed" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DebitCard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DebitCardApplication" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "fullName" TEXT NOT NULL,
    "DOB" TIMESTAMP(3) NOT NULL,
    "Gender" "gender" NOT NULL,
    "nationlIDType" "NationalIDType" NOT NULL,
    "nationalIDNumber" TEXT NOT NULL,
    "phoneNumber" CHAR(10) NOT NULL,
    "email" TEXT NOT NULL,
    "addressLine1" TEXT,
    "addressLine2" TEXT,
    "City" TEXT,
    "State" TEXT,
    "postalCode" CHAR(6),
    "Country" TEXT DEFAULT 'India',
    "acc_id" INTEGER NOT NULL,
    "acc_number" TEXT NOT NULL,
    "acc_name" TEXT NOT NULL,
    "cardType" "CardType" NOT NULL,
    "cardNetwork" "CardNetwork" NOT NULL,
    "cardVariant" "CardVariant" NOT NULL,
    "dailyATMLimit" "DailyATMLimit" NOT NULL DEFAULT '30000',
    "dailyPOSLimit" "POSLimit" NOT NULL DEFAULT '60000',
    "nomineeFullName" TEXT,
    "nomineeRelationship" TEXT,
    "emergencyContact" CHAR(10) NOT NULL,
    "deliveryTime" TEXT,
    "kycStatus" "KYCStatus" NOT NULL,
    "status" "DebitCardStatus" NOT NULL DEFAULT 'UnderProcess',

    CONSTRAINT "DebitCardApplication_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DebitCard" ADD CONSTRAINT "DebitCard_debitCardApplicationID_fkey" FOREIGN KEY ("debitCardApplicationID") REFERENCES "DebitCardApplication"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DebitCard" ADD CONSTRAINT "DebitCard_acc_id_fkey" FOREIGN KEY ("acc_id") REFERENCES "Accounts"("acc_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DebitCard" ADD CONSTRAINT "DebitCard_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DebitCardApplication" ADD CONSTRAINT "DebitCardApplication_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DebitCardApplication" ADD CONSTRAINT "DebitCardApplication_acc_id_fkey" FOREIGN KEY ("acc_id") REFERENCES "Accounts"("acc_id") ON DELETE RESTRICT ON UPDATE CASCADE;
