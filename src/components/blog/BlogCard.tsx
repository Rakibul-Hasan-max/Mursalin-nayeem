interface BlogCardProps {
  date: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
}

export default function BlogCard({ date, title, description, tags, imageUrl }: BlogCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col hover:-translate-y-2 transition-transform duration-300">
      <div className="relative w-full h-64 bg-gray-100 shrink-0">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        <div className="absolute left-6 -bottom-4 bg-[#EE2A3B] text-white text-[13px] font-bold px-4 py-1.5 rounded-sm shadow-md">
          {date}
        </div>
      </div>
      <div className="p-8 pt-12 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-[#292D46] mb-3">{title}</h3>
        <p className="text-gray-500 text-[15px] leading-relaxed mb-8 flex-1">
          {description}
        </p>
        <div className="text-[14px] font-medium text-gray-500">
          Tags : <span className="text-[#EE2A3B]">{tags.join(" , ")}</span>
        </div>
      </div>
    </div>
  );
}
