// queries added

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import studentsImage from "../Assets/students_Image.png";

const AchievementSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: false });
  }, []);

  const [widthClass, setWidthClass] = useState("");
  const [pad, setPad] = useState("");

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth > 1440 && screenWidth > 1024) {
        setWidthClass("xl:w-[70%]");
        setPad("lg:py-10");
      } else {
        setWidthClass("xl:w-[100%]");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set width immediately

    return () => window.removeEventListener("resize", handleResize);
  }, []); // 🔥 This runs only once when the component mounts

  return (
    // <section className="relative  flex flex-col sm:mb-20 lg:mb-72 items-center justify-center w-full md:px-10 lg:px-20 lg:py-10">
    <section
      className={`relative flex flex-col sm:mb-20 lg:mb-72 items-center justify-center w-full md:px-10 lg:px-20 ${pad}`}
    >
      {/* Content Wrapper */}
      <div className="relative flex flex-col-reverse lg:flex-row w-full gap-8">
        {/* Left Side Content Box */}
        {/* <div
          className="relative w-full lg:w-[40%] md:h-[300px] md:px-8 flex flex-col justify-center items-center text-white border-none"
          style={{
            backgroundImage: `linear-gradient(-190deg, #0d1028 75%, black 25%), url('/src/Assets/bg_Image_Of_Box.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay",
          }}
          data-aos="fade-up"
        >
          <p className="text-lg md:text-2xl font-semibold mb-1">
            - 256 Courses
          </p>
          <p className="text-lg md:text-2xl font-semibold mb-1">
            - Expert Teachers
          </p>
          <p className="text-lg md:text-2xl font-semibold mb-1">
            - Online Education
          </p>
        </div> */}

        <div
          className="relative w-full lg:w-[35%] md:h-[460px] overflow-hidden md:px-8 pb-10 flex flex-col justify-center items-center text-white border-none"
          style={{
            backgroundImage: `linear-gradient(-190deg, #0d1028 60%, black 40%), url('/src/Assets/bg_Image_Of_Box.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay",
            clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)", // This creates the tilt effect at the bottom
          }}
          data-aos="fade-up"
        >
          <p className="text-lg md:text-2xl font-semibold mb-1">
            - 256 Courses
          </p>
          <p className="text-lg md:text-2xl font-semibold mb-1">
            - Expert Teachers
          </p>
          <p className="text-lg md:text-2xl font-semibold mb-1">
            - Online Education
          </p>
        </div>

        {/* Right Side Text Content */}
        <div className="w-full lg:w-[75%] md:px-8 mt-0.5" data-aos="fade-up">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            Why Online Study With SchoolAura
          </h2>
          <p className="mt-2 md:mt-4 text-base md:text-lg text-gray-700">
            The world is changing for the better. Because of the advancement of
            technology, geek minds have grown tired of doing more work, carrying
            books, notebooks, and how much to buy books?
          </p>
          <p className="mt-2 md:mt-4 text-base md:text-lg text-gray-700">
            <strong>Solution:</strong> Now you can find a simple solution with
            SchoolAura. In these days almost everyone has a Smartphone, Tab, or
            Laptop. So just open your device and start your study from anywhere
            anytime while you are traveling, sitting in the park, and etc.
          </p>
          <p className="mt-2 md:mt-4 text-base md:text-lg text-gray-700">
            Now use your time and gain knowledge in every second and use your
            device for the right things, not to waste your time.
          </p>
        </div>
      </div>

      {/* Students Image */}
      <div
        className="relative lg:absolute lg:bottom-[-16rem] flex justify-center w-full md:w-full xl:w-[90%]"
        data-aos="fade-up"
        data-aos-offset="0"
        data-aos-anchor-placement="top-bottom"
      >
        <img
          src={studentsImage}
          alt="Students studying"
          className={` sm:w-[80%] md:w-[90%] ${widthClass} mx-auto`}
          // className=" sm:w-[80%] md:w-[90%] lg:w-[70%] xl:w-[90%] mx-auto"
        />
      </div>
    </section>
  );
};

export default AchievementSection;

// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import studentsImage from "../Assets/students_Image.png";

// const AchievementSection = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1200, once: false });
//   }, []);

//   return (
//     <section className="relative flex flex-col mb-72 items-center justify-center w-full px-6 md:px-10 lg:px-20 lg:py-16">
//       {/* Container for Content */}
//       <div className="flex flex-col lg:flex-row w-full gap-8">
//         {/* Left Side Content Box */}
//         <div
//           className="relative w-full lg:w-[40%] p-6 md:p-8 rounded-lg text-white border-none"
//           style={{
//             backgroundImage: `linear-gradient(-190deg, #0d1028 75%, white 25%), url('/src/Assets/bg_Image_Of_Box.png')`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             backgroundBlendMode: "overlay",
//           }}
//           data-aos="fade-up"
//         >
//           <p className="text-lg md:text-2xl font-semibold mb-1">
//             - 256 Courses
//           </p>
//           <p className="text-lg md:text-2xl font-semibold mb-1">
//             - Expert Teachers
//           </p>
//           <p className="text-lg md:text-2xl font-semibold mb-1">
//             - Online Education
//           </p>
//         </div>

//         {/* Right Side Text Content */}
//         <div className="w-full lg:w-[60%] p-6 md:p-8" data-aos="fade-up">
//           <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
//             Why Online Study With SchoolAura
//           </h2>
//           <p className="mt-2 md:mt-4 text-base md:text-xl text-gray-700">
//             The world is changing for the better. Because of the advancement of
//             technology, geek minds have grown tired of doing more work, carrying
//             books, notebooks, and how much to buy books?
//           </p>
//           <p className="mt-2 md:mt-4 text-base md:text-xl text-gray-700">
//             <strong>Solution:</strong> Now you can find a simple solution with
//             SchoolAura. In these days almost everyone has a Smartphone, Tab, or
//             Laptop. So just open your device and start your study from anywhere
//             anytime while you are traveling, sitting in the park, and etc.
//           </p>
//           <p className="mt-2 md:mt-4 text-base md:text-xl text-gray-700">
//             Now use your time and gain knowledge in every second and use your
//             device for the right things, not to waste your time.
//           </p>
//         </div>
//       </div>

//       {/* Students Image */}
//       <div
//         className="absolute md:bottom-[-12rem] lg:bottom-[-16rem] flex justify-center w-full"
//         data-aos="fade-up"
//         data-aos-offset="0"
//         data-aos-anchor-placement="top-bottom"
//       >
//         <img
//           src={studentsImage}
//           alt="Students studying"
//           className="sm:w-[80%] md:w-[90%] lg:w-[80%] xl:w-[80%] mx-auto"
//         />
//       </div>
//     </section>
//   );
// };

// export default AchievementSection;

// -------------------------------------------------------
// correct code

// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import studentsImage from "../Assets/students_Image.png";

// const AchievementSection = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1200, once: false });
//   },[]);

//   return (
//     <section className="relative flex flex-col items-center mb-96 justify-center w-full px-20 py-16 lg:flex-row">

//       <div className="flex flex-col lg:flex-row w-full gap-8">

//         <div
//           className="relative w-[40%] p-8 rounded-lg text-white border-none"
//           style={{
//             backgroundImage: `linear-gradient(-190deg, #0d1028 75%, white 25%), url('/src/Assets/bg_Image_Of_Box.png')`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             backgroundBlendMode: "overlay",
//           }}
//           data-aos="fade-up"
//         >
//           <p className="text-2xl font-semibold mb-1">- 256 Courses</p>
//           <p className="text-2xl font-semibold mb-1">- Expert Teachers</p>
//           <p className="text-2xl font-semibold mb-1">- Online Education</p>
//         </div>

//         <div className="w-[60%] p-8" data-aos="fade-up">
//           <h2 className="text-4xl font-bold text-gray-900">
//             Why Online Study With SchoolAura
//           </h2>
//           <p className="mt-4 text-xl text-gray-700">
//             The world is changing for the better. Because of the advancement of
//             technology, geek minds have grown tired of doing more work, carrying
//             books, notebooks, and how much to buy books?
//           </p>
//           <p className="mt-4 text-xl text-gray-700">
//             <strong>Solution:</strong> Now you can find a simple solution with
//             SchoolAura. In these days almost everyone has a Smartphone, Tab, or
//             Laptop. So just open your device and start your study from anywhere
//             anytime while you are traveling, sitting in the park, and etc.
//           </p>
//           <p className="mt-4 text-xl text-gray-700">
//             Now use your time and gain knowledge in every second and use your
//             device for the right things, not to waste your time.
//           </p>
//         </div>
//       </div>

//       <div
//         className="absolute bottom-[-16rem] flex justify-center w-full"
//         data-aos="fade-up"
//         data-aos-offset="0"
//         data-aos-anchor-placement="top-bottom"
//       >
//         <img
//           src={studentsImage}
//           alt="Students studying"
//           className="w-[80%] mx-auto"
//         />
//       </div>
//     </section>
//   );
// };

// export default AchievementSection;

// ------------------------------------------------------------------------
// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import studentsImage from "../Assets/students_Image.png";
// import bgImage from "../Assets/bg_Image_Of_Box.png"; // Correct import

// const AchievementSection = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: false });
//   }, []);

//   return (
//     <section className="flex flex-col items-center justify-center w-full px-8 py-16 lg:px-20">
//       {/* Left & Right Sections fade-up together */}
//       <div className="flex flex-col lg:flex-row w-full gap-8">
//         {/* Left Box with Gradient + Background Image */}
//         <div
//           className="relative w-full lg:w-[40%] p-8 rounded-lg text-white"
//           style={{
//             backgroundImage: `linear-gradient(-190deg, #0d1028 75%, white 25%), url(${bgImage})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             backgroundBlendMode: "overlay",
//           }}
//           data-aos="fade-up"
//         >
//           <p className="text-2xl font-semibold mb-1">- 256 Courses</p>
//           <p className="text-2xl font-semibold mb-1">- Expert Teachers</p>
//           <p className="text-2xl font-semibold mb-1">- Online Education</p>
//         </div>

//         {/* Right Content */}
//         <div className="w-full lg:w-[60%] p-8" data-aos="fade-up">
//           <h2 className="text-4xl font-bold text-gray-900">
//             Why Online Study With SchoolAura
//           </h2>
//           <p className="mt-4 text-xl text-gray-700">
//             The world is changing for the better. Because of the advancement of
//             technology, geek minds have grown tired of doing more work, carrying
//             books, notebooks, and how much to buy books?
//           </p>
//           <p className="mt-4 text-xl text-gray-700">
//             <strong>Solution:</strong> Now you can find a simple solution with
//             SchoolAura. In these days almost everyone has a Smartphone, Tab, or
//             Laptop. So just open your device and start your study from anywhere
//             anytime while you are traveling, sitting in the park, and etc.
//           </p>
//           <p className="mt-4 text-xl text-gray-700">
//             Now use your time and gain knowledge in every second and use your
//             device for the right things, not to waste your time.
//           </p>
//         </div>
//       </div>

//       {/* Bottom Image - Now properly placed below the text */}
//       <div
//         className="flex justify-center w-full -mt-2"
//         data-aos="fade-up"
//         data-aos-offset="100"
//         data-aos-anchor-placement="top-bottom"
//       >
//         <img
//           src={studentsImage}
//           alt="Students studying"
//           className="w-[80%] mx-auto"
//         />
//       </div>
//     </section>
//   );
// };

// export default AchievementSection;
// -----------------------------------------------------------------
