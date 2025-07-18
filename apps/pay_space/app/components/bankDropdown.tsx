import { ChevronDown } from "lucide-react";
import { BANK_META, BankId, BankMeta } from "@pay_space/app/lib/banksMetaData";
import { useState } from "react";

interface BankDropdownProps {
  bankIds: BankId[];
  value: BankId;
  onChange: (id: BankId) => void;
}

export default function BankDropdown({ bankIds, value, onChange }: BankDropdownProps) {
  const banks: BankMeta[] = bankIds.map((id) => BANK_META[id]);
  const selectedBankData = BANK_META[value];
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSelect = (id: BankId) => {
    onChange(id); 
    setIsDropdownOpen(false);
  };

  return (
    <div className="mb-6">
      <div className="relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center gap-3 px-4 py-2 bg-white border-2 border-gray-500 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 min-w-[230px] w-full"
        >
          <div
            className={`w-8 h-8 ${selectedBankData?.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}
          >
            {selectedBankData?.initial}
          </div>
          <span className="font-medium text-gray-900 flex-1 text-left">
            {selectedBankData?.name ?? "Select Bank"}
          </span>
          <ChevronDown
            className={`w-4 h-4 text-gray-400 transition-transform ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isDropdownOpen && (
          <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10">
            {banks.map((bank) => (
              <button
                key={bank.id}
                onClick={() => handleSelect(bank.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg ${
                  value === bank.id
                    ? "bg-purple-50 text-purple-700"
                    : "text-gray-700"
                }`}
              >
                <div
                  className={`w-8 h-8 ${bank.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}
                >
                  {bank.initial}
                </div>
                <span className="font-medium">{bank.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
