import React from "react";
import mobileImage from "../Assets/school_aura_app.jpg";
import HighlightText from "./Common/HighlightText";

const MobileAppSection = () => {
  return (
    <div className="flex flex-col md:flex-row lg:items-center bg-gray-100 px-5 rounded-md">
      <div className="w-[50%] flex justify-center">
        <img
          src={mobileImage}
          alt="Mobile App"
          className="w-full lg:h-full md:h-[80%] lg:object-cover md:object-right rounded-sm shadow-lg"
        />
      </div>

      <div className="lg:w-[50%] w-full lg:pl-10 text-center md:text-left md:ml-5 md:mt-3">
        <div className="flex lg:flex-col gap-2">
          <HighlightText first={"EASY ACCESS WITH"} second={""} />
          <HighlightText first={""} second={"MOBILE APP"} />
        </div>
        <p className="text-gray-700 lg:mt-4 sm:mt-1 lg:text-xl sm:text-lg text-start">
          If you're looking for easily accessible resources for your classroom,
          then you're in the right place. Online learning with the Android app
          is very easy to access. That's why we've hand-curated the School Aura
          free app and website. Easy to use and learn!
        </p>
        <p className="text-gray-700 lg:mt-4 sm:mt-2 text-xl text-start">
          To learn online, you need to be reasonably comfortable with Smart
          Mobile Phone, Tab, Laptops, and the internet. The advantage of
          learning online via an android app is that you can pause the
          video/audio whenever you need to take notes or simply absorb what has
          been said. Another fantastic feature of online learning is that you
          can re-listen to different parts as needed, which is something you
          can't do in a live lecture!
        </p>
        <button className="lg:mt-6 lg:px-6 lg:py-3 sm:py-2 sm:px-3 sm:mt-3 bg-blue-600 text-white lg:text-lg sm:text-md rounded-lg shadow-md hover:bg-blue-700 transition">
          Download Now
        </button>
      </div>
    </div>
  );
};

export default MobileAppSection;