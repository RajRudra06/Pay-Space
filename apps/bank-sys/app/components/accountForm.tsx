import { useState } from "react";
import { ChevronRight, Building2, User, MapPin,FileText,IndianRupee,X } from "lucide-react";
import { bankThemes } from "../utils/bankThemes";
import axios from "axios"
import { Bank_name } from "@repo/db_banks/src/generated/prisma/client";
import { toast } from "react-hot-toast";

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

export const AccountOpeningForm = ({ bankName,onClose,theme }:{bankName:Bank_name,theme: typeof bankThemes[keyof typeof bankThemes],onClose:()=>void}) => {
const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      gender: '',
      fatherName: '',
      motherName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      pincode: '',
      occupation: '',
      monthlyIncome: '',
      accountType: 'savings',
      nomineeFirstName: '',
      nomineeLastName: '',
      nomineeRelation: '',
      aadharNumber: '',
      panNumber: ''
    });
  
    const [isLoading, setIsLoading] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const [showValidationWarning, setShowValidationWarning] = useState(false);
  
    async function makeAccount(){
      const accountFormToast=toast.loading("Creating your bank account")

          try{

            const res=await axios.post(`${NEXT_PUBLIC_API_URL}/${bankName}/make-account`,{
              formData
            })

            if(res.data.done===true){
              toast.success(`Account with ${bankName} created successfully. Add funds to start transacting.`,{id:accountFormToast});
            }

            else{
              toast.error(`Account not created, ${res.data.msg}`,{id:accountFormToast});
            }

          }catch(err){
            toast.error(`Account not created, ${err}`,{id:accountFormToast});

          }
    }
    const handleInputChange = (e:any) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
      // Hide validation warning when user starts typing
      if (showValidationWarning) {
        setShowValidationWarning(false);
      }
    };

    // Validation functions for each step
    const validateStep1 = () => {
      const step1Fields = ['firstName', 'lastName', 'dateOfBirth', 'gender', 'fatherName', 'motherName', 'aadharNumber', 'panNumber'];
      return step1Fields.every(field => formData[field as keyof typeof formData].trim() !== '');
    };

    const validateStep2 = () => {
      const step2Fields = ['email', 'phone', 'address', 'city', 'state', 'pincode', 'occupation', 'monthlyIncome'];
      return step2Fields.every(field => formData[field as keyof typeof formData].trim() !== '');
    };

    const validateStep3 = () => {
      const step3Fields = ['nomineeFirstName', 'nomineeLastName', 'nomineeRelation'];
      return step3Fields.every(field => formData[field as keyof typeof formData].trim() !== '') && formData.accountType !== '';
    };

    // Check if current step is valid
    const isCurrentStepValid = () => {
      switch (currentStep) {
        case 1:
          return validateStep1();
        case 2:
          return validateStep2();
        case 3:
          return validateStep3();
        default:
          return false;
      }
    };
  
    const handleSubmit = async (e:any) => {
      e.preventDefault();
      
      // Final validation before submission
      if (!validateStep1() || !validateStep2() || !validateStep3()) {
        setShowValidationWarning(true);
        return;
      }

      setIsLoading(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      setIsLoading(false);
      onClose();
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
  
    if (isLoading) {
      return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-12 max-w-md mx-4 text-center shadow-2xl">
            <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${theme.gradient} mb-6`}>
              <Building2 className="h-8 w-8 text-white animate-pulse" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Processing Your Application</h3>
            <p className="text-gray-600 mb-6">Please wait while we create your account...</p>
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
              <Building2 className="h-8 w-8" />
              <div>
                <h2 className="text-2xl font-bold">Open Bank Account</h2>
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
  
          <form onSubmit={handleSubmit} className="p-6">
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                  <User className="mr-2" /> Personal Information
                </h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
  
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth *</label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Gender *</label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
  
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Father's Name *</label>
                    <input
                      type="text"
                      name="fatherName"
                      value={formData.fatherName}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Mother's Name *</label>
                    <input
                      type="text"
                      name="motherName"
                      value={formData.motherName}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
  
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Aadhar Number *</label>
                    <input
                      type="text"
                      name="aadharNumber"
                      value={formData.aadharNumber}
                      onChange={handleInputChange}
                      placeholder="XXXX-XXXX-XXXX"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">PAN Number *</label>
                    <input
                      type="text"
                      name="panNumber"
                      value={formData.panNumber}
                      onChange={handleInputChange}
                      placeholder="ABCDE1234F"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                {/* Validation Warning for Step 1 */}
                {showValidationWarning && !validateStep1() && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-red-800 text-sm">
                      ⚠️ Please fill all required fields to proceed to the next step
                    </p>
                  </div>
                )}
              </div>
            )}
  
            {/* Step 2: Contact & Address */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                  <MapPin className="mr-2" /> Contact & Address Information
                </h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
  
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Complete Address *</label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    // @ts-ignore
                    rows="3"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  ></textarea>
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
                      required
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
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">PIN Code *</label>
                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
  
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Occupation *</label>
                    <select
                      name="occupation"
                      value={formData.occupation}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select Occupation</option>
                      <option value="Student">Student</option>
                      <option value="Employee">Employee</option>
                      <option value="SelfEmployed">Self Employed</option>
                      <option value="Business">Business</option>
                      <option value="Retired">Retired</option>
                      <option value="Homemaker">Homemaker</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Income *</label>
                    <select
                      name="monthlyIncome"
                      value={formData.monthlyIncome}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select Income Range</option>
                      <option value="below-25000">Below ₹25,000</option>
                      <option value="25000-50000">₹25,000 - ₹50,000</option>
                      <option value="50000-100000">₹50,000 - ₹1,00,000</option>
                      <option value="100000-500000">₹1,00,000 - ₹5,00,000</option>
                      <option value="above-500000">Above ₹5,00,000</option>
                    </select>
                  </div>
                </div>

                {/* Validation Warning for Step 2 */}
                {showValidationWarning && !validateStep2() && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-red-800 text-sm">
                      ⚠️ Please fill all required fields to proceed to the next step
                    </p>
                  </div>
                )}
              </div>
            )}
  
            {/* Step 3: Account Details & Nominee */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                  <FileText className="mr-2" /> Account Details & Nominee Information
                </h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Account Type *</label>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div 
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${formData.accountType === 'savings' ? `${theme.borderColor} bg-gradient-to-r ${theme.bgGradient}` : 'border-gray-200 hover:border-gray-300'}`}
                      onClick={() => setFormData({...formData, accountType: 'savings'})}
                    >
                      <div className="text-center">
                        <IndianRupee className={`h-8 w-8 mx-auto mb-2 ${formData.accountType === 'savings' ? theme.textColor : 'text-gray-500'}`} />
                        <h4 className="font-semibold">Savings Account</h4>
                        <p className="text-sm text-gray-600">For personal savings with interest</p>
                      </div>
                    </div>
                    
                    <div 
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${formData.accountType === 'business' ? `${theme.borderColor} bg-gradient-to-r ${theme.bgGradient}` : 'border-gray-200 hover:border-gray-300'}`}
                      onClick={() => setFormData({...formData, accountType: 'business'})}
                    >
                      <div className="text-center">
                        <Building2 className={`h-8 w-8 mx-auto mb-2 ${formData.accountType === 'business' ? theme.textColor : 'text-gray-500'}`} />
                        <h4 className="font-semibold">Business Account</h4>
                        <p className="text-sm text-gray-600">For business transactions</p>
                      </div>
                    </div>

                    <div 
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${formData.accountType === 'joint' ? `${theme.borderColor} bg-gradient-to-r ${theme.bgGradient}` : 'border-gray-200 hover:border-gray-300'}`}
                      onClick={() => setFormData({...formData, accountType: 'joint'})}
                    >
                      <div className="text-center">
                        <Building2 className={`h-8 w-8 mx-auto mb-2 ${formData.accountType === 'joint' ? theme.textColor : 'text-gray-500'}`} />
                        <h4 className="font-semibold">Joint Account</h4>
                        <p className="text-sm text-gray-600">For joint transactions</p>
                      </div>
                    </div>

                    <div 
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${formData.accountType === 'checking' ? `${theme.borderColor} bg-gradient-to-r ${theme.bgGradient}` : 'border-gray-200 hover:border-gray-300'}`}
                      onClick={() => setFormData({...formData, accountType: 'checking'})}
                    >
                      <div className="text-center">
                        <Building2 className={`h-8 w-8 mx-auto mb-2 ${formData.accountType === 'checking' ? theme.textColor : 'text-gray-500'}`} />
                        <h4 className="font-semibold">Checking Account</h4>
                        <p className="text-sm text-gray-600">For everyday spendings transactions</p>
                      </div>
                    </div>

                    <div 
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${formData.accountType === 'wallet' ? `${theme.borderColor} bg-gradient-to-r ${theme.bgGradient}` : 'border-gray-200 hover:border-gray-300'}`}
                      onClick={() => setFormData({...formData, accountType: 'wallet'})}
                    >
                      <div className="text-center">
                        <Building2 className={`h-8 w-8 mx-auto mb-2 ${formData.accountType === 'wallet' ? theme.textColor : 'text-gray-500'}`} />
                        <h4 className="font-semibold">Wallet Account</h4>
                        <p className="text-sm text-gray-600">For quick transactions</p>
                      </div>
                    </div>
                    
                    {/* <div 
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${formData.accountType === 'miscellaneous' ? `${theme.borderColor} bg-gradient-to-r ${theme.bgGradient}` : 'border-gray-200 hover:border-gray-300'}`}
                      onClick={() => setFormData({...formData, accountType: 'miscellaneous'})}
                    >
                      <div className="text-center">
                        <FileText className={`h-8 w-8 mx-auto mb-2 ${formData.accountType === 'miscellaneous' ? theme.textColor : 'text-gray-500'}`} />
                        <h4 className="font-semibold">Miscellaneous</h4>
                        <p className="text-sm text-gray-600">Special purpose accounts</p>
                      </div>
                    </div> */}
                  </div>
                </div>
  
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-4">Nominee Information</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nominee First Name *</label>
                      <input
                        type="text"
                        name="nomineeFirstName"
                        value={formData.nomineeFirstName}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nominee Last Name *</label>
                      <input
                        type="text"
                        name="nomineeLastName"
                        value={formData.nomineeLastName}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Relationship with Nominee *</label>
                    <select
                      name="nomineeRelation"
                      value={formData.nomineeRelation}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select Relationship</option>
                      <option value="spouse">Spouse</option>
                      <option value="father">Father</option>
                      <option value="mother">Mother</option>
                      <option value="son">Son</option>
                      <option value="daughter">Daughter</option>
                      <option value="brother">Brother</option>
                      <option value="sister">Sister</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Validation Warning for Step 3 */}
                {showValidationWarning && !validateStep3() && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-red-800 text-sm">
                      ⚠️ Please fill all required fields to submit your application
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
                {currentStep < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className={`px-6 py-3 rounded-lg transition-all flex items-center space-x-2 bg-gradient-to-r ${theme.gradient} text-white hover:shadow-lg`}
                  >
                    <span>Next</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className={`px-8 py-3 rounded-lg transition-all flex items-center space-x-2 bg-gradient-to-r ${theme.gradient} text-white hover:shadow-lg`}
                    onClick={makeAccount}
                  >
                    <span>Submit Application</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  };