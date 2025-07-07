-- CreateTable
CREATE TABLE "CommercialClients" (
    "id" SERIAL NOT NULL,
    "client_id" TEXT,
    "assigned_date" TIMESTAMP(3) NOT NULL,
    "sharedSecret" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CommercialClients_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CommercialClients_client_id_key" ON "CommercialClients"("client_id");

-- CreateIndex
CREATE UNIQUE INDEX "CommercialClients_sharedSecret_key" ON "CommercialClients"("sharedSecret");
