"use client";

import { useEffect, useRef, useState } from "react";

export default function SkillBars() {
  const skills = [
    { name: "Constitutional Law", percent: 90 },
    { name: "Property Law", percent: 80 },
    { name: "Criminal Law", percent: 85 },
    { name: "Civil Law", percent: 80 },
    { name: "Drafting", percent: 75 },
  ];

  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full flex flex-col gap-7 pt-2">
      {skills.map((skill, index) => (
        <div key={index}>
          <div className="flex justify-between mb-3">
            <span className="font-bold text-[#292D46] text-[15px]">{skill.name}</span>
            <span className="text-gray-500 text-[15px]">{skill.percent}%</span>
          </div>
          <div className="w-full h-[6px] bg-gray-200/80 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#EE2A3B] rounded-full transition-all duration-1000 ease-out"
              style={{
                width: animated ? `${skill.percent}%` : "0%",
                // transitionDelay: animated ? `${index * 150}ms` : "0ms",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
