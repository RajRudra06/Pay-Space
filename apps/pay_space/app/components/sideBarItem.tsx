import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SideBarContext } from "./sideBar";
import { useContext } from "react"
import { Divide } from "lucide-react";

interface sideBarProps {
    text: string,
    logo: ReactNode,
    link: string
}

export default function SideBarItem({ text, logo, link }: sideBarProps) {
    const pathname = usePathname();
    // @ts-ignore
    const { expanded } = useContext(SideBarContext)
    
    const isActive = pathname === link || (link !== '/' && pathname.startsWith(link));
    
    return (
        <Link
            href={link}
            className={`flex items-center gap-2 ${expanded ? "px-3 py-3" : "justify-center w-11 h-11 mx-auto my-1"} text-sm rounded-lg cursor-pointer font-medium transition-colors group duration-150 ${
                isActive
                    ? 'bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 text-white shadow-sm'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
            }`}
        >
            <div className="flex-shrink-0 flex items-center justify-center">
                {logo}
            </div>
            <span className={`overflow-hidden font-bold transition-all whitespace-nowrap ${expanded ? "w-50 opacity-100" : "w-0 opacity-0"}`}>
                {text}
            </span>
            
            {!expanded&& <div className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible gourp-hover:opacity-100 group-hover:translate-x-0`}></div> }
        </Link>
    )
}