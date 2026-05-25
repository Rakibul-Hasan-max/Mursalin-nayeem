import Sidebar from "../../components/Sidebar";
import ContactInfo from "../../components/ContactInfo";
import ContactForm from "../../components/ContactForm";

export const metadata = {
  title: "Contact Me | Mursalin Nayeem",
  description: "Get in touch with Mursalin Nayeem",
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen bg-[#F6F7FB] font-sans">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 ml-[280px] flex flex-col min-h-screen pt-24 px-16 lg:px-24">
        {/* Title Section */}
        <div className="mb-16">
          <h2 className="text-[40px] font-bold text-[#292D46] tracking-tight leading-none">
            Contact Me
          </h2>
          <div className="flex mt-2 gap-1.5">
            <div className="h-[4px] w-16 bg-[#EE2A3B]"></div>
            <div className="h-[4px] w-5 bg-[#EE2A3B]"></div>
          </div>
        </div>

        {/* Contact Information */}
        <ContactInfo />

        {/* Contact Form */}
        <ContactForm />
      </main>
    </div>
  );
}
