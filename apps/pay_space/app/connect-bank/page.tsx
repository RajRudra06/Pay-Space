"use client"

import ProtectedRouting from "../components/protectedRouting"
import React, { useState } from 'react';
import { CheckCircle, Shield, ArrowRight, Building2, CreditCard } from 'lucide-react';

export default function ConnectBank(){
    const [selectedBank, setSelectedBank] = useState('');
    const [isConnecting, setIsConnecting] = useState(false);

    const banks = [
        {
        id: 'icici',
        name: 'ICICI Bank',
        logo: '🏦',
        color: 'from-orange-500 to-red-500',
        bgColor: 'bg-gradient-to-br from-orange-50 to-red-50',
        borderColor: 'border-orange-200 hover:border-orange-400',
        textColor: 'text-orange-700'
        },
        {
        id: 'sbi',
        name: 'State Bank of India',
        logo: '🏛️',
        color: 'from-blue-600 to-blue-800',
        bgColor: 'bg-gradient-to-br from-blue-50 to-indigo-50',
        borderColor: 'border-blue-200 hover:border-blue-400',
        textColor: 'text-blue-700'
        },
        {
        id: 'hdfc',
        name: 'HDFC Bank',
        logo: '🏢',
        color: 'from-red-600 to-red-800',
        bgColor: 'bg-gradient-to-br from-red-50 to-pink-50',
        borderColor: 'border-red-200 hover:border-red-400',
        textColor: 'text-red-700'
        },
        {
        id: 'ubi',
        name: 'Union Bank of India',
        logo: '🏪',
        color: 'from-green-600 to-green-800',
        bgColor: 'bg-gradient-to-br from-green-50 to-emerald-50',
        borderColor: 'border-green-200 hover:border-green-400',
        textColor: 'text-green-700'
        }
    ];

//   const handleBankSelect = (bankId) => {
//     setSelectedBank(bankId);
//   };

//   const handleConnect = async () => {
//     if (!selectedBank) return;
    
//     setIsConnecting(true);
    
//     // Simulate OAuth flow initiation
//     setTimeout(() => {
//       const selectedBankData = banks.find(bank => bank.id === selectedBank);
      
//       // In real implementation, this would initiate OAuth flow
//       const authUrl = `https://${selectedBank}-bank.com/oauth/authorize?` +
//         `response_type=code&` +
//         `client_id=phonepe_app_123&` +
//         `redirect_uri=https://phonepe.com/callback&` +
//         `scope=read_balance,read_transactions&` +
//         `state=random_security_string&` +
//         `phone=${getCurrentUserPhone()}`;
      
//       console.log('Would redirect to:', authUrl);
//       alert(`Connecting to ${selectedBankData.name}...`);
//       setIsConnecting(false);
//     }, 2000);
//   };

//   const getCurrentUserPhone = () => {
//     // In real app, get from user context/state
//     return '+919876543210';
//   };

  return (
 <ProtectedRouting fallback={null}>
     <div className="flex gap-4 text-5xl px-5 py-3 font-bold">
        <div className="bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 bg-clip-text text-transparent font-bold">Connect your bank account</div>
    </div>

    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-5">
          {/* <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mb-6 shadow-lg">
            <Building2 className="w-8 h-8 text-white" />
          </div> */}
          {/* <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Connect Your Bank Account
          </h1> */}
          <p className="text-lg text-gray-500 text-sm max-w-md mx-auto mt-7 font-semibold">
            Securely link your bank account to access your balance and transaction history
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 backdrop-blur-sm border border-white/20">
          {/* Security Badge */}
          <div className="flex items-center justify-center mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-green-50 border border-green-200 rounded-full">
              <Shield className="w-4 h-4 text-green-600 mr-2" />
              <span className="text-sm font-medium text-green-800">Bank-level Security</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {banks.map((bank) => (
              <div
                key={bank.id}
                // onClick={() => handleBankSelect(bank.id)}
                className={`
                  relative p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105
                  ${selectedBank === bank.id 
                    ? `${bank.bgColor} ${bank.borderColor.replace('hover:', '')} ring-2 ring-offset-2 ring-indigo-500` 
                    : `${bank.bgColor} ${bank.borderColor}`
                  }
                `}
              >
                {/* Selection Indicator */}
                {selectedBank === bank.id && (
                  <div className="absolute top-3 right-3">
                    <CheckCircle className="w-6 h-6 text-indigo-600" />
                  </div>
                )}
                
                {/* Bank Logo */}
                <div className="text-4xl mb-3">{bank.logo}</div>
                
                {/* Bank Name */}
                <h3 className={`text-lg font-semibold ${bank.textColor}`}>
                  {bank.name}
                </h3>
                
                {/* Bank Features */}
                <div className="mt-3 space-y-1">
                  <div className="flex items-center text-sm text-gray-600">
                    <CreditCard className="w-4 h-4 mr-2" />
                    <span>Instant verification</span>
                  </div>
                </div>
                
                {/* Hover Effect */}
                <div className={`
                  absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300
                  bg-gradient-to-r ${bank.color} hover:opacity-5
                `}></div>
              </div>
            ))}
          </div>

          {/* Connect Button */}
          <button
            // onClick={handleConnect}
            disabled={!selectedBank || isConnecting}
            className={`
              w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center
              ${selectedBank && !isConnecting
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1'
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
              }
            `}
          >
            {isConnecting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                Connecting...
              </>
            ) : (
              <>
                Connect {selectedBank ? banks.find(b => b.id === selectedBank)?.name : 'Bank'}
                <ArrowRight className="w-5 h-5 ml-2" />
              </>
            )}
          </button>

          {/* Security Info */}
          <div className="mt-6 p-4 bg-gray-50 rounded-xl">
            <div className="flex items-start">
              <Shield className="w-5 h-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-gray-900 mb-1">Your data is secure</h4>
                <p className="text-sm text-gray-600">
                  We use bank-level encryption and never store your login credentials. 
                  You can revoke access anytime from your bank's settings.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-gray-500">
          <p>Powered by OAuth 2.0 • Your credentials are never shared with us</p>
        </div>
      </div>
    </div>
    
</ProtectedRouting>

  );
};


    // return(
    //     <>
    //         <ProtectedRouting fallback={null}>
    //             <>
    //             {/* intro seg */}
    //             <div className="flex gap-4 text-5xl px-5 py-3 font-bold">
    //                 <div className="bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 bg-clip-text text-transparent font-bold">Connect your bank account</div>
    //             </div>

    //             {/*  */}
    //             </>
    //         </ProtectedRouting>

    //     </>
        
    // )
// }