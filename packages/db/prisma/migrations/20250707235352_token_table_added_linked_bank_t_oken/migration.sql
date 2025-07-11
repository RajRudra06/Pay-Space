-- CreateTable
CREATE TABLE "LinkedBankToken" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "bankName" TEXT NOT NULL,
    "accessToken" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LinkedBankToken_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LinkedBankToken_user_id_bankName_key" ON "LinkedBankToken"("user_id", "bankName");

-- AddForeignKey
ALTER TABLE "LinkedBankToken" ADD CONSTRAINT "LinkedBankToken_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
