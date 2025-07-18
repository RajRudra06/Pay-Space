
export type BankId = "icici" | "sbi" | "ubi" | "hdfc" | "pay_space";

export interface BankMeta {
  id: BankId;
  name: string;
  color: string;
  initial: string;
}

export const BANK_META: Record<BankId, BankMeta> = {
  icici: {
    id: "icici",
    name: "ICICI",
    color: "bg-orange-500",
    initial: "I"
  },
  sbi: {
    id: "sbi",
    name: "SBI",
    color: "bg-blue-600",
    initial: "S"
  },
  ubi: {
    id: "ubi",
    name: "UBI",
    color: "bg-green-600",
    initial: "U"
  },
  hdfc: {
    id: "hdfc",
    name: "HDFC",
    color: "bg-red-600",
    initial: "H"
  },
  pay_space: {
    id: "pay_space",
    name: "Pay Space",
    color: "bg-purple-600",
    initial: "PS"
  },
};
