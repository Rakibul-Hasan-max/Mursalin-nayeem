import Sidebar from "../../components/layout/Sidebar";
import ServiceCard from "../../components/service/ServiceCard";
import { Monitor, Image as ImageIcon, Code, Film, Rocket, Brush } from "lucide-react";

export const metadata = {
  title: "Services | Mursalin Nayeem",
  description: "Services provided by Mursalin Nayeem",
};

export default function ServicePage() {
  const services = [
    {
      title: "Legal Consultant",
      description: "I provide comprehensive legal advisory services to individuals and businesses. My expertise covers a wide range of legal matters.",
      Icon: Monitor,
    },
    {
      title: "Couple Counseling",
      description: "I provide counseling services to couples to help them improve their relationship. My expertise covers a wide range of issues.",
      Icon: ImageIcon,
    },
    {
      title: "Divorce Counseling",
      description: "I provide divorce counseling services to couples to help them through the divorce process. My expertise covers a wide range of issues.",
      Icon: Code,
    },
    {
      title: "Family Counseling",
      description: "I provide family counseling services to help families improve their relationships. My expertise covers a wide range of issues.",
      Icon: Film,
    },
    {
      title: "Emotional Support",
      description: "I provide emotional support services to help individuals cope with emotional challenges. My expertise covers a wide range of issues.",
      Icon: Rocket,
    },
    {
      title: "Group Therapy",
      description: "I provide group therapy services to help individuals cope with emotional challenges. My expertise covers a wide range of issues.",
      Icon: Brush,
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#F6F7FB] font-sans">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 ml-[280px] flex flex-col min-h-screen pt-24 px-16 lg:px-24 pb-20">
        {/* Title Section */}
        <div className="mb-14">
          <h2 className="text-[40px] font-bold text-[#292D46] tracking-tight leading-none">
            Services
          </h2>
          <div className="flex mt-2 gap-1.5">
            <div className="h-[4px] w-16 bg-[#EE2A3B]"></div>
            <div className="h-[4px] w-5 bg-[#EE2A3B]"></div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full max-w-7xl">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              Icon={service.Icon}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
