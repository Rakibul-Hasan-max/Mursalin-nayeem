import { Calendar } from "lucide-react";

interface TimelineItem {
  date: string;
  title: string;
  description: string;
}

interface TimelineProps {
  title: string;
  items: TimelineItem[];
}

export default function Timeline({ title, items }: TimelineProps) {
  return (
    <div className="w-full">
      <h3 className="text-[26px] font-bold text-[#292D46] mb-8">{title}</h3>
      <div className="bg-white rounded-xl p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
        <div className="border-l-2 border-[#EE2A3B] pl-8 py-2">
          {items.map((item, index) => (
            <div key={index} className="mb-10 last:mb-0 relative">
              {/* Dot */}
              <div className="absolute left-[-33px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#EE2A3B] ring-4 ring-white -translate-x-1/2"></div>
              
              {/* Date */}
              <div className="flex items-center gap-2 text-gray-500 text-[14px] mb-2 font-medium">
                <Calendar size={14} />
                <span>{item.date}</span>
              </div>
              
              {/* Title */}
              <h4 className="text-[19px] font-bold text-[#292D46] mb-3">{item.title}</h4>
              
              {/* Description */}
              <p className="text-gray-500 leading-relaxed text-[15px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
