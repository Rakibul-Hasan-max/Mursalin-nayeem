import Sidebar from "../../components/layout/Sidebar";
import AboutIntro from "../../components/about/AboutIntro";
import PersonalDetails from "../../components/about/PersonalDetails";
import SkillBars from "../../components/about/SkillBars";
import Timeline from "../../components/about/Timeline";

export const metadata = {
  title: "About Me | Mursalin Nayeem",
  description: "Learn more about Mursalin Nayeem",
};

export default function AboutPage() {
  const educationItems = [
    {
      date: "2021 - 2026",
      title: "Bachelor of Laws (LLB)",
      description: "Northern University of Bangladesh",
    },
    {
      date: "2017 - 2019",
      title: "Higher Secondary School Certificate (HSC)",
      description: "Nageshwari Govt. Degree College, Kurigram",
    },
    {
      date: "2012 - 2017",
      title: "Secondary School Certificate (SSC)",
      description: "Nageshwari D.M. High School, Kurigram",
    },
  ];

  const experienceItems = [
    {
      date: "2025 - Present",
      title: "Apprentice Lawyer",
      description: "Assistant Of Advocate Rakibul Hasan, Judges Court, Dhaka. Bangladesh.",
    },
    {
      date: "2024 - 2025",
      title: "Legal Intern",
      description: "Comprehensive training in litigation procedures, drafting legal documents, conducting legal research, and providing legal assistance to clients under the supervision of experienced lawyers. Gained hands-on experience in various aspects of legal practice, including case preparation, court appearances, and client counseling. Acquired practical knowledge of civil and criminal law, as well as legal drafting and research methodologies.",
    },
    {
      date: "2022 - 2024",
      title: "Executive Member",
      description: "Inter-university debate competition organized by the Northern University Bangladesh Debating Club.",
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#F6F7FB] font-sans">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 ml-0 lg:ml-[280px] flex flex-col min-h-screen pt-32 lg:pt-24 px-6 md:px-16 lg:px-24 pb-20">
        {/* Title Section */}
        <div className="mb-14">
          <h2 className="text-[40px] font-bold text-[#292D46] tracking-tight leading-none">
            About Me
          </h2>
          <div className="flex mt-2 gap-1.5">
            <div className="h-[4px] w-16 bg-[#EE2A3B]"></div>
            <div className="h-[4px] w-5 bg-[#EE2A3B]"></div>
          </div>
        </div>

        {/* Intro */}
        <AboutIntro />

        {/* Details & Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <PersonalDetails />
          <SkillBars />
        </div>

        {/* Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <Timeline title="Education" items={educationItems} />
          <Timeline title="Experience" items={experienceItems} />
        </div>
      </main>
    </div>
  );
}
