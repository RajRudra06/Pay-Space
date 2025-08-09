-- CreateEnum
CREATE TYPE "gender" AS ENUM ('male', 'female', 'other');

-- CreateEnum
CREATE TYPE "occupation" AS ENUM ('Student', 'Employee', 'SelfEmployed', 'Business', 'Retired', 'Homemaker', 'Other');

-- CreateTable
CREATE TABLE "AccountsDetails" (
    "acc_det_id" SERIAL NOT NULL,
    "acc_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "DOB" TIMESTAMP(3) NOT NULL,
    "Gender" "gender" NOT NULL,
    "fatherName" TEXT NOT NULL,
    "motherName" TEXT NOT NULL,
    "aadhaarNumber" CHAR(12) NOT NULL,
    "panNumber" CHAR(10) NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" CHAR(10) NOT NULL,
    "address" TEXT NOT NULL,
    "City" TEXT NOT NULL,
    "State" TEXT NOT NULL,
    "pincode" CHAR(6) NOT NULL,
    "Occupation" "occupation" NOT NULL,
    "monthlyIncome" TEXT NOT NULL,
    "nomineeFirstname" TEXT NOT NULL,
    "nomineeLastname" TEXT NOT NULL,
    "relationship" TEXT NOT NULL,

    CONSTRAINT "AccountsDetails_pkey" PRIMARY KEY ("acc_det_id")
);

-- AddForeignKey
ALTER TABLE "AccountsDetails" ADD CONSTRAINT "AccountsDetails_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AccountsDetails" ADD CONSTRAINT "AccountsDetails_acc_id_fkey" FOREIGN KEY ("acc_id") REFERENCES "Accounts"("acc_id") ON DELETE RESTRICT ON UPDATE CASCADE;
