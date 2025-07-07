"use client"
import ProtectedRouting from "@pay_space/app/components/protectedRouting";
import React, { useEffect, useState } from 'react';
import Loading from "@pay_space/app/components/bankLoading";
import { useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";


export default function Callback(){

    const PAY_SPACE_URL_CALLBACK=process.env.NEXT_PUBLIC_PAY_SPACE_URL;


    const [currState,setCurrState]=useState(false);
    const searchParams=useSearchParams();
    const code=searchParams.get('code');
    const {data:session,status}=useSession();

    function sendCode(){

        try {
            // be call to pay space to send code 

            if (code && window.opener) {
                // Send the code back to the parent window
                window.opener.postMessage({ status: "success"},`${PAY_SPACE_URL_CALLBACK}`);
                window.close(); 

              }
    } catch (error) {
        
    }

}
    useEffect(()=>{

        setTimeout(()=>{
            sendCode();
        },3000);

    },[code])

    
    return(
        <ProtectedRouting fallback={null}>
            <div>   

                <Loading message="Redirecting to Pay Space..." subMessage="Permission Granted" isVisible={true}/>
            </div>
        </ProtectedRouting>

    )
}