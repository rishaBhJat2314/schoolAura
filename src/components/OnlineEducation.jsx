
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import person from "../Assets/thumbsUpImage.png";
import HighlightText from "./Common/HighlightText";

const OnlineEducation = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: false });
  }, []);

  return (
    <section className=" flex flex-col items-center px-20 justify-center py-16">
      <div
        className="w-full flex flex-col lg:flex-row items-center justify-between"
        data-aos="fade-up"
      >
        <div className="w-full lg:w-1/2 text-left">
          <HighlightText first={"Benefits Of"} second={"Online Education"} />
          <p className="mt-4 text-xl text-gray-700">
            Online Education increases engagement by adding a human element.
            Studying in the comfort of your own home is convenient, but there
            are various other advantages of online study.
          </p>
          <ul className="mt-4 text-lg text-gray-700 list-disc pl-5">
            <li>Time and Location Flexibility</li>
            <li>Find Unlimited Course Category</li>
            <li>No Need to Carry Books</li>
            <li>Access on Mobile, Tab, Laptop</li>
            <li>Use your time while traveling, outing, or free time</li>
            <li>Exam Practice before exams</li>
          </ul>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={person}
            alt="Happy Student"
            className="w-[70%] lg:w-[50%]"
          />
        </div>
      </div>

      <div
        className=" w-full -mt-5 lg:py-3 sm:py-1.5 flex md:flex-nowrap sm:flex-wrap justify-center relative"
        data-aos="fade-up"
        // data-aos-delay="200"
        style={{
          backgroundImage: `
            -webkit-gradient(linear, left top, left bottom, color-stop(75%, #0d1028), color-stop(25%, #0d1028)),
            url('/src/Assets/onlineEducationBGImage.png')
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className=" text-white lg:px-6 md:px-4 sm:px-2 lg:py-3 md:py-2 rounded-lg text-center lg:w-64 md:w-52 sm:w-32">
          <h2 className="lg:text-4xl md:text-xl font-bold">10000+</h2>
          <p className="lg:text-2xl md:text-lg text-[#ff5202]">Total Exams</p>
        </div>

        <div className=" text-white lg:px-6 md:px-4 sm:px-2 lg:py-3 md:py-2 rounded-lg text-center w-64">
          <h2 className="lg:text-4xl md:text-xl font-bold">600+</h2>
          <p className="lg:text-2xl md:text-lg text-[#ff5202]">Courses</p>
        </div>

        <div className=" text-white lg:px-6 sm:px-4 lg:py-3 sm:py-1.5 rounded-lg text-center w-64">
          <h2 className="lg:text-4xl md:text-xl font-bold">3000+</h2>
          <p className="lg:text-2xl md:text-lg text-[#ff5202]">
            Success Stories
          </p>
        </div>

        <div className=" text-white lg:px-6 md:px-4 sm:px-2 lg:py-3 md:py-2 rounded-lg text-center w-64">
          <h2 className="lg:text-4xl md:text-xl font-bold">4.5/5</h2>
          <p className="lg:text-2xl md:text-lg text-[#ff5202]">Rating</p>
        </div>
      </div>
    </section>
  );
};

export default OnlineEducation;