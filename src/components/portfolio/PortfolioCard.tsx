import { Search } from "lucide-react";

interface PortfolioCardProps {
  title: string;
  category: string;
  imageUrl: string;
}

export default function PortfolioCard({ title, category, imageUrl }: PortfolioCardProps) {
  return (
    <div className="relative group bg-white rounded-xl p-3 shadow-[0_8px_30px_rgba(0,0,0,0.04)] overflow-hidden">
      <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
        {/* Image */}
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#292D46]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
          <h3 className="text-white font-bold text-xl translate-y-[-20px] group-hover:translate-y-0 transition-transform duration-300">
            {title}
          </h3>
          <div className="flex justify-end mt-auto">
            <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center translate-y-[20px] group-hover:translate-y-0 transition-transform duration-300 shadow-lg cursor-pointer">
              <Search className="text-[#EE2A3B]" size={20} strokeWidth={2.5} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
