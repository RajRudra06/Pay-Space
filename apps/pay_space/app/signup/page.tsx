"use client";

import "tailwind-config/globals.css";
import {useState} from "react"
import toast from 'react-hot-toast';
import axios from 'axios';
import { useRouter } from "next/navigation";


const API_URL=process.env.NEXT_PUBLIC_API_URL_DEV;


export default function SignUp() {
    interface UserDetails{
        email:string,
        username:string,
        password:string,
        number:string,
        confirmpassword:string
    }

    interface response{
      msg:string,
      done:boolean
    }

    const baseValue={
        email:"",
        username:"",
        password:"",
        number:"",
        confirmpassword:""
    }

   const [userDetails,setUserDetails]=useState<UserDetails>(baseValue);
   const [disable,setDisable]=useState(false)
   const router=useRouter();

    const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
    };

    const isValidPhoneNumber = (phone: string): boolean => {
      const phoneRegex = /^\d{10}$/;
      return phoneRegex.test(phone);
    };
    
    const isFormValid = Object.values(userDetails).every((val) => val.trim() !== "");

    async function signup(ev:any){
         ev.preventDefault();
         setDisable(true);

         if(!isFormValid){
          toast.error('Please fill all the fields');
          setDisable(false);

          return;
         }

         if (!isValidEmail(userDetails.email)) {
          setUserDetails(currUserDetail=>({...currUserDetail,email:""}))
          toast.error('Email is invalid');
          setDisable(false);

          return;
          }
          if(!isValidPhoneNumber(userDetails.number)){
            setUserDetails(currUserDetail=>({...currUserDetail,number:""}))
            toast.error('Phone number is invalid');
            setDisable(false);

            return;
          }

          if (userDetails.password.length < 6) {
            toast.error("Password must be at least 6 characters");
            setUserDetails(curr => ({ ...curr, password: "", confirmpassword: "" }));
            setDisable(false);

            return;
          }

          else{
            if(userDetails.password==userDetails.confirmpassword){ 
              try {
                setDisable(false);
                toast.success("Signing you up...")

                const response = await axios.post<response>(`${API_URL}/user/signup`,{email:userDetails.email,username:userDetails.username,password:userDetails.password,number:userDetails.number},{headers: {
                  "Content-Type": "application/json",
                }}); 
                if(response.data.done){
                  toast.success("Sign Up Successful 🎉, Verification Required..")
                  router.push("/verification")
                  setUserDetails(baseValue)
                }
                else if(!response.data.done){
                  toast.error(`Error Signing up,${response.data.msg}`)
                }
                else if(response.data.done==-1){
                  throw new Error("To catch block");
                }
              } catch (error) {
                toast.error("Error Signing up, try again later")
              }
              
              }
  
          else{
            toast.error('Confirm password correctly');
            setUserDetails(currUserDetail=>({...currUserDetail,password:"",confirmpassword:""}))
            setDisable(false);

            return 
          }
          }
    }

  return (
    <div className="flex items-center justify-center h-screen px-4">
      <div className="border border-gray-300 rounded-md px-8 py-8 flex items-center gap-4 flex-col w-[90%] sm:w-[400px]">
        <div className="text-5xl font-inter font-bold text-indigo-500 text-center">
          Pay Space
        </div>
        <div className="mb-5 text-xl">Sign Up</div>

        <input
          type="text"
          placeholder="Username"
          className="border border-indigo-300 rounded-md p-2 w-full outline-none bg-transparent"
          value={userDetails.username}
          onChange={(e)=>setUserDetails((prev) => ({ ...prev, username: e.target.value }))}
        />

        <input
          type="text"
          placeholder="Email"
          className="border border-indigo-300 rounded-md p-2 w-full outline-none bg-transparent"
          value={userDetails.email}
          onChange={(e)=>setUserDetails((prev) => ({ ...prev, email: e.target.value }))}
        />

        <input
          type="text"
          placeholder="Phone number"
          className="border border-indigo-300 rounded-md p-2 w-full outline-none bg-transparent"
          value={userDetails.number}
          onChange={(e)=>setUserDetails((prev) => ({ ...prev, number: e.target.value }))}
        />

        <input
          type="password"
          placeholder="Password"
          className="border border-indigo-300 rounded-md p-2 w-full outline-none bg-transparent"
          value={userDetails.password}
          onChange={(e)=>setUserDetails((prev) => ({ ...prev, password: e.target.value }))}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="border border-indigo-300 rounded-md p-2 w-full outline-none bg-transparent"
          value={userDetails.confirmpassword}
          onChange={(e)=>setUserDetails((prev) => ({ ...prev, confirmpassword: e.target.value }))}
        />

        <button onClick={signup} disabled={disable} className="bg-indigo-500 text-white py-2 px-12 text-xl font-manrope rounded-3xl hover:bg-indigo-600 transition">
          Sign Up
        </button>

        <div className="text-sm">
          Already Signed Up?{" "}
          <button onClick={() => router.push("/signin")}>
          <span className="inline hover:underline hover:decoration-indigo-500 cursor-pointer text-indigo-600 font-medium">
            Log In
          </span>
          </button>
         
        </div>
      </div>
    </div>
  );
}
