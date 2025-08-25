-- CreateEnum
CREATE TYPE "public"."CardNetwork" AS ENUM ('Visa', 'MasterCard', 'RuPay');

-- CreateEnum
CREATE TYPE "public"."DebitCardStatus" AS ENUM ('UnderProcess', 'Issued', 'Activated', 'Deactivated', 'Blocked', 'Suspended', 'Closed', 'Expired', 'Rejected');

-- CreateEnum
CREATE TYPE "public"."CardType" AS ENUM ('Physical', 'Virtual');

-- CreateEnum
CREATE TYPE "public"."ExpiryMonth" AS ENUM ('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');

-- CreateEnum
CREATE TYPE "public"."Bank_name" AS ENUM ('icici', 'sbi', 'hdfc', 'ubi', 'notdefined');

-- CreateEnum
CREATE TYPE "public"."POSLimit" AS ENUM ('60000', '250000', '400000');

-- CreateEnum
CREATE TYPE "public"."DailyATMLimit" AS ENUM ('30000', '60000', '100000');

-- CreateTable
CREATE TABLE "public"."ApplicationRequests" (
    "id" SERIAL NOT NULL,
    "requestID" TEXT NOT NULL,
    "customerRef" TEXT NOT NULL,
    "accountReference" TEXT NOT NULL,
    "bankName" "public"."Bank_name" NOT NULL DEFAULT 'notdefined',
    "status" "public"."DebitCardStatus" NOT NULL,
    "reasonToReject" TEXT NOT NULL DEFAULT 'none',
    "fullName" TEXT NOT NULL,
    "DOB" TIMESTAMP(3) NOT NULL,
    "Country" TEXT NOT NULL,
    "State" TEXT NOT NULL,
    "City" TEXT NOT NULL,
    "addressLine1" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "BIN" TEXT NOT NULL,
    "virtualCard" BOOLEAN NOT NULL,
    "deliveryTime" TIMESTAMP(3) NOT NULL,
    "dailyPOSLimit" "public"."POSLimit" NOT NULL DEFAULT '60000',
    "dailyATMLimit" "public"."DailyATMLimit" NOT NULL DEFAULT '30000',

    CONSTRAINT "ApplicationRequests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."IssuedCards" (
    "processorCardId" SERIAL NOT NULL,
    "requestID" TEXT NOT NULL,
    "customerRef" TEXT NOT NULL,
    "accountReference" TEXT NOT NULL,
    "bankName" "public"."Bank_name" NOT NULL DEFAULT 'notdefined',
    "encryptedPAN" TEXT NOT NULL,
    "encryptedCVV" TEXT NOT NULL,
    "encryptedPIN" TEXT NOT NULL,
    "keyReference" TEXT NOT NULL,
    "BINNumber" TEXT NOT NULL,
    "last4PAN" TEXT NOT NULL,
    "expiryMonth" "public"."ExpiryMonth" NOT NULL,
    "expiryYear" INTEGER NOT NULL,
    "cardType" "public"."CardType" NOT NULL,
    "cardNetwork" "public"."CardNetwork" NOT NULL,
    "productCode" TEXT NOT NULL,
    "cardStatus" "public"."DebitCardStatus" NOT NULL,
    "networkApprovalCode" TEXT NOT NULL,
    "dailyPOSLimit" "public"."POSLimit" NOT NULL DEFAULT '60000',
    "dailyATMLimit" "public"."DailyATMLimit" NOT NULL DEFAULT '30000',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "IssuedCards_pkey" PRIMARY KEY ("processorCardId")
);
