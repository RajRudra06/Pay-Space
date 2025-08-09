import crypto from 'crypto';
import dotenv from 'dotenv';

dotenv.config();

const keyHex = process.env.ENCRYPTION_KEY;

if (!keyHex) throw new Error("Missing ENCRYPTION_KEY in .env");

const secretKey = Buffer.from(keyHex, 'hex'); 
const algorithm = 'aes-256-cbc';

export function encrypt(text: string): string {
  const iv = crypto.randomBytes(16); 
  const cipher = crypto.createCipheriv(algorithm, secretKey, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return iv.toString('hex') + ':' + encrypted; 
}

export function decrypt(encryptedText: string): string {
  const [ivHex, encrypted] = encryptedText.split(':');

  if (!ivHex || !encrypted) {
    throw new Error('Invalid encrypted text format');
  }

  const iv = Buffer.from(ivHex, 'hex');
  const decipher = crypto.createDecipheriv(algorithm, secretKey, iv);

  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}
