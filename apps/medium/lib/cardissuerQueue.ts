import { Queue } from 'bullmq';
import { redisConnection } from './redis';

export const cardIssuerQueue = new Queue('cardIssuer', {
  connection: redisConnection,
});
