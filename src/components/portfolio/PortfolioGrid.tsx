"use client";

import { useState } from "react";
import PortfolioCard from "./PortfolioCard";

const projects = [
  { id: 1, title: "Criminal Defense", category: "Practice Areas", imageUrl: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop" },
  { id: 2, title: "Smith vs State", category: "Featured Case", imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxlZ2FsfGVufDB8fDB8fHww" },
  { id: 3, title: "Legal Workshop", category: "Photography", imageUrl: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=800&auto=format&fit=crop" },
  { id: 4, title: "Corporate Law", category: "Practice Areas", imageUrl: "https://images.unsplash.com/photo-1758518731462-d091b0b4ed0d?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGVnYWwlMjBhZ3JlZW1lbnR8ZW58MHx8MHx8fDA%3D" },
  { id: 5, title: "Landmark Win", category: "Featured Case", imageUrl: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop" },
  { id: 6, title: "Office Setup", category: "Photography", imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop" },
  { id: 7, title: "Nayeem", category: "Gallery", imageUrl: "/images/portfolio/1.png" },
  { id: 8, title: "Nayeem", category: "Gallery", imageUrl: "/images/portfolio/2.png" },
  { id: 9, title: "Nayeem", category: "Gallery", imageUrl: "/images/portfolio/3.png" },
  { id: 10, title: "Nayeem", category: "Gallery", imageUrl: "/images/portfolio/4.png" },
  { id: 11, title: "Nayeem", category: "Gallery", imageUrl: "/images/portfolio/5.png" },
  { id: 12, title: "Nayeem", category: "Gallery", imageUrl: "/images/portfolio/6.png" },
];

const filters = ["All", "Practice Areas", "Featured Case", "Gallery", "Photography"];

export default function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
        {filters.map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`font-bold text-[16px] pb-1 relative transition-colors ${
              activeFilter === filter ? "text-[#EE2A3B]" : "text-[#292D46] hover:text-[#EE2A3B]"
            }`}
          >
            {filter}
            {activeFilter === filter && (
              <span className="absolute bottom-[-6px] left-0 w-full h-[2px] bg-[#EE2A3B]"></span>
            )}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {filteredProjects.map(project => (
          <PortfolioCard
            key={project.id}
            title={project.title}
            category={project.category}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}
