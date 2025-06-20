"use client";

import "tailwind-config/globals.css";
import {useState} from "react"
import toast from 'react-hot-toast';
import axios from 'axios';
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const API_URL=process.env.NEXT_PUBLIC_API_URL_DEV;


export default function SignIn() {
    interface UserDetails{
        email:string,
        password:string,
    }

    interface response{
      msg:string,
      done:boolean
    }

    const baseValue={
        email:"",
        password:"",
    }

   const [userDetails,setUserDetails]=useState<UserDetails>(baseValue);
   const [disable,setDisable]=useState(false)
   const router = useRouter();


    const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
    };

    const isFormValid = Object.values(userDetails).every((val) => val.trim() !== "");

    async function signin(ev:any){
         ev.preventDefault();
         console.log("userDetails:", userDetails);
         console.log("isFormValid:", isFormValid);
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

          if (userDetails.password.length < 6) {
            toast.error("Password must be at least 6 characters");
            setUserDetails(curr => ({ ...curr, password: ""}));
            setDisable(false);

            return;
          }

          else{
            setDisable(false);

              try {
                const toastId = toast.loading("Signing you in...");
                const res = await signIn("credentials", {
                    redirect: false, 
                    email: userDetails.email,
                    password: userDetails.password,
                });

                if (res?.ok) {
                  toast.success("Signed in successfully",{id:toastId})
                                      
                  setUserDetails(baseValue);
                    router.push("/"); 
                  } else {
                    toast.error(
                      res?.error === "UserNotFound"
                        ? "No user found, Sign Up now"
                        : res?.error === "NotVerified"
                        ? "User not verified, Verify now"
                        : res?.error === "InvalidCredentials"
                        ? "Invalid Credentials"
                        : "Unknown error"
                    );
                    
                  }
                  
              } catch (error) {
                toast.error("Error Signing in, try again later")
              }
              
            return;
          }
    }

  return (
    <div className="flex items-center justify-center h-screen px-4">
      <div className="border border-gray-300 rounded-md px-8 py-8 flex items-center gap-4 flex-col w-[90%] sm:w-[400px]">
        <div className="text-5xl font-inter font-bold text-indigo-500 text-center">
          Pay Space
        </div>
        <div className="mb-5 text-xl">Sign In</div>

        <input
          type="text"
          placeholder="Email"
          className="border border-indigo-300 rounded-md p-2 w-full outline-none bg-transparent"
          value={userDetails.email}
          onChange={(e)=>setUserDetails((prev) => ({ ...prev, email: e.target.value }))}
        />

        <input
          type="password"
          placeholder="Password"
          className="border border-indigo-300 rounded-md p-2 w-full outline-none bg-transparent"
          value={userDetails.password}
          onChange={(e)=>setUserDetails((prev) => ({ ...prev, password: e.target.value }))}
        />

        <button onClick={signin} disabled={disable} className="bg-indigo-500 text-white py-2 px-12 text-xl font-manrope rounded-3xl hover:bg-indigo-600 transition">
          Sign In
        </button>

        <div className="text-sm">
          New to Pay Space?{" "}
          <button onClick={() => router.push("/signup")}>
          <span className="inline hover:underline hover:decoration-indigo-500 cursor-pointer text-indigo-600 font-medium">
            Sign Up
          </span>
          </button>
         
        </div>
      </div>
    </div>
  );
}
