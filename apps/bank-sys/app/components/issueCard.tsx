import { useState } from "react";
import { ChevronRight, CreditCard, User, MapPin, FileText, Shield, Upload, X, CheckCircle, Camera, Mail, Phone, Building2, AlertCircle } from "lucide-react";
import { Bank_name } from "@repo/db_banks/src/generated/prisma";
import { bankThemes } from "../utils/bankThemes";
import { userAccountSchema } from "../lib/userDetailSchema";
import {z} from "zod"

// // Mock bank themes since we don't have the actual import
// const bankThemes = {
//   'ICICI': {
//     gradient: 'from-orange-500 to-red-500',
//     bgGradient: 'from-orange-50 to-red-50',
//     borderColor: 'border-orange-200',
//     textColor: 'text-orange-700',
//     logo: '🏦'
//   },
//   'SBI': {
//     gradient: 'from-blue-600 to-blue-800',
//     bgGradient: 'from-blue-50 to-indigo-50',
//     borderColor: 'border-blue-200',
//     textColor: 'text-blue-700',
//     logo: '🏛️'
//   },
//   'HDFC': {
//     gradient: 'from-red-600 to-red-800',
//     bgGradient: 'from-red-50 to-pink-50',
//     borderColor: 'border-red-200',
//     textColor: 'text-red-700',
//     logo: '🏢'
//   },
//   'UBI': {
//     gradient: 'from-green-600 to-green-800',
//     bgGradient: 'from-green-50 to-emerald-50',
//     borderColor: 'border-green-200',
//     textColor: 'text-green-700',
//     logo: '🏪'
//   }
// };

type UserAccountType=z.infer<typeof userAccountSchema>

const mockAccounts = [
  { accName: "Primary Savings", accNumber: "1234567890", accType: "Savings", balance: 50000 },
  { accName: "Salary Account", accNumber: "0987654321", accType: "Current", balance: 75000 }
];

const CardTypeSelection = ({ onSelect, theme, bankName }:{bankName:Bank_name,theme:typeof bankThemes[keyof typeof bankThemes],onSelect:any}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl">
        <div className={`bg-gradient-to-r ${theme.gradient} text-white p-6 rounded-t-2xl text-center`}>
          <CreditCard className="h-12 w-12 mx-auto mb-4" />
          <h2 className="text-2xl font-bold">Apply for Card</h2>
          <p className="text-white/80">Choose the type of card you want to apply for</p>
        </div>
        
        <div className="p-6 space-y-4">
          <button
            onClick={() => onSelect('debit')}
            className={`w-full p-6 border-2 rounded-lg hover:shadow-lg transition-all ${theme.borderColor} bg-gradient-to-r ${theme.bgGradient}`}
          >
            <div className="text-center">
              <CreditCard className={`h-12 w-12 mx-auto mb-3 ${theme.textColor}`} />
              <h3 className="text-lg font-bold text-gray-800">Debit Card</h3>
              <p className="text-sm text-gray-600 mt-2">Linked to your bank account for instant transactions</p>
              <ul className="text-xs text-gray-500 mt-3 text-left">
                <li>• ATM withdrawals</li>
                <li>• Online & offline payments</li>
                <li>• No credit limit</li>
                <li>• Instant activation</li>
              </ul>
            </div>
          </button>
          
          <button
            disabled
            className="w-full p-6 border-2 border-gray-200 rounded-lg opacity-50 cursor-not-allowed"
          >
            <div className="text-center">
              <CreditCard className="h-12 w-12 mx-auto mb-3 text-gray-400" />
              <h3 className="text-lg font-bold text-gray-400">Credit Card</h3>
              <p className="text-sm text-gray-400 mt-2">Coming Soon - Credit facility with flexible repayment</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export const DebitCardApplicationForm = ({ bankName, onClose, theme, bankAccounts }:{bankName:Bank_name,theme:typeof bankThemes[keyof typeof bankThemes],
onClose:()=>void,bankAccounts:UserAccountType[]}) => {
  const [formData, setFormData] = useState({
    // Personal Identity
    fullName: '',
    dateOfBirth: '',
    gender: '',
    nationalIdType: 'aadhaar',
    nationalId: '',
    
    // Contact
    primaryPhone: '',
    email: '',
    
    // Address
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    postalCode: '',
    country: 'India',
    mailingAddressSame: true,
    mailingAddressLine1: '',
    mailingAddressLine2: '',
    mailingCity: '',
    mailingState: '',
    mailingPostalCode: '',
    
    // Account Selection
    linkedAccount: '',
    
    // Card Preferences
    cardType: 'physical',
    cardNetwork: 'visa',
    contactless: true,
    atmLimit: '25000',
    posLimit: '100000',
    cardDesign: 'classic',
    
    // Security
    setPinLater: true,
    smsAlerts: true,
    emailAlerts: true,
    
    // Legal & Consents
    acceptTerms: false,
    acknowledgeFees: false,
    consentBackgroundCheck: false,
    
    // Optional
    nomineeFullName: '',
    nomineePhone: '',
    nomineeRelation: '',
    emergencyContact: '',
    preferredDeliveryTime: 'business-hours'
  });

  const [uploadedFiles, setUploadedFiles] = useState({
    identityProof: null,
    addressProof: null,
    selfie: null
  });

  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [showValidationWarning, setShowValidationWarning] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [otpStep, setOtpStep] = useState<'phone'|'email'|null>(null); 
  const [otp, setOtp] = useState('');

  const handleInputChange = (e:any) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    
    if (showValidationWarning) {
      setShowValidationWarning(false);
    }
  };

  const handleFileUpload = (type:any, file:any) => {
    if (file && file.size <= 5 * 1024 * 1024) { 
      setUploadedFiles({
        ...uploadedFiles,
        [type]: file
      });
    }
  };

  const validateStep1 = () => {
    const requiredFields = ['fullName', 'dateOfBirth', 'nationalId', 'primaryPhone', 'email']
    
    // @ts-ignore
    return requiredFields.every(field => formData[field].trim() !== '');
  };

  const validateStep2 = () => {
    const requiredFields = ['addressLine1', 'city', 'state', 'postalCode'];
        // @ts-ignore

    const addressValid = requiredFields.every(field => formData[field].trim() !== '');
    
    if (!formData.mailingAddressSame) {
      const mailingFields = ['mailingAddressLine1', 'mailingCity', 'mailingState', 'mailingPostalCode'];
          // @ts-ignore

      return addressValid && mailingFields.every(field => formData[field].trim() !== '');
    }
    
    return addressValid;
  };

  const validateStep3 = () => {
    return formData.linkedAccount !== '';
  };

  const validateStep4 = () => {
    return uploadedFiles.identityProof && uploadedFiles.addressProof && uploadedFiles.selfie;
  };

  const validateStep5 = () => {
    return formData.acceptTerms && formData.acknowledgeFees && formData.consentBackgroundCheck;
  };

  const isCurrentStepValid = () => {
    switch (currentStep) {
      case 1: return validateStep1();
      case 2: return validateStep2();
      case 3: return validateStep3();
      case 4: return validateStep4();
      case 5: return validateStep5();
      default: return false;
    }
  };

  const nextStep = () => {
    if (!isCurrentStepValid()) {
      setShowValidationWarning(true);
      return;
    }
    
    // Handle OTP verification for phone and email
    if (currentStep === 1 && !otpStep) {
      setOtpStep('phone');
      return;
    }
    
    if (currentStep < 5) {
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

  const handleOTPVerification = () => {
    if (otp.length === 6) {
      if (otpStep === 'phone') {
        setOtpStep('email');
        setOtp('');
      } else if (otpStep === 'email') {
        setOtpStep(null);
        setCurrentStep(2);
        setOtp('');
      }
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setIsLoading(false);
    setShowSuccess(true);
  };

  // OTP Verification Modal
  if (otpStep) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl">
          <div className={`bg-gradient-to-r ${theme.gradient} text-white p-6 rounded-t-2xl text-center`}>
            {otpStep === 'phone' ? <Phone className="h-12 w-12 mx-auto mb-4" /> : <Mail className="h-12 w-12 mx-auto mb-4" />}
            <h2 className="text-xl font-bold">Verify {otpStep === 'phone' ? 'Phone Number' : 'Email Address'}</h2>
            <p className="text-white/80">
              OTP sent to {otpStep === 'phone' ? formData.primaryPhone : formData.email}
            </p>
          </div>
          
          <div className="p-6 space-y-4">
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
              placeholder="Enter 6-digit OTP"
              className="w-full p-3 border border-gray-300 rounded-lg text-center text-lg font-mono tracking-widest focus:ring-2 focus:ring-blue-500"
              maxLength={6}
            />
            
            <div className="flex space-x-3">
              <button
                onClick={() => setOtpStep(null)}
                className="flex-1 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleOTPVerification}
                disabled={otp.length !== 6}
                className={`flex-1 py-3 rounded-lg text-white ${
                  otp.length === 6 
                    ? `bg-gradient-to-r ${theme.gradient} hover:shadow-lg` 
                    : 'bg-gray-400 cursor-not-allowed'
                }`}
              >
                Verify
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Success Screen
  if (showSuccess) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl">
          <div className={`bg-gradient-to-r ${theme.gradient} text-white p-6 rounded-t-2xl text-center`}>
            <CheckCircle className="h-16 w-16 mx-auto mb-4" />
            <h2 className="text-2xl font-bold">Application Submitted!</h2>
          </div>
          
          <div className="p-6 space-y-4">
            <div className="text-center">
              <p className="text-gray-600 mb-4">Your debit card application has been submitted successfully</p>
              
              <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-left">
                <div className="flex justify-between">
                  <span className="text-gray-600">Application ID:</span>
                  <span className="font-mono font-semibold">DC{Date.now()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Card Type:</span>
                  <span className="font-semibold">Debit Card</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Linked Account:</span>
                  <span className="font-semibold">{bankAccounts.find(acc => acc.accName === formData.linkedAccount)?.accNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status:</span>
                  <span className="text-blue-600 font-semibold">Application Received</span>
                </div>
              </div>

              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Next Steps:</strong><br/>
                  • KYC verification (1-2 business days)<br/>
                  • Card production & dispatch (3-5 business days)<br/>
                  • Delivery & activation
                </p>
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

  // Loading Screen
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
        <div className="bg-white rounded-2xl p-12 max-w-md mx-4 text-center shadow-2xl">
          <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${theme.gradient} mb-6`}>
            <CreditCard className="h-8 w-8 text-white animate-pulse" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Processing Application</h3>
          <p className="text-gray-600 mb-6">Please wait while we process your debit card application...</p>
          <div className="flex justify-center">
            <div className={`animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500`}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className={`bg-gradient-to-r ${theme.gradient} text-white p-6 rounded-t-2xl relative`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-200 hover:bg-white/20 p-2 rounded-full transition-all duration-200"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center space-x-4">
            <CreditCard className="h-8 w-8" />
            <div>
              <h2 className="text-2xl font-bold">Debit Card Application</h2>
              <p className="text-white/80">Step {currentStep} of 5</p>
            </div>
          </div>
          <div className="mt-4 bg-white/20 rounded-full h-2">
            <div 
              className="bg-white rounded-full h-2 transition-all duration-300"
              style={{ width: `${(currentStep / 5) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="p-6">
          {/* Step 1: Personal Identity */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                <User className="mr-2" /> Personal Identity
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name (as per ID) *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth *</label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">National ID Type</label>
                  <select
                    name="nationalIdType"
                    value={formData.nationalIdType}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="aadhaar">Aadhaar</option>
                    <option value="pan">PAN Card</option>
                    <option value="passport">Passport</option>
                    <option value="voter-id">Voter ID</option>
                    <option value="driving-license">Driving License</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">National ID Number *</label>
                <input
                  type="text"
                  name="nationalId"
                  value={formData.nationalId}
                  onChange={handleInputChange}
                  placeholder="Enter your ID number"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Primary Phone *</label>
                  <input
                    type="tel"
                    name="primaryPhone"
                    value={formData.primaryPhone}
                    onChange={handleInputChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {showValidationWarning && !validateStep1() && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-800 text-sm">
                    ⚠️ Please fill in all required personal information fields
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Step 2: Address Information */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                <MapPin className="mr-2" /> Address Information
              </h3>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-800">Residential Address</h4>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Address Line 1 *</label>
                  <input
                    type="text"
                    name="addressLine1"
                    value={formData.addressLine1}
                    onChange={handleInputChange}
                    placeholder="House/Flat No., Building Name, Street"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Address Line 2</label>
                  <input
                    type="text"
                    name="addressLine2"
                    value={formData.addressLine2}
                    onChange={handleInputChange}
                    placeholder="Area, Landmark (Optional)"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">State *</label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Postal Code *</label>
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="India">India</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="mailingAddressSame"
                  checked={formData.mailingAddressSame}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                <label className="text-sm text-gray-700">Mailing address is same as residential address</label>
              </div>

              {!formData.mailingAddressSame && (
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-800">Mailing Address</h4>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Address Line 1 *</label>
                    <input
                      type="text"
                      name="mailingAddressLine1"
                      value={formData.mailingAddressLine1}
                      onChange={handleInputChange}
                      placeholder="House/Flat No., Building Name, Street"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Address Line 2</label>
                    <input
                      type="text"
                      name="mailingAddressLine2"
                      value={formData.mailingAddressLine2}
                      onChange={handleInputChange}
                      placeholder="Area, Landmark (Optional)"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                      <input
                        type="text"
                        name="mailingCity"
                        value={formData.mailingCity}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">State *</label>
                      <input
                        type="text"
                        name="mailingState"
                        value={formData.mailingState}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Postal Code *</label>
                      <input
                        type="text"
                        name="mailingPostalCode"
                        value={formData.mailingPostalCode}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              )}

              {showValidationWarning && !validateStep2() && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-800 text-sm">
                    ⚠️ Please fill in all required address information
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Step 3: Account & Card Preferences */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                <CreditCard className="mr-2" /> Account & Card Preferences
              </h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Link to Account *</label>
                <select
                  name="linkedAccount"
                  value={formData.linkedAccount}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select Account</option>
                  {bankAccounts.map(account => (
                    <option key={account.accName} value={account.accName}>
                      {account.accNumber} - {account.accType} (₹{account.balance.toLocaleString()})
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-gray-800">Card Type</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div 
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      formData.cardType === 'physical' 
                        ? `${theme.borderColor} bg-gradient-to-r ${theme.bgGradient}` 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setFormData({...formData, cardType: 'physical'})}
                  >
                    <div className="text-center">
                      <CreditCard className={`h-8 w-8 mx-auto mb-2 ${formData.cardType === 'physical' ? theme.textColor : 'text-gray-500'}`} />
                      <h4 className="font-semibold">Physical Card</h4>
                      <p className="text-sm text-gray-600">Delivered to your address</p>
                    </div>
                  </div>
                  
                  <div 
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      formData.cardType === 'virtual' 
                        ? `${theme.borderColor} bg-gradient-to-r ${theme.bgGradient}` 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setFormData({...formData, cardType: 'virtual'})}
                  >
                    <div className="text-center">
                      <CreditCard className={`h-8 w-8 mx-auto mb-2 ${formData.cardType === 'virtual' ? theme.textColor : 'text-gray-500'}`} />
                      <h4 className="font-semibold">Virtual Card</h4>
                      <p className="text-sm text-gray-600">Instant activation</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Card Network</label>
                  <select
                    name="cardNetwork"
                    value={formData.cardNetwork}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="visa">Visa</option>
                    <option value="mastercard">Mastercard</option>
                    <option value="rupay">RuPay</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Card Design</label>
                  <select
                    name="cardDesign"
                    value={formData.cardDesign}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="classic">Classic</option>
                    <option value="premium">Premium</option>
                    <option value="custom">Custom Design</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Daily ATM Limit</label>
                  <select
                    name="atmLimit"
                    value={formData.atmLimit}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="10000">₹10,000</option>
                    <option value="25000">₹25,000</option>
                    <option value="50000">₹50,000</option>
                    <option value="100000">₹1,00,000</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Daily POS Limit</label>
                  <select
                    name="posLimit"
                    value={formData.posLimit}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="50000">₹50,000</option>
                    <option value="100000">₹1,00,000</option>
                    <option value="200000">₹2,00,000</option>
                    <option value="500000">₹5,00,000</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="contactless"
                  checked={formData.contactless}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                <label className="text-sm text-gray-700">Enable contactless payments (Tap & Pay)</label>
              </div>

              {showValidationWarning && !validateStep3() && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-800 text-sm">
                    ⚠️ Please select a bank account to link your debit card
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Step 4: Document Upload */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                <Upload className="mr-2" /> Document Upload
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800">Identity Proof *</h4>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                    <input
                      type="file"
                      accept="image/*,.pdf"
                      // @ts-ignore
                      onChange={(e) => handleFileUpload('identityProof', e.target.files[0])}
                      className="hidden"
                      id="identity-proof"
                    />
                    <label htmlFor="identity-proof" className="cursor-pointer">
                      {uploadedFiles.identityProof ? (
                        <div>
                          <CheckCircle className="h-12 w-12 mx-auto mb-2 text-green-500" />
                          <p className="text-sm text-green-600">File uploaded</p>
                        </div>
                      ) : (
                        <div>
                          <Upload className="h-12 w-12 mx-auto mb-2 text-gray-400" />
                          <p className="text-sm text-gray-600">Upload {formData.nationalIdType} copy</p>
                        </div>
                      )}
                    </label>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800">Address Proof *</h4>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                    <input
                      type="file"
                      accept="image/*,.pdf"
                                            // @ts-ignore

                      onChange={(e) => handleFileUpload('addressProof', e.target.files[0])}
                      className="hidden"
                      id="address-proof"
                    />
                    <label htmlFor="address-proof" className="cursor-pointer">
                      {uploadedFiles.addressProof ? (
                        <div>
                          <CheckCircle className="h-12 w-12 mx-auto mb-2 text-green-500" />
                          <p className="text-sm text-green-600">File uploaded</p>
                        </div>
                      ) : (
                        <div>
                          <Upload className="h-12 w-12 mx-auto mb-2 text-gray-400" />
                          <p className="text-sm text-gray-600">Upload utility bill or bank statement</p>
                        </div>
                      )}
                    </label>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800">Selfie *</h4>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                    <input
                      type="file"
                      accept="image/*"
                      capture="user"
                                            // @ts-ignore

                      onChange={(e) => handleFileUpload('selfie', e.target.files[0])}
                      className="hidden"
                      id="selfie"
                    />
                    <label htmlFor="selfie" className="cursor-pointer">
                      {uploadedFiles.selfie ? (
                        <div>
                          <CheckCircle className="h-12 w-12 mx-auto mb-2 text-green-500" />
                          <p className="text-sm text-green-600">Photo captured</p>
                        </div>
                      ) : (
                        <div>
                          <Camera className="h-12 w-12 mx-auto mb-2 text-gray-400" />
                          <p className="text-sm text-gray-600">Take selfie for verification</p>
                        </div>
                      )}
                    </label>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 mr-2" />
                  <div className="text-sm text-blue-800">
                    <p className="font-semibold">Document Guidelines:</p>
                    <ul className="mt-1 list-disc list-inside space-y-1">
                      <li>Files should be clear and readable</li>
                      <li>Maximum file size: 5MB</li>
                      <li>Accepted formats: JPG, PNG, PDF</li>
                      <li>Ensure all corners are visible</li>
                    </ul>
                  </div>
                </div>
              </div>

              {showValidationWarning && !validateStep4() && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-800 text-sm">
                    ⚠️ Please upload all required documents to proceed
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Step 5: Security & Consent */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                <Shield className="mr-2" /> Security & Consent
              </h3>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-800">Security Preferences</h4>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="setPinLater"
                    checked={formData.setPinLater}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  <label className="text-sm text-gray-700">Set PIN later at ATM (Recommended for security)</label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="smsAlerts"
                    checked={formData.smsAlerts}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  <label className="text-sm text-gray-700">Enable SMS transaction alerts</label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="emailAlerts"
                    checked={formData.emailAlerts}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  <label className="text-sm text-gray-700">Enable email transaction alerts</label>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-gray-800">Optional Information</h4>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nominee Full Name</label>
                    <input
                      type="text"
                      name="nomineeFullName"
                      value={formData.nomineeFullName}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nominee Relation</label>
                    <select
                      name="nomineeRelation"
                      value={formData.nomineeRelation}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select Relationship</option>
                      <option value="spouse">Spouse</option>
                      <option value="parent">Parent</option>
                      <option value="child">Child</option>
                      <option value="sibling">Sibling</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Emergency Contact</label>
                    <input
                      type="tel"
                      name="emergencyContact"
                      value={formData.emergencyContact}
                      onChange={handleInputChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Delivery Time</label>
                    <select
                      name="preferredDeliveryTime"
                      value={formData.preferredDeliveryTime}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="business-hours">Business Hours (9 AM - 6 PM)</option>
                      <option value="morning">Morning (9 AM - 12 PM)</option>
                      <option value="afternoon">Afternoon (12 PM - 6 PM)</option>
                      <option value="evening">Evening (6 PM - 9 PM)</option>
                      <option value="anytime">Anytime</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-gray-800">Legal Consents *</h4>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      name="acceptTerms"
                      checked={formData.acceptTerms}
                      onChange={handleInputChange}
                      className="mr-2 mt-1"
                      required
                    />
                    <label className="text-sm text-gray-700">
                      I accept the <span className={`${theme.textColor} underline cursor-pointer`}>Terms & Conditions</span> for debit card services
                    </label>
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      name="acknowledgeFees"
                      checked={formData.acknowledgeFees}
                      onChange={handleInputChange}
                      className="mr-2 mt-1"
                      required
                    />
                    <label className="text-sm text-gray-700">
                      I acknowledge the applicable fees and charges for the debit card
                    </label>
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      name="consentBackgroundCheck"
                      checked={formData.consentBackgroundCheck}
                      onChange={handleInputChange}
                      className="mr-2 mt-1"
                      required
                    />
                    <label className="text-sm text-gray-700">
                      I consent to KYC/AML background checks as required by banking regulations
                    </label>
                  </div>
                </div>
              </div>

              {showValidationWarning && !validateStep5() && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-800 text-sm">
                    ⚠️ Please accept all required terms and conditions to submit your application
                  </p>
                </div>
              )}
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
              {currentStep < 5 ? (
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
                  onClick={handleSubmit}
                  disabled={!isCurrentStepValid()}
                  className={`px-8 py-3 rounded-lg transition-all flex items-center space-x-2 text-white ${
                    isCurrentStepValid() 
                      ? `bg-gradient-to-r ${theme.gradient} hover:shadow-lg` 
                      : 'bg-gray-400 cursor-not-allowed'
                  }`}
                >
                  <span>Submit Application</span>
                  <CheckCircle className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// // Demo component to show how to use it
// export default function DebitCardDemo() {
//   const [showCardSelection, setShowCardSelection] = useState(false);
//   const [showForm, setShowForm] = useState(false);
  
//   // Mock data for demo
//   const bankName = 'ICICI';
//   // @ts-ignore
//   const theme = bankThemes[bankName];
//   const bankAccounts = mockAccounts;

//   const handleCardTypeSelect = (cardType:any) => {
//     if (cardType === 'debit') {
//       setShowCardSelection(false);
//       setShowForm(true);
//     }
//   };

//   const handleCloseForm = () => {
//     setShowForm(false);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <div className="max-w-md mx-auto">
//         <button
//           onClick={() => setShowCardSelection(true)}
//           className={`w-full py-4 px-6 rounded-lg bg-gradient-to-r ${theme.gradient} text-white font-semibold hover:shadow-lg transition-all`}
//         >
//           Apply for Debit Card
//         </button>
//       </div>

//       {showCardSelection && (
//         <CardTypeSelection
//           onSelect={handleCardTypeSelect}
//           theme={theme}
//           bankName={bankName.toLowerCase() as Bank_name}
//         />
//       )}

//       {showForm && (
//         <DebitCardApplicationForm
//           bankName={bankName.toLowerCase() as Bank_name}
//           onClose={handleCloseForm}
//           theme={theme}
//           bankAccounts={bankAccounts}
//         />
//       )}
//     </div>
//   );
// }