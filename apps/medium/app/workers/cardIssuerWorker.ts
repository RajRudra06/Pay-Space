// import {Worker} from "bullmq"
// import { redisConnection } from "../../lib/redis"
// import prisma_Medium from "@repo/db_medium/prisma"

// console.log('🔍 DATABASE_URL_MEDIUM:', process.env.DATABASE_URL_MEDIUM ? 'EXISTS' : 'MISSING');
// console.log('🔍 NODE_ENV:', process.env.NODE_ENV);
// console.log('🔍 DEBUGGING PRISMA IMPORT (ES MODULE):');
// console.log('📦 prisma_Bank type:', typeof prisma_Medium);
// console.log('📦 prisma_Bank value:', prisma_Medium ? 'INITIALIZED' : 'UNDEFINED');
// console.log('🔑 Available methods:', prisma_Medium ? Object.keys(prisma_Medium).slice(0, 5) : 'NONE');

// // if (prisma_Medium && prisma_Medium.transactions) {
// //     console.log('✅ transactions model available');
// //   } else {
// //     console.error('❌ transactions model missing');
// //   }
  
//   prisma_Medium.$connect()
//   .then(() => console.log('✅ Worker database connected successfully'))
//   .catch(err => console.error('❌ Worker database connection failed:', err));

// console.log('🚀 card Issuer Worker file is being loaded...');
// console.log('📅 Timestamp:', new Date().toISOString());
// console.log('🔗 Redis connection:', redisConnection ? 'Connected' : 'Not connected');

// const worker = new Worker(
//     'cardIssuer',
//     async job => {
//       console.log('');
//       console.log('🔥 NEW CARD ISSUE JOB RECEIVED!');
//       console.log('📋 Job ID:', job.id);
//       console.log('📝 Job Name:', job.name);
//       console.log('📊 Job Data:', JSON.stringify(job.data, null, 2));
//       console.log('⏰ Job received at:', new Date().toISOString());
  
//       if(job.name === "process-card-issuing"){
//           console.log('✅ Processing card issuing job...');
//           const { cardIssRef,body } = job.data;
//           console.log('🔍 Card Ref Reference:', cardIssRef);
  
//           try {
//             console.log('🔎 Starting steps for card issuing...');

//             // look the DB for same customer ref, name and accref to see if already gotten or not if yes start with that if not make a DB entry and start 

//         // one type of advanced KYC

//         // card network communication 

//         // pan(luhn), cvv 

//         // doing advance KYC

//         // contact network


        
//         // BIN logic and PAN generation

//             // get BIN acc to the customer req


//             // checking with reqID to make sure not multiple req for same person

//             let currentApplication;

//             const checkAlreadyRequestID=await prisma_Medium.$transaction(async (txn)=>{

//               let currentApplication=await txn.applicationRequests.findFirst({
//                 where:{
//                   requestID:body.requestID,
//                   customerRef:body.customerRef,
//                   accountReference:body.accountReference
//                 }
//               })

//               if(!currentApplication){
//                  currentApplication=await txn.applicationRequests.create({
//                   data:{
//                     requestID:body.requestID,
//                     customerRef:body.customerRef,
//                     accountReference:body.accountReference,
//                     bankName:body.productRequested.bankName,
//                     status:"UnderProcess",
//                     reasonToReject:"none_UnderProcess",
//                     fullName:body.cardHolder.fullName,
//                     DOB:body.cardHolder.DOB,
//                     Country:body.deliveryDetails.address.Country,
//                     State:body.deliveryDetails.address.State,
//                     City:body.deliveryDetails.address.City,
//                     addressLine1:body.deliveryDetails.address.addressLine1,
//                     postalCode:body.deliveryDetails.address.postalCode,
//                     BIN:"notAssigned",
//                     virtualCard:body.deliveryDetails.address.virtualCard,
//                     deliveryTime:body.deliveryDetails.deliveryTime,
//                     dailyATMLimit:body.dailyLimit.dailyATMLimit,
//                     dailyPOSLimit:body.dailyLimit.dailyPOSLimit,
//                   }
//                 })

//             }
//           }
//             )
            
//             }

//             const getBIN=await prisma_Medium.bIN_NUMBERS.findFirst({
//                 where:{
//                     network:body.productRequested.cardNetwork,
//                     productType:body.productRequested.cardTypeMoney,
//                     Tier:body.productRequested.cardVariant,
//                     Country:body.deliveryDetails.address.Country
//                 }
//             })

    
      
        
            
//           } catch (error) {
//             console.error('💥 Error processing card issuing:');
//             console.error('🚨 Error details:', error);
//             //   @ts-ignore
//             console.error('📍 Stack trace:', error.stack);
//             throw error;
//           }
//       } else {
//         console.log('⚠️  Unknown job name:', job.name);
//       }
     
//     },
//     { connection: redisConnection }
//   );

// console.log('👷 Worker created successfully!');
// console.log('🎯 Worker is listening for jobs on queue: "transactions"');

// worker.on('ready', () => {
//   console.log('🟢 Worker is ready and waiting for jobs...');
// });

// worker.on('active', (job) => {
//   console.log(`🔄 Job ${job.id} is now active`);
// });

// worker.on('completed', (job, result) => {
//   console.log(`✅ Job ${job.id} completed successfully`);
//   console.log('🎯 Result:', result);
// });

// worker.on('failed', (job, err) => {
//   console.log('');
//   console.error('❌ JOB FAILED!');
//   console.error(`🔴 Job ID: ${job?.id}`);
//   console.error(`🔴 Job failed for txnRef: ${job?.data?.txnRef}`);
//   console.error('🔴 Error message:', err.message);
//   console.error('🔴 Error stack:', err.stack);
//   console.error('⏰ Failed at:', new Date().toISOString());
// });

// worker.on('error', (err) => {
//   console.error('🚨 WORKER ERROR:');
//   console.error('🚨 Error details:', err);
// });

// // Graceful shutdown
// process.on('SIGINT', async () => {
//   console.log('🛑 Received SIGINT. Gracefully shutting down worker...');
//   await worker.close();
//   console.log('👋 Worker shut down complete.');
//   process.exit(0);
// });

// console.log('🏁 Worker setup complete. File loaded successfully!');

import {Worker} from "bullmq"
import { redisConnection } from "../../lib/redis"
import prisma_Medium from "@repo/db_medium/prisma"
import { generateLuhnCheckDigit } from "../../lib/PANGeneration";

console.log('🔍 DATABASE_URL_MEDIUM:', process.env.DATABASE_URL_MEDIUM ? 'EXISTS' : 'MISSING');
console.log('🔍 NODE_ENV:', process.env.NODE_ENV);
console.log('🔍 DEBUGGING PRISMA IMPORT (ES MODULE):');
console.log('📦 prisma_Bank type:', typeof prisma_Medium);
console.log('📦 prisma_Bank value:', prisma_Medium ? 'INITIALIZED' : 'UNDEFINED');
console.log('🔑 Available methods:', prisma_Medium ? Object.keys(prisma_Medium).slice(0, 5) : 'NONE');

// if (prisma_Medium && prisma_Medium.transactions) {
//     console.log('✅ transactions model available');
//   } else {
//     console.error('❌ transactions model missing');
//   }
  
  prisma_Medium.$connect()
  .then(() => console.log('✅ Worker database connected successfully'))
  .catch(err => console.error('❌ Worker database connection failed:', err));

console.log('🚀 card Issuer Worker file is being loaded...');
console.log('📅 Timestamp:', new Date().toISOString());
console.log('🔗 Redis connection:', redisConnection ? 'Connected' : 'Not connected');

const worker = new Worker(
    'cardIssuer',
    async job => {
      console.log('');
      console.log('🔥 NEW CARD ISSUE JOB RECEIVED!');
      console.log('📋 Job ID:', job.id);
      console.log('📝 Job Name:', job.name);
      console.log('📊 Job Data:', JSON.stringify(job.data, null, 2));
      console.log('⏰ Job received at:', new Date().toISOString());
  
      if(job.name === "process-card-issuing"){
          console.log('✅ Processing card issuing job...');
          const { cardIssRef,body } = job.data;
          console.log('🔍 Card Ref Reference:', cardIssRef);
  
          try {
            console.log('🔎 Starting steps for card issuing...');

            // look the DB for same customer ref, name and accref to see if already gotten or not if yes start with that if not make a DB entry and start 

        // one type of advanced KYC

        // card network communication 

        // pan(luhn), cvv 

        // doing advance KYC

        // contact network


            // checking with reqID to make sure not multiple req for same person using idempotency key as request ID
            const checkAlreadyRequestID=await prisma_Medium.$transaction(async (txn)=>{

              let currentApplication=await txn.applicationRequests.findFirst({
                where:{
                  requestID:body.requestID,
                  customerRef:body.customerRef,
                  accountReference:body.accountReference
                }
              })

              if(!currentApplication){
                 currentApplication=await txn.applicationRequests.create({
                  data:{
                    requestID:body.requestID,
                    customerRef:body.customerRef,
                    accountReference:body.accountReference,
                    bankName:body.productRequested.bankName,
                    status:"UnderProcess",
                    reasonToReject:"none_UnderProcess",
                    fullName:body.cardHolder.fullName,
                    DOB:body.cardHolder.DOB,
                    Country:body.deliveryDetails.address.Country,
                    State:body.deliveryDetails.address.State,
                    City:body.deliveryDetails.address.City,
                    addressLine1:body.deliveryDetails.address.addressLine1,
                    postalCode:body.deliveryDetails.address.postalCode,
                    BIN:"notAssigned",
                    virtualCard:body.deliveryDetails.address.virtualCard,
                    deliveryTime:body.deliveryDetails.deliveryTime,
                    dailyATMLimit:body.dailyLimit.dailyATMLimit,
                    dailyPOSLimit:body.dailyLimit.dailyPOSLimit,
                  }
                })

              }

              return {currentApplication:currentApplication};
            })
            

            
            // BIN logic and PAN generation

              // get BIN acc to the customer req

            


            const BINAllocation=await prisma_Medium.$transaction(async(txn)=>{


              const getBIN=await txn.bIN_NUMBERS.findFirst({
                where:{
                    network:body.productRequested.cardNetwork,
                    productType:body.productRequested.cardTypeMoney,
                    Tier:body.productRequested.cardVariant,
                    Country:body.deliveryDetails.address.Country
                },
                
              }) 
              
              if(!getBIN) throw new Error('BIN number not found for requested Product')

              const MAX_ACCOUNT_FOR_BIN = 999999999n; 

              if (getBIN.nextAccount >= MAX_ACCOUNT_FOR_BIN) {
                throw new Error("BIN exhausted");
              }

              const accountNumber = String(getBIN.nextAccount).padStart(9, "0");

              const updateBINAccNumbers=await txn.bIN_NUMBERS.update({
                where: { id: getBIN.id },
                data: {
                  nextAccount: getBIN.nextAccount+1n,
                  allocatedCount: {
                    increment:1
                  }
                },
              })

              const PANWithoutCheck=`${getBIN.BIN}${accountNumber}`
              const checkLuhnDigit=generateLuhnCheckDigit(PANWithoutCheck);

              const fullPAN=PANWithoutCheck+checkLuhnDigit
          
          })
    
      
        
            
          } catch (error) {
            console.error('💥 Error processing card issuing:');
            console.error('🚨 Error details:', error);
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
  console.log('🟢 Worker is ready and waiting for jobs...');
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