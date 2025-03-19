import React from "react";
import { IoIosCall } from "react-icons/io";
import { FaEnvelope, FaWhatsapp, FaMobileAlt } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-10 sm:px-2 py-2 text-sm md:text-base">
      {/* Contact Info (Side by Side on sm and larger) */}
      <div className="flex flex-row items-center gap-3 sm:gap-3">
        <span className="flex items-center gap-2">
          <IoIosCall className="rounded-full bg-[#ff5202] text-white text-xl p-1" />
          <p>+91 234567890</p>
        </span>
        <span className="flex items-center gap-2">
          <FaEnvelope className="rounded-full bg-[#ff5202] text-white text-xl p-1" />
          <p>dummy@gmail.com</p>
        </span>
      </div>

      {/* Action Buttons (Only on lg and xl screens) */}
      <div className="hidden lg:flex flex-row items-center gap-3 md:gap-6 mt-2 md:mt-0">
        <span className="flex items-center gap-2 bg-[#1bd741] text-white px-3 py-1 rounded-md">
          <FaWhatsapp />
          <p>WhatsApp</p>
        </span>
        <span className="flex items-center gap-2 bg-[#a4c639] text-white px-3 py-1 rounded-md">
          <FaMobileAlt />
          <p>Mobile App</p>
        </span>
        <div className="flex gap-2 md:gap-4">
          <button className="px-4 py-1 bg-[#0d1028] text-white rounded-md hover:pointer transition">
            Login
          </button>
          <button className="px-4 py-1 border bg-[#0d1028] text-white rounded-md hover:pointer transition">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

// // media query added
// import React from "react";
// import { IoIosCall } from "react-icons/io";
// import { FaEnvelope, FaWhatsapp, FaMobileAlt } from "react-icons/fa";

// const Header = () => {
//   return (
//     <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-10 py-2 text-sm md:text-base">
//       {/* Contact Info (Always Visible) */}
//       <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-6">
//         <span className="flex items-center gap-2">
//           <IoIosCall className="rounded-full bg-[#ff5202] text-white text-xl p-1" />
//           <p>+91 234567890</p>
//         </span>
//         <span className="flex items-center gap-2">
//           <FaEnvelope className="rounded-full bg-[#ff5202] text-white text-xl p-1" />
//           <p>dummy@gmail.com</p>
//         </span>
//       </div>

//       {/* Action Buttons (Only on lg and xl screens) */}
//       <div className="hidden lg:flex flex-row items-center gap-3 md:gap-6 mt-2 md:mt-0">
//         <span className="flex items-center gap-2 bg-[#1bd741] text-white px-3 py-1 rounded-md">
//           <FaWhatsapp />
//           <p>WhatsApp</p>
//         </span>
//         <span className="flex items-center gap-2 bg-[#a4c639] text-white px-3 py-1 rounded-md">
//           <FaMobileAlt />
//           <p>Mobile App</p>
//         </span>
//         <div className="flex gap-2 md:gap-4">
//           <button className="px-4 py-1 bg-[#0d1028] text-white rounded-md hover:pointer transition">
//             Login
//           </button>
//           <button className="px-4 py-1 border bg-[#0d1028] text-white rounded-md hover:pointer transition">
//             Register
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;

// ------------------------------------------------------------
// correct code

// import React from "react";
// import { IoIosCall } from "react-icons/io";
// import { FaEnvelope, FaWhatsapp, FaMobileAlt } from "react-icons/fa";

// const Header = () => {
//   return (
//     <div className="flex justify-between items-center px-10 py-2">

//       <div className="flex items-center gap-6">
//         <span className="flex items-center gap-2">
//           <IoIosCall className="rounded-full bg-[#ff5202] text-white text-xl p-1" />
//           <p>+91 234567890</p>
//         </span>
//         <span className="flex items-center gap-2">
//           <FaEnvelope className="rounded-full bg-[#ff5202] text-white text-xl p-1" />
//           <p>dummy@gmail.com</p>
//         </span>
//       </div>

//       <div className="flex items-center gap-6">
//         <span className="flex items-center gap-2 bg-[#1bd741] text-white p-1 rounded-md">
//           <FaWhatsapp className="" />
//           <p>WhatsApp</p>
//         </span>
//         <span className="flex items-center gap-2 bg-[#a4c639] text-white p-1 rounded-md">
//           <FaMobileAlt />
//           <p>Mobile App</p>
//         </span>
//         <div className="flex gap-4">
//           <button className="px-4 py-1 bg-[#0d1028] text-white rounded-md hover:pointer transition">
//             Login
//           </button>
//           <button className="px-4 py-1 border bg-[#0d1028] text-white rounded-md hover:pointer transition">
//             Register
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
