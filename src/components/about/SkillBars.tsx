export default function SkillBars() {
  const skills = [
    { name: "Constitutional Law", percent: 90 },
    { name: "Property Law", percent: 80 },
    { name: "Criminal Law", percent: 85 },
    { name: "Civil Law", percent: 80 },
    { name: "Drafting", percent: 75 },
  ];

  return (
    <div className="w-full flex flex-col gap-7 pt-2">
      {skills.map((skill, index) => (
        <div key={index}>
          <div className="flex justify-between mb-3">
            <span className="font-bold text-[#292D46] text-[15px]">{skill.name}</span>
            <span className="text-gray-500 text-[15px]">{skill.percent}%</span>
          </div>
          <div className="w-full h-[6px] bg-gray-200/80 rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#EE2A3B] rounded-full" 
              style={{ width: `${skill.percent}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}
