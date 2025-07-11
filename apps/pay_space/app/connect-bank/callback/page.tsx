"use client"
import ProtectedRouting from "@pay_space/app/components/protectedRouting";
import React, { useEffect, useState, useRef } from 'react';
import Loading from "@pay_space/app/components/bankLoading";
import { useSearchParams } from "next/navigation";
import axios from "axios"

export default function Callback(){
    const PAY_SPACE_URL_CALLBACK = process.env.NEXT_PUBLIC_PAY_SPACE_URL;
    const PAY_SPACE_API_URL = process.env.NEXT_PUBLIC_API_URL_DEV;
    
    const searchParams = useSearchParams();
    const code = searchParams.get('code');
    const user_email = searchParams.get('user_email');
    const bankName = searchParams.get('bank_name');
    
    // State to track request status
    const [isProcessing, setIsProcessing] = useState(false);
    const [hasProcessed, setHasProcessed] = useState(false);
    
    // Ref to prevent multiple simultaneous requests
    const requestInProgress = useRef(false);

    async function sendCode() {
        // Prevent multiple simultaneous requests
        if (requestInProgress.current || hasProcessed || isProcessing) {
            console.log("Request already in progress or completed, skipping...");
            return;
        }
        
        requestInProgress.current = true;
        setIsProcessing(true);
        
        try {
            const responseToken = await axios.post(`${PAY_SPACE_API_URL}/link-account/token`, {
                code: code,
                user_email: user_email,
                bankName: bankName
            }, {
                headers: {
                    "Content-Type": "application/json",
                }
            });
            
            setHasProcessed(true);
            
            if (code && window.opener && responseToken.data.done) {
                // Send the code back to the parent window
                window.opener.postMessage({ status: "success" }, `${PAY_SPACE_URL_CALLBACK}`);
                window.close();
            }
        } catch (error) {
            setHasProcessed(true);
            window.opener.postMessage({ status: "failed" }, `${PAY_SPACE_URL_CALLBACK}`);
            // @ts-ignore
            alert("Error: " + (error?.message || "Unknown error"));
            window.close();
        } finally {
            requestInProgress.current = false;
            setIsProcessing(false);
        }
    }

    useEffect(() => {
        // Only proceed if we have all required parameters and haven't processed yet
        if (code && user_email && bankName && !hasProcessed && !isProcessing) {
            sendCode();
        }
    }, [code, user_email, bankName]); // Dependencies ensure effect runs only when params change

    return (
        <ProtectedRouting fallback={null}>
            <div>
                <Loading 
                    message="Redirecting to Pay Space..." 
                    subMessage="Permission Granted" 
                    isVisible={true}
                />
            </div>
        </ProtectedRouting>
    );
}
