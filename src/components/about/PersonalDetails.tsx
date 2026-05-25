export default function PersonalDetails() {
  const details = [
    { label: "Birthday", value: "19 Aug, 2001" },
    { label: "Age", value: "25" },
    { label: "Website", value: "mursalinnayeem.vercel.app" },
    { label: "Email", value: "nayeeem@gmail.com" },
    { label: "Degree", value: "LLB" },
    { label: "Phone", value: "+880 1580 507157" },
    { label: "City", value: "Dhaka, Bangladesh" },
    { label: "Freelance", value: "Available" },
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-10">
        {details.map((item, index) => (
          <div key={index} className="flex border-b border-gray-200/80 pb-3">
            <span className="font-bold text-[#292D46] w-[100px] text-[15px]">{item.label} :</span>
            <span className="text-gray-500 text-[15px]">{item.value}</span>
          </div>
        ))}
      </div>
      <div className="flex gap-4">
        <button className="bg-[#EE2A3B] text-white font-semibold rounded-full px-8 py-3.5 hover:-translate-y-1 transition-transform shadow-[0_4px_10px_rgba(238,42,59,0.3)] hover:shadow-[0_6px_15px_rgba(238,42,59,0.4)]">
          Download CV
        </button>
        <button className="bg-[#EE2A3B] text-white font-semibold rounded-full px-8 py-3.5 hover:-translate-y-1 transition-transform shadow-[0_4px_10px_rgba(238,42,59,0.3)] hover:shadow-[0_6px_15px_rgba(238,42,59,0.4)]">
          Hire Me
        </button>
      </div>
    </div>
  );
}
