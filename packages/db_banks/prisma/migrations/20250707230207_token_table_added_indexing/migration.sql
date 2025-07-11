-- CreateIndex
CREATE INDEX "Auth_codes_user_id_client_id_idx" ON "Auth_codes"("user_id", "client_id");

-- CreateIndex
CREATE INDEX "Auth_codes_code_idx" ON "Auth_codes"("code");

-- CreateIndex
CREATE INDEX "Auth_codes_expiresAt_idx" ON "Auth_codes"("expiresAt");

-- CreateIndex
CREATE INDEX "CommercialClients_client_id_idx" ON "CommercialClients"("client_id");

-- CreateIndex
CREATE INDEX "CommercialClients_expiresAt_idx" ON "CommercialClients"("expiresAt");
