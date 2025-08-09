"use client";
import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from "next/navigation";
import { Shield, Mail, ArrowRight, RefreshCw } from 'lucide-react';
import { bankThemes } from '../../../utils/bankThemes';
import { useParams } from "next/navigation";
import axios from "axios"
import toast from 'react-hot-toast';
import Loading from "pay_space/app/components/bankLoading"

export default function AuthorizePage() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isVerifying, setIsVerifying] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [failedMsg,setfailedMsg]=useState('')

  const API_URL=process.env.NEXT_PUBLIC_API_URL
  const PAY_SPACE_URL_CALLBACK=process.env.NEXT_PUBLIC_PAY_SPACE_URL
  const NEXT_PUBLIC_BANK_SYS_URL=process.env.NEXT_PUBLIC_BANK_SYS_URL
  
  // Consolidated status state - replaces isVerified, isValid, and msg
  const [status, setStatus] = useState({
    state: 'loading', 
    message: ''
  });

  const params = useParams();
  const inputRefs = useRef([]);

  // Search params logic
  const searchParams = useSearchParams();
  const redirect_uri = searchParams.get('redirect_uri');
  const clientID = searchParams.get('client_id');
  const userEmail = searchParams.get('email');
  const bankName = params.bank as string;

  // @ts-ignore
  const currentTheme = bankThemes[bankName] || bankThemes['ICICI Bank'];

  // Derived values - no need for separate state variables
  const canResend = timeLeft === 0;
  const isOtpComplete = otp.every(digit => digit !== '');
  
  async function sendOTP() {
    try {
      
      const responseOTP = await axios.post(`${API_URL}/${bankName}/oauth/token`, {
        client_id: clientID,
        user_email: userEmail
      }, {
        headers: {
          "Content-Type": "application/json",
        }
      });

      if (responseOTP.data.done) {
        return { success: true };
      } else {

        if(responseOTP.data.msg==='Client/User DNE'){
            setfailedMsg('doesnotexist');
        }

        else if(!responseOTP.data.done&&responseOTP.data.msg!=='Client/User DNE'){
            setfailedMsg('failed');
        }

        return { 
          success: false, message: responseOTP.data.msg 
        };
      }
    } catch(err) {
      setfailedMsg('failed');
      return { success: false, message: `Network error occurred${err}` };
    }
  }

  useEffect(() => {
    async function sendOTPCheck() {
      const result = await sendOTP();
      
      if (result.success) {
        setStatus({ state: 'verified', message: '' });
      } else {
        setStatus({ state: 'error', message: result.message });
      }
    }

    sendOTPCheck();

  }, []);

  // Timer countdown
  useEffect(() => {
    if (status.state === 'verified' && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft, status.state]);

  // Handle OTP input
  // @ts-ignore
  const handleOtpChange = (index, value) => {
    if (value.length > 1) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value !== '' && index < 5) {
      // @ts-ignore
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Handle backspace
  // @ts-ignore
  const handleKeyDown = (index, e) => {
    // @ts-ignore
    if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
      // @ts-ignore
      inputRefs.current[index - 1]?.focus();
    }
  };

  const  handleAllow = async() => {

    setIsVerifying(true);
    
    if(status.state==='verified'){
      try {

        const sendOTP = await axios.post(`${API_URL}/bank/oauth/token/verify-send-code`, {
          client_id: clientID,
          user_email: userEmail,
          otp:otp.join(''),
          redirect_uri:redirect_uri
        }, {
          headers: {
            "Content-Type": "application/json",
          }
        });
        console.log(sendOTP.data)


        if(sendOTP.data.done){
          const tempCode = sendOTP.data.code;
          window.opener.postMessage({ status:failedMsg},`${PAY_SPACE_URL_CALLBACK}`);
          window.location.href = `${redirect_uri}?code=${tempCode}&user_email=${userEmail}&bank_name=${bankName}`;

        }

        else{
          setIsVerifying(false);
          toast.error(sendOTP.data.msg);
          setOtp(['', '', '', '', '', ''])

        }


      } catch (error) {
        console.error('Error during authorization:', error);
        setIsVerifying(false);
      }
    }

    else if(status.state==='error'){
      if (window.opener) {
        // Send the code back to the parent window
        window.opener.postMessage({ status:failedMsg},`${PAY_SPACE_URL_CALLBACK}`);
        window.close(); 

      }
    }

  };

  const handleResendOtp = () => {
    setTimeLeft(30);
    setOtp(['', '', '', '', '', '']);
    // @ts-ignore
    inputRefs.current[0]?.focus();
    
    console.log('Resending OTP for:', userEmail);
  };

  if (status.state === 'loading') {
    return (
      <div className="flex items-center justify-center h-screen">
      <Loading 
        message="Loading..." 
        subMessage="Verifying details..." 
        isVisible={true}
      />
    </div>
    
   
    );
  }

  function startBanking(){
    setfailedMsg("startbanking")
    const targetUrl = `${NEXT_PUBLIC_BANK_SYS_URL}/${bankName}/signin/?user_email=${userEmail}&client_id=${clientID}`
    window.opener.postMessage({ status: "startbanking" }, `${PAY_SPACE_URL_CALLBACK}`);  // Use the string directly
    window.open(targetUrl, '_blank'); 
    window.close();
}

  if (status.state === 'error') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${currentTheme.gradient} rounded-full mb-6 shadow-lg`}>
              <span className="text-2xl">{currentTheme.logo}</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Account Verification
            </h1>
            <p className="text-gray-600">
              <span className={`font-semibold ${currentTheme.textColor}`}>{bankName}</span> Authorization
            </p>
          </div>

          {/* Error Message Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 backdrop-blur-sm border border-white/20 relative">
            {/* Refresh button in corner */}
            <button 
              onClick={() => window.location.reload()}
              className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              title="Refresh"
            >
              <RefreshCw className="w-4 h-4" />
            </button>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              <div className="bg-gradient-to-r from-red-50 to-red-100 border border-red-200 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-red-800 mb-2">Verification Error</h3>
                <p className="text-red-700 text-base leading-relaxed">
                  {status.message}
                </p>
              </div>

              {/* Two buttons side by side */}
              <div className="flex gap-3">
                <button 
                  onClick={() => startBanking()}
                  className="flex-1 py-3 px-6 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                >
                  Start Banking
                </button>

                <button 
                  onClick={handleAllow}
                  className="flex-1 py-3 px-6 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-xl transition-all duration-300"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-6 text-sm text-gray-500">
            <p>Need help? Contact support</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${currentTheme.gradient} rounded-full mb-6 shadow-lg`}>
            <span className="text-2xl">{currentTheme.logo}</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Verify Your Account
          </h1>
          <p className="text-gray-600">
            Complete your <span className={`font-semibold ${currentTheme.textColor}`}>{bankName}</span> account linking
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 backdrop-blur-sm border border-white/20">
          {/* Email Display */}
          <div className={`p-4 rounded-xl mb-6 bg-gradient-to-r ${currentTheme.bgGradient} border ${currentTheme.borderColor}`}>
            <div className="flex items-center">
              <Mail className={`w-5 h-5 ${currentTheme.textColor} mr-3`} />
              <div>
                <p className="text-sm text-gray-600">OTP sent to</p>
                <p className={`font-semibold ${currentTheme.textColor}`}>{userEmail}</p>
              </div>
            </div>
          </div>

          {/* OTP Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Enter 6-digit OTP
            </label>
            <div className="flex justify-between gap-2">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  // @ts-ignore
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-12 h-12 text-center text-xl font-bold border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200"
                />
              ))}
            </div>
          </div>

          {/* Timer and Resend */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center text-sm text-gray-600">
              <Shield className="w-4 h-4 mr-1" />
              <span>Code expires in {timeLeft}s</span>
            </div>

            {canResend ? (
              <button
                onClick={handleResendOtp}
                className="flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
              >
                <RefreshCw className="w-4 h-4 mr-1" />
                Resend OTP
              </button>
            ) : (
              <span className="text-sm text-gray-400">
                Resend in {timeLeft}s
              </span>
            )}
          </div>

          {/* Allow Button */}
          <button
            onClick={handleAllow}
            disabled={!isOtpComplete || isVerifying}
            className={`
              w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center
              ${isOtpComplete && !isVerifying
                ? `bg-gradient-to-r ${currentTheme.gradient} hover:shadow-lg text-white transform hover:-translate-y-1`
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
              }
            `}
          >
            {isVerifying ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                Authorizing...
              </>
            ) : (
              <>
                Allow Access
                <ArrowRight className="w-5 h-5 ml-2" />
              </>
            )}
          </button>

          {/* Security Note */}
          <div className="mt-6 p-4 bg-gray-50 rounded-xl">
            <div className="flex items-start">
              <Shield className="w-5 h-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-gray-900 mb-1">Secure Authorization</h4>
                <p className="text-sm text-gray-600">
                  This OTP is valid for 5 minutes and will authorize access to your {bankName} account data.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-sm text-gray-500">
          <p>Didn't receive the code? Check your spam folder</p>
        </div>
      </div>
    </div>
  );
}

// "use client";
// import React, { useState, useEffect, useRef } from 'react';
// import { useSearchParams } from "next/navigation";
// import { Shield, Mail, ArrowRight, RefreshCw } from 'lucide-react';
// import { bankThemes } from '../../../utils/bankThemes';
// import { useParams } from "next/navigation";
// import axios from "axios"
// import toast from 'react-hot-toast';
// import Loading from "pay_space/app/components/bankLoading"

// export default function AuthorizePage() {
//   const [otp, setOtp] = useState(['', '', '', '', '', '']);
//   const [isVerifying, setIsVerifying] = useState(false);
//   const [timeLeft, setTimeLeft] = useState(30);
//   const [failedMsg,setfailedMsg]=useState('')

//   const API_URL=process.env.NEXT_PUBLIC_API_URL
//   const PAY_SPACE_URL_CALLBACK=process.env.NEXT_PUBLIC_PAY_SPACE_URL
  
//   // Consolidated status state - replaces isVerified, isValid, and msg
//   const [status, setStatus] = useState({
//     state: 'loading', 
//     message: ''
//   });

//   const params = useParams();
//   const inputRefs = useRef([]);

//   // Search params logic
//   const searchParams = useSearchParams();
//   const redirect_uri = searchParams.get('redirect_uri');
//   const clientID = searchParams.get('client_id');
//   const userEmail = searchParams.get('email');
//   const bankName = params.bank as string;

//   // @ts-ignore
//   const currentTheme = bankThemes[bankName] || bankThemes['ICICI Bank'];

//   // Derived values - no need for separate state variables
//   const canResend = timeLeft === 0;
//   const isOtpComplete = otp.every(digit => digit !== '');
  
//   async function sendOTP() {
//     try {
      
//       const responseOTP = await axios.post(`${API_URL}/${bankName}/oauth/token`, {
//         client_id: clientID,
//         user_email: userEmail
//       }, {
//         headers: {
//           "Content-Type": "application/json",
//         }
//       });

//       if (responseOTP.data.done) {
//         return { success: true };
//       } else {

//         if(responseOTP.data.msg==='Client/User DNE'){
//             setfailedMsg('doesnotexist');
//         }

//         else if(!responseOTP.data.done&&responseOTP.data.msg!=='Client/User DNE'){
//             setfailedMsg('failed');
//         }

//         return { 
//           success: false, message: responseOTP.data.msg 
//         };
//       }
//     } catch(err) {
//       setfailedMsg('failed');
//       return { success: false, message: `Network error occurred${err}` };
//     }
//   }

//   useEffect(() => {
//     async function sendOTPCheck() {
//       const result = await sendOTP();
      
//       if (result.success) {
//         setStatus({ state: 'verified', message: '' });
//       } else {
//         setStatus({ state: 'error', message: result.message });
//       }
//     }

//     sendOTPCheck();

//   }, []);

//   // Timer countdown
//   useEffect(() => {
//     if (status.state === 'verified' && timeLeft > 0) {
//       const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
//       return () => clearTimeout(timer);
//     }
//   }, [timeLeft, status.state]);

//   // Handle OTP input
//   // @ts-ignore
//   const handleOtpChange = (index, value) => {
//     if (value.length > 1) return;
    
//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);

//     if (value !== '' && index < 5) {
//       // @ts-ignore
//       inputRefs.current[index + 1]?.focus();
//     }
//   };

//   // Handle backspace
//   // @ts-ignore
//   const handleKeyDown = (index, e) => {
//     // @ts-ignore
//     if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
//       // @ts-ignore
//       inputRefs.current[index - 1]?.focus();
//     }
//   };

//   const  handleAllow = async() => {

//     setIsVerifying(true);
    
//     if(status.state==='verified'){
//       try {

//         const sendOTP = await axios.post(`${API_URL}/bank/oauth/token/verify-send-code`, {
//           client_id: clientID,
//           user_email: userEmail,
//           otp:otp.join(''),
//           redirect_uri:redirect_uri
//         }, {
//           headers: {
//             "Content-Type": "application/json",
//           }
//         });
//         console.log(sendOTP.data)


//         if(sendOTP.data.done){
//           const tempCode = sendOTP.data.code;
//           window.opener.postMessage({ status:failedMsg},`${PAY_SPACE_URL_CALLBACK}`);
//           window.location.href = `${redirect_uri}?code=${tempCode}&user_email=${userEmail}&bank_name=${bankName}`;

//         }

//         else{
//           setIsVerifying(false);
//           toast.error(sendOTP.data.msg);
//           setOtp(['', '', '', '', '', ''])

//         }


//       } catch (error) {
//         console.error('Error during authorization:', error);
//         setIsVerifying(false);
//       }
//     }

//     else if(status.state==='error'){
//       if (window.opener) {
//         // Send the code back to the parent window
//         window.opener.postMessage({ status:failedMsg},`${PAY_SPACE_URL_CALLBACK}`);
//         window.close(); 

//       }
//     }

//   };

//   const handleResendOtp = () => {
//     setTimeLeft(30);
//     setOtp(['', '', '', '', '', '']);
//     // @ts-ignore
//     inputRefs.current[0]?.focus();
    
//     console.log('Resending OTP for:', userEmail);
//   };

//   if (status.state === 'loading') {
//     return (
//       <Loading 
//         message='Loading...' 
//         subMessage='Verifying details...' 
//         isVisible={true}
//       />
//     );
//   }

//   if (status.state === 'error') {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-4">
//         <div className="w-full max-w-md">
//           {/* Header */}
//           <div className="text-center mb-8">
//             <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${currentTheme.gradient} rounded-full mb-6 shadow-lg`}>
//               <span className="text-2xl">{currentTheme.logo}</span>
//             </div>
//             <h1 className="text-3xl font-bold text-gray-900 mb-2">
//               Account Verification
//             </h1>
//             <p className="text-gray-600">
//               <span className={`font-semibold ${currentTheme.textColor}`}>{bankName}</span> Authorization
//             </p>
//           </div>

//           {/* Error Message Card */}
//           <div className="bg-white rounded-2xl shadow-xl p-8 backdrop-blur-sm border border-white/20">
//             <div className="text-center">
//               <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-4">
//                 <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//               </div>
              
//               <div className="bg-gradient-to-r from-red-50 to-red-100 border border-red-200 rounded-xl p-6 mb-6">
//                 <h3 className="text-lg font-semibold text-red-800 mb-2">Verification Error</h3>
//                 <p className="text-red-700 text-base leading-relaxed">
//                   {status.message}
//                 </p>
//               </div>

//               <button 
//                 onClick={() => window.location.reload()}
//                 className="w-full py-3 px-6 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg mb-4"
//               >
//                 Try Again
//               </button>

//               <button 
//                 onClick={() => alert("Going to bank site")}
//                 className="w-full py-3 px-6 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
//               >
//                 Start Banking
//               </button>

//               <button 
//                 onClick={handleAllow}
//                 className="w-full py-3 px-6 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg mt-4"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>

//           {/* Footer */}
//           <div className="text-center mt-6 text-sm text-gray-500">
//             <p>Need help? Contact support</p>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-4">
//       <div className="w-full max-w-md">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${currentTheme.gradient} rounded-full mb-6 shadow-lg`}>
//             <span className="text-2xl">{currentTheme.logo}</span>
//           </div>
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">
//             Verify Your Account
//           </h1>
//           <p className="text-gray-600">
//             Complete your <span className={`font-semibold ${currentTheme.textColor}`}>{bankName}</span> account linking
//           </p>
//         </div>

//         {/* Main Card */}
//         <div className="bg-white rounded-2xl shadow-xl p-8 backdrop-blur-sm border border-white/20">
//           {/* Email Display */}
//           <div className={`p-4 rounded-xl mb-6 bg-gradient-to-r ${currentTheme.bgGradient} border ${currentTheme.borderColor}`}>
//             <div className="flex items-center">
//               <Mail className={`w-5 h-5 ${currentTheme.textColor} mr-3`} />
//               <div>
//                 <p className="text-sm text-gray-600">OTP sent to</p>
//                 <p className={`font-semibold ${currentTheme.textColor}`}>{userEmail}</p>
//               </div>
//             </div>
//           </div>

//           {/* OTP Input */}
//           <div className="mb-6">
//             <label className="block text-sm font-medium text-gray-700 mb-3">
//               Enter 6-digit OTP
//             </label>
//             <div className="flex justify-between gap-2">
//               {otp.map((digit, index) => (
//                 <input
//                   key={index}
//                   // @ts-ignore
//                   ref={(el) => (inputRefs.current[index] = el)}
//                   type="text"
//                   inputMode="numeric"
//                   maxLength={1}
//                   value={digit}
//                   onChange={(e) => handleOtpChange(index, e.target.value)}
//                   onKeyDown={(e) => handleKeyDown(index, e)}
//                   className="w-12 h-12 text-center text-xl font-bold border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200"
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Timer and Resend */}
//           <div className="flex justify-between items-center mb-6">
//             <div className="flex items-center text-sm text-gray-600">
//               <Shield className="w-4 h-4 mr-1" />
//               <span>Code expires in {timeLeft}s</span>
//             </div>

//             {canResend ? (
//               <button
//                 onClick={handleResendOtp}
//                 className="flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
//               >
//                 <RefreshCw className="w-4 h-4 mr-1" />
//                 Resend OTP
//               </button>
//             ) : (
//               <span className="text-sm text-gray-400">
//                 Resend in {timeLeft}s
//               </span>
//             )}
//           </div>

//           {/* Allow Button */}
//           <button
//             onClick={handleAllow}
//             disabled={!isOtpComplete || isVerifying}
//             className={`
//               w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center
//               ${isOtpComplete && !isVerifying
//                 ? `bg-gradient-to-r ${currentTheme.gradient} hover:shadow-lg text-white transform hover:-translate-y-1`
//                 : 'bg-gray-200 text-gray-500 cursor-not-allowed'
//               }
//             `}
//           >
//             {isVerifying ? (
//               <>
//                 <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
//                 Authorizing...
//               </>
//             ) : (
//               <>
//                 Allow Access
//                 <ArrowRight className="w-5 h-5 ml-2" />
//               </>
//             )}
//           </button>

//           {/* Security Note */}
//           <div className="mt-6 p-4 bg-gray-50 rounded-xl">
//             <div className="flex items-start">
//               <Shield className="w-5 h-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0" />
//               <div>
//                 <h4 className="font-medium text-gray-900 mb-1">Secure Authorization</h4>
//                 <p className="text-sm text-gray-600">
//                   This OTP is valid for 5 minutes and will authorize access to your {bankName} account data.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="text-center mt-6 text-sm text-gray-500">
//           <p>Didn't receive the code? Check your spam folder</p>
//         </div>
//       </div>
//     </div>
//   );
// }
