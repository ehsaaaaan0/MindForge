"use client";

import { usePathname } from "next/navigation";

interface HeaderContainerProps {
  children: React.ReactNode;
}

export function HeaderContainer({ children }: HeaderContainerProps) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-16 border-b border-white/6 backdrop-blur-md transition-colors duration-200 ${
        isHome ? "bg-white/7" : "bg-[#000000]"
      }`}
    >
      {children}
    </header>
  );
}
