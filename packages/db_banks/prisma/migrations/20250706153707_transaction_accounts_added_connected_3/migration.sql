-- CreateTable
CREATE TABLE "xyz" (
    "id" SERIAL NOT NULL,
    "client_id" TEXT,
    "assigned_date" TIMESTAMP(3) NOT NULL,
    "sharedSecret" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "xyz_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "xyz_client_id_key" ON "xyz"("client_id");

-- CreateIndex
CREATE UNIQUE INDEX "xyz_sharedSecret_key" ON "xyz"("sharedSecret");
