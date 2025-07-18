"use client"

import ProtectedRouting from "../components/protectedRouting"
import React, { useState,useRef } from 'react';
import { CheckCircle, Shield, ArrowRight, Building2, CreditCard } from 'lucide-react';
import axios from "axios";
import Loading from "../components/bankLoading";
import { banks } from "../utils/banks";
import useUserStore from "../utils/userDetails";
import { PopupMessage } from "../components/popup";

const API_URL=process.env.NEXT_PUBLIC_API_URL_DEV;
const BANK_CONNECT_URL=process.env.NEXT_PUBLIC_BANK_FE;
const PAY_SPACE_URL=process.env.NEXT_PUBLIC_PAY_SPACE_URL;
const client_id=process.env.NEXT_PUBLIC_CLIENT_ID

export default function ConnectBank(){
    const [selectedBank, setSelectedBank] = useState('');
    const [isConnecting, setIsConnecting] = useState(false);
    const [connectionStatus, setConnectionState]=useState('idle')
    const [popup,setPopup]=useState(null);
    const [failedMsg,setFailedMsg]=useState({
        submessage:'',
        message:''
    });

    const [loadingState, setLoadingState] = useState('');
    const [disableButton,setDisable]=useState(false)
    const [codeSent,setCodeSent]=useState(false)
    const codeSentRef = useRef(false); 
    const [showPopup, setShowPopup] = useState(false);
    const{email}=useUserStore();

    // set the selected bank
  const handleBankSelect = (bankId:string) => {
    setSelectedBank(bankId);
  };


// entire connection handling
  const handleConnect = async () => {
    if (!selectedBank) return;

    setDisable(true)
    setCodeSent(false);
    codeSentRef.current = false;
    

    try{
        const selectedBankData = banks.find(bank => bank.id === selectedBank);

        const sendConnectReq=await axios.post(`${API_URL}/link-account`,{
            bank:selectedBankData?.urlName,
            user_email:email,
        });


        if(sendConnectReq.data.allowed){
            setIsConnecting(true);
            setConnectionState('connecting');
            setLoadingState('connecting');

            const authUrl = `${BANK_CONNECT_URL}/${selectedBankData?.urlName}/oauth/authorise?client_id=${client_id}&redirect_uri=${PAY_SPACE_URL}/connect-bank/callback&email=${email}`;

            console.log(selectedBankData?.urlName)

            // start the process of sending to bank page
            setTimeout(()=>{
                    setLoadingState('authenticating');


                const newPopup:any = window.open(
                    authUrl,
                    'bankAuth',
                    'width=500,height=600,scrollbars=yes,resizable=yes,top=100,left=100'
                );
                
                setPopup(newPopup);
            
            },1000);


            // listen for redirection thus making sure code is sent to pay space backend
            window.addEventListener("message", (event) => {
                console.log("Message received:", event.data, "from:", event.origin);

                if (event.data.status === "success") {
                    setFailedMsg({message:`Congratulations. Account added`, submessage:`Visit transaction tab to see your latest bank transactions.`})

                    setCodeSent(true);
                    codeSentRef.current = true;


                    setLoadingState("finalizing");

                    setTimeout(()=>{

                            setShowPopup(true)
                            setIsConnecting(false)
                            setDisable(false)
                            setSelectedBank('')
                        
                       },1500)

                   
                }


                else if(event.data.status === "doesnotexist"){
                    setFailedMsg({message:`No account found for ${email}`, submessage:`Create a account with ${banks.find(bank => bank.id === selectedBank)?.name} on their page.`})

                    setCodeSent(true);
                    codeSentRef.current = true;


                    setTimeout(()=>{

                            setShowPopup(true)
                            setIsConnecting(false)
                            setDisable(false)
                            setSelectedBank('')
                        
                       },1000)
                }

                else if(event.data.status==="failed"){   
                    setCodeSent(true);
                    codeSentRef.current = true;

                    setFailedMsg({submessage:'Try again later.', message:'Something went wrong!!!'})


                    setTimeout(()=>{

                            setShowPopup(true)
                            setIsConnecting(false)
                            setDisable(false)
                            setSelectedBank('')
                        
                       },1000)                    

                }
             }

             );


            setTimeout(()=>{

                if(!codeSentRef.current){
                    setFailedMsg({message:`No Response from ${banks.find(bank => bank.id === selectedBank)?.name}`, submessage:`Connection time ran out.`})
                    setShowPopup(true)
                    setIsConnecting(false)
                    setDisable(false)
                    setSelectedBank('')
                }
                
                           
             },120000)


        }

        else if(!sendConnectReq.data.allowed){
            setDisable(false)
            setCodeSent(true);
            setShowPopup(true);
            codeSentRef.current = true;
            if(sendConnectReq.data.msg==="alreadyexist"){
                setFailedMsg({message:`You already have connected your ${selectedBankData?.urlName} bank account with Pay Space.`, submessage:`Only one connection per user per bank allowed.`})
            }
            else{
                setFailedMsg({message:`${sendConnectReq.data.msg}`, submessage:``})

            }
        }

    }
    catch(err){
        alert(`Could not connect to server, try again later...`);

    }
    
  };

  const getLoadingMessage = () => {
    switch(loadingState) {
      case 'connecting': return 'Connecting to bank...';
      case 'authenticating': return 'Opening secure login...';
      case 'processing': return 'Processing your credentials...';
      case 'finalizing': return 'Finalizing connection...';
      case 'doesnotexist': return `No account found with ${email}, Go on ${banks.find(bank => bank.id === selectedBank)?.name} and make a account`
      case 'failed': return 'Something went wrong'
      default: return 'Loading...';
    }
  };

  const getLoadingSubMessage = () => {
    const bankName = banks.find(b => b.id === selectedBank)?.name;
    switch(loadingState) {
      case 'connecting': return `Establishing secure connection with ${bankName}`;
      case 'authenticating': return `Please complete login in the ${bankName} popup window`;
      case 'processing': return 'Verifying your account details securely';
      case 'finalizing': return 'Almost done! Setting up your connection...';
      case 'doesnotexist': return `Go on ${banks.find(bank => bank.id === selectedBank)?.name} and make a account`
      case 'failed':return 'Try again later'
      default: return 'Please wait...';
    }
  };


  return (
 <ProtectedRouting fallback={null}>
  <div className="w-full flex justify-start">
                <div className="flex flex-col">
                <div className="flex gap-4 text-5xl px-5 py-3 font-bold">
                    
                    <div className="bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600       bg-clip-text text-transparent font-bold">Connect your Bank Account
                    </div>
                </div>

                    <div className="text-gray-500 px-6 font-medium">
                    Securely link your bank account to access your balance and transaction history
                    </div>
                </div>
            </div>
    

    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center">


      <div className="w-full max-w-2xl">

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 backdrop-blur-sm border border-white/20">
          {/* Security Badge */}
          <div className="flex items-center justify-center mb-5">
            <div className="inline-flex items-center px-4 py-2 bg-green-50 border border-green-200 rounded-full">
              <Shield className="w-4 h-4 text-green-600 mr-2" />
              <span className="text-sm font-medium text-green-800">Bank-level Security</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {banks.map((bank) => (
              <div
                key={bank.id}
                onClick={() => handleBankSelect(bank.id)}
                className={`
                  relative p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105
                  ${selectedBank === bank.id 
                    ? `${bank.bgColor} ${bank.borderColor.replace('hover:', '')} ring-2 ring-offset-2 ring-indigo-500` 
                    : `${bank.bgColor} ${bank.borderColor}`
                  }
                `}
              >
                {/* Selection Indicator */}
                {selectedBank === bank.id && (
                  <div className="absolute top-3 right-3">
                    <CheckCircle className="w-6 h-6 text-indigo-600" />
                  </div>
                )}
                
                {/* Bank Logo */}
                <div className="text-4xl mb-3">{bank.logo}</div>
                
                {/* Bank Name */}
                <h3 className={`text-lg font-semibold ${bank.textColor}`}>
                  {bank.name}
                </h3>
                
                {/* Bank Features */}
                <div className="mt-3 space-y-1">
                  <div className="flex items-center text-sm text-gray-600">
                    <CreditCard className="w-4 h-4 mr-2" />
                    <span>Instant verification</span>
                  </div>
                </div>
                
                {/* Hover Effect */}
                <div className={`
                  absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300
                  bg-gradient-to-r ${bank.color} hover:opacity-5
                `}></div>
              </div>
            ))}
          </div>

          {/* Connect Button */}
          <button
            onClick={handleConnect}
            disabled={disableButton}
            className={`
              w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center
              ${selectedBank && !disableButton
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1'
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
              }
            `}
          >


            {disableButton ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                Connecting...
              </>
            ) : (
              <>
                Connect {selectedBank ? banks.find(b => b.id === selectedBank)?.name : 'Bank'}
                <ArrowRight className="w-5 h-5 ml-2" />
              </>
            )}
          </button>

          {/* Security Info */}
          <div className="mt-6 p-4 bg-gray-50 rounded-xl">
            <div className="flex items-start">
              <Shield className="w-5 h-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-gray-900 mb-1">Your data is secure</h4>
                <p className="text-sm text-gray-600">
                  We use bank-level encryption and never store your login credentials. 
                  You can revoke access anytime from your bank's settings.
                </p>
              </div>
            </div>
          </div>


        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-gray-500">
          <p>Powered by OAuth 2.0 • Your credentials are never shared with us</p>
        </div>


      </div>



    </div>
          <Loading message={getLoadingMessage()} subMessage={getLoadingSubMessage()} isVisible={isConnecting}/>
          {showPopup && (
          <PopupMessage 
            message={failedMsg.message}
            subMessage={failedMsg.submessage}
            onClose={() => setShowPopup(false)}
          />
        )}
    
</ProtectedRouting>

  );
};
