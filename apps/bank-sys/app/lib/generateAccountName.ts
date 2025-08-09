import { uniqueNamesGenerator } from 'unique-names-generator';

const professionalAdjectives = [
  "trusted",
  "secure",
  "digital",
  "verified",
  "prime",
  "elite",
  "reliable",
  "confidential",
  "smart",
  "stable"
];

const professionalNouns = [
  "wallet",
  "account",
  "vault",
  "ledger",
  "fund",
  "balance",
  "reserve",
  "portfolio",
  "deposit",
  "banking"
];

// Export as a function instead of a constant
export const generateAccountName = () => {
  return uniqueNamesGenerator({
    dictionaries: [professionalAdjectives, professionalNouns],
    separator: ' ',             
    style: 'capital'           
  });
};