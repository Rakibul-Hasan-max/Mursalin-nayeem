import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export default function ServiceCard({ title, description, Icon }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-[14px] p-10 flex flex-col items-center text-center shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-50/50 hover:-translate-y-2 transition-transform duration-300">
      <div className="w-[72px] h-[72px] bg-[#EE2A3B] rounded-full flex items-center justify-center mb-6 shadow-sm">
        <Icon color="white" size={30} strokeWidth={1.5} />
      </div>
      <h3 className="text-[20px] font-bold text-[#292D46] mb-4">{title}</h3>
      <p className="text-gray-500 text-[15px] leading-relaxed">
        {description}
      </p>
    </div>
  );
}
