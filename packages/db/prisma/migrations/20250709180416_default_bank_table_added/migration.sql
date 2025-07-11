-- CreateTable
CREATE TABLE "DefaultAccount" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "bankName" "Bank_name" NOT NULL,

    CONSTRAINT "DefaultAccount_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DefaultAccount" ADD CONSTRAINT "DefaultAccount_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
