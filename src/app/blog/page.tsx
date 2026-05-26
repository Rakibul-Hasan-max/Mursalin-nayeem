import Sidebar from "../../components/layout/Sidebar";
import BlogGrid from "../../components/blog/BlogGrid";

export const metadata = {
  title: "Latest Blog | Mursalin Nayeem",
  description: "Read the latest blogs and legal tips",
};

export default function BlogPage() {
  return (
    <div className="flex min-h-screen bg-[#F6F7FB] font-sans">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 ml-[280px] flex flex-col min-h-screen pt-24 px-16 lg:px-24 pb-20">
        {/* Title Section */}
        <div className="mb-12">
          <h2 className="text-[40px] font-bold text-[#292D46] tracking-tight leading-none">
            Latest Blog
          </h2>
          <div className="flex mt-2 gap-1.5">
            <div className="h-[4px] w-16 bg-[#EE2A3B]"></div>
            <div className="h-[4px] w-5 bg-[#EE2A3B]"></div>
          </div>
        </div>

        {/* Blog Grid & Filters */}
        <BlogGrid />
      </main>
    </div>
  );
}
