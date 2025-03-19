import React, { useState } from "react";
import userImage from "../Assets/user-img.png";

const Login = () => {
  const [activeTab, setActiveTab] = useState("student");

  return (
    <div
      className="flex lg:justify-start sm:justify-center mx-auto sm:w-96 md:w-[40rem] lg:w-72 xl:w-80 shadow-[2px_2px_10px_#0d1028]"
      data-aos="zoom-in-up"
    >
      <div className="relative w-full bg-white px-8 py-3 shadow-lg rounded-lg">
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
          <img
            src={userImage}
            alt="User Avatar"
            className="w-24 h-24 xl:h-28 xl:w-28 rounded-full border-4 border-white"
          />
        </div>

        <div className="flex justify-around mt-12 border-b ">
          <button
            className={`text-lg font-semibold ${
              activeTab === "student"
                ? "text-green-600 border-b-2 border-orange-500"
                : "text-gray-400"
            }`}
            onClick={() => setActiveTab("student")}
          >
            Student Login
          </button>
          <button
            className={`text-lg font-semibold ${
              activeTab === "parent"
                ? "text-green-600 border-b-2 border-orange-500"
                : "text-gray-400"
            }`}
            onClick={() => setActiveTab("parent")}
          >
            Parents Login
          </button>
        </div>

        <form className="mt-6">
          {activeTab === "student" ? (
            <>
              <label className="block text-gray-700">Student ID</label>
              <input
                type="text"
                placeholder="Enter Student ID"
                className="w-full px-3 py-2 xl:py-3 xl:px-4 border rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <label className="block text-gray-700 mt-3">
                Student Password
              </label>
              <input
                type="password"
                placeholder="Enter Student Password"
                className="w-full px-3 py-2 border rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </>
          ) : (
            <>
              <label className="block text-gray-700">
                Parent Mobile Number
              </label>
              <input
                type="text"
                placeholder="Enter Mobile Number"
                className="w-full px-3 py-2 border rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <label className="block text-gray-700 mt-3">
                Parent Password
              </label>
              <input
                type="password"
                placeholder="Enter Parent Password"
                className="w-full px-3 py-2 border rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </>
          )}

          <button className="w-full bg-black text-white py-2 rounded-md mt-4 hover:bg-gray-800 transition">
            Login
          </button>

          <div className="flex justify-between text-sm text-gray-500 mt-3">
            <a href="#" className="hover:underline">
              Forgot Password
            </a>
            <a href="#" className="hover:underline">
              Create Account
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
