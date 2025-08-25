export async function randomDelayProducer(): Promise<number> {
    const delay = Math.random() * 4000 + 1000; // gives decimals
    await new Promise(resolve => setTimeout(resolve, delay));
    return delay;
  }
  