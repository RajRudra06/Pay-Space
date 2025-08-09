export function generateRandomIFSC(bankCode: string) {
    if (!/^[A-Z]{4}$/.test(bankCode)) {
      throw new Error("Bank code must be 4 uppercase letters");
    }
    
    const branchCode = String(Math.floor(100000 + Math.random() * 900000)); 
    return `${bankCode}0${branchCode}`;
  }