"use client"
import { Bank_name } from "@repo/db_banks/src/generated/prisma/client";
import { signOut, useSession } from "next-auth/react";
import { useParams } from "next/navigation"
import Landing from "../../components/landing";
import { useEffect, useState, useMemo } from "react"
import { bankThemes } from "../../utils/bankThemes";
import Loading from "pay_space/app/components/bankLoading";
import { Shield, ChevronRight, Clock, Building2, CreditCard, Smartphone, Users, Award } from "lucide-react";
import { AccountOpeningForm } from "../../components/accountForm";
import { z } from "zod";
import { CustomSession } from "@repo/next-auth_types";
import { useRouter } from "next/navigation";
import UserProfile from "../../components/myProfile";
import { userAccountSchema,userProfileSchema } from "../../lib/userDetailSchema";
import { toast } from "react-hot-toast";
import axios from "axios"
import { AddMoneyPopup } from "../../components/addMoney";
import { CheckBalancePopup } from "../../components/checkBalance";
import { TransferFundsForm } from "../../components/transferFunds";
import { DebitCardApplicationForm } from "../../components/issueCard";

const NEXT_PUBLIC_API_URL=process.env.NEXT_PUBLIC_API_URL;

type UserAccountType=z.infer<typeof userAccountSchema>
type UserProfileType = z.infer<typeof userProfileSchema>;

export default function Home() {
    const params = useParams();
    const router=useRouter();
    const { data: session, status } = useSession();
    const bankName = params.bank as Bank_name;
    const bankLowerCase=bankName.toLowerCase();
    const [showAccountForm, setShowAccountForm] = useState(false);
    const [showAddMoneyForm,setShowAddMoneyForm]=useState(false);
    const [showTransferForm,setShowTransferForm]=useState(false);
    const [showDebitCardForm,setShowDebitCardForm]=useState(false);
    const [loading,setIsLoading]=useState(true)
    const [userInfo,setUserInfo]=useState<UserProfileType>()
    const [userAccounts,setUserAccounts]=useState<UserAccountType[]>([])
    const [showCheckBalance,setShowCheckBalance]=useState(false);


    const customSession = session as CustomSession;

    async function getDetails() {
        const toastGetDetails = toast.loading("Getting your details...")
        try {
            const res = await axios.get(`${NEXT_PUBLIC_API_URL}/${bankLowerCase}/getDetails`);

            if (res.data.done) {
                setUserAccounts(res.data.accounts)
                setUserInfo(res.data.user)
                toast.success("Details fetched", { id: toastGetDetails })
            } else {
                toast.error("Error fetching details, try again later", { id: toastGetDetails })
            }
        } catch (error) {
            toast.error("Something unexpected happened, try again later...", { id: toastGetDetails })
        } finally {
            // Always set loading to false, regardless of success or failure
            setIsLoading(false)
        }
    }

    // Fixed useEffect - removed userAccounts and userInfo from dependencies to prevent infinite loop
    useEffect(() => {
        if (status === "authenticated" && customSession.user.loggedBank === bankName) {
            getDetails()
        } else if (status === "authenticated" || status === "unauthenticated") {
            setIsLoading(false)
        }
    }, [status, bankName, customSession?.user?.loggedBank]) // Only depend on authentication status and bank changes

    
    // Map URL params to full bank names for theme lookup
    const getBankDisplayName = (bank: Bank_name): string => {
        // @ts-ignore
        const mapping: Record<Bank_name, string> = {
            'icici': 'ICICI Bank',
            'sbi': 'State Bank of India',
            'hdfc': 'HDFC Bank',
            'ubi': 'Union Bank of India'
        };
        return mapping[bank]
    };
    const [selectedBank, setSelectedBank] = useState(getBankDisplayName(bankLowerCase as Bank_name));
    const [showProfile, setShowProfile] = useState(false);
    const [hoveredCard, setHoveredCard] = useState<string | null>(null);

    // @ts-ignore
    const theme = bankThemes[selectedBank];

    const services = [
        {
            id: 'account',
            title: 'Open Bank Account',
            description: 'Start your banking journey with us. Open a savings or current account in minutes.',
            icon: Building2,
            features: ['Zero balance account', 'Instant account number', 'Digital KYC'],
            color: 'bg-white',
            shadow: 'shadow-lg hover:shadow-xl'
        },
        {
            id: 'card',
            title: 'Issue Debit/Credit Card',
            description: 'Get your personalized debit or credit card with exclusive benefits.',
            icon: CreditCard,
            features: ['Contactless payments', 'Global acceptance', 'Reward points'],
            color: 'bg-white',
            shadow: 'shadow-lg hover:shadow-xl'
        },
        {
            id: 'netbanking',
            title: 'Activate Net Banking',
            description: 'Manage your finances 24/7 with our secure online banking platform.',
            icon: Smartphone,
            features: ['Bill payments', 'Fund transfers', 'Account statements'],
            color: 'bg-white',
            shadow: 'shadow-lg hover:shadow-xl'
        }
    ];

    const stats = [
        { icon: Users, value: '50M+', label: 'Happy Customers' },
        { icon: Building2, value: '15K+', label: 'Branches' },
        { icon: Shield, value: '99.9%', label: 'Security Rating' },
        { icon: Award, value: '#1', label: 'Trusted Bank' }
    ];

    const quickActions = [

        {
            id: 'checkBalance',
            title: 'Check Balance',

        },
        {
            id: 'statement',
            title: 'Mini Statement',

        },
        {
            id: 'fundTransfer',
            title: 'Fund Transfer',

        },
        {
            id: 'addMoney',
            title: 'Add Money',

        }
    ];

    const handleServiceClick = (serviceId:any) => {
      if (serviceId === 'account') {
        setShowAccountForm(true);
      }

      if(serviceId==='card'){
        setShowDebitCardForm(true);
      }

    };

    const handleQuickActionClick=(quickActionId:any)=>{
        if(quickActionId==='addMoney'){
            setShowAddMoneyForm(true);
        }

        if(quickActionId==='checkBalance'){
            setShowCheckBalance(true)
        }

        if(quickActionId==='fundTransfer'){
            setShowTransferForm(true)
        }
        
    }

    if (status === "loading" || loading) {
      return <Loading isVisible={true}  subMessage="connecting to bank servers..." message="Loading"/>;
    }

    if (status == "unauthenticated") {
        return (
            <div className="">
                <Landing bank={bankName} />
            </div>
        )
    }

    function signInToUnauthenticatedBank(){
             router.push(`/${bankName}/signin`)
    }

   
if (status === "authenticated" && customSession.user.loggedBank !== bankName && loading == false) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 shadow-sm">
    <div className="text-center space-y-4 p-8">
      {/* Icon */}
      <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      </div>
      
      {/* Text */}
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-gray-800">
          Not Logged In
        </h3>
        <p className="text-gray-600 text-sm max-w-md">
          You need to authenticate with this bank to access your account information
        </p>
      </div>
      
      {/* Login Button */}
      <button onClick={signInToUnauthenticatedBank} className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
        Login to Bank
      </button>
    </div>
  </div>
)
}

    // Safety check for theme
    if (!theme) {
        return <div>
          <Loading />
        </div>
    }

    return (
        <div className={`min-h-screen bg-gradient-to-br ${theme.bgGradient}`}>
            {/* Header */}
            <div className={`bg-gradient-to-r ${theme.gradient} text-white shadow-lg`}>
                <div className="container mx-auto px-6 py-8">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <span className="text-4xl">{theme.logo}</span>
                            <div>
                                <h1 className="text-3xl font-bold">{selectedBank}</h1>
                                <p className="text-white/80">Your trusted banking partner</p>
                            </div>
                        </div>

                        {/* Bank Selector for Demo */}
                        <div className="flex space-x-2">
                                <button             onClick={() => setShowProfile(true)}

                                    
                                    className={`px-3 py-1 rounded-full text-lg transition-all text-gray-100  hover:text-gray-200 hover:underline`}

                                >
                                    My Profile                                
                                </button>
                                <button
                              className={`px-3 py-1 rounded-full text-lg transition-all text-gray-100  hover:text-gray-700 hover:underline`}

                            >
                                About
                            </button>
                            <button onClick={() => signOut({ callbackUrl: `/${bankName}/signin` })}
                        className={`px-3 py-1 rounded-full text-lg transition-all text-gray-100  hover:text-gray-700 hover:underline`}

                        >
                          Logout
                        </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 py-12">
                {/* Welcome Section */}
                <div className="text-center mb-16">
                    <h2 className={`text-4xl font-bold ${theme.textColor} mb-4`}>
                        Welcome to Digital Banking
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Experience seamless banking with our comprehensive digital solutions.
                        Get started with any of our services below.
                    </p>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                            <stat.icon className={`h-8 w-8 ${theme.textColor} mx-auto mb-3`} />
                            <div className={`text-2xl font-bold ${theme.textColor}`}>{stat.value}</div>
                            <div className="text-gray-600 text-sm">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Main Services */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className={`${service.color} rounded-2xl p-8 ${service.shadow} transition-all duration-300 cursor-pointer group ${theme.borderColor} border-2`}
                            onMouseEnter={() => setHoveredCard(service.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${theme.gradient} mb-6`}>
                                <service.icon className="h-8 w-8 text-white" />
                            </div>

                            <h3 className={`text-xl font-bold ${theme.textColor} mb-3`}>
                                {service.title}
                            </h3>

                            <p className="text-gray-600 mb-6">
                                {service.description}
                            </p>

                            <ul className="space-y-2 mb-6">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-sm text-gray-600">
                                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${theme.gradient} mr-3`}></div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button                   onClick={() => handleServiceClick(service.id)}

                            className={`w-full bg-gradient-to-r ${theme.gradient} text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all group-hover:shadow-lg`}>
                                <span>Get Started</span>
                                <ChevronRight className={`h-4 w-4 transition-transform ${hoveredCard === service.id ? 'translate-x-1' : ''}`} />
                            </button>
                        </div>
                    ))}
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
                    <h3 className={`text-2xl font-bold ${theme.textColor} mb-6 text-center`}>
                        Quick Actions
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {quickActions.map((action, index) => (
                            <button onClick={() => handleQuickActionClick(action.id)}

                                key={index}
                                className={`p-4 rounded-lg border-2 ${theme.borderColor} hover:bg-gradient-to-r hover:${theme.gradient} hover:text-gray-500 transition-all duration-300 text-gray-700 hover:border-transparent`}
                            >
                                {action.title}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Security Banner */}
                <div className={`bg-gradient-to-r ${theme.gradient} rounded-2xl p-8 text-white text-center`}>
                    <Shield className="h-12 w-12 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Bank-Grade Security</h3>
                    <p className="text-white/90 max-w-2xl mx-auto">
                        Your financial data is protected with 256-bit encryption, multi-factor authentication,
                        and continuous monitoring. Bank with confidence.
                    </p>
                    <div className="flex justify-center items-center mt-4 space-x-6">
                        <div className="flex items-center space-x-2">
                            <Clock className="h-5 w-5" />
                            <span>24/7 Support</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Shield className="h-5 w-5" />
                            <span>SSL Secured</span>
                        </div>
                    </div>
                </div>
            </div>

            {showAccountForm && (
  <AccountOpeningForm  bankName={bankName}
    onClose={() => setShowAccountForm(false)} 
    theme={theme} 
  />
)}

{showProfile && (
        <UserProfile  bankName={bankName}
          onClose={() => setShowProfile(false)} 
          theme={theme} bankAccounts={userAccounts} user={userInfo!}
        />
      )}

      {showAddMoneyForm&&
      <AddMoneyPopup userAccounts={userAccounts} onClose={()=>setShowAddMoneyForm(false)} theme={theme} bankName={bankName} />

      }

      {showTransferForm&&<TransferFundsForm  bankAccounts={userAccounts}bankName={bankName} theme={theme} onClose={()=>setShowTransferForm(false)} />}

      {showCheckBalance&&<CheckBalancePopup userAccounts={userAccounts} onClose={()=>setShowCheckBalance(false)} theme={theme} bankName={bankName}/>}

      {showDebitCardForm&& <DebitCardApplicationForm bankAccounts={userAccounts} bankName={bankName} theme={theme} onClose={()=>setShowDebitCardForm(false)}/> }
    </div>
  );
};