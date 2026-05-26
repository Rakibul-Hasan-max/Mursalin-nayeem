"use client";

import { useState } from "react";
import BlogCard from "./BlogCard";

//article about law
const blogPosts = [
  {
    id: 1,
    date: "4 jun 2025",
    title: "When is it time toHire a Lawyer?",
    description: "In the complexities of the modern legal landscape, understanding when to seek guidance is often the first step toward protecting your rights.",
    tags: ["Law", "Rights"],
    category: "Recent articles",
    imageUrl: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    date: "4 jun 2025",
    title: "Why You Need a Lawyer",
    description: "Facing criminal charges can be one of the most stressful and frightening experiences in a person's life. The potential consequences including jail.",
    tags: ["Law", "Criminal"],
    category: "Recent articles",
    imageUrl: "https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    date: "4 jun 2025",
    title: "Marriage & Divorce Law",
    description: "Marriage and divorce are significant life events that are governed by specific laws. Understanding these legal aspects can help individuals.",
    tags: ["Law", "Marriage"],
    category: "Recent articles",
    imageUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    date: "12 Aug 2025",
    title: "Understanding Civil Rights",
    description: "In this comprehensive guide, we delve into the core principles of civil rights, exploring their historical evolution, landmark legal decisions.",
    tags: ["Law", "Rights"],
    category: "Legal tips",
    imageUrl: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    date: "18 Sep 2025",
    title: "How to File a Lawsuit",
    description: "Navigating the legal system can be intimidating, but understanding the process of filing a lawsuit is crucial for anyone seeking justice.",
    tags: ["Process", "Tips"],
    category: "Legal tips",
    imageUrl: "https://plus.unsplash.com/premium_photo-1661333820879-517c5e808bfe?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGxlZ2FsJTIwcmVwcmVzZW50YXRpb258ZW58MHx8MHx8fDA%3D"
  },
];

const filters = ["Recent articles", "Legal tips"];

export default function BlogGrid() {
  const [activeFilter, setActiveFilter] = useState("Recent articles");

  const filteredPosts = blogPosts.filter(post => post.category === activeFilter);

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16">
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
        {filteredPosts.map(post => (
          <BlogCard
            key={post.id}
            date={post.date}
            title={post.title}
            description={post.description}
            tags={post.tags}
            imageUrl={post.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}
