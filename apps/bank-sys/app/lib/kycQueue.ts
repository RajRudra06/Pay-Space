import { Queue } from 'bullmq';
import { redisConnection } from './redis';

export const KYCQueue = new Queue('KYC', {
  connection: redisConnection,
});
