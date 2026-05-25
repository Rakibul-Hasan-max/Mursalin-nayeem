"use client";

export default function ContactForm() {
  return (
    <form className="w-full max-w-4xl flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
      <div className="flex flex-col md:flex-row gap-6 w-full">
        <input
          type="text"
          placeholder="Name*"
          className="flex-1 bg-white border border-gray-200/60 rounded-full px-6 py-4 text-[15px] text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-[#EE2A3B] transition-colors shadow-sm"
          required
        />
        <input
          type="email"
          placeholder="Email*"
          className="flex-1 bg-white border border-gray-200/60 rounded-full px-6 py-4 text-[15px] text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-[#EE2A3B] transition-colors shadow-sm"
          required
        />
      </div>
      
      <input
        type="text"
        placeholder="Subject*"
        className="w-full bg-white border border-gray-200/60 rounded-full px-6 py-4 text-[15px] text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-[#EE2A3B] transition-colors shadow-sm"
        required
      />
      
      <textarea
        placeholder="Your Message..."
        rows={7}
        className="w-full bg-white border border-gray-200/60 rounded-3xl px-6 py-5 text-[15px] text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-[#EE2A3B] transition-colors shadow-sm resize-none"
        required
      ></textarea>
      
      <div className="mt-2">
        <button
          type="submit"
          className="bg-[#EE2A3B] text-white font-semibold rounded-full px-10 py-4 hover:-translate-y-1 transition-transform shadow-[0_4px_10px_rgba(238,42,59,0.3)] hover:shadow-[0_6px_15px_rgba(238,42,59,0.4)]"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
