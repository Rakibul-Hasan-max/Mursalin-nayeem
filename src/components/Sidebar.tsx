import { Home, User, List, Briefcase, Mail, MessageCircle } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-[280px] bg-white flex flex-col justify-between fixed h-full shadow-[0_0_15px_rgba(0,0,0,0.02)] z-10">
      <div>
        {/* Logo */}
        <div className="pt-10 pb-16 px-10">
          <div className="relative inline-block">
            <span className="absolute -top-3 -left-3 w-4 h-4 border-t-4 border-l-4 border-[#EE2A3B]"></span>
            <h1 className="text-4xl font-extrabold text-[#292D46] tracking-tight">
              Nayeem
            </h1>
            <span className="absolute -bottom-3 -right-3 w-4 h-4 border-b-4 border-r-4 border-[#EE2A3B]"></span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col w-full">
          <a href="#" className="flex items-center gap-4 px-10 py-3.5 text-[#EE2A3B] border-b border-gray-100 bg-gray-50/30 text-[15px] font-semibold">
            <Home size={18} strokeWidth={2.5} />
            Home
          </a>
          <a href="#" className="flex items-center gap-4 px-10 py-3.5 text-[#292D46] hover:text-[#EE2A3B] hover:bg-gray-50/50 border-b border-gray-100 text-[15px] font-semibold transition-colors">
            <User size={18} strokeWidth={2.5} />
            About
          </a>
          <a href="#" className="flex items-center gap-4 px-10 py-3.5 text-[#292D46] hover:text-[#EE2A3B] hover:bg-gray-50/50 border-b border-gray-100 text-[15px] font-semibold transition-colors">
            <List size={18} strokeWidth={2.5} />
            Service
          </a>
          <a href="#" className="flex items-center gap-4 px-10 py-3.5 text-[#292D46] hover:text-[#EE2A3B] hover:bg-gray-50/50 border-b border-gray-100 text-[15px] font-semibold transition-colors">
            <Briefcase size={18} strokeWidth={2.5} />
            Portfolio
          </a>
          <a href="#" className="flex items-center gap-4 px-10 py-3.5 text-[#292D46] hover:text-[#EE2A3B] hover:bg-gray-50/50 border-b border-gray-100 text-[15px] font-semibold transition-colors">
            <Mail size={18} strokeWidth={2.5} />
            Blog
          </a>
          <a href="#" className="flex items-center gap-4 px-10 py-3.5 text-[#292D46] hover:text-[#EE2A3B] hover:bg-gray-50/50 border-b border-gray-100 text-[15px] font-semibold transition-colors">
            <MessageCircle size={18} strokeWidth={2.5} />
            Contact
          </a>
        </nav>
      </div>

      {/* Footer */}
      <div className="p-10">
        <p className="text-[13px] text-gray-400 font-medium">
          © 2026 Mursalin Nayeem
        </p>
      </div>
    </aside>
  );
}
