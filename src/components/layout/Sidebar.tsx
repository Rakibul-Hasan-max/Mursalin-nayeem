"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Home, User, List, Briefcase, Mail, MessageCircle, Menu, X } from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: User },
    { name: "Service", href: "/service", icon: List },
    { name: "Portfolio", href: "/portfolio", icon: Briefcase },
    { name: "Blog", href: "/blog", icon: Mail },
    { name: "Contact", href: "/contact", icon: MessageCircle },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-6 right-6 z-[60] p-2 bg-white rounded-md shadow-md text-[#292D46]"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside className={`w-[280px] bg-white flex flex-col justify-between fixed h-full shadow-[0_0_15px_rgba(0,0,0,0.02)] z-50 transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}>
      <div>
        {/* Logo */}
        <div className="pt-10 pb-16 px-10">
          <Link href="/" className="relative inline-block">
            <span className="absolute -top-3 -left-3 w-4 h-4 border-t-4 border-l-4 border-[#EE2A3B]"></span>
            <h1 className="text-4xl font-extrabold text-[#292D46] tracking-tight">
              Mursalin
            </h1>
            <span className="absolute -bottom-3 -right-3 w-4 h-4 border-b-4 border-r-4 border-[#EE2A3B]"></span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col w-full">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-4 px-10 py-3.5 border-b border-gray-100 text-[15px] font-semibold transition-colors ${
                  isActive
                    ? "text-[#EE2A3B] bg-gray-50/30"
                    : "text-[#292D46] hover:text-[#EE2A3B] hover:bg-gray-50/50"
                }`}
              >
                <Icon size={18} strokeWidth={2.5} />
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer */}
      <div className="p-10">
        <p className="text-[13px] text-gray-400 font-medium">
          © 2026 Mursalin Nayeem
        </p>
      </div>
    </aside>
    </>
  );
}
