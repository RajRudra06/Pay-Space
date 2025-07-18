"use client"
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "./app/lib/theme-provider";


const Providers = ({children}: {children: React.ReactNode}) => {
    return (
        <>
        
            <SessionProvider refetchInterval={0} 
                             refetchOnWindowFocus={false}>
                {children}
            </SessionProvider>
                    
        </>
    )
}

export default Providers;