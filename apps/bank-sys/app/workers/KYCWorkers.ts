import { Worker } from 'bullmq';
import { redisConnection } from '../lib/redis';
import { CardVariant, NationalIDType, PrismaClient } from '@repo/db_banks/src/generated/prisma/client';
import { checkIDFormat } from '../utils/checkIDFormat';
import axios from "axios"
import crypto from "crypto"
import { getIncomePoints,getTypePoints,getDTIPoints } from '../lib/riskScoreCalculator';
import { getCardForRisk } from '../lib/cardForRisk';
import { generateAccountRef, generateCustomerRef, generateRequestId } from '../lib/issuerPayloadGeneration';
import { KYCQueue } from '../lib/kycQueue';

const prisma_Bank = new PrismaClient();

// gov id verify env secrets
const BANK_SYS_SHARED_SECRET = process.env.BANK_SYS_SHARED_SECRET;
const VERIFICATION_API_KEY=process.env.VERIFICATION_API_KEY;
const BANK_SYS_CLIENT_ID=process.env.BANK_SYS_CLIENT_ID;
const BANK_SYS_SIGNATURE_KEY=process.env.BANK_SYS_SIGNATURE_KEY;
const GOV_ID_CHECK_URL=process.env.GOV_ID_CHECK_URL;

// sanctions env secrets
const SANCTION_SYS_SIGNATURE_KEY=process.env.SANCTION_SYS_SIGNATURE_KEY
const SANCTION_LIST_CHECK_URL=process.env.SANCTION_LIST_CHECK_URL
const SANCTION_BANK_SYS_CLIENT_ID=process.env.SANCTION_BANK_SYS_CLIENT_ID
const SANCTION_VERIFICATION_API_KEY=process.env.SANCTION_VERIFICATION_API_KEY
const SANCTION_BANK_SYS_SHARED_SECRET=process.env.SANCTION_BANK_SYS_SHARED_SECRET

// card issuer env secrets
const CARD_ISSUER_API_URL=process.env.CARD_ISSUER_API_URL;
const CARD_ISSUER_SIGNATURE_KEY=process.env.CARD_ISSUER_SIGNATURE_KEY;
const BANK_SYS_CLIENT_CARD_ISSUER_API_KEY=process.env.BANK_SYS_CLIENT_CARD_ISSUER_API_KEY
const BANK_SYS_CLIENT_ID_CARD_ISSUER=process.env.BANK_SYS_CLIENT_ID_CARD_ISSUER
const BANK_SYS_CLIENT_CARD_ISSUER_SECRET=process.env.BANK_SYS_CLIENT_CARD_ISSUER_SECRET

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
    console.log('🔥 NEW KYC JOB RECEIVED!');
    console.log('📋 Job ID:', job.id);
    console.log('📝 Job Name:', job.name);
    console.log('📊 Job Data: (kycRef)', JSON.stringify(job.data, null, 2));
    console.log('⏰ Job received at:', new Date().toISOString());

    if(job.name === "process-kyc"){
        const maxRetry=3;
        let riskScore=0;
        const RISK_MEASURE_THRESHOLD=40;

        console.log('✅ Processing KYC verification job...');
        const { kycRef } = job.data;
        console.log('🔍 KYC Reference:', kycRef);

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

        try {

          if(KYCJob?.cardType==="Virtual" || KYCJob?.cardType==="Physical"){
            console.log('📈 KYC job is virtual/physical', KYCJob);
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

            const personalInfoCheck=getUserInfo?.username?.toLowerCase()===KYCJob.fullName.toLowerCase() && new Date(getUserInfo?.DOB).toISOString().split("T")[0] === new Date(KYCJob.DOB).toISOString().split("T")[0] && getUserInfo.email===KYCJob.email && getUserInfo.number===KYCJob.phoneNumber 

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

            if(personalInfoCheck===true&&accountInfoCheck===true&&IDNumberCheck===true&&IDFormatCheck===true){

              console.log("All perosnal Information check passed.");
              personalCheck=true;

            // api call to registered IDs holders
            const bodyIDCheck={
              NationalIDType:KYCJob.nationlIDType,
              NationalIDNumber:KYCJob.nationalIDNumber,
              fullName:KYCJob.fullName,
              DOB:KYCJob.DOB,
              bank_sys_Client_Secret:BANK_SYS_SHARED_SECRET
          }

          const rawBodyIDCheck=JSON.stringify(bodyIDCheck);
          const timestampIDCheck = new Date().toISOString();

          const signatureIDCheck = crypto
          .createHmac("sha256",BANK_SYS_SIGNATURE_KEY!)
          .update(rawBodyIDCheck)
          .digest("hex");

          const IDCheckReq=await axios.post(`${GOV_ID_CHECK_URL}`,bodyIDCheck,{
              headers:{
                  'Content-Type':'application/json',
                  'Authorization':`Bearer ${VERIFICATION_API_KEY}`,
                  'x-cliennt-id':BANK_SYS_CLIENT_ID,
                  'x-signature':signatureIDCheck,
                  'x-timestamp':timestampIDCheck
              },
              timeout: 60000, 
              validateStatus: (status) => status === 200 
          })

          if(IDCheckReq.data.done===true){

            // check for name present in sanctions list 
            const bodySanctionCheck={
              fullName:KYCJob.fullName,
              DOB:KYCJob.DOB,
              nationalCountry:KYCJob.Country,
              sanction_Bank_Sys_Shared_Secret:SANCTION_BANK_SYS_SHARED_SECRET
          }

            const rawBodySanctionCheck=JSON.stringify(bodySanctionCheck);

            const timestampSanctionCheck = new Date().toISOString();

            const signatureSanctionCheck = crypto
            .createHmac("sha256",SANCTION_SYS_SIGNATURE_KEY!)
            .update(rawBodySanctionCheck)
            .digest("hex");


          const SanctionCheckReq=await axios.post(`${SANCTION_LIST_CHECK_URL}`,bodySanctionCheck,{
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${SANCTION_VERIFICATION_API_KEY}`,
                'x-cliennt-id':SANCTION_BANK_SYS_CLIENT_ID,
                'x-signature':signatureSanctionCheck,
                'x-timestamp':timestampSanctionCheck
            },
            timeout: 60000, 
              validateStatus: (status) => status === 200 
        })

        if(SanctionCheckReq.data.done===true){

            // risk score calculations

            // risk score for existing loan
            const loanRisk=KYCJob.existing_Loans===true?5:0;
            let DTIPoints=0;

            // risk score for montly obligation
            const monthlyObligation = KYCJob.existing_Loans
            ? Math.max(1000, Math.round(KYCJob.loanAmount * 0.02))
            : 0; 


            if(monthlyObligation!==0){
               const DTI = KYCJob.IncomeMontly > 0 ? monthlyObligation / KYCJob.IncomeMontly : 1;

               DTIPoints=getDTIPoints(DTI); 

            }

            // risk score addition
            riskScore+=getIncomePoints(KYCJob.IncomeMontly)+getTypePoints(KYCJob.employment_type)+loanRisk+DTIPoints;
             
            if(riskScore<RISK_MEASURE_THRESHOLD){

            const getCard=getCardForRisk(riskScore);
            const deliveryTime=KYCJob.cardType==="Virtual"?"noTime":"toBeUpdated"

            const debitCardApplicationApproved=await prisma_Bank.debitCardApplication.update({
              where:{
                id:KYCJob.id
              },
              data:{
                  cardVariant:getCard.variant,
                  dailyATMLimit:getCard.atmLimit,
                  dailyPOSLimit:getCard.posLimit,
                  deliveryTime:deliveryTime,
                  kycStatus:"KYC_PASSED",
                  riskNumber:riskScore,
                  retryCount:{
                    increment:1
                  },
                  reasonToReject:"Application Approved"
              }
            })

            // api call to issuer with minimal details

            const requestID=generateRequestId();
            const customerRef=generateCustomerRef(getUserInfo!.id.toString())

            const productRequested={
              cardType:KYCJob.cardType,
              cardNetwork:KYCJob.cardNetwork,
              cardVariant:KYCJob.cardVariant,
              cardTypeMoney:"Debit",
              bankName:KYCJob.bankName
            }

            const cardHolder={
              fullName:KYCJob.fullName,
              DOB:KYCJob.DOB.toISOString().split('T')[0]
            }

            const deliveryDetails=KYCJob.cardType==="Physical"?{
              address:{
                addressLine1:KYCJob.addressLine1,
                City:KYCJob.City,
                State:KYCJob.State,
                Country:KYCJob.Country,
                postalCodes:KYCJob.postalCode,
                virtualCard:false
              },
              deliveryTime:KYCJob.deliveryTime
            }:{none:"none",
            virtualCard:true
          }

            const dailyLimit={
              dailyPOSLimit:KYCJob.dailyPOSLimit,
              dailyATMLimit:KYCJob.dailyATMLimit,
            }

            const bodyToSendIssuer={requestID:requestID,customerRef:customerRef,productRequested:productRequested,cardHolder:cardHolder,deliveryDetails:deliveryDetails,dailyLimit:dailyLimit,accountReference:generateAccountRef(KYCJob.acc_id.toString()),
              issuer_Bank_Sys_Shared_Secret:BANK_SYS_CLIENT_CARD_ISSUER_SECRET};

            const updateReferencesCardIssuer=await prisma_Bank.debitCardApplication.update({
              where:{
                id:debitCardApplicationApproved.id,
              },
              data:{
                customerRef:customerRef,
                requestID:requestID,
                accountReference:generateAccountRef(KYCJob.acc_id.toString())
              }
            })

            const rawBodySendIssuer=JSON.stringify(bodyToSendIssuer);

            const timeStampSendIssuer = new Date().toISOString();

            const signatureSendIssuer = crypto
            .createHmac("sha256",CARD_ISSUER_SIGNATURE_KEY!)
            .update(rawBodySendIssuer)
            .digest("hex");

            const issuerReqDebitCard=await axios.post(`${CARD_ISSUER_API_URL}`,bodyToSendIssuer,{
              headers:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${BANK_SYS_CLIENT_CARD_ISSUER_API_KEY}`,
                'x-cliennt-id':BANK_SYS_CLIENT_ID_CARD_ISSUER,
                'x-signature':signatureSendIssuer,
                'x-timestamp':timeStampSendIssuer
            }
            })

            if(issuerReqDebitCard.data.done===true){
                const debitCardApplicationApprovedCardReq=await prisma_Bank.debitCardApplication.update({
                  where:{
                    id:debitCardApplicationApproved.id
                  },
                  data:{
                    status:"UnderProcess"
                  }
                })
            }

            else if(issuerReqDebitCard.data.done===-1){
              const rejectApplicationRiskScore=await prisma_Bank.debitCardApplication.update({
                where:{
                  id:KYCJob.id 
                },
                data:{
                  kycStatus:"KYC_PASSED",
                  status:"Rejected",
                  deliveryTime:"none",
                  riskNumber:riskScore,
                  retryCount:{
                    increment:1
                  },
                  reasonToReject:"Not enough Credit Score"
                }
              })    
              
              
              const delayMs = Math.pow(2, rejectApplicationRiskScore.retryCount) * 5000;
              const retryJob=await KYCQueue.add('process-kyc', { kycRef }, { 
                delay: delayMs,
                attempts: 1 
              });
            
            }
            // else if(issuerReqDebitCard.data.done===false){
            //   const rejectCardIssuer=await prisma_Bank.debitCardApplication.update({
            //     where:{
            //       id:KYCJob.id 
            //     },
            //     data:{
            //       kycStatus:"KYC_PASSED",
            //       status:"Rejected",
            //       deliveryTime:"none",
            //       riskNumber:100,
            //       retryCount:{
            //         increment:1
            //       },
            //       reasonToReject:"Rejected from the card Issuer side"
            //     }
            //   })

            // //   console.log('🎉 Verification completed successfully and card not issued by issuer !');
            // //   console.log('⏰ Completed at:', new Date().toISOString());
            // // }

            // // else if(issuerReqDebitCard.status>=400&&issuerReqDebitCard.data.done===-1){
            // //   throw new Error(`API call to card issuer failed with status ${issuerReqDebitCard.status}`);

            // // }


            console.log('🎉 Verification completed successfully and user verified and req sent succesfully');
            console.log('⏰ Completed at:', new Date().toISOString());

             }
            else {
              const rejectApplicationRiskScore=await prisma_Bank.debitCardApplication.update({
                where:{
                  id:KYCJob.id 
                },
                data:{
                  kycStatus:"KYC_FAILED",
                  status:"Rejected",
                  deliveryTime:"none",
                  riskNumber:riskScore,
                  retryCount:{
                    increment:1
                  },
                  reasonToReject:"Not enough Credit Score"
                }
              })

              console.log('🎉 Verification completed successfully and user not verified -> not enough credit score !');
              console.log('⏰ Completed at:', new Date().toISOString());
            }
        }

        else if(SanctionCheckReq.data.done===false&&SanctionCheckReq.data.score>0){

            const rejectApplicationSanctionList=await prisma_Bank.debitCardApplication.update({
              where:{
                id:KYCJob.id 
              },
              data:{
                kycStatus:"KYC_FAILED",
                status:"Rejected",
                deliveryTime:"none",
                riskNumber:100,
                retryCount:{
                  increment:1
                },
                reasonToReject:"Match found in Sanctions List"

              }
            })

            console.log('🎉 Verification completed successfully and user not verified -> match in sanctions list !');
            console.log('⏰ Completed at:', new Date().toISOString());
        }

        else if(SanctionCheckReq.status>=400 && SanctionCheckReq.data.done===-1){
          throw new Error(`API call to sanction list provider failed with status ${SanctionCheckReq.status}`);

        }
             
          }

          else if(IDCheckReq.data.done===false){

            const rejectApplicationIDCheck=await prisma_Bank.debitCardApplication.update({
              where:{
                id:KYCJob.id 
              },
              data:{
                kycStatus:"KYC_FAILED",
                status:"Rejected",
                deliveryTime:"none",
                riskNumber:100,
                retryCount:{
                  increment:1
                },
                reasonToReject:"Goverment ID Check Failed"
              }
            })

            console.log('🎉 Verification completed successfully and user not verified -> ID check invalid !');
            console.log('⏰ Completed at:', new Date().toISOString());

          }

          else if(IDCheckReq.status>=400 && IDCheckReq.data.done===-1) {
            throw new Error(`API call to goverment ID failed with status ${IDCheckReq.status}`);
          }

          }

          else{

            const rejectApplicationPersonalCheck=await prisma_Bank.debitCardApplication.update({
              where:{
                id:KYCJob.id 
              },
              data:{
                kycStatus:"KYC_FAILED",
                status:"Rejected",
                deliveryTime:"none",
                riskNumber:100,
                retryCount:{
                  increment:1
                },
                reasonToReject:"Personal Information Check Failed"
              }
            })

            console.log('🎉 Verification completed successfully and user not verified -> personal info check failed !');
            console.log('⏰ Completed at:', new Date().toISOString());

          }
          
          }

        } catch (error) {
          console.error('💥 Error processing verification:');
          console.error('🚨 Error details:', error);
          const updateFailedKYCStatus=await prisma_Bank.debitCardApplication.update({
            where: { id: KYCJob.id },
            data: { retryCount: { increment: 1 } }
          });
          
          const delayMs = Math.pow(2, updateFailedKYCStatus.retryCount) * 5000;
          const retryJob=await KYCQueue.add('process-kyc', { kycRef }, { 
            delay: delayMs,
            attempts: 1 
          });
        //   @ts-ignore
          console.error('📍 Stack trace:', error.stack);
          throw error; 
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