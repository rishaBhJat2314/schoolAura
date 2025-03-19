// media query added....

import React from "react";
import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";
import { FaWhatsapp, FaAngleRight } from "react-icons/fa";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Newsletter from "../NewsLetter";

const Footer = () => {
  return (
    <footer className="relative bg-[#0b0d1f] text-white pt-20 pb-10 px-6 sm:px-10 lg:px-16">
      {/* Newsletter Section */}
      <div className="relative w-full my-5">
        <Newsletter />
      </div>

      {/* Footer Sections */}
      <div
        className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left"
        data-aos="fade-up"
      >
        {/* About Us */}
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-[#ff5202] mb-3 sm:mb-4">
            About Us
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            SchoolAura Smart Education Platform is a step towards making
            learning better and effective for students.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-[#ff5202] mb-3 sm:mb-4">
            Quick Links
          </h2>
          <ul className="text-gray-400 space-y-2">
            {["About Us", "Benefits", "Blogs"].map((item, index) => (
              <li
                key={index}
                className="flex justify-center md:justify-start gap-1 items-center"
              >
                <FaAngleRight className="text-[#ff5202]" /> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Help & Support */}
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-[#ff5202] mb-3 sm:mb-4">
            Help & Support
          </h2>
          <ul className="text-gray-400 space-y-2">
            {["Services", "Support", "Terms & Conditions"].map(
              (item, index) => (
                <li
                  key={index}
                  className="flex justify-center md:justify-start gap-1 items-center"
                >
                  <FaAngleRight className="text-[#ff5202]" /> {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-[#ff5202] mb-3 sm:mb-4">
            Follow Us
          </h2>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="text-blue-500">
              <CiFacebook className="text-2xl sm:text-3xl" />
            </a>
            <a href="#" className="text-pink-500">
              <CiInstagram className="text-2xl sm:text-3xl" />
            </a>
            <a href="#" className="text-blue-400">
              <CiTwitter className="text-2xl sm:text-3xl" />
            </a>
            <a href="#" className="text-green-500">
              <FaWhatsapp className="text-2xl sm:text-3xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Contact Info Section */}
      <div
        className="container my-6 border-t border-gray-700 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center md:text-left py-8"
        data-aos="fade-up"
      >
        {/* Call Us */}
        <div className="flex items-center justify-center md:justify-start space-x-4">
          <div className="bg-gray-600 p-3 sm:p-4 rounded-full">
            <FaPhoneAlt className="text-white text-lg sm:text-2xl" />
          </div>
          <div>
            <h3 className="text-[#ff5202] font-semibold text-base sm:text-lg">
              Call Us
            </h3>
            <p className="text-blue-400 text-sm sm:text-base">+91-9540349392</p>
          </div>
        </div>

        {/* Mail Us */}
        <div className="flex items-center justify-center md:justify-start space-x-4">
          <div className="bg-gray-600 p-3 sm:p-4 rounded-full">
            <FaEnvelope className="text-white text-lg sm:text-2xl" />
          </div>
          <div>
            <h3 className="text-[#ff5202] font-semibold text-base sm:text-lg">
              Mail Us
            </h3>
            <p className="text-blue-400 text-sm sm:text-base">
              contact@schoolaura.com
            </p>
          </div>
        </div>

        {/* Office Address */}
        <div className="flex items-center justify-center md:justify-start space-x-4">
          <div className="bg-gray-600 p-3 sm:p-4 rounded-full">
            <FaMapMarkerAlt className="text-white text-lg sm:text-2xl" />
          </div>
          <div>
            <h3 className="text-[#ff5202] font-semibold text-base sm:text-lg">
              Office Address
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">
              E 44/3, Pocket D, Okhla Phase II, Okhla Industrial Area, New
              Delhi, India
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-6 py-9 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm sm:text-base">
        <p>© 2025 SchoolAura. All Rights Reserved</p>
        <p>
          Design & Development by{" "}
          <span className="text-blue-500">Rishabh Jat</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;



// --------------------------------------------------------
// correct code 

// import React from "react";
// import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";
// import { FaWhatsapp, FaAngleRight } from "react-icons/fa";
// import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
// import Newsletter from "../NewsLetter";

// const Footer = () => {
//   return (
//     <footer className="relative bg-[#0b0d1f] text-white pt-32 pb-12 px-8">

//       <div className="relative w-full my-5">
//         <Newsletter />
//       </div>

//       <div
//         className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8"
//         data-aos="fade-up"
//       >
//         <div>
//           <h2 className="text-xl font-bold text-[#ff5202] mb-4">About Us</h2>
//           <p className="text-gray-400">
//             SchoolAura Smart Education Platform is a step towards making
//             learning better and effective for students.
//           </p>
//         </div>

//         <div>
//           <h2 className="text-xl font-bold text-[#ff5202] mb-4">
//             Quick Links
//           </h2>
//           <ul className="text-gray-400 space-y-2">
//             {["About Us", "Benefits", "Blogs"].map((item, index) => (
//               <li key={index} className="flex gap-1 items-baseline">
//                 <FaAngleRight className="text-[#ff5202]" /> {item}
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div>
//           <h2 className="text-xl font-bold text-[#ff5202] mb-4">
//             Help & Support
//           </h2>
//           <ul className="text-gray-400 space-y-2">
//             {["Services", "Support", "Terms & Conditions"].map(
//               (item, index) => (
//                 <li key={index} className="flex gap-1 items-baseline">
//                   <FaAngleRight className="text-[#ff5202]" /> {item}
//                 </li>
//               )
//             )}
//           </ul>
//         </div>

//         <div>
//           <h2 className="text-xl font-bold text-[#ff5202] mb-4">Follow Us</h2>
//           <div className="flex space-x-4">
//             <a href="#" className="text-blue-500">
//               <CiFacebook className="text-3xl" />
//             </a>
//             <a href="#" className="text-pink-500">
//               <CiInstagram className="text-3xl" />
//             </a>
//             <a href="#" className="text-blue-400">
//               <CiTwitter className="text-3xl" />
//             </a>
//             <a href="#" className="text-green-500">
//               <FaWhatsapp className="text-3xl" />
//             </a>
//           </div>
//         </div>
//       </div>

//       <div
//         className="container my-5 border-t border-gray-700 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left py-10"
//         data-aos="fade-up"
//       >
//         <div className="flex items-center space-x-4">
//           <div className="bg-gray-600 p-4 rounded-full">
//             <FaPhoneAlt className="text-white text-2xl" />
//           </div>
//           <div>
//             <h3 className="text-[#ff5202] font-semibold text-lg">Call Us</h3>
//             <p className="text-blue-400">+91-9540349392</p>
//           </div>
//         </div>

//         <div className="flex items-center space-x-4">
//           <div className="bg-gray-600 p-4 rounded-full">
//             <FaEnvelope className="text-white text-2xl" />
//           </div>
//           <div>
//             <h3 className="text-[#ff5202] font-semibold text-lg">Mail Us</h3>
//             <p className="text-blue-400">contact@schoolaura.com</p>
//           </div>
//         </div>

//         <div className="flex items-center space-x-4">
//           <div className="bg-gray-600 p-4 rounded-full">
//             <FaMapMarkerAlt className="text-white text-2xl" />
//           </div>
//           <div>
//             <h3 className="text-[#ff5202] font-semibold text-lg">
//               Office Address
//             </h3>
//             <p className="text-gray-400">
//               E 44/3, Pocket D, Okhla Phase II, Okhla Industrial Area, New
//               Delhi, Delhi 110020, India
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="mt-10 py-6 flex flex-col md:flex-row justify-between items-center text-gray-400">
//         <p>© 2025 SchoolAura. All Rights Reserved</p>
//         <p>
//           Design & Development by{" "}
//           <span className="text-blue-500">Rishabh Jat</span>
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;