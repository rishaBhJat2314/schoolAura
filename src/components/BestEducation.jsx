// correct code

/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import dummyImage from "../Assets/dummyImage.png";
import HighlightText from "./Common/HighlightText";

const categories = ["School", "Competitive", "Entrance", "Tutors"];

const schoolClasses = [
  { name: "11th Class", count: 182 },
  { name: "12th Class", count: 178 },
  { name: "6th Class", count: 151 },
  { name: "7th Class", count: 150 },
  { name: "10th Class", count: 150 },
  { name: "9th Class", count: 141 },
  { name: "8th Class", count: 135 },
  { name: "5th Class", count: 87 },
];

const competitiveExams = [
  { name: "SSC CHSL", count: 182 },
  { name: "SSC CPO", count: 182 },
  { name: "UPSC CAPF", count: 182 },
  { name: "SSC CGL", count: 182 },
  { name: "SSC MTS", count: 182 },
  { name: "IBPS Clerk", count: 182 },
  { name: "UPSC IAS", count: 182 },
  { name: "SSC JE", count: 182 },
  { name: "SBI Clerk", count: 182 },
  { name: "RBI Clerk", count: 182 },
  { name: "RBI Grade B", count: 182 },
];

const entranceExams = [
  { name: "VITEEE", count: 6 },
  { name: "MAT", count: 6 },
  { name: "CUCET", count: 6 },
  { name: "CAT", count: 6 },
  { name: "XAT", count: 6 },
];

const BestEducation = () => {
  const [activeTab, setActiveTab] = useState("School");

  useEffect(() => {
    AOS.init({ duration: 1200, once: false });
  }, []);

    return (
      <div className="w-full mx-auto px-20 mb-44">
        <HighlightText first={"PROVIDE"} second={"BEST EDUCATION"} />
        <div className="mt-8 bg-white shadow-[2px_2px_10px_#343541]">
          <div className="flex ">
            <div className="w-1/4">
            {/* <div className="w-1/4 md:flex-row sm:flex-col  sm:flex-wrap justify-center items-start gap-2 p-2">  */}
              {categories.map((category, index) => (
                <div
                  key={category}
                  className={`p-6 cursor-pointer text-gray-700 text-xl mt-1 transition-all ${
                    activeTab === category
                      ? "text-orange-500 font-bold border-l-4 border-orange-500"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setActiveTab(category)}
                >
                  {category}
                </div>
              ))}
            </div>

            <div className="w-3/4 grid grid-cols-4">
              {activeTab === "School" &&
                schoolClasses.map((item, index) => (
                  <div
                    key={index}
                    className=" text-white px-3 flex  items-center rounded-lg"
                    data-aos="zoom-in"
                    // data-aos-delay={index * 50}
                  >
                    <img
                      src={dummyImage}
                      alt="School"
                      className="lg:w-10 lg:h-8 sm:h-5 sm:w-6 object-cover rounded-full"
                    />
                    <div className="flex flex-col ml-1">
                      <div className="text-orange-500 lg:text-lg sm:text-sm font-bold">
                        {item.name}
                      </div>
                      <div className=" text-zinc-600 lg:text-lg sm:text-sm">
                        +{item.count}
                      </div>
                    </div>
                  </div>
                ))}

              {activeTab === "Competitive" &&
                competitiveExams.map((exam, index) => (
                  <div
                    key={index}
                    className=" text-white px-3 flex  items-center rounded-lg"
                    data-aos="zoom-in"
                    // data-aos-delay={index * 50}
                  >
                    <img
                      src={dummyImage}
                      alt="School"
                      className="lg:w-10 lg:h-8 sm:h-5 sm:w-6 object-cover rounded-full"
                    />
                    <div className="flex flex-col ml-1">
                      <div className="text-orange-500 lg:text-lg sm:text-sm font-bold">
                        {exam.name}
                      </div>
                      <div className=" text-zinc-600 lg:text-lg sm:text-sm">
                        +{exam.count}
                      </div>
                    </div>
                  </div>
                ))}

              {activeTab === "Entrance" &&
                entranceExams.map((exam, index) => (
                  <div
                    key={index}
                    className=" text-white px-2 flex  items-center rounded-lg"
                    data-aos="zoom-in"
                    // data-aos-delay={index * 50}
                  >
                    <img
                      src={dummyImage}
                      alt="School"
                      className="w-10 h-8 object-cover rounded-full"
                    />
                    <div className="flex flex-col ml-1">
                      <div className="text-orange-500 text-lg  font-bold">
                        {exam.name}
                      </div>
                      <div className=" text-zinc-600 text-lg">
                        +{exam.count}
                      </div>
                    </div>
                  </div>
                ))}

              {activeTab === "Tutors" && (
                <div
                  className="text-gray-500 text-lg font-semibold text-center py-10"
                  data-aos="fade-up"
                >
                  Coming Soon
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
};

export default BestEducation;

// -----------------------------------------------------------------------------

// import React, { useState, useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import dummyImage from "../Assets/dummyImage.png";
// import HighlightText from "./Common/HighlightText";

// const categories = ["School", "Competitive", "Entrance", "Tutors"];

// const schoolClasses = [
//   { name: "11th Class", count: 182 },
//   { name: "12th Class", count: 178 },
//   { name: "6th Class", count: 151 },
//   { name: "7th Class", count: 150 },
//   { name: "10th Class", count: 150 },
//   { name: "9th Class", count: 141 },
//   { name: "8th Class", count: 135 },
//   { name: "5th Class", count: 87 },
// ];

// const competitiveExams = [
//   { name: "SSC CHSL", count: 182 },
//   { name: "SSC CPO", count: 182 },
//   { name: "UPSC CAPF", count: 182 },
//   { name: "SSC CGL", count: 182 },
//   { name: "SSC MTS", count: 182 },
//   { name: "IBPS Clerk", count: 182 },
//   { name: "UPSC IAS", count: 182 },
//   { name: "SSC JE", count: 182 },
//   { name: "SBI Clerk", count: 182 },
//   { name: "RBI Clerk", count: 182 },
//   { name: "RBI Grade B", count: 182 },
// ];

// const entranceExams = [
//   { name: "VITEEE", count: 6 },
//   { name: "MAT", count: 6 },
//   { name: "CUCET", count: 6 },
//   { name: "CAT", count: 6 },
//   { name: "XAT", count: 6 },
// ];

// const BestEducation = () => {
//   const [activeTab, setActiveTab] = useState("School");

//   useEffect(() => {
//     AOS.init({ duration: 1200, once: false });
//   }, []);

//   return (
//     <div className="w-full mx-auto px-20 mb-44">
//       <HighlightText first={"PROVIDE"} second={"BEST EDUCATION"} />

//       <div className="mt-8 bg-white shadow-[2px_2px_10px_#343541]">
//         {/* Category Tabs */}
//          <div className="flex lg:flex-col sm:flex-row sm:flex-wrap justify-center gap-2 p-4">
//          {categories.map((category) => (
//             <div
//               key={category}
//               className={`cursor-pointer text-gray-700 text-xl p-2 transition-all ${
//                 activeTab === category
//                   ? "text-orange-500 font-bold border-b-4 sm:border-b-0 sm:border-l-4 border-orange-500"
//                   : "bg-gray-100"
//               }`}
//               onClick={() => setActiveTab(category)}
//             >
//               {category}
//             </div>
//           ))}
//         </div>

//         {/* Content Section */}
//         {/* <div className="w-full grid lg:grid-cols-3 sm:grid-cols-3"> */}
//         <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-4">
//           {activeTab === "School" &&
//             schoolClasses.map((item, index) => (
//               <div
//                 key={index}
//                 className="text-white px-3 flex items-center rounded-lg"
//                 data-aos="zoom-in"
//               >
//                 <img
//                   src={dummyImage}
//                   alt="School"
//                   className="lg:w-10 lg:h-8 sm:h-5 sm:w-6 object-cover rounded-full"
//                 />
//                 <div className="flex flex-col ml-1">
//                   <div className="text-orange-500 lg:text-lg sm:text-sm font-bold">
//                     {item.name}
//                   </div>
//                   <div className="text-zinc-600 lg:text-lg sm:text-sm">
//                     +{item.count}
//                   </div>
//                 </div>
//               </div>
//             ))}

//           {activeTab === "Competitive" &&
//             competitiveExams.map((exam, index) => (
//               <div
//                 key={index}
//                 className="text-white px-3 flex items-center rounded-lg"
//                 data-aos="zoom-in"
//               >
//                 <img
//                   src={dummyImage}
//                   alt="School"
//                   className="lg:w-10 lg:h-8 sm:h-5 sm:w-6 object-cover rounded-full"
//                 />
//                 <div className="flex flex-col ml-1">
//                   <div className="text-orange-500 lg:text-lg sm:text-sm font-bold">
//                     {exam.name}
//                   </div>
//                   <div className="text-zinc-600 lg:text-lg sm:text-sm">
//                     +{exam.count}
//                   </div>
//                 </div>
//               </div>
//             ))}

//           {activeTab === "Entrance" &&
//             entranceExams.map((exam, index) => (
//               <div
//                 key={index}
//                 className="text-white px-2 flex items-center rounded-lg"
//                 data-aos="zoom-in"
//               >
//                 <img
//                   src={dummyImage}
//                   alt="School"
//                   className="w-10 h-8 object-cover rounded-full"
//                 />
//                 <div className="flex flex-col ml-1">
//                   <div className="text-orange-500 text-lg font-bold">
//                     {exam.name}
//                   </div>
//                   <div className="text-zinc-600 text-lg">+{exam.count}</div>
//                 </div>
//               </div>
//             ))}

//           {activeTab === "Tutors" && (
//             <div
//               className="text-gray-500 text-lg font-semibold text-center py-10"
//               data-aos="fade-up"
//             >
//               Coming Soon
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BestEducation;