"use client"
'use client';
import { useEffect, useState } from "react"
import { useParams,useSearchParams } from "next/navigation";
import { Bank_name } from "@repo/db_banks/src/generated/prisma/client";
import { Shield, Mail, Lock, Eye, EyeOff, ArrowRight, UserPlus, RefreshCw } from 'lucide-react';
import { bankThemesSignInBankSys } from "../../utils/bankThemes";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const NEXT_PUBLIC_API_URL=process.env.NEXT_PUBLIC_API_URL;

export default function SignIn() {

    const searchParams = useSearchParams();
    const clientID = searchParams.get('client_id');
    const userEmail = searchParams.get('user_email');
    const router = useRouter();

    const params = useParams();
    const bankName = params.bank as Bank_name;

    const [bank,setBank]=useState<Bank_name|"">(bankName); 
    const [email, setEmail] = useState(userEmail);
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isPasswordSet, setIsPasswordSet] = useState(!!"");
    const [isSigningIn, setIsSigningIn] = useState(false);

    //@ts-ignore   
    const currentTheme = bankThemesSignInBankSys[bankName] || bankThemesSignInBankSys['ICICI'];
  
    //@ts-ignore   
    const handlePasswordChange = (e) => {
      // Always allow editing regardless of showPassword state
      setPassword(e.target.value);
    };
  
    const handlePasswordBlur = () => {
      if (password.length > 0 && !isPasswordSet) {
        setIsPasswordSet(true);
      }
    };

    // Toggle password visibility and preserve cursor position
    const togglePasswordVisibility = () => {
    const passwordInput = document.querySelector('input[type="password"], input[type="text"]');
      // @ts-ignore

    const cursorPosition = passwordInput?.selectionStart || 0;
      
    setShowPassword(!showPassword);
      
    // Restore cursor position after state update
    setTimeout(() => {
        const updatedInput = document.querySelector('input[type="password"], input[type="text"]');
        if (updatedInput) {
            // @ts-ignore
          updatedInput.focus();
         // @ts-ignore

          updatedInput.setSelectionRange(cursorPosition, cursorPosition);
        }
      }, 0);
    };
  
    const handleSignin = async () => {
      if (!email || !password) return;
      
      setIsSigningIn(true);

      try {
        const toastId = toast.loading("Signing you in...");
        const res = await signIn("credentials", {
            redirect: false, 
            email: email,
            password: password,
            bankname:bankName
        });

        if (res?.ok) {
          toast.success("Signed in successfully",{id:toastId})
                              
            router.push(`/${bankName}/home`); 
          } else {
            setIsSigningIn(false);

            toast.error(
              res?.error === "UserNotFound"
                ? "No user found, Sign Up now"
                : res?.error === "NoBankAccountFound"
                ? `No account found for ${email} at ${bankName}`
                : res?.error === "InvalidCredentials"
                ? "Invalid Credentials"
                : `Unknown error${res?.error}`,{id:toastId}
            );
            
          }
          
      } catch (error) {
        toast.error("Error Signing in, try again later")
      }
      
    
    };
  
    const handleSignup = () => {
      router.push(`/${bankName}/signup`); 
    };

    useEffect(()=>{
        console.log(bankName)
    },[email])
  
    const isFormValid = email && password && password.length >= 6;
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${currentTheme.gradient} rounded-full mb-6 shadow-lg`}>
              <span className="text-2xl">{currentTheme.logo}</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Sign In
            </h1>
            <p className="text-gray-600">
              Access your <span className={`font-semibold ${currentTheme.textColor}`}>{bankName}</span> account
            </p>
          </div>
  
          {/* Main Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 backdrop-blur-sm border border-white/20">
            {/* Email Field */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email || ""}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200"
                  placeholder="Enter your email"
                  disabled={!!userEmail}
                />
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
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={handlePasswordChange}
                  onBlur={handlePasswordBlur}
                  className="w-full pl-10 pr-12 py-3 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200"
                  placeholder="Enter your password"
                  minLength={6}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  onMouseDown={(e) => e.preventDefault()} // Prevent input blur
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
  
            {/* Sign In Button */}
            <button
              onClick={handleSignin}
              disabled={!isFormValid || isSigningIn}
              className={`
                w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center mb-4
                ${isFormValid && !isSigningIn
                  ? `bg-gradient-to-r ${currentTheme.gradient} hover:shadow-lg text-white transform hover:-translate-y-1`
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                }
              `}
            >
              {isSigningIn ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                  Signing In...
                </>
              ) : (
                <>
                  Sign In
                  <ArrowRight className="w-5 h-5 ml-2" />
                </>
              )}
            </button>
  
            {/* Signup Link */}
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-3">
                Don't have an account with {bankName}?
              </p>
              <button
                onClick={handleSignup}
                className={`
                  w-full py-3 px-6 rounded-xl font-medium transition-all duration-300 flex items-center justify-center
                  bg-gray-100 hover:bg-gray-200 ${currentTheme.textColor} border-2 ${currentTheme.borderColor}
                `}
              >
                <UserPlus className="w-5 h-5 mr-2" />
                Create New Account
              </button>
            </div>
  
            {/* Security Note */}
            <div className="mt-6 p-4 bg-gray-50 rounded-xl">
              <div className="flex items-start">
                <Shield className="w-5 h-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Secure Login</h4>
                  <p className="text-sm text-gray-600">
                    Your login credentials are encrypted and secured with bank-level security protocols.
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