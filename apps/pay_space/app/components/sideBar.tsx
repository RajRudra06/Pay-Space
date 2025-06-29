import Image from "next/image"
import { ReactNode } from "react"
import { useState } from "react";
import Link from "next/link";
import { ChevronFirst, MoreVertical, LogOut, Bell, UserCog, ChevronLastIcon } from "lucide-react"
import UserLogo from "./userLogo";
import useUserStore from "@pay_space/app/utils/userDetails";
import useSignOut from "../utils/signout";
import { createContext, useEffect, useRef } from "react";
import Router from "next/router";
import { fa } from "zod/v4/locales";

// @ts-ignore
export const SideBarContext = createContext();

export default function SideBar({ children }: { children: ReactNode }) {
  const { username, email } = useUserStore();
  const [showPopup, setShowPopup] = useState(false);
  const SignOut = useSignOut()
  const [expanded, setExpanded] = useState(true)
  const popupRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {

    checkScreenSize();
    function handleClickOutside(event: MouseEvent) {
      if (popupRef.current && 
          buttonRef.current && 
          !popupRef.current.contains(event.target as Node) && 
          !buttonRef.current.contains(event.target as Node)) {
        setShowPopup(false);
      }
    }

    if (showPopup) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [showPopup]);

  const togglePopup = () => {
    setShowPopup(prev => !prev);
  };

  const handleProfileClick = () => {
    
  };

  function checkScreenSize(){
    if(window.innerWidth>786){
      setExpanded(true);
    }
    else{
      setExpanded(false)
    }
  }

  const handleNotificationsClick = () => {
    console.log("Notifications clicked");
    setShowPopup(false);
  };

  const handleLogout = () => {
    SignOut();
    setShowPopup(false);
  };

  window.addEventListener("resize", checkScreenSize);


  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-gray-100 border-r shadow-sm justify-between">
        <div className="flex flex-col gap-8">
          <div  className="p-3 pb-2 flex justify-between items-center">
            <Link href="/" className="flex gap-2 items-center min-w-0">
              <Image 
                src="/logo.png" 
                alt="PaySpace Logo" 
                width={35} 
                height={35} 
                className={`flex-shrink-0 overflow-hidden transition-all ${expanded ? "rounded-full w-10 h-10" : "w-0"}`}
              />
              {expanded && <div className="font-bold text-xl truncate">Pay Space</div>}
            </Link> 
            <button 
              onClick={() => setExpanded(curr => !curr)} 
              className="p-1 rounded-lg bg-gray-300 hover:bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 text-white shadow-sm flex-shrink-0"
            >
              {expanded ? <ChevronFirst size={24} /> : <ChevronLastIcon size={24} />}
            </button>
          </div>
          
          <SideBarContext.Provider value={{ expanded }}>
            <ul className={`flex flex-col ${expanded ? "px-2" : "px-2"} space-y-1`}>
              {children}
            </ul>
          </SideBarContext.Provider>
        </div>

        <div className="border-t flex p-2 relative">
          <div className="flex-shrink-0">
            <UserLogo username={username} />
          </div>
          <div className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-40 ml-2" : "w-0"}`}>
            <div className="leading-4">
              <h4 className="font-semibold text-sm">{username}</h4>
              <span className="text-[12px] text-gray-600 block">{email}</span>
            </div>
            
            <button 
              ref={buttonRef}
              onClick={togglePopup}
              className="p-1 rounded-md hover:bg-gray-100 transition-colors"
            >
              <MoreVertical size={20} />
            </button>
          </div>

          {/* Popup Panel */}
          {showPopup && (
            <div 
              ref={popupRef}
              className="absolute -bottom-[-54px] -right-[320px] mb-2 bg-white shadow-xl border border-gray-200 rounded-lg py-1 w-64 z-50 animate-in fade-in-0 zoom-in-95 slide-in-from-bottom-2"
            >
              {/* User Info Section */}
              <div className="px-3 py-2 flex items-center gap-3">
                <div className="flex-shrink-0">
                  <UserLogo username={username} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm text-gray-900 truncate">{username}</h4>
                  <span className="text-xs text-gray-500 truncate block">{email}</span>
                </div>
              </div>
              
              {/* Divider */}
              <div className="h-px bg-gray-200 my-1"></div>
              
              {/* Menu Items */}
              <div className="py-1">
                <Link href="/profile"
                  onClick={()=>setShowPopup(false)}

                  className="w-full px-3 py-2 flex items-center gap-3 hover:bg-gray-50 transition-colors text-left text-sm text-gray-700"
                >
                  <UserCog size={16} className="text-gray-500" />
                  <span>Profile Settings</span>
                </Link>
                
                <button 
                  onClick={()=>setShowPopup(false)}
                  className="w-full px-3 py-2 flex items-center gap-3 hover:bg-gray-50 transition-colors text-left text-sm text-gray-700"
                >
                  <Bell size={16} className="text-gray-500" />
                  <span>Notifications</span>
                </button>
              </div>
              
              {/* Divider */}
              <div className="h-px bg-gray-200 my-1"></div>
              
              {/* Logout */}
              <div className="py-1">
                <button 
                  onClick={()=>{setShowPopup(false);SignOut();}}
                  className="w-full px-3 py-2 flex items-center gap-3 hover:bg-red-50 transition-colors text-left text-sm text-red-600"
                >
                  <LogOut size={16} className="text-red-500" />
                  <span>Log out</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </aside>
  );
}
