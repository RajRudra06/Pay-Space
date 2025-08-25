import { Worker } from 'bullmq';
import { redisConnection } from '../lib/redis';
import { PrismaClient } from '@repo/db_banks/src/generated/prisma/client';

// Initialize Prisma directly in worker
const prisma_Bank = new PrismaClient();

console.log("---------------------------------------------------------------------")
console.log('🔍 DATABASE_URL_DB_BANK:', process.env.DATABASE_URL_DB_BANK ? 'EXISTS' : 'MISSING');
console.log('🔍 NODE_ENV:', process.env.NODE_ENV);

console.log('🔍 DEBUGGING PRISMA IMPORT (ES MODULE):');
console.log('📦 prisma_Bank type:', typeof prisma_Bank);
console.log('📦 prisma_Bank value:', prisma_Bank ? 'INITIALIZED' : 'UNDEFINED');
console.log('🔑 Available methods:', prisma_Bank ? Object.keys(prisma_Bank).slice(0, 5) : 'NONE');

// Test if it has the methods we need
if (prisma_Bank && prisma_Bank.transactions) {
  console.log('✅ transactions model available');
} else {
  console.error('❌ transactions model missing');
}

// Test database connection
prisma_Bank.$connect()
  .then(() => console.log('✅ Worker database connected successfully'))
  .catch(err => console.error('❌ Worker database connection failed:', err));

console.log('🚀 Transfer Worker file is being loaded...');
console.log('📅 Timestamp:', new Date().toISOString());
console.log('🔗 Redis connection:', redisConnection ? 'Connected' : 'Not connected');

const worker = new Worker(
  'transactions',
  async job => {
    console.log('');
    console.log('🔥 NEW JOB RECEIVED!');
    console.log('📋 Job ID:', job.id);
    console.log('📝 Job Name:', job.name);
    console.log('📊 Job Data:', JSON.stringify(job.data, null, 2));
    console.log('⏰ Job received at:', new Date().toISOString());

    if(job.name === "process-transaction"){
        console.log('✅ Processing transaction job...');
        const { txnRef } = job.data;
        console.log('🔍 Transaction Reference:', txnRef);

        try {
          console.log('🔎 Searching for pending transactions...');
          const transactions = await prisma_Bank.transactions.findMany({
            where: { txnRef, status: 'pending' }
          });
          
          console.log('📈 Found transactions:', transactions.length);
          console.log('💾 Transaction details:', JSON.stringify(transactions, null, 2));
      
          if (transactions.length === 0) {
            console.log('⚠️  No pending transactions found. Exiting job.');
            return; 
          }
      
          console.log('💰 Starting database transaction...');
          await prisma_Bank.$transaction(async (txn) => {
          
            const debitTxn = transactions.find(t => t.type === 'debit');
            const creditTxn = transactions.find(t => t.type === 'credit');
            
            console.log('💳 Debit transaction:', debitTxn ? 'Found' : 'Missing');
            console.log('💵 Credit transaction:', creditTxn ? 'Found' : 'Missing');
      
            if (!debitTxn || !creditTxn) {
              console.error('❌ Missing debit or credit transaction!');
              throw new Error('Missing debit or credit txn');
            }

            if (debitTxn.Amount === null || creditTxn.Amount === null) {
              console.error('❌ Transaction amount is null!');
              throw new Error("Amount cannot be null");
            }          
            
            console.log('💸 Processing debit of amount:', debitTxn.Amount, 'from account:', debitTxn.acc_id);
            await txn.accounts.update({
              where: { acc_id: debitTxn.acc_id },
              data: {
                balance: { decrement: debitTxn.Amount },
                hold_amount: { decrement: debitTxn.Amount }
              }
            });
            console.log('✅ Debit processed successfully');
      
            console.log('💰 Processing credit of amount:', creditTxn.Amount, 'to account:', creditTxn.acc_id);
            await txn.accounts.update({
              where: { acc_id: creditTxn.acc_id },
              data: {
                balance: { increment: creditTxn.Amount }
              }
            });
            console.log('✅ Credit processed successfully');
      
            console.log('📝 Updating transaction status to success...');
            await txn.transactions.updateMany({
              where: { txnRef },
              data: { status: 'success' }
            });
            console.log('✅ Transaction status updated successfully');
          });

          console.log('🎉 Transaction completed successfully!');
          console.log('⏰ Completed at:', new Date().toISOString());

        } catch (error) {
          console.error('💥 Error processing transaction:');
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