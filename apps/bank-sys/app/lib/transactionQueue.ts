import { Queue } from 'bullmq';
import { redisConnection } from './redis';

export const transactionQueue = new Queue('transactions', {
  connection: redisConnection,
});
