import { NationalIDType } from "@repo/db_banks/src/generated/prisma";

export function checkIDFormat(nationalIDType: NationalIDType, nationalIDNumber: string): boolean {
  const trimmed = nationalIDNumber.trim();

  switch (nationalIDType) {
    case NationalIDType.Aadhaar:
      // Aadhaar: 12 digits, first digit 2-9
      return /^[2-9]\d{11}$/.test(trimmed);

    case NationalIDType.PAN_Card:
      // PAN: 5 letters, 4 digits, 1 letter (e.g., ABCDE1234F)
      return /^[A-Z]{5}[0-9]{4}[A-Z]$/.test(trimmed);

    case NationalIDType.Passport:
      // Indian Passport: 1 letter, 7 digits (e.g., A1234567)
      return /^[A-PR-WYa-pr-wy][0-9]{7}$/.test(trimmed);

    case NationalIDType.Voter_ID:
      // Voter ID: 3 letters, 7 digits (e.g., ABC1234567)
      return /^[A-Z]{3}[0-9]{7}$/.test(trimmed);

    case NationalIDType.Driving_License:
      // DL format: Two letters (state code), two digits (RTO code), then 11-13 alphanumeric chars
      return /^[A-Z]{2}[0-9]{2}\s?[0-9]{11,13}$/.test(trimmed);

    default:
      return false;
  }
}
