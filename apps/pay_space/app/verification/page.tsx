"use client"

import "tailwind-config/globals.css";
import {useState} from "react"
import toast from 'react-hot-toast';
import { useRouter } from "next/navigation";
import axios from "axios";
import { signIn } from "next-auth/react";

const API_URL=process.env.NEXT_PUBLIC_API_URL_DEV;

export default function Verification(){

      interface UserDetails{
        email:string,
        number:string,
        otp:string
    }

    interface response{
      msg:string,
      done:boolean
    }

    const baseValue={
      email:"",
      number:"",
      otp:""
    }

    const [disable,setDisable]=useState(false)
    const [disableEmail,setDisableEmail]=useState<boolean>(false)
    const [disableNumber,setDisableNumber]=useState<boolean>(false)
    const [disableInput,setDisableInput]=useState<boolean>(false)
    const [userDetails,setUserDetails]=useState<UserDetails>(baseValue);
    const [select,setSelect]=useState<string>("");
    const [selectButton,setSelectButton]=useState<boolean>(false);
    const [isOtpSent,setIsOtpSent]=useState<boolean>(false)
    const [credentials,setCredentials]=useState<boolean>(false)
    const router=useRouter()

    const isValidEmail = (email: string): boolean => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    const isValidPhoneNumber = (phone: string): boolean => {
      const phoneRegex = /^\d{10}$/;
      return phoneRegex.test(phone);
    };

    const isValidOTP = (otp: string): boolean => {
      const otpRegex = /^\d{6}$/;
      return otpRegex.test(otp);
    };

    function resetForm(){
      setUserDetails(baseValue)
      setDisableInput(false)
      setDisableNumber(false)
      setDisableEmail(false)
      setSelectButton(false)  
      setIsOtpSent(false);
      setDisable(false)

    }

    async function sendOTP() {

        setDisable(true);

        if (!isValidEmail(userDetails.email)&&!disableEmail) {
        setUserDetails((prev)=>({...prev,email:""}))
        toast.error('Invalid Email');
        setDisable(false);

        return;
        }

        if(!isValidPhoneNumber(userDetails.number)&&!disableNumber){
          setUserDetails((prev)=>({...prev,number:""}))
          toast.error('Invalid Phone Number');
          setDisable(false);
          return;

        }


        if ((userDetails.otp.length < 6 || userDetails.otp.length>6 || !isValidOTP(userDetails.otp))&&selectButton) {
          toast.error("Invalid OTP");
          setUserDetails((prev)=>({...prev,otp:""}))
          setDisable(false);
          return;
        }

        if(!isOtpSent){

          const toastId = toast.loading("Sending OTP...");

          try {
          
            const responseOTP = await axios.post<response>(`${API_URL}/auth/verification`,{email:userDetails.email,type:credentials,number:userDetails.number},{headers: {
              "Content-Type": "application/json",
            }}); 

            if(responseOTP.data.done){
              toast.success("OTP sent succesfully, valid for 5 mins",{id:toastId})
              setIsOtpSent(true);
              setSelectButton(true);
              setDisable(false)
              return;
            }

            else if(!responseOTP.data.done){
              toast.error(`Error sending OTP - ${responseOTP.data.msg}`,{id:toastId})
              setDisable(false)

              return;
            }
            else{
              toast.error(`Internal Server error`,{id:toastId})
              setDisable(false)

              return;
            }
          
          } catch (error) {
            toast.error(`Unkown error occured, Please try again later`,{id:toastId})
            setDisable(false)

            return;
          } 
        }
        
        try {
          const responseVerification=await axios.post<response>(`${API_URL}/auth/verify-otp`,{email:userDetails.email,type:credentials,number:userDetails.number,otp:userDetails.otp},{headers: {
            "Content-Type": "application/json",
          }}); 

          console.log(responseVerification.data)

          if(responseVerification.data.done){
            toast.success("Verification done succesfully🎉")
            setDisable(false)
            resetForm()

            router.push("/signin")

          }

          else if(!responseVerification.data.done){
            toast.error(`Error - ${responseVerification.data.msg}`)
            setDisable(false)

          }
          else{
            toast.error(`Server Down now, try again later`)
            setDisable(false)
            resetForm()
            return;
          }
          
        } catch (error) {
          toast.error(`Unknown Error Occured, try again`)
        }
          
    }

    return (
        <div className="flex items-center justify-center h-screen px-4 bg-gray-50">
          <div className="border border-gray-300 rounded-md px-8 py-8 flex items-center gap-4 flex-col w-[90%] sm:w-[400px]">
            <div className="text-5xl font-inter font-bold text-indigo-500 text-center">
              Pay Space
            </div>
            <div className="mb-2 text-md">Verification Required</div>

            <button
                disabled={disableEmail}
                onClick={()=>{setDisableNumber(true);setDisableInput(true); setSelect("email");setCredentials(true);toast("Selected Email verification",{icon:'📍'})}}
                className={`py-2 px-5 text-sm font-manrope rounded-xl transition text-white ${
                    disableEmail ? "bg-gray-400 cursor-not-allowed" : "bg-indigo-500 hover:bg-indigo-600"
                }`}
            >
                With Email
            </button>

            <button
                disabled={disableNumber}
                onClick={()=>{setDisableEmail(true); setDisableInput(true); setSelect("number");setCredentials(false)  
                toast("Selected Phone number verification",{icon:'📍'})}}
                className={`py-2 px-5 text-sm font-manrope rounded-xl transition text-white ${
                    disableNumber ? "bg-gray-400 cursor-not-allowed" : "bg-indigo-500 hover:bg-indigo-600"
                }`}
            >
            With Phone Number
            </button>

            {disableInput?<>
                <button className="text-sm inline hover:underline hover:decoration-indigo-500 cursor-pointer text-indigo-600" onClick={()=>{resetForm();toast.success("Form Reset");setSelect("");
 }}>
                Reset
            </button>
            
            <input
              type="text"
              placeholder={select !== "" ? (disableEmail ? "Phone" : "Email") : "Credentials"} className="border border-indigo-300 rounded-md p-2 w-full outline-none bg-transparent"
              value={disableEmail?userDetails.number:userDetails.email}
              onChange={(e)=>disableEmail?setUserDetails((prev) => ({ ...prev, number: e.target.value,email:"null" })):setUserDetails((prev) => ({ ...prev, email: e.target.value,number:"null" }))}
            />

            {selectButton?<><input
              type="password"
              placeholder="Enter OTP"
              className="border border-indigo-300 rounded-md p-2 w-full outline-none bg-transparent"
              value={userDetails.otp}
              onChange={(e)=>setUserDetails((prev)=>({...prev,otp:e.target.value}))}

            /></>:null}

            <button onClick={sendOTP} className={`py-2 px-12 text-md font-manrope rounded-2xl transition text-white ${
                    disable ? "bg-gray-400 cursor-not-allowed" : "bg-indigo-500 hover:bg-indigo-600"
                }`}>
                {selectButton?"Verify":"Send OTP"}            
            </button>
    
            </>
            
            :null}
    
            <div className="text-sm">
              New to Pay Space?{" "}
              <button>
              <span onClick={()=>router.push("/signup")} className="inline hover:underline hover:decoration-indigo-500 cursor-pointer text-indigo-600 font-medium">
                Sign Up
              </span>
              </button>
             
            </div>
          </div>
        </div>
    )
}

// "use client"

// import "tailwind-config/globals.css";
// import { useState } from "react"
// import toast from 'react-hot-toast';
// import { useRouter } from "next/navigation";

// type VerificationMethod = 'email' | 'phone' | null;

// export default function Verification() {
//   const [method, setMethod] = useState<VerificationMethod>(null);
//   const [credential, setCredential] = useState("");
//   const [otp, setOtp] = useState("");
//   const [isOtpSent, setIsOtpSent] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   const isValidEmail = (email: string): boolean => {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//   };

//   const isValidPhone = (phone: string): boolean => {
//     return /^\d{10}$/.test(phone);
//   };

//   const isValidOTP = (otp: string): boolean => {
//     return /^\d{6}$/.test(otp);
//   };

//   const resetForm = () => {
//     setMethod(null);
//     setCredential("");
//     setOtp("");
//     setIsOtpSent(false);
//     setLoading(false);
//   };

//   const selectMethod = (selectedMethod: VerificationMethod) => {
//     setMethod(selectedMethod);
//     setCredential("");
//     toast.success(`Selected ${selectedMethod} verification`);
//   };

//   const handleSendOTP = async () => {
//     if (loading) return;
    
//     setLoading(true);

//     // Validate credential based on method
//     if (method === 'email' && !isValidEmail(credential)) {
//       toast.error('Please enter a valid email address');
//       setLoading(false);
//       return;
//     }

//     if (method === 'phone' && !isValidPhone(credential)) {
//       toast.error('Please enter a valid 10-digit phone number');
//       setLoading(false);
//       return;
//     }

//     try {
//       // API call to send OTP would go here
//       // const response = await sendOTPAPI(credential, method);
      
//       toast.success("OTP sent successfully");
//       setIsOtpSent(true);
//     } catch (error) {
//       toast.error("Failed to send OTP");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleVerifyOTP = async () => {
//     if (loading) return;

//     if (!isValidOTP(otp)) {
//       toast.error('Please enter a valid 6-digit OTP');
//       return;
//     }

//     setLoading(true);

//     try {
//       // API call to verify OTP would go here
//       // const response = await verifyOTPAPI(credential, otp, method);
      
//       toast.success("Verification successful!");
//       resetForm();
//       // router.push('/dashboard'); // Redirect after successful verification
//     } catch (error) {
//       toast.error("Invalid OTP");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-screen px-4">
//       <div className="border border-gray-300 rounded-md px-8 py-8 flex items-center gap-4 flex-col w-[90%] sm:w-[400px]">
//         <div className="text-5xl font-inter font-bold text-indigo-500 text-center">
//           Pay Space
//         </div>
//         <div className="mb-2 text-md">Verification Required</div>

//         {/* Method Selection */}
//         {!method && (
//           <>
//             <button
//               onClick={() => selectMethod('email')}
//               className="py-2 px-5 text-sm font-manrope rounded-xl transition text-white bg-indigo-500 hover:bg-indigo-600"
//             >
//               With Email
//             </button>
//             <button
//               onClick={() => selectMethod('phone')}
//               className="py-2 px-5 text-sm font-manrope rounded-xl transition text-white bg-indigo-500 hover:bg-indigo-600"
//             >
//               With Phone Number
//             </button>
//           </>
//         )}

//         {/* Credential Input */}
//         {method && (
//           <>
//             <button 
//               className="text-sm inline hover:underline hover:decoration-indigo-500 cursor-pointer text-indigo-600" 
//               onClick={() => {
//                 resetForm();
//                 toast.success("Form reset");
//               }}
//             >
//               Reset
//             </button>
            
//             <input
//               type="text"
//               placeholder={method === 'email' ? 'Enter email address' : 'Enter phone number'}
//               className="border border-indigo-300 rounded-md p-2 w-full outline-none bg-transparent"
//               value={credential}
//               onChange={(e) => setCredential(e.target.value)}
//               disabled={isOtpSent}
//             />

//             {/* OTP Input */}
//             {isOtpSent && (
//               <input
//                 type="password"
//                 placeholder="Enter 6-digit OTP"
//                 className="border border-indigo-300 rounded-md p-2 w-full outline-none bg-transparent"
//                 value={otp}
//                 onChange={(e) => setOtp(e.target.value)}
//                 maxLength={6}
//               />
//             )}

//             <button 
//               onClick={isOtpSent ? handleVerifyOTP : handleSendOTP}
//               disabled={loading || !credential}
//               className={`py-2 px-12 text-md font-manrope rounded-2xl transition text-white ${
//                 loading || !credential 
//                   ? 'bg-gray-400 cursor-not-allowed' 
//                   : 'bg-indigo-500 hover:bg-indigo-600'
//               }`}
//             >
//               {loading ? 'Processing...' : (isOtpSent ? 'Verify OTP' : 'Send OTP')}
//             </button>
//           </>
//         )}

//         <div className="text-sm">
//           New to Pay Space?{" "}
//           <button onClick={() => router.push("/signup")}>
//             <span className="inline hover:underline hover:decoration-indigo-500 cursor-pointer text-indigo-600 font-medium">
//               Sign Up
//             </span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }