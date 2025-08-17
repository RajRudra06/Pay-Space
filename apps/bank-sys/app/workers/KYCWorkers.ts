import { Worker } from 'bullmq';
import { redisConnection } from '../lib/redis';
// Remove problematic import and initialize directly
import { NationalIDType, PrismaClient } from '@repo/db_banks/src/generated/prisma/client';
import { checkIDFormat } from '../utils/checkIDFormat';
import axios from "axios"
import crypto from "crypto"

// Initialize Prisma directly in worker
const prisma_Bank = new PrismaClient();

const BANK_SYS_SHARED_SECRET = process.env.BANK_SYS_SHARED_SECRET;
const VERIFICATION_API_KEY=process.env.VERIFICATION_API_KEY;
const BANK_SYS_CLIENT_ID=process.env.BANK_SYS_CLIENT_ID;
const BANK_SYS_SIGNATURE_KEY=process.env.BANK_SYS_SIGNATURE_KEY;
const GOV_ID_CHECK_URL=process.env.GOV_ID_CHECK_URL;

console.log("NEW KYC PROCESS DETECTED---------------------------------------------------------------------")
console.log('🔍 DATABASE_URL_DB_BANK:', process.env.DATABASE_URL_DB_BANK ? 'EXISTS' : 'MISSING');
console.log('🔍 NODE_ENV:', process.env.NODE_ENV);

console.log('🔍 DEBUGGING PRISMA IMPORT (ES MODULE):');
console.log('📦 prisma_Bank type:', typeof prisma_Bank);
console.log('📦 prisma_Bank value:', prisma_Bank ? 'INITIALIZED' : 'UNDEFINED');
console.log('🔑 Available methods:', prisma_Bank ? Object.keys(prisma_Bank).slice(0, 5) : 'NONE');

// Test if it has the methods we need
if (prisma_Bank && prisma_Bank.debitCardApplication && prisma_Bank.debitCard) {
  console.log('✅ debit card and debit card application model available');
} else {
  console.error('❌ debit card/application model missing');
}

// Test database connection
prisma_Bank.$connect()
  .then(() => console.log('✅ Worker database connected successfully'))
  .catch(err => console.error('❌ Worker database connection failed:', err));

console.log('🚀 Transfer Worker file is being loaded...');
console.log('📅 Timestamp:', new Date().toISOString());
console.log('🔗 Redis connection:', redisConnection ? 'Connected' : 'Not connected');

const worker = new Worker(
  'KYC',
  async job => {
    console.log('');
    console.log('🔥 NEW JOB RECEIVED!');
    console.log('📋 Job ID:', job.id);
    console.log('📝 Job Name:', job.name);
    console.log('📊 Job Data: (kycRef)', JSON.stringify(job.data, null, 2));
    console.log('⏰ Job received at:', new Date().toISOString());

    if(job.name === "process-kyc"){
        const maxRetry=3;

        console.log('✅ Processing KYC verification job...');
        const { kycRef } = job.data;
        console.log('🔍 KYC Reference:', kycRef);

        try {

          // find the kyc job uing kycRef
          console.log('🔎 Searching for KYC job using kycRef');
          const KYCJob = await prisma_Bank.debitCardApplication.findFirst({
            where: { kycQueueRef:kycRef,status:"UnderProcess",kycStatus:"KYC_PENDING"}
          });

          console.log('📈 Found KYC Job:', KYCJob);
          console.log('💾 KYC details:', JSON.stringify(KYCJob, null, 2));
      
          if (!KYCJob) {
            console.log(`⚠️  No pending KYC job found for KYC Ref: ${kycRef} found. Exiting job.`);
            return; 
          }

          if(KYCJob?.cardType==="Virtual"){
            console.log('📈 KYC job is virtual', KYCJob);
            console.log('💰 Starting KYC verification process...');

            if(KYCJob.retryCount>maxRetry){
                const failedKYCJob=await prisma_Bank.debitCardApplication.update({
                    where:{
                        id:KYCJob.id
                    },
                    data:{
                        status:"Rejected",kycStatus:"KYC_FAILED"
                    }
                })
            }

            // fetch data from DB
            const getUserInfo=await prisma_Bank.user.findFirst({
                where:{
                    id:KYCJob.user_id
                }
            })

            
            // personal checks
            let personalCheck=false;

            const personalInfoCheck=getUserInfo?.username?.toLowerCase()===KYCJob.fullName.toLowerCase() && new Date(getUserInfo?.DOB).toISOString().split("T")[0] !== new Date(KYCJob.DOB).toISOString().split("T")[0] && getUserInfo.email===KYCJob.email && getUserInfo.number===KYCJob.phoneNumber 

            const getAccountDetails=await prisma_Bank.accounts.findFirst({
                where:{
                    acc_id:KYCJob.acc_id
                }
            })

            const getAccountDetailsInfo=await prisma_Bank.accountsDetails.findFirst({
                where:{
                    acc_id:getAccountDetails?.acc_id
                }
            })

            // account Info check
            const accountInfoCheck=KYCJob.acc_name===getAccountDetails?.acc_name&&KYCJob.acc_number===getAccountDetails.acc_number && KYCJob.Country && KYCJob.City===getAccountDetailsInfo?.City && KYCJob.State===getAccountDetailsInfo.State && KYCJob.addressLine1 && KYCJob.addressLine2 && KYCJob.postalCode===getAccountDetailsInfo.pincode && KYCJob.Gender===getAccountDetailsInfo.Gender

            // ID number and format checks
            const IDFormatCheck=checkIDFormat(KYCJob.nationlIDType,KYCJob.nationalIDNumber)
            
            let IDNumberCheck = true; 

            if (KYCJob.nationlIDType === "PAN_Card") {
            IDNumberCheck = KYCJob.nationalIDNumber === getAccountDetailsInfo?.panNumber;
            } 
            else if (KYCJob.nationlIDType === "Aadhaar") {
            IDNumberCheck = KYCJob.nationalIDNumber === getAccountDetailsInfo?.aadhaarNumber;
            }

            // api call to registered IDs holders
            const body={
                NationalIDType:KYCJob.nationlIDType,
                NationalIDNumber:KYCJob.nationalIDNumber,
                fullName:KYCJob.fullName,
                DOB:KYCJob.DOB,
                bank_sys_Client_Secret:BANK_SYS_SHARED_SECRET
            }

            const rawBody=JSON.stringify(body);
            const timestamp = new Date().toISOString();

            const signature = crypto
            .createHmac("sha256",BANK_SYS_SIGNATURE_KEY!)
            .update(rawBody)
            .digest("hex");

            const IDCheckReq=await axios.post(`${GOV_ID_CHECK_URL}`,body,{
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':`Bearer ${VERIFICATION_API_KEY}`,
                    'x-cliennt-id':BANK_SYS_CLIENT_ID,
                    'x-signature':signature,
                    'x-timestamp':timestamp
                }
            })

            if(IDCheckReq.data.done===true){

                // check in sanctions list for the person
                // check eligibility for particular cardVariant
                
                if(personalInfoCheck===true&&accountInfoCheck===true&&IDNumberCheck===true&&IDFormatCheck===true){
                    console.log("All perosnal Information check passed.");
                    personalCheck=true;
                }
    
                console.log('🎉 Verification completed successfully!');
                console.log('⏰ Completed at:', new Date().toISOString());
            }

          }

        } catch (error) {
          console.error('💥 Error processing verification:');
          console.error('🚨 Error details:', error);
        //   @ts-ignore
          console.error('📍 Stack trace:', error.stack);
          throw error; // Re-throw to trigger failed event
        }
    } else {
      console.log('⚠️  Unknown job name:', job.name);
    }
   
  },
  { connection: redisConnection }
);

console.log('👷 Worker created successfully!');
console.log('🎯 Worker is listening for jobs on queue: "transactions"');

worker.on('ready', () => {
  console.log('🟢 Worker is ready and waiting for KYC jobs...');
});

worker.on('active', (job) => {
  console.log(`🔄 Job ${job.id} is now active`);
});

worker.on('completed', (job, result) => {
  console.log(`✅ Job ${job.id} completed successfully`);
  console.log('🎯 Result:', result);
});

worker.on('failed', (job, err) => {
  console.log('');
  console.error('❌ JOB FAILED!');
  console.error(`🔴 Job ID: ${job?.id}`);
  console.error(`🔴 Job failed for txnRef: ${job?.data?.txnRef}`);
  console.error('🔴 Error message:', err.message);
  console.error('🔴 Error stack:', err.stack);
  console.error('⏰ Failed at:', new Date().toISOString());
});

worker.on('error', (err) => {
  console.error('🚨 WORKER ERROR:');
  console.error('🚨 Error details:', err);
});

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('🛑 Received SIGINT. Gracefully shutting down worker...');
  await worker.close();
  console.log('👋 Worker shut down complete.');
  process.exit(0);
});

console.log('🏁 Worker setup complete. File loaded successfully!');