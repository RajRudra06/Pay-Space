"use client"
import {useState} from "react"
import "tailwind-config/globals.css";
import Image from "next/image";
import { useSession } from "next-auth/react"
import useSignOut from "../utils/signout";
import useUserStore from "@pay_space/app/utils/userDetails";
import Link from "next/link";

function NavBar() {
    const SignOut=useSignOut()
    const { data: session,status } = useSession();
    const { username } = useUserStore();
    const [open,setOpen]=useState(false);

    if(status=="loading"){
        return(
            <div className='sticky w-full h-16 md:h-16 flex justify-between items-center'>

            <Link href="/" className='flex items-center gap-4 text-2xl font-bold px-10'>
                <span >
                <Image src="/logo.png" alt="PaySpace Logo" width={40} height={40} />
                </span>
                <span>Pay Space</span>
            </Link>

            <div>Loading...</div>
        </div>

        )
    }

    
    return(
        <>
        <div className='sticky w-full h-16 md:h-16 flex justify-between items-center gap-10'>

            <Link href="/" className='flex items-center gap-4 text-2xl font-bold px-10'>
                <span >
                <Image src="/logo.png" alt="PaySpace Logo" width={40} height={40} />
                </span>
                <span>Pay Space</span>
            </Link>

            {/* DeskTop View */}
            <div className='hidden md:flex md:justify-between items-center md:px-5 md:gap-5 font-sans'>

                <Link href="/about" className='bg-indigo-500 rounded-md px-2 py-1 text-sm text-white whitespace-nowrap'>About</Link>

            
                {session?<>
                    <Link href="/profile" className='bg-indigo-500 rounded-md px-2 py-1 text-sm text-white whitespace-nowrap' >My Profile  
                    <span className="text-sm text-black font-bold">{username}</span></Link>
                    <button className='bg-indigo-500 rounded-md px-2 py-1 text-sm text-white whitespace-nowrap' onClick={SignOut}>Signout 
                        </button></>:<><Link href="/signin" className='bg-indigo-500 rounded-md px-2 py-1 text-sm text-white whitespace-nowrap'>
  <button>Sign In</button>
</Link></>
                }        
                    
            </div>

            {/* Mobile View */}
            <div className='md:hidden'>

                <div className='cursor-pointer text-3xl' onClick={()=>setOpen((prev)=>!prev)}>
                {open?"x":"≡"}
                </div>
    
            </div>

        </div>

        <div>
            {open ? (
                <div className='md:hidden flex justify-center items-center flex-col gap-8 xl:gap-12 h-screen font-medium text-lg transition-transform duration-500 transform translate-x-0'>
                       
                       <Link href="/about" className='bg-indigo-500 rounded-md px-2 py-1 text-sm text-white whitespace-nowrap'>About</Link>

                        {session?<>
                <Link href="/profile" className='bg-indigo-500 rounded-md px-2 py-1 text-sm text-white whitespace-nowrap' >My Profile ({username})</Link>
                    <button className='bg-indigo-500 rounded-md px-2 py-1 text-sm text-white whitespace-nowrap' onClick={SignOut}>Signout 
                        </button></>:<><Link href="/signin" className='bg-indigo-500 rounded-md px-2 py-1 text-sm text-white whitespace-nowrap'>
  Sign In
</Link></>
                }        
                    
                </div>
            ) : (
                <div className='md:hidden flex justify-center items-center flex-col gap-8 xl:gap-12 h-screen font-medium text-lg transition-transform duration-500 transform -translate-x-full'>
                </div>
            )}  
        </div>
        </>
    
    )
    
}

export default NavBar;
