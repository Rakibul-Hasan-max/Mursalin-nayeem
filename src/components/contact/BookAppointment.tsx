import { CalendarClock } from "lucide-react";

export default function BookAppointment() {
  return (
    <div className="bg-white rounded-[14px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] p-10 flex flex-col items-center text-center border border-gray-50/50 hover:-translate-y-2 transition-transform duration-300">
      <div className="w-[72px] h-[72px] bg-[#EE2A3B] rounded-full flex items-center justify-center mb-6 shadow-sm">
        <CalendarClock color="white" size={30} strokeWidth={1.5} />
      </div>
      <h3 className="text-[20px] font-bold text-[#292D46] mb-4">Book an Appointment</h3>
      <p className="text-gray-500 text-[15px] leading-relaxed mb-8">
        Need legal advice or representation? Schedule a dedicated consultation session with me to discuss your legal matters in detail.
      </p>
      <button className="bg-[#EE2A3B] text-white font-semibold rounded-full px-8 py-3.5 hover:-translate-y-1 transition-transform shadow-[0_4px_10px_rgba(238,42,59,0.3)] hover:shadow-[0_6px_15px_rgba(238,42,59,0.4)] w-full">
        Schedule Now
      </button>
    </div>
  );
}
