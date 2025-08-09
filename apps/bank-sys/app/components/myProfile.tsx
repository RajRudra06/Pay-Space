import React, { useState } from 'react';
import { X, Eye, EyeOff, User, Mail, Phone, Calendar, Lock, ChevronRight, Building2, CreditCard, DollarSign, CheckCircle, AlertCircle } from 'lucide-react';
import { bankThemes } from '../utils/bankThemes';
import { userProfileSchema,userAccountSchema } from '../lib/userDetailSchema';
import {z} from "zod"
import { Bank_name } from '@repo/db_banks/src/generated/prisma/client';

type UserProfileType = z.infer<typeof userProfileSchema>;
type UserAccountType=z.infer<typeof userAccountSchema>

const UserProfile = ({ bankName,onClose, theme, user, bankAccounts }:{bankName:Bank_name,theme: typeof bankThemes[keyof typeof bankThemes],user:UserProfileType,onClose:()=>void,bankAccounts:UserAccountType[]}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [currentStep, setCurrentStep] = useState(1); // 1: Profile, 2: Bank Accounts

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const formatAccountNumber = (accountNumber: UserAccountType["accNumber"]) => {
    const masked = accountNumber
      .split('')
      .map((char, index) => (index < 12 ? '*' : char)) // Mask first 12 chars
      .join('');
    
    return masked.replace(/(.{4})/g, '$1 ').trim(); // Group by 4
  };
  
  const formatCurrency = (amount:UserAccountType["balance"]) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(amount);
  };

  const getStatusIcon = (status:UserAccountType["status"]) => {
    return status === 'active' ? 
      <CheckCircle className="w-5 h-5 text-green-500" /> : 
      <AlertCircle className="w-5 h-5 text-red-500" />;
  };

  const getStatusColor = (status:UserAccountType["status"]) => {
    return status === 'active' ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50';
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className={`bg-gradient-to-r ${theme.gradient} text-white p-6 rounded-t-2xl relative`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-200 hover:bg-white/20 p-2 rounded-full transition-all duration-200"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center space-x-4">
            <User className="h-8 w-8" />
            <div>
              <h2 className="text-2xl font-bold">
                {currentStep === 1 ? 'My Profile' : 'Bank Accounts'}
              </h2>
              <p className="text-white/80">
                {currentStep === 1 ? 'Personal Information' : 'Your Banking Portfolio'}
              </p>
            </div>
          </div>
          <div className="mt-4 bg-white/20 rounded-full h-2">
            <div 
              className="bg-white rounded-full h-2 transition-all duration-300"
              style={{ width: `${(currentStep / 2) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="p-6">
          {/* Step 1: Profile Information */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${theme.gradient} mb-4`}>
                  <User className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  {user?.fullName}
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Personal Details */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <User className="w-5 h-5 mr-2" />
                    Personal Details
                  </h4>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <div className="flex items-center space-x-3">
                        <User className="w-5 h-5 text-gray-500" />
                        <div>
                          <p className="text-sm text-gray-600">Full Name</p>
                          <p className="font-medium">                  {user?.fullName}
</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Calendar className="w-5 h-5 text-gray-500" />
                        <div>
                          <p className="text-sm text-gray-600">Date of Birth</p>
                          <p className="font-medium">{user?.dob ? new Date(user.dob).toLocaleDateString('en-GB') : 'N/A'}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Details */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <Mail className="w-5 h-5 mr-2" />
                    Contact Details
                  </h4>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-gray-500" />
                        <div>
                          <p className="text-sm text-gray-600">Email Address</p>
                          <p className="font-medium">{user?.email}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-gray-500" />
                        <div>
                          <p className="text-sm text-gray-600">Phone Number</p>
                          <p className="font-medium">{user?.phoneNumber}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Security Section */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <Lock className="w-5 h-5 mr-2" />
                  Security
                </h4>
                
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Lock className="w-5 h-5 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-600">Password</p>
                      <p className="font-medium font-mono">
                        {showPassword ? user?.password : '•'.repeat(user?.password?.length || 8)}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={togglePasswordVisibility}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5 text-gray-500" />
                    ) : (
                      <Eye className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                </div>
              </div>

              {/* Navigation Button */}
              <div className="flex justify-end pt-6 border-t">
                <button
                  onClick={() => setCurrentStep(2)}
                  className={`px-8 py-3 rounded-lg transition-all flex items-center space-x-2 bg-gradient-to-r ${theme.gradient} text-white hover:shadow-lg`}
                >
                  <span>View Bank Accounts</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Bank Accounts */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${theme.gradient} mb-4`}>
                  <Building2 className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Your Bank Accounts</h3>
                <p className="text-gray-600">Manage all your banking relationships</p>
              </div>

              {/* Account Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-blue-50 rounded-xl p-6 text-center">
                  <Building2 className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-600">{bankAccounts?.length || 0}</div>
                  <div className="text-blue-600 text-sm">Total Accounts</div>
                </div>
                <div className="bg-green-50 rounded-xl p-6 text-center">
                  <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-600">
                    {bankAccounts?.filter(acc => acc.status === 'active').length || 0}
                  </div>
                  <div className="text-green-600 text-sm">Active Accounts</div>
                </div>
                <div className="bg-purple-50 rounded-xl p-6 text-center">
                  <DollarSign className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-purple-600">
                    {formatCurrency(
  bankAccounts?.reduce(
    // @ts-ignore
    (sum, acc) => sum + (parseFloat(acc.balance) || 0),
    0
  ) || 0
)}
                  </div>
                  <div className="text-purple-600 text-sm">Total Balance</div>
                </div>
              </div>

              {/* Bank Account Cards */}
              <div className="space-y-4">
                {bankAccounts?.length > 0 ? (
                  bankAccounts.map((account) => {
                    // @ts-ignore
                    const accountTheme = bankThemes[bankName];
                    return (
                      <div className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-4">
                            <div className={`p-3 rounded-full bg-gradient-to-r ${accountTheme?.gradient || theme.gradient}`}>
                              <span className="text-2xl">{accountTheme?.logo || '🏦'}</span>
                            </div>
                            <div>
                              <h4 className="text-xl font-bold text-gray-800">{bankName}</h4>
                              <p className="text-gray-600">{account.accType} Account</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            {getStatusIcon(account.status)}
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(account.status)}`}>
                              {account.status}
                            </span>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="bg-gray-50 rounded-lg p-4">
                            <div className="flex items-center space-x-2 mb-2">
                              <CreditCard className="w-4 h-4 text-gray-500" />
                              <span className="text-sm text-gray-600">Account Number</span>
                            </div>
                            <p className="font-mono font-medium text-gray-800">
                              {formatAccountNumber(account.accNumber)}
                            </p>
                          </div>

                          <div className="bg-gray-50 rounded-lg p-4">
                            <div className="flex items-center space-x-2 mb-2">
                              <DollarSign className="w-4 h-4 text-gray-500" />
                              <span className="text-sm text-gray-600">Current Balance</span>
                            </div>
                            <p className="font-bold text-lg text-gray-800">
                              {formatCurrency(account.balance || 0)}
                            </p>
                          </div>

                          <div className="bg-gray-50 rounded-lg p-4">
                            <div className="flex items-center space-x-2 mb-2">
                              <Calendar className="w-4 h-4 text-gray-500" />
                              <span className="text-sm text-gray-600">Account Created</span>
                            </div>
                            <p className="font-medium text-gray-800">
                              {account.createdAt ? new Date(account.createdAt).toLocaleDateString('en-GB') : 'N/A'}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="text-center py-12 bg-gray-50 rounded-xl">
                    <Building2 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">No Bank Accounts Found</h3>
                    <p className="text-gray-500">You haven't opened any bank accounts yet.</p>
                  </div>
                )}
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6 border-t">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Back to Profile
                </button>
                <button
                  onClick={onClose}
                  className={`px-8 py-3 rounded-lg transition-all bg-gradient-to-r ${theme.gradient} text-white hover:shadow-lg`}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;