// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import CourseCard from "./CourseCard";
// import Login from "./Login";

// const SmartEducation = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   return (
//     <div
//       style={{ backgroundImage: "url('/src/Assets/banner-bg.png')" }}
//       className="flex flex-col lg:flex-row justify-around items-center gap-8 bg-cover pt-20 bg-center pb-28 overflow-hidden bg-[#ff5202]"
//     >
//       {/* Left Section - Smart Student Text & Course Card */}
//       <div
//         className="flex flex-col items-end lg:items-baseline flex-1"
//         data-aos="zoom-in-up"
//       >
//         <div>
//           <h1 className="xl:text-6xl sm:text-5xl text-white font-semibold sm:mt-5">
//             BE A <span className="text-black">SMART STUDENT</span>
//           </h1>
//           <h4 className="font-semibold lg:text-4xl text-white sm:text-3xl mt-1">
//             SchoolAura Is A Smart Education Platform
//           </h4>
//         </div>
//         <div className="mt-6">
//           <CourseCard />
//         </div>
//       </div>

//       {/* Right Section - Login Component */}
//       <div className="flex flex-1 justify-center" data-aos="zoom-in-up">
//         <Login />
//       </div>
//     </div>
//   );
// };

// export default SmartEducation;

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CourseCard from "./CourseCard";
import Login from "./Login";

const SmartEducation = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      style={{ backgroundImage: "url('/src/Assets/banner-bg.png')" }}
      className="flex lg:flex-row md:flex-col-reverse sm:flex-col-reverse justify-evenly gap-2 bg-cover pt-20 bg-center pb-28 mb-20 overflow-hidden bg-[#ff5202]"
    >
      <div className="flex flex-col items-center" data-aos="zoom-in-up">
        <div>
          <div>
            <h1 className="xl:text-6xl sm:text-5xl ml-0 text-white font-semibold sm:mt-5">
              BE A<span className="text-black"> SMART STUDENT</span>
            </h1>
          </div>
          <h4 className="font-semibold lg:text-4xl ml-0 text-white sm:text3xl mt-1 ">
            SchoolAura Is A Smart Education Platform
          </h4>
        </div>
        <div>
          <CourseCard />
        </div>
      </div>
      <div>
        <Login />
      </div>
    </div>
  );
};

export default SmartEducation;

// --------------------------------------------------------------------------

// // correct code

// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import CourseCard from "./CourseCard";
// import Login from "./Login";

// const SmartEducation = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   return (
//     <div
//       style={{ backgroundImage: "url('/src/Assets/banner-bg.png')" }}
//       className="flex lg:flex-row md:flex-col-reverse sm:flex-col-reverse justify-between gap-2 bg-cover pt-20 bg-center pb-28 overflow-hidden bg-[#ff5202]"
//     >
//       {/* <div data-aos="zoom-in-up" className="flex gap-2"> */}
//       <div className="flex flex-col flex-1 items-center" data-aos="zoom-in-up">
//         <div>
//           <div>
//             <h1 className="xl:text-6xl sm:text-5xl sm:-ml-28 text-white font-semibold sm:mt-5">
//               BE A<span className="text-black"> SMART STUDENT</span>
//             </h1>
//           </div>
//           <h4 className="font-semibold lg:text-4xl sm:-ml-28 text-white sm:text3xl mt-1 ">
//             SchoolAura Is A Smart Education Platform
//           </h4>
//         </div>
//         <CourseCard />
//       </div>
//       <Login />
//       {/* </div> */}
//     </div>
//   );
// };

// export default SmartEducation;

// -------------------------------------------------------------------
// import React from "react";
// import CourseCard from "./CourseCard";
// import Login from "./Login";

// const SmartEducation = () => {
//   return (
//     <div
//       style={{ backgroundImage: "url('/src/Assets/banner-bg.png')" }}
//       className="flex gap-2 bg-cover pt-20 bg-center pb-28 overflow-hidden bg-[#ff5202]"
//     >
//       <div className="flex flex-col">
//         <div>
//           <div>
//             <h1 className="text-5xl text-white font-semibold">
//               BE A<span className="text-black"> SMART STUDENT</span>
//             </h1>
//           </div>
//           <h4 className="font-semibold text-3xl text-white">
//             SchoolAura Is A Smart Education Platform
//           </h4>
//         </div>
//         <CourseCard />
//       </div>
//       <Login />
//       {/* <svg
//         className="absolute top-0 left-0 w-full h-[1000px]"
//         xmlns="http://www.w3.org/2000/svg"
//         // viewBox="0 0 1440 320"
//         viewBox="0 0 1440 50"
//       >
//         <path
//           // fill="#000000"
//           fill="#FFFFFF"
//           opacity="1"
//           d="M0,96L80,85.3C160,75,320,53,480,74.7C640,96,800,160,960,181.3C1120,203,1280,181,1360,170.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
//         ></path>
//       </svg> */}
//       {/* <svg
//         className="absolute top-0 left-0 w-full h-[1000px]"
//         viewBox="0 0 1440 100"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           fill="#000000" // Change color as needed
//           fillOpacity="1"
//           d="M0,224L48,218.7C96,213,192,203,288,186.7C384,171,480,149,576,160C672,171,768,213,864,208C960,203,1056,149,1152,122.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
//         ></path>
//       </svg> */}
//     </div>
//   );
// };

// export default SmartEducation;
