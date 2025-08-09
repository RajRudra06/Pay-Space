"use client"
import React, { useState } from 'react';
import { X, Eye, Building2, CreditCard, Wallet } from 'lucide-react';
import { Bank_name } from "@repo/db_banks/src/generated/prisma/client";

interface UserAccountType {
    accName: string;
    accNumber: string;
    accType: string;
    balance: number;
}

interface CheckBalancePopupProps {
  bankName: Bank_name;
  onClose: () => void;
  theme: {
    gradient: string;
    textColor: string;
    borderColor: string;
    bgGradient: string;
    logo: string;
  };
  userAccounts: UserAccountType[];
}

export const CheckBalancePopup: React.FC<CheckBalancePopupProps> = ({
  bankName,
  onClose,
  theme,
  userAccounts,
}) => {
  const [selectedAccount, setSelectedAccount] = useState<string>('');

  const selectedAccountData = userAccounts.find(acc => acc.accName === selectedAccount);

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full">
        {/* Header */}
        <div className={`bg-gradient-to-r ${theme.gradient} text-white p-6 rounded-t-2xl`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Eye className="h-6 w-6" />
              <h2 className="text-xl font-bold">Check Balance</h2>
            </div>
            <button
              onClick={onClose}
              className="p-1 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Account Selection */}
          <div className="space-y-3">
            <label className={`block text-sm font-medium ${theme.textColor}`}>
              Select Account
            </label>
            <select
              value={selectedAccount}
              onChange={(e) => setSelectedAccount(e.target.value)}
              className={`w-full p-4 border-2 ${theme.borderColor} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white`}
            >
              <option value="">Choose an account to view balance</option>
              {userAccounts.map((account) => (
                <option key={account.accNumber} value={account.accName}>
                  {account.accName} - {account.accType}
                </option>
              ))}
            </select>
          </div>

          {/* Balance Display */}
          {selectedAccountData && (
            <div className={`p-6 bg-gradient-to-r ${theme.bgGradient} rounded-lg border-2 ${theme.borderColor}`}>
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className={`p-3 bg-white/20 rounded-full`}>
                    <Wallet className="h-8 w-8 text-gray-500"/>
                  </div>
                </div>
                
                <div>
                  <p className="text-gray-500 text-sm font-medium">Available Balance</p>
                  <p className="text-gray-500 text-3xl font-bold">
                    ₹{selectedAccountData.balance?.toLocaleString() || '0'}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/20 space-y-2">
                  <div className="flex items-center justify-between text-gray-500 text-sm">
                    <span>Account Name:</span>
                    <span className="font-medium">{selectedAccountData.accName}</span>
                  </div>
                  <div className="flex items-center justify-between text-gray-500 text-sm">
                    <span>Account Type:</span>
                    <span className="font-medium">{selectedAccountData.accType}</span>
                  </div>
                  <div className="flex items-center justify-between text-gray-500 text-sm">
                    <span>Account Number:</span>
                    <span className="font-medium">
                      ****{selectedAccountData.accNumber.slice(-4)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* No Account Selected State */}
          {!selectedAccount && (
            <div className="text-center py-8 text-gray-500">
              <CreditCard className="h-16 w-16 mx-auto mb-4 text-gray-300" />
              <p className="text-lg font-medium mb-2">Select an Account</p>
              <p className="text-sm">Choose an account from the dropdown to view your current balance</p>
            </div>
          )}

          {/* Close Button */}
          <button
            onClick={onClose}
            className={`w-full bg-gradient-to-r ${theme.gradient} text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all`}
          >
            Close
          </button>
        
        </div>
      </div>
    </div>
  );
};