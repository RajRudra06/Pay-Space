"use client"
'use client';
import { useEffect, useState } from "react"
import { useParams, useSearchParams } from "next/navigation";
import { Bank_name } from "@repo/db_banks/src/generated/prisma/client";
import { Shield, Mail, Lock, Eye, EyeOff, ArrowRight, User, Phone, RefreshCw } from 'lucide-react';
import { bankThemesSignInBankSys } from "../../utils/bankThemes";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { bank } from "../../lib/userDetailSchema";
import axios from "axios"

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function SignUp() {
    const searchParams = useSearchParams();
    const clientID = searchParams.get('client_id');
    const router = useRouter();

    const params = useParams();
    const bankName = params.bank as Bank_name;

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isSigningUp, setIsSigningUp] = useState(false);

    //@ts-ignore   
    const currentTheme = bankThemesSignInBankSys[bankName] || bankThemesSignInBankSys['ICICI'];

    // Validation functions
    const isValidEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const isValidPhone = (phone: string) => {
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
    };

    const isValidPassword = (password: string) => {
        return password.length >= 6;
    };

    const doPasswordsMatch = () => {
        return password === confirmPassword && password.length > 0;
    };

    // Handle phone input to only allow numbers
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, ''); // Remove non-digits
        if (value.length <= 10) {
            setPhoneNumber(value);
        }
    };

    const togglePasswordVisibility = () => {
        const passwordInput = document.querySelector('input[name="password"]') as HTMLInputElement;
        const cursorPosition = passwordInput?.selectionStart || 0;
        
        setShowPassword(!showPassword);
        
        setTimeout(() => {
            const updatedInput = document.querySelector('input[name="password"]') as HTMLInputElement;
            if (updatedInput) {
                updatedInput.focus();
                updatedInput.setSelectionRange(cursorPosition, cursorPosition);
            }
        }, 0);
    };

    const toggleConfirmPasswordVisibility = () => {
        const confirmPasswordInput = document.querySelector('input[name="confirmPassword"]') as HTMLInputElement;
        const cursorPosition = confirmPasswordInput?.selectionStart || 0;
        
        setShowConfirmPassword(!showConfirmPassword);
        
        setTimeout(() => {
            const updatedInput = document.querySelector('input[name="confirmPassword"]') as HTMLInputElement;
            if (updatedInput) {
                updatedInput.focus();
                updatedInput.setSelectionRange(cursorPosition, cursorPosition);
            }
        }, 0);
    };

    const handleSignup = async () => {
        if (!isFormValid) return;
        
        setIsSigningUp(true);
        const toastIdAccountCreating = toast.loading("Creating your account...");

        try {
           
            const res=await axios.post(`${NEXT_PUBLIC_API_URL}/${bankName}/signup`,{
                fullName,
                email,
                phoneNumber,
                password,
                bankName
            })

            if (res.data.done==true) {
                toast.success("Account created successfully!", { id: toastIdAccountCreating });
                router.push(`/${bankName}/signin?user_email=${email}`);
                
            } 
            else{
                const error = res.data.msg;
                toast.error(`Failed to create account, ${error}`, { id: toastIdAccountCreating });
            
            }
               
            
        } catch (error) {
            toast.error("Error creating account, try again later",{ id: toastIdAccountCreating });
        } finally {
            setIsSigningUp(false);
        }
    };

    const handleSignin = () => {
        router.push(`/${bankName}/signin`);
    };

    // Form validation
    const isFormValid = 
        fullName.trim().length > 0 &&
        isValidEmail(email) &&
        isValidPhone(phoneNumber) &&
        isValidPassword(password) &&
        doPasswordsMatch();

    useEffect(() => {
        console.log(bankName);
    }, [bankName]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${currentTheme.gradient} rounded-full mb-6 shadow-lg`}>
                        <span className="text-2xl">{currentTheme.logo}</span>
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        Create Account
                    </h1>
                    <p className="text-gray-600">
                        Join <span className={`font-semibold ${currentTheme.textColor}`}>{bankName}</span> today
                    </p>
                </div>

                {/* Main Card */}
                <div className="bg-white rounded-2xl shadow-xl p-8 backdrop-blur-sm border border-white/20">
                    {/* Full Name Field */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                            Full Name
                        </label>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200"
                                placeholder="Enter your full name"
                            />
                        </div>
                    </div>

                    {/* Email Field */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                            Email Address
                        </label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={`w-full pl-10 pr-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-indigo-200 transition-all duration-200 ${
                                    email.length > 0 && !isValidEmail(email) 
                                        ? 'border-red-300 focus:border-red-500' 
                                        : 'border-gray-300 focus:border-indigo-500'
                                }`}
                                placeholder="Enter your email"
                            />
                            {email.length > 0 && !isValidEmail(email) && (
                                <p className="text-red-500 text-xs mt-1">Please enter a valid email address</p>
                            )}
                        </div>
                    </div>

                    {/* Phone Number Field */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                            Phone Number
                        </label>
                        <div className="relative">
                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="tel"
                                value={phoneNumber}
                                onChange={handlePhoneChange}
                                className={`w-full pl-10 pr-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-indigo-200 transition-all duration-200 ${
                                    phoneNumber.length > 0 && !isValidPhone(phoneNumber) 
                                        ? 'border-red-300 focus:border-red-500' 
                                        : 'border-gray-300 focus:border-indigo-500'
                                }`}
                                placeholder="Enter your 10-digit phone number"
                                maxLength={10}
                            />
                            {phoneNumber.length > 0 && !isValidPhone(phoneNumber) && (
                                <p className="text-red-500 text-xs mt-1">Please enter a valid 10-digit phone number</p>
                            )}
                        </div>
                    </div>

                    {/* Password Field */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                            Password
                        </label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                name="password"
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={`w-full pl-10 pr-12 py-3 border-2 rounded-lg focus:ring-2 focus:ring-indigo-200 transition-all duration-200 ${
                                    password.length > 0 && !isValidPassword(password) 
                                        ? 'border-red-300 focus:border-red-500' 
                                        : 'border-gray-300 focus:border-indigo-500'
                                }`}
                                placeholder="Enter your password (min 6 characters)"
                                minLength={6}
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                onMouseDown={(e) => e.preventDefault()}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                            {password.length > 0 && !isValidPassword(password) && (
                                <p className="text-red-500 text-xs mt-1">Password must be at least 6 characters long</p>
                            )}
                        </div>
                    </div>

                    {/* Confirm Password Field */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                            Confirm Password
                        </label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                name="confirmPassword"
                                type={showConfirmPassword ? "text" : "password"}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className={`w-full pl-10 pr-12 py-3 border-2 rounded-lg focus:ring-2 focus:ring-indigo-200 transition-all duration-200 ${
                                    confirmPassword.length > 0 && !doPasswordsMatch() 
                                        ? 'border-red-300 focus:border-red-500' 
                                        : 'border-gray-300 focus:border-indigo-500'
                                }`}
                                placeholder="Confirm your password"
                                minLength={6}
                            />
                            <button
                                type="button"
                                onClick={toggleConfirmPasswordVisibility}
                                onMouseDown={(e) => e.preventDefault()}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                            {confirmPassword.length > 0 && !doPasswordsMatch() && (
                                <p className="text-red-500 text-xs mt-1">Passwords do not match</p>
                            )}
                        </div>
                    </div>

                    {/* Sign Up Button */}
                    <button
                        onClick={handleSignup}
                        disabled={!isFormValid || isSigningUp}
                        className={`
                            w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center mb-4
                            ${isFormValid && !isSigningUp
                                ? `bg-gradient-to-r ${currentTheme.gradient} hover:shadow-lg text-white transform hover:-translate-y-1`
                                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                            }
                        `}
                    >
                        {isSigningUp ? (
                            <>
                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                                Creating Account...
                            </>
                        ) : (
                            <>
                                Create Account
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </>
                        )}
                    </button>

                    {/* Sign In Link */}
                    <div className="text-center">
                        <p className="text-sm text-gray-600 mb-3">
                            Already have an account with {bankName}?
                        </p>
                        <button
                            onClick={handleSignin}
                            className={`
                                w-full py-3 px-6 rounded-xl font-medium transition-all duration-300 flex items-center justify-center
                                bg-gray-100 hover:bg-gray-200 ${currentTheme.textColor} border-2 ${currentTheme.borderColor}
                            `}
                        >
                            <ArrowRight className="w-5 h-5 mr-2 rotate-180" />
                            Sign In Instead
                        </button>
                    </div>

                    {/* Security Note */}
                    <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-start">
                            <Shield className="w-5 h-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0" />
                            <div>
                                <h4 className="font-medium text-gray-900 mb-1">Secure Registration</h4>
                                <p className="text-sm text-gray-600">
                                    Your personal information is encrypted and protected with bank-level security protocols.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center mt-6 text-sm text-gray-500">
                    <p>Protected by {bankName} security • Need help? Contact support</p>
                </div>
            </div>
        </div>
    );
}