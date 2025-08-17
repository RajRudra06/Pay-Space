import { useState } from "react";
import { ChevronRight, ArrowLeftRight, User, CreditCard, CheckCircle, X, AlertCircle, Calendar, Clock } from "lucide-react";
import { toast } from "react-hot-toast";
import { userAccountSchema } from "../lib/userDetailSchema";
import { Bank_name } from "@repo/db_banks/src/generated/prisma/client";
import { bankThemes } from "../utils/bankThemes";
import {z} from "zod"
import axios from "axios"
import { send } from "process";


const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

type UserAccountType=z.infer<typeof userAccountSchema>

const transferMethods = {
  NEFT: { name: "NEFT", minAmount: 1, maxAmount: 1000000, fees: 5, description: "National Electronic Funds Transfer" },
  RTGS: { name: "RTGS", minAmount: 200000, maxAmount: 1000000, fees: 25, description: "Real Time Gross Settlement" },
  IMPS: { name: "IMPS", minAmount: 1, maxAmount: 500000, fees: 10, description: "Immediate Payment Service" }
};

const purposeOptions = [
  "Utilities",
  "Insurance",
  "Dine",
  "Shopping",
  "Entertainment",
  "Travel",
  "Loan_EMI",
  "Savings_Transfers",
  "Investments",
  "Education",
  "Health",
  "Income",
  "Taxes"
];

const bankList = [
  "HDFC", "ICICI", "SBI", "UBI", 
  "Axis Bank", "Bank of Baroda", "Punjab National Bank", "Canara Bank"
];

export const TransferFundsForm = ({ bankName,onClose,theme,bankAccounts }:{bankName:Bank_name,theme: typeof bankThemes[keyof typeof bankThemes],onClose:()=>void,bankAccounts:UserAccountType[]}) => {
  const [formData, setFormData] = useState({
    fromAccount: '',
    amount: '',
    transferType: 'NEFT',
    purpose: '',
    scheduleType: 'now',
    scheduleDate: '',
    beneficiaryName: '',
    beneficiaryBank: '',
    accountNumber: '',
    confirmAccountNumber: '',
    ifscCode: '',
    beneficiaryEmail: '',
    saveAsBeneficiary: false
  });

  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [showValidationWarning, setShowValidationWarning] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [disableButton,setDisableButton]=useState(false)
  const [showOTPPrompt, setShowOTPPrompt] = useState(false);
  const [otp, setOtp] = useState('');
  const [transactionId, setTransactionId] = useState('');

  //   @ts-ignore
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    
    if (showValidationWarning) {
      setShowValidationWarning(false);
    }
  };

  const selectedAccount = bankAccounts.find(acc => acc.accName === formData.fromAccount);
//   @ts-ignore
  const transferMethodDetails = transferMethods[formData.transferType];

  // Validation functions
  const validateStep1 = () => {
    if (!formData.fromAccount || !formData.amount || !formData.transferType || !formData.purpose) {
      return false;
    }
    
    const amount = parseFloat(formData.amount);
    if (amount <= 0) return false;
    
    if (selectedAccount && amount > selectedAccount.balance) return false;
    
    if (transferMethodDetails) {
      if (amount < transferMethodDetails.minAmount || amount > transferMethodDetails.maxAmount) {
        return false;
      }
    }
    
    if (formData.scheduleType === 'later' && !formData.scheduleDate) return false;
    
    return true;
  };

  const validateStep2 = () => {
    // Updated validation to include beneficiaryEmail as required field
    const requiredFields = ['beneficiaryName', 'beneficiaryBank', 'accountNumber', 'confirmAccountNumber', 'ifscCode', 'beneficiaryEmail'];
    const allFieldsFilled = requiredFields.every(field =>
        //   @ts-ignore
 formData[field].trim() !== '');
    
    if (!allFieldsFilled) return false;
    
    // Check if account numbers match
    if (formData.accountNumber !== formData.confirmAccountNumber) return false;
    
    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.beneficiaryEmail)) return false;
 
    const ifscPattern = /^[A-Z]{4}0[A-Z0-9]{6}$/;
    if (!ifscPattern.test(formData.ifscCode)) return false;
    
    return true;
  };

  const isCurrentStepValid = () => {
    switch (currentStep) {
      case 1: return validateStep1();
      case 2: return validateStep2();
      case 3: return true; 
      default: return false;
    }
  };

  const nextStep = () => {
    if (!isCurrentStepValid()) {
      setShowValidationWarning(true);
      return;
    }
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
      setShowValidationWarning(false);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setShowValidationWarning(false);
    }
  };

  const handleTransfer = async () => {

    setDisableButton(true)

    const sendOTP = toast.loading("Sending OTP...");
    try{

        const sendOTPReq=await axios.post(`${NEXT_PUBLIC_API_URL}/${bankName}/transfer/sendOTP`,{
          usageType:"transfer"
        })

        if(sendOTPReq.data.done===true){
            toast.success("OTP sent succesfully",{id:sendOTP})
            setShowOTPPrompt(true);
        }
        else{
            toast.error("Error sending OTP, try again later",{id:sendOTP})

        }
    }catch(err){
        toast.error("Error transferring funds, try again later",{id:sendOTP})
    }finally{
        setDisableButton(false)

    }


  };

  const handleOTPSubmit = async () => {
    if (otp.length !== 6) {
      toast.error("Please enter a valid 6-digit OTP");
      return;
    }

    setIsLoading(true);


    const transferToast = toast.loading("Processing transfer...");

    try {

      const transferCall=await axios.post(`${NEXT_PUBLIC_API_URL}/${bankName}/transfer/confirm`,{
        beneficiaryName:formData.beneficiaryName,beneficiaryAccNumber:formData.accountNumber,beneficiaryBank:formData.beneficiaryBank,beneficiaryIFSC:formData.ifscCode,amountToTransferRaw:formData.amount,transferMethod:formData.transferType,purpose:formData.purpose,senderAccountName:selectedAccount?.accName,beneficiaryEmail:formData.beneficiaryEmail,OTP:otp
      })

      if(transferCall.data.done===true){
        toast.success("Transaction Completed Successfully, funds will be transferred shortly.",{id:transferToast})
        const txnId = `TXN${Date.now()}${Math.random().toString(36).substr(2, 6).toUpperCase()}`;

        setTransactionId(txnId);
        setShowOTPPrompt(false);
        setShowSuccess(true);
      }

      else{
        toast.error(`Error completing transaction,${transferCall.data.msg}`,{id:transferToast})

      }
    
    } catch (error) {
      toast.error("Transfer failed. Please try again.", { id: transferToast });
    } finally {
      setIsLoading(false);
    }
  };

  if (showSuccess) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl">
          <div className={`bg-gradient-to-r ${theme.gradient} text-white p-6 rounded-t-2xl text-center`}>
            <CheckCircle className="h-16 w-16 mx-auto mb-4" />
            <h2 className="text-2xl font-bold">Transfer Successful!</h2>
          </div>
          
          <div className="p-6 space-y-4">
            <div className="text-center">
              <p className="text-gray-600 mb-4">Your transfer has been processed successfully</p>
              
              <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-left">
                <div className="flex justify-between">
                  <span className="text-gray-600">Transaction ID:</span>
                  <span className="font-mono font-semibold">{transactionId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Amount:</span>
                  <span className="font-semibold">₹{parseFloat(formData.amount).toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">To:</span>
                  <span className="font-semibold">{formData.beneficiaryName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Method:</span>
                  <span className="font-semibold">{formData.transferType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status:</span>
                  <span className="text-green-600 font-semibold">Success</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Time:</span>
                  <span className="font-semibold">{new Date().toLocaleString()}</span>
                </div>
              </div>
            </div>
            
            <button
              onClick={onClose}
              className={`w-full py-3 rounded-lg transition-all bg-gradient-to-r ${theme.gradient} text-white hover:shadow-lg`}
            >
              Done
            </button>
          </div>
        </div>
      </div>
    );
  }

  // OTP Prompt
  if (showOTPPrompt) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl">
          <div className={`bg-gradient-to-r ${theme.gradient} text-white p-6 rounded-t-2xl text-center`}>
            <AlertCircle className="h-12 w-12 mx-auto mb-4" />
            <h2 className="text-xl font-bold">Confirm Transfer</h2>
            <p className="text-white/80">Enter OTP to complete the transfer</p>
          </div>
          
          <div className="p-6 space-y-4">
            <div className="text-center">
              <p className="text-gray-600 mb-4">OTP has been sent to your registered email ID</p>
              
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                placeholder="Enter 6-digit OTP"
                className="w-full p-3 border border-gray-300 rounded-lg text-center text-lg font-mono tracking-widest focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                maxLength={6}
              />
            </div>
            
            <div className="flex space-x-3">
              <button
                onClick={() => setShowOTPPrompt(false)}
                className="flex-1 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                disabled={isLoading}
              >
                Cancel
              </button>
              <button
                onClick={handleOTPSubmit}
                disabled={otp.length !== 6 || isLoading}
                className={`flex-1 py-3 rounded-lg transition-all text-white ${
                  otp.length === 6 && !isLoading 
                    ? `bg-gradient-to-r ${theme.gradient} hover:shadow-lg` 
                    : 'bg-gray-400 cursor-not-allowed'
                }`}
              >
                {isLoading ? 'Processing...' : 'Confirm'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Loading Screen
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
        <div className="bg-white rounded-2xl p-12 max-w-md mx-4 text-center shadow-2xl">
          <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${theme.gradient} mb-6`}>
            <ArrowLeftRight className="h-8 w-8 text-white animate-pulse" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Processing Transfer</h3>
          <p className="text-gray-600 mb-6">Please wait while we process your transfer...</p>
          <div className="flex justify-center">
            <div className={`animate-spin rounded-full h-8 w-8 border-b-2 border-gradient-to-r ${theme.gradient}`}></div>
          </div>
        </div>
      </div>
    );
  }

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
            <ArrowLeftRight className="h-8 w-8" />
            <div>
              <h2 className="text-2xl font-bold">Transfer Funds</h2>
              <p className="text-white/80">Step {currentStep} of 3</p>
            </div>
          </div>
          <div className="mt-4 bg-white/20 rounded-full h-2">
            <div 
              className="bg-white rounded-full h-2 transition-all duration-300"
              style={{ width: `${(currentStep / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="p-6">
          {/* Step 1: Transfer Details */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                <CreditCard className="mr-2" /> Transfer Details
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">From Account *</label>
                  <select
                    name="fromAccount"
                    value={formData.fromAccount}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select Account</option>
                    {bankAccounts.map(account => (
                      <option key={account.accName} value={account.accName}>
                        {account.accNumber} - {account.accType} (₹{account.balance.toLocaleString()})
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Amount *</label>
                  <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleInputChange}
                    placeholder="Enter amount"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                  {selectedAccount && formData.amount && (
                    <p className="text-sm mt-1">
                      Available Balance: ₹{selectedAccount.balance.toLocaleString()}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Transfer Method *</label>
                <div className="grid md:grid-cols-3 gap-4">
                  {Object.entries(transferMethods).map(([key, method]) => (
                    <div 
                      key={key}
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        formData.transferType === key 
                          ? `${theme.borderColor} bg-gradient-to-r ${theme.bgGradient}` 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setFormData({...formData, transferType: key})}
                    >
                      <div className="text-center">
                        <h4 className="font-semibold">{method.name}</h4>
                        <p className="text-xs text-gray-600 mt-1">{method.description}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          ₹{method.minAmount.toLocaleString()} - ₹{method.maxAmount.toLocaleString()}
                        </p>
                        <p className="text-xs text-gray-500">Fee: ₹{method.fees}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {formData.amount && transferMethodDetails && (
                  <div className="mt-2">
                    {parseFloat(formData.amount) < transferMethodDetails.minAmount && (
                      <p className="text-red-600 text-sm">
                        Minimum amount for {formData.transferType}: ₹{transferMethodDetails.minAmount.toLocaleString()}
                      </p>
                    )}
                    {parseFloat(formData.amount) > transferMethodDetails.maxAmount && (
                      <p className="text-red-600 text-sm">
                        Maximum amount for {formData.transferType}: ₹{transferMethodDetails.maxAmount.toLocaleString()}
                      </p>
                    )}
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Purpose *</label>
                <select
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Select Purpose</option>
                  {purposeOptions.map(purpose => (
                    <option key={purpose} value={purpose}>{purpose}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Schedule Transfer</label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="scheduleType"
                      value="now"
                      checked={formData.scheduleType === 'now'}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    <Clock className="w-4 h-4 mr-1" />
                    Transfer Now
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="scheduleType"
                      value="later"
                      checked={formData.scheduleType === 'later'}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    <Calendar className="w-4 h-4 mr-1" />
                    Schedule for Later
                  </label>
                </div>
                
                {formData.scheduleType === 'later' && (
                  <div className="mt-3">
                    <input
                      type="date"
                      name="scheduleDate"
                      value={formData.scheduleDate}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                )}
              </div>

              {showValidationWarning && !validateStep1() && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-800 text-sm">
                    ⚠️ Please fill all required fields and ensure amount limits are met
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Step 2: Beneficiary Details */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                <User className="mr-2" /> Beneficiary Details
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Beneficiary Name *</label>
                  <input
                    type="text"
                    name="beneficiaryName"
                    value={formData.beneficiaryName}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Beneficiary Bank *</label>
                  <select
                    name="beneficiaryBank"
                    value={formData.beneficiaryBank}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select Bank</option>
                    {bankList.map(bank => (
                      <option key={bank} value={bank}>{bank}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Account Number *</label>
                  <input
                    type="text"
                    name="accountNumber"
                    value={formData.accountNumber}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Re-enter Account Number *</label>
                  <input
                    type="text"
                    name="confirmAccountNumber"
                    value={formData.confirmAccountNumber}
                    onChange={handleInputChange}
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      formData.accountNumber && formData.confirmAccountNumber && 
                      formData.accountNumber !== formData.confirmAccountNumber 
                        ? 'border-red-300' : 'border-gray-300'
                    }`}
                    required
                  />
                  {formData.accountNumber && formData.confirmAccountNumber && 
                   formData.accountNumber !== formData.confirmAccountNumber && (
                    <p className="text-red-600 text-sm mt-1">Account numbers do not match</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">IFSC Code *</label>
                  <input
                    type="text"
                    name="ifscCode"
                    value={formData.ifscCode}
                    onChange={handleInputChange}
                    placeholder="e.g. HDFC0000001"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                {/* Added Beneficiary Email Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Beneficiary Email *</label>
                  <input
                    type="email"
                    name="beneficiaryEmail"
                    value={formData.beneficiaryEmail}
                    onChange={handleInputChange}
                    placeholder="beneficiary@example.com"
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      formData.beneficiaryEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.beneficiaryEmail)
                        ? 'border-red-300' : 'border-gray-300'
                    }`}
                    required
                  />
                  {formData.beneficiaryEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.beneficiaryEmail) && (
                    <p className="text-red-600 text-sm mt-1">Please enter a valid email address</p>
                  )}
                </div>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="saveAsBeneficiary"
                  checked={formData.saveAsBeneficiary}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                <label className="text-sm text-gray-700">Save as Beneficiary for future transfers</label>
              </div>

              {showValidationWarning && !validateStep2() && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-800 text-sm">
                    ⚠️ Please fill all required fields correctly, ensure account numbers match, and provide a valid email address
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Step 3: Review & Confirm */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                <CheckCircle className="mr-2" /> Review & Confirm Transfer
              </h3>
              
              <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Transfer Details</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">From Account:</span>
                        <span className="font-medium">{selectedAccount?.accNumber}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Amount:</span>
                        <span className="font-medium">₹{parseFloat(formData.amount).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Transfer Method:</span>
                        <span className="font-medium">{formData.transferType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Transfer Fee:</span>
                        <span className="font-medium">₹{transferMethodDetails?.fees}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Purpose:</span>
                        <span className="font-medium">{formData.purpose}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Schedule:</span>
                        <span className="font-medium">
                          {formData.scheduleType === 'now' ? 'Transfer Now' : formData.scheduleDate}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Beneficiary Details</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Name:</span>
                        <span className="font-medium">{formData.beneficiaryName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Bank:</span>
                        <span className="font-medium">{formData.beneficiaryBank}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Account:</span>
                        <span className="font-medium">{formData.accountNumber}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">IFSC:</span>
                        <span className="font-medium">{formData.ifscCode}</span>
                      </div>
                      {/* Added Beneficiary Email to Review Section */}
                      <div className="flex justify-between">
                        <span className="text-gray-600">Email:</span>
                        <span className="font-medium">{formData.beneficiaryEmail}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total Amount:</span>
                    <span>₹{(parseFloat(formData.amount) + (transferMethodDetails?.fees || 0)).toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-6 border-t">
            <div>
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Previous
                </button>
              )}
            </div>
            <div>
              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!isCurrentStepValid()}
                  className={`px-6 py-3 rounded-lg transition-all flex items-center space-x-2 text-white ${
                    isCurrentStepValid() 
                      ? `bg-gradient-to-r ${theme.gradient} hover:shadow-lg` 
                      : 'bg-gray-400 cursor-not-allowed'
                  }`}
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  disabled={disableButton}
                  onClick={handleTransfer}
                  className={`px-8 py-3 rounded-lg transition-all flex items-center space-x-2 ${disableButton ? 'bg-gray-400 cursor-not-allowed' : `bg-gradient-to-r ${theme.gradient}`} text-white hover:shadow-lg`}
                >
                  <span>Confirm Transfer</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};