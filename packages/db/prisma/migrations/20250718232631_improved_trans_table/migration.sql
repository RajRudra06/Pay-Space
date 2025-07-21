/*
  Warnings:

  - You are about to drop the column `acc_id` on the `Transactions` table. All the data in the column will be lost.
  - Added the required column `acc_name` to the `Transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bank` to the `Transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Transactions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Transactions" DROP CONSTRAINT "Transactions_acc_id_fkey";

-- AlterTable
ALTER TABLE "Transactions" DROP COLUMN "acc_id",
ADD COLUMN     "acc_name" TEXT NOT NULL,
ADD COLUMN     "bank" "Bank_name" NOT NULL,
ADD COLUMN     "user_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Transactions" ADD CONSTRAINT "Transactions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
