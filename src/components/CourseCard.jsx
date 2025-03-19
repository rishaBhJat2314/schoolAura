// correct code
import React, { useState, useEffect } from "react";
import girl from "../Assets/header-girl-icon.png";

const CourseCard = () => {
  // Card Data
  const courses = [
    {
      title: ["Entrance ", "Solution"],
      buttons: ["Exam", "Course"],
    },
    {
      title: ["Competitive ", "Solution"],
      buttons: ["Exam", "Course"],
    },
    {
      title: ["KG-12th ", "Solution"],
      buttons: ["Exam", "Course"],
    },
    {
      title: ["Tutor ", "Solution"],
      buttons: ["Find Tutor", "Become Tutor"],
    },
  ];

  return (
    <div className=" lg:flex lg:justify-evenly md:grid md:grid-cols-2 md:gap-9 sm:gap-2 mt-6">
      <div className="absolute bottom-0 -left-[10.5%]">
        <img src={girl} alt="" />
      </div>
      {courses.map((course, index) => (
        <Card key={index} title={course.title} buttons={course.buttons} />
      ))}
    </div>
  );
};

const Card = ({ title, buttons }) => {
  const [widthClass, setWidthClass] = useState("xl:w-72");

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth > 768 && screenWidth < 1000) {
        setWidthClass("w-44");
      } else if (screenWidth > 1440 && screenWidth > 1024) {
        setWidthClass("w-72");
      } else {
        setWidthClass("xl:w-48");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`bg-white h-52 rounded-lg px-4 py-3 text-center shadow-[2px_2px_10px_#0d1028] ${widthClass}`}
    >
      <h2 className="text-lg font-semibold text-gray-800 mb-4">{title}</h2>
      <div className="flex flex-col gap-2">
        {buttons.map((btn, index) => (
          <button
            key={index}
            className="bg-[#ff5202] text-white py-1 px-4 rounded-full hover:bg-[#ff6a2a] transition"
          >
            {btn}
          </button>
        ))}
      </div>
      <button className="mt-4 text-black font-semibold">Read More</button>
    </div>
  );
};

// // Single Card Component
// const Card = ({ title, buttons }) => {
//   const [widthClass, setWidthClass] = useState("xl:w-72");

//   useEffect(() => {
//     const handleResize = () => {
//       const screenWidth = window.innerWidth;

//       if (screenWidth > 768 && screenWidth < 1000) {
//         setWidthClass("w-44"); // Apply w-44 if screen width is between 768px and 1000px
//         console.log(widthClass);

//       } else {
//         setWidthClass("xl:w-72"); // Default for xl screens
//         console.log(widthClass);
//       }
//     };

//     window.addEventListener("resize", handleResize);
//     handleResize(); // Call initially to set the correct width

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);
//   return (
//     // w-72
//     // <div className="bg-white shadow-lg rounded-lg px-6 py-3 text-center xl:w-72 md:w-44 lg:w-48 sm:w-72">
//     <div
//       className={`bg-white shadow-lg rounded-lg px-6 py-3 text-center ${widthClass} md:w-44 sm:w-72`}
//     >
//       <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>
//       <div className="flex flex-col gap-2">
//         {buttons.map((btn, index) => (
//           <button
//             key={index}
//             className="bg-[#ff5202] text-white py-2 px-4 rounded-md hover:bg-[#ff6a2a] transition"
//           >
//             {btn}
//           </button>
//         ))}
//       </div>
//       <button className="mt-4 text-black font-semibold">Read More</button>
//     </div>
//   );
// };

export default CourseCard;
