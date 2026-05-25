import Image from "next/image";
import {
  Home,
  User,
  List,
  Briefcase,
  Mail,
  MessageCircle,
} from "lucide-react";

const TwitterIcon = () => (
  <svg xmlns="http://www.20w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
  </svg>
);

export default function Page() {
  return (
    <div className="flex min-h-screen bg-[#F6F7FB] font-sans">
      {/* Sidebar */}
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

      {/* Main Content */}
      <main className="flex-1 ml-[280px] flex flex-col items-center justify-center min-h-screen">
        <div className="flex flex-col items-center -mt-10">
          {/* Profile Picture Container */}
          <div className="relative w-[280px] h-[280px] rounded-full p-4 bg-white/40 shadow-[0_8px_30px_rgba(0,0,0,0.04)] mb-8 flex items-center justify-center">
            <div className="w-full h-full rounded-full overflow-hidden border-[6px] border-white bg-white">
              <Image
                src="/images/pic1.png"
                alt="Upvesh Kumar"
                width={250}
                height={250}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Name & Title */}
          <h2 className="text-[40px] font-bold text-[#292D46] mb-2 tracking-tight">
            Mursalin Nayeem
          </h2>
          <p className="text-[17px] text-gray-500 font-medium mb-8">
            I'm an Apprentice Lawyer
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-[#EE2A3B] text-white flex items-center justify-center hover:-translate-y-1 transition-transform shadow-[0_4px_10px_rgba(238,42,59,0.3)] hover:shadow-[0_6px_15px_rgba(238,42,59,0.4)]">
              <TwitterIcon />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#EE2A3B] text-white flex items-center justify-center hover:-translate-y-1 transition-transform shadow-[0_4px_10px_rgba(238,42,59,0.3)] hover:shadow-[0_6px_15px_rgba(238,42,59,0.4)]">
              <FacebookIcon />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#EE2A3B] text-white flex items-center justify-center hover:-translate-y-1 transition-transform shadow-[0_4px_10px_rgba(238,42,59,0.3)] hover:shadow-[0_6px_15px_rgba(238,42,59,0.4)]">
              <InstagramIcon />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#EE2A3B] text-white flex items-center justify-center hover:-translate-y-1 transition-transform shadow-[0_4px_10px_rgba(238,42,59,0.3)] hover:shadow-[0_6px_15px_rgba(238,42,59,0.4)]">
              <LinkedinIcon />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
