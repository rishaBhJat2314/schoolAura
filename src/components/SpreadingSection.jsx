import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaGraduationCap,
  FaUsers,
  FaUserGraduate,
  FaChalkboardTeacher,
} from "react-icons/fa";
import spreadingImage from "../Assets/spreadingImage.png";
import HighlightText from "./Common/HighlightText";

const SpreadSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: false });
  }, []);

  const stats = [
    { icon: <FaGraduationCap />, name: "Happy School", count: "108+" },
    { icon: <FaUsers />, name: "Happy Parents", count: "5360+" },
    { icon: <FaUserGraduate />, name: "Students", count: "58030+" },
    { icon: <FaChalkboardTeacher />, name: "Happy Tutors", count: "10+" },
  ];

  return (
    <div className="relative flex items-center flex-col lg:flex-row justify-between bg-[#f1f1f1] px-12 py-16">
      {/* Image Section */}
      <div className="relative w-1/3 flex justify-center sm:mb-10 lg:my-0">
        <img
          src={spreadingImage}
          alt="Student"
          className="relative w-80 h-auto rounded-lg"
          data-aos="fade-up"
        />
      </div>

      {/* Content Section - Aligned to Left */}
      <div className="lg:w-2/3 w-full flex flex-col items-start lg:px-16 sm:px-0 text-left">
        <div className="mx-0">
          <div className="flex flex-col items-start">
            <HighlightText first={"WE"} second={""} />
            <HighlightText first={""} second={"ARE SPRESDING"} />
          </div>
          <div className="w-16 h-1 bg-black my-2"></div>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 w-full">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-4"
              data-aos="fade-up"
            >
              <div className="lg:text-8xl md:text-6xl text-4xl text-black">
                {item.icon}
              </div>
              <div className="flex flex-col">
                <span className="lg:text-4xl md:text-2xl text-xl font-bold text-black">
                  {item.count}
                </span>
                <span className="lg:text-3xl md:text-xl text-lg text-[#ff5202]">
                  {item.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpreadSection;

// -------------------------------------------------------------------
// correct code

// export default SpreadSection;
// import React, {  useEffect} from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import {
//   FaGraduationCap,
//   FaUsers,
//   FaUserGraduate,
//   FaChalkboardTeacher,
// } from "react-icons/fa";
// import spreadingImage from "../Assets/spreadingImage.png";
// import HighlightText from "./Common/HighlightText";

// const SpreadSection = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1200, once: false });
//   }, []);

//   const stats = [
//     { icon: <FaGraduationCap  />, name: "Happy School", count: "108+" },
//     { icon: <FaUsers />, name: "Happy Parents", count: "5360+" },
//     { icon: <FaUserGraduate />, name: "Students", count: "58030+" },
//     { icon: <FaChalkboardTeacher />, name: "Happy Tutors", count: "10+" },
//   ];

//   return (
//     <div className="relative flex items-center flex-col lg:flex-row justify-between bg-[#f1f1f1] px-12 py-16">
//       <div className="relative w-1/3 flex justify-center sm:mb-10 lg:my-0">
//         <img
//           src={spreadingImage}
//           alt="Student"
//           className="relative w-80 h-auto rounded-lg"
//           data-aos="fade-up"
//         />
//       </div>

//       <div className="lg:w-2/3 w-full flex flex-col items-start lg:px-16 sm:px-0">
//         <div className="mx-12">
//           <HighlightText first={"WE"} second={"ARE SPRESDING"} />
//           <div className="w-16 h-1 bg-black my-2"></div>
//         </div>

//         <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
//           {stats.map((item, index) => (
//             <div
//               key={index}
//               className="flex items-center space-x-4"
//               data-aos="fade-up"
//               // data-aos-delay={index * 100}
//             >
//               <div className="text-7xl text-black mx-12 my-5">{item.icon}</div>
//               <div className="flex flex-col">
//                 <span className="text-3xl font-bold text-black">
//                   {item.count}
//                 </span>
//                 <span className="text-2xl text-orange-500">{item.name}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SpreadSection;
