import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HighlightText from "./Common/HighlightText";
import { BsFillPlayFill } from "react-icons/bs";

const VideoSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
    });
  }, []);

  return (
    <div className="flex lg:px-20 flex-col lg:flex-row items-center justify-center gap-6 bg-gray-100">
      <div className="w-[90%] lg:w-1/2">
        <iframe
          className="w-full sm:h-72 h-80"
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
          title="Campus Video"
          allowFullScreen
        ></iframe>
      </div>

      <div
        className="w-[90%] lg:w-1/2 bg-gray-200 my-2 p-4 shadow-lg rounded-lg"
        data-aos="fade-up"
      >
        <div className="flex flex-col items-start sm:flex-wrap">
          <HighlightText first={"VISIT OUR CAMPUS"} second={""} />
          <div className="flex gap-2">
            <HighlightText first={"WITH"} second={""} />
            <HighlightText first={" "} second={" IMAGE GALLERY"} />
          </div>
        </div>
        <hr className="my-3 border-black w-24" />
        <p className="text-gray-600 my-3 text-lg">
          Even slightly believable. If you are going use a passage of Lorem
          Ipsum need
        </p>
        <HighlightText first={"OR WATCH WITH VIDEO"} />

        <button className="my-4 flex px-2 py-2 rounded-lg items-center text-2xl font-bold text-black transition-all duration-300 ease-in-out hover:shadow-[2px_2px_5px_3px] hover:shadow-zinc-500">
          <BsFillPlayFill className="text-4xl mr-2 text-[#ff5202]" />
          PLAY NOW
        </button>
      </div>
    </div>
  );
};

export default VideoSection;
