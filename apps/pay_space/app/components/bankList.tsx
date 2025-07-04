import React, { useState, useEffect } from 'react';
import { ChevronDown, User, CreditCard, Building2, Wallet } from 'lucide-react';

interface Account {
  id: string;
  name: string;
  type: 'checking' | 'savings' | 'credit' | 'business';
  balance: number;
}

interface AccountsDropdownProps {
  accounts: Account[];
  selectedAccount?: Account;
  onSelectAccount: (account: Account) => void;
  placeholder?: string;
}

export default function AccountsDropdown({ 
  accounts, 
  selectedAccount, 
  onSelectAccount, 
}: AccountsDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const getAccountIcon = (type: Account['type']) => {
    switch (type) {
      case 'checking':
        return <CreditCard className="w-4 h-4 text-blue-500" />;
      case 'savings':
        return <Wallet className="w-4 h-4 text-green-500" />;
      case 'credit':
        return <CreditCard className="w-4 h-4 text-red-500" />;
      case 'business':
        return <Building2 className="w-4 h-4 text-purple-500" />;
      default:
        return <User className="w-4 h-4 text-gray-500" />;
    }
  };

  const formatBalance = (balance: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'INR'
    }).format(balance);
  };

  const handleSelect = (account: Account) => {
    onSelectAccount(account);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2 flex items-center justify-between hover:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 shadow-sm"
      >
        <div className="flex items-center gap-2">
          {selectedAccount ? (
            <>
              {getAccountIcon(selectedAccount.type)}
              <div className="text-left">
                <div className="font-medium text-gray-900">{selectedAccount.name}</div>
                <div className="text-sm text-gray-500">{formatBalance(selectedAccount.balance)}</div>
              </div>
            </>
          ) : (
            <div className="text-gray-500">Select an account</div>
          )}
        </div>
        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto">
          {accounts.length === 0 ? (
            <div className="px-4 py-3 text-gray-500 text-center">
              No accounts found
            </div>
          ) : (
            accounts.map((account) => (
              <button
                key={account.id}
                onClick={() => handleSelect(account)}
                className="w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none transition-colors duration-150 border-b border-gray-100 last:border-b-0"
              >
                {getAccountIcon(account.type)}
                <div className="flex-1 text-left">
                  <div className="font-medium text-gray-900">{account.name}</div>
                  <div className="text-sm text-gray-500">
                    {formatBalance(account.balance)}
                  </div>
                </div>
                {selectedAccount?.id === account.id && (
                  <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"></div>
                )}
              </button>
            ))
          )}
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}

// Demo Component
function Demo() {
  const sampleAccounts: Account[] = [
    { id: '1', name: 'Main Checking', type: 'checking', balance: 2500.50 },
    { id: '2', name: 'Emergency Savings', type: 'savings', balance: 15000.00 },
    { id: '3', name: 'Business Account', type: 'business', balance: 8750.25 },
    { id: '4', name: 'Credit Card', type: 'credit', balance: -1200.00 },
    { id: '5', name: 'Vacation Fund', type: 'savings', balance: 3200.75 },
  ];

  const [selectedAccount, setSelectedAccount] = useState<Account | undefined>(sampleAccounts[0]);

  return (
    <div className="p-8 max-w-md mx-auto">
      <AccountsDropdown
        accounts={sampleAccounts}
        selectedAccount={selectedAccount}
        onSelectAccount={setSelectedAccount}
      />
    </div>
  );
}

export { Demo };