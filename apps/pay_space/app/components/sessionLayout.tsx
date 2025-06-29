"use client";

import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import SideBar from "./sideBar";
import NavBar from "./NavBar";
import { ReactNode } from "react";
import SideBarItems from "./SideBarItems";

export default function SessionLayout({ children }: { children: ReactNode }) {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const isRootPage = pathname === '/';
  
  const authPages = ['/signin', '/signup', '/verification'];
  const isAuthPage = authPages.some(page => pathname.startsWith(page));
  
  const navBarPages = ['/', '/about','/connect-bank','/transfer','/transactions','/payments-methods','/profile','/balance'];
  const shouldShowNavBar = navBarPages.includes(pathname);

  if (status === "loading") {
    return null; 
  }

  if (isAuthPage) {
    return (
      <div className="min-h-screen">
        <main className="p-4">{children}</main>
      </div>
    );
  }

  if (session) {
    return (
      <div className="flex min-h-screen">
        <SideBar>
            <SideBarItems />
        </SideBar>
        <main className="flex-1 p-4">{children}</main>
      </div>
    );
  }

  if (!session && shouldShowNavBar) {
    return (
      <div className="min-h-screen">
        <NavBar />
        <main className="p-4">{children}</main>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <main className="p-4">{children}</main>
    </div>
  );
}