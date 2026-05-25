import Image from "next/image";
import Sidebar from "../components/layout/Sidebar";
import SocialLinks from "../components/shared/SocialLinks";

export default function Page() {
  return (
    <div className="flex min-h-screen bg-[#F6F7FB] font-sans">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 ml-[280px] flex flex-col items-center justify-center min-h-screen">
        <div className="flex flex-col items-center -mt-10">
          {/* Profile Picture Container */}
          <div className="relative w-[280px] h-[280px] rounded-full p-4 bg-white/40 shadow-[0_8px_30px_rgba(0,0,0,0.04)] mb-8 flex items-center justify-center">
            <div className="w-full h-full rounded-full overflow-hidden border-[6px] border-white bg-white">
              <Image
                src="/images/pic1.jpeg"
                alt="Mursalin Nayeem"
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
          <SocialLinks />
        </div>
      </main>
    </div>
  );
}
