export function generateLuhnCheckDigit(PANWithoutCheck:string):string{

    const digits = PANWithoutCheck.split('').map(Number).reverse();
    let sum = 0;
    for (let i = 0; i < digits.length; i++) {
      let val = digits[i];
      if (i % 2 === 0) val! *= 2;
      if (val! > 9) val! -= 9;
      sum += val!;
    }
    const checkDigit = (10 - (sum % 10)) % 10;
    return checkDigit.toString();
}