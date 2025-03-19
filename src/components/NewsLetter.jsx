import React from "react";
import HighlightText from "./Common/HighlightText";

const Newsletter = () => {
  return (
    <div
      className="relative w-full flex justify-center -mt-64 py-10"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div
        className="w-11/12 bg-cover bg-center bg-no-repeat shadow-lg rounded-lg flex flex-col md:flex-row items-center justify-between relative"
        style={{
          backgroundImage: "url('/src/Assets/popUpBg.png')",
        }}
      >

        <div className="absolute inset-0 bg-opacity-50 rounded-lg"></div>


        <div className="relative z-10 flex flex-col md:flex-row w-full items-center justify-between p-6">

          <div className="text-center md:text-left">
            <HighlightText first={"SUBSCRIBE TO OUR"} second={"NEWSLETTER"} />
          </div>

          <div className="flex mt-6 md:mt-0">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 text-lg border bg-white text-gray-500 border-gray-300 rounded-l-md focus:outline-none w-72"
            />
            <button className="bg-orange-500 text-white px-6 py-3 text-lg rounded-r-md hover:bg-orange-600">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
