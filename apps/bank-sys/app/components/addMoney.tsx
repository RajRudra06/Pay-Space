"use client"
import React, { useState } from 'react';
import { X, CreditCard, Building2, Shield, AlertCircle } from 'lucide-react';
import { Bank_name } from "@repo/db_banks/src/generated/prisma/client";
import { toast } from "react-hot-toast";
import axios from "axios";

interface UserAccountType {
    accName: string;
    accNumber: string;
    accType: string;
  balance: number;
}

interface AddMoneyPopupProps {
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
  onBalanceUpdate?: () => void; // Callback to refresh balance after adding money
}

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

export const AddMoneyPopup: React.FC<AddMoneyPopupProps> = ({
  bankName,
  onClose,
  theme,
  userAccounts,
}) => {
  const [selectedAccount, setSelectedAccount] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  console.log(selectedAccount,"seklectedacc")
  const handleAddMoney = async () => {
    if (!selectedAccount) {
      toast.error("Please select an account");
      return;
    }

    if (!amount || parseFloat(amount) <= 0) {
      toast.error("Please enter a valid amount");
      return;
    }

    if (parseFloat(amount) > 100000) {
      toast.error("Maximum limit is ₹1,00,000 per transaction");
      return;
    }

    if (parseFloat(amount) < 10) {
      toast.error("Minimum amount is ₹10");
      return;
    }

    setLoading(true);
    const toastAddMoney = toast.loading("Adding money to your account...");

    try {
      const bankLowerCase = bankName.toLowerCase();
      const res = await axios.post(`${NEXT_PUBLIC_API_URL}/${bankLowerCase}/addMoney`, {
        accountId: selectedAccount,
        amount: parseFloat(amount)
      });

      if (res.data.done===true) {
        toast.success(`₹${amount} added successfully! 🎉`, { id: toastAddMoney });
        setAmount('');
        setSelectedAccount('');
        setTimeout(() => {
          onClose();
        }, 1500);
      } else {
        toast.error(res.data.msg || "Failed to add money", { id: toastAddMoney });
      }
    } catch (error: any) {
      toast.error("Something went wrong, please try again", { id: toastAddMoney });
      console.error("Add money error:", error);
    } finally {
      setLoading(false);
    }
  };

  const quickAmounts = [500, 1000, 2000, 5000, 10000];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className={`bg-gradient-to-r ${theme.gradient} text-white p-6 rounded-t-2xl`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <CreditCard className="h-6 w-6" />
              <h2 className="text-xl font-bold">Add Money</h2>
            </div>
            <button
              onClick={onClose}
              className="p-1 hover:bg-white/20 rounded-full transition-colors"
              disabled={loading}
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Security Notice */}
          <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
            <div className="text-sm text-blue-800">
              <p className="font-medium">Secure Transaction</p>
              <p>Your transaction is protected with bank-grade security</p>
            </div>
          </div>

          {/* Account Selection */}
          <div className="space-y-3">
            <label className={`block text-sm font-medium ${theme.textColor}`}>
              Select Account
            </label>
            <select
              value={selectedAccount}
              onChange={(e) => setSelectedAccount(e.target.value)}
              className={`w-full p-4 border-2 ${theme.borderColor} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white`}
              disabled={loading}
            >
              <option value="">Choose an account</option>
              {userAccounts.map((account) => (
                <option>
                  {account.accName} - {account.accType} (₹{account.balance?.toLocaleString() || '0'})
                </option>
              ))}
            </select>
          </div>

          {/* Amount Input */}
          <div className="space-y-3">
            <label className={`block text-sm font-medium ${theme.textColor}`}>
              Amount (₹)
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg">
                ₹
              </span>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                className={`w-full pl-10 pr-4 py-4 border-2 ${theme.borderColor} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg`}
                disabled={loading}
                min="10"
                max="100000"
              />
            </div>
            
            {/* Amount limits info */}
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <AlertCircle className="h-4 w-4" />
              <span>Min: ₹10 | Max: ₹1,00,000 per transaction</span>
            </div>
          </div>

          {/* Quick Amount Buttons */}
          <div className="space-y-3">
            <label className={`block text-sm font-medium ${theme.textColor}`}>
              Quick Select
            </label>
            <div className="grid grid-cols-3 gap-3">
              {quickAmounts.map((quickAmount) => (
                <button
                  key={quickAmount}
                  onClick={() => setAmount(quickAmount.toString())}
                  disabled={loading}
                  className={`p-3 border-2 ${theme.borderColor} rounded-lg hover:bg-gradient-to-r hover:${theme.gradient} hover:text-white hover:border-transparent transition-all duration-200 text-sm font-medium`}
                >
                  ₹{quickAmount.toLocaleString()}
                </button>
              ))}
            </div>
          </div>

          {/* Selected Account Info */}
          {selectedAccount && (
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Building2 className="h-4 w-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">Account Details</span>
              </div>
              {userAccounts
                .filter(acc => acc.accName === selectedAccount)
                .map(account => (
                  <div className="text-sm text-gray-600">
                    <p><strong>Name:</strong> {account.accName}</p>
                    <p><strong>Type:</strong> {account.accType}</p>
                    <p><strong>Current Balance:</strong> ₹{account.balance?.toLocaleString() || '0'}</p>
                  </div>
                ))}
            </div>
          )}

          {/* Add Money Button */}
          <button
            onClick={handleAddMoney}
            disabled={loading || !selectedAccount || !amount}
            className={`w-full bg-gradient-to-r ${theme.gradient} text-white py-4 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Processing...</span>
              </>
            ) : (
              <>
                <CreditCard className="h-5 w-5" />
                <span>Add Funds</span>
              </>
            )}
          </button>

          {/* Disclaimer */}
          <div className="text-xs text-gray-500 text-center">
            <p>This is a simulated transaction for demo purposes.</p>
            <p>In real banking, proper authentication would be required.</p>
          </div>
        </div>
      </div>
    </div>
  );
};