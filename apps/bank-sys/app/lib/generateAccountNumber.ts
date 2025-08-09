export default function generateAccountNumber(): string {
    let accNum = '';
    for (let i = 0; i < 16; i++) {
      accNum += Math.floor(Math.random() * 10);
    }
    return accNum;
  }
  