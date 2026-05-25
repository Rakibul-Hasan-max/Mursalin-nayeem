const SolidPhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#EE2A3B" className="mb-4">
    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
  </svg>
);

const SolidMapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#EE2A3B" className="mb-4">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/>
  </svg>
);

const SolidMailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#EE2A3B" className="mb-4">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

export default function ContactInfo() {
  return (
    <div className="flex flex-col md:flex-row justify-between w-full max-w-4xl mb-16 gap-8">
      {/* Phone */}
      <div className="flex flex-col items-center flex-1">
        <SolidPhoneIcon />
        <h3 className="text-[#292D46] font-bold text-[19px] mb-1">Phone</h3>
        <p className="text-gray-500 text-[15px]">+880 1580 507157</p>
      </div>

      {/* Office */}
      <div className="flex flex-col items-center flex-1">
        <SolidMapPinIcon />
        <h3 className="text-[#292D46] font-bold text-[19px] mb-1">Address</h3>
        <p className="text-gray-500 text-[15px]">Airport Road, Dhaka, Bangladesh</p>
      </div>

      {/* Email */}
      <div className="flex flex-col items-center flex-1">
        <SolidMailIcon />
        <h3 className="text-[#292D46] font-bold text-[19px] mb-1">Email</h3>
        <p className="text-gray-500 text-[15px]">nayeeem@gmail.com</p>
      </div>
    </div>
  );
}
