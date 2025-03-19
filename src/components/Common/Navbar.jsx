// query added
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaChevronDown, FaUniversity, FaBars, FaTimes } from "react-icons/fa";
import cloudImg from "../../Assets/logo-cloud.png";
import logo from "../../Assets/logo_school.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#ff5202] text-white px-6 z-20 md:px-10 py-3 relative">
      <div className="flex justify-between items-center">
        {/* Logo Section */}
        <div className="relative w-[30%]">
          <img
            src={cloudImg}
            alt="Logo"
            className="h-[60px] w-[200px] sm:h-[100px] sm:w-[150px] md:h-[100px] md:w-[200px] lg:h-[120px] lg:w-[240px] xl:w-[190px] xl:h-[95px] absolute -top-4 -left-6 md:-left-10"
          />
          <img
            src={logo}
            alt="Logo"
            className="relative h-[20px] w-[80px] sm:h-[20px] sm:w-[100px] md:h-[50px] md:w-[125px] lg:h-[40px] lg:w-[100px]"
          />
        </div>

        {/* Mobile & Tablet (md and below) Menu Button */}
        <button
          className="lg:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Items */}
        {/* <ul
          className={`absolute lg:static top-16 left-0 w-full lg:w-auto bg-[#ff5202] lg:flex items-center gap-6
          ${isOpen ? "block" : "hidden"} lg:flex`}
        > */}
        <ul
          className={`absolute lg:static top-16 left-0 lg:flex items-center space-x-6 lg:space-x-8 whitespace-nowrap
          ${isOpen ? "block" : "hidden"} lg:flex`}
        >
          <NavItem to="/" label="Home" />
          <Dropdown
            label="Exam Solution"
            items={["1st-12th Exam", "Competitive Exam", "Entrance Exam"]}
          />
          <Dropdown
            label="Online Study"
            items={["1st-12th Exam", "Competitive Exam", "Entrance Exam"]}
          />
          <Dropdown
            label="Tutor Solution"
            items={["Find Tutor", "Become Tutor"]}
          />
          <NavItem to="/blog" label="Blog" />
          <NavItem to="/contact" label="Contact Us" />

          <Link
            to="/school-management"
            className="flex gap-x-2 sm:w-[50%] mx-auto justify-center items-center text-lg text-white bg-black px-4 py-1 rounded-md font-semibold hover:text-yellow-400 transition"
          >
            <FaUniversity /> School Management
          </Link>
        </ul>
      </div>
    </nav>
  );
};

const NavItem = ({ to, label }) => (
  <li className="block lg:inline-block text-center lg:text-left py-2 lg:py-0">
    <NavLink
      to={to}
      className="hover:text-yellow-400 transition block lg:inline"
    >
      {label}
    </NavLink>
  </li>
);

const Dropdown = ({ label, items }) => {
  return (
    <li className="relative group block lg:inline-block text-center lg:text-left py-2 lg:py-0">
      <button className="flex items-center justify-center gap-1 w-full lg:w-auto hover:text-yellow-400 transition">
        {label} <FaChevronDown className="mt-1.5" size={12} />
      </button>

      <ul className="absolute left-1/2 transform -translate-x-1/2 lg:left-0 mt-2 w-48 text-white font-semibold shadow-lg rounded-md overflow-hidden hidden group-hover:block transition bg-black opacity-90">
        {items.map((item, index) => (
          <li
            key={index}
            className="px-4 py-2 hover:bg-[#ff5202] hover:text-white transition"
          >
            <NavLink
              to={`/${item.toLowerCase().replace(/\s/g, "-")}`}
              className="block"
            >
              {item}
            </NavLink>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Navbar;

// -------------------------------------------------------

// correct codde

// import React from "react";
// import { Link, NavLink } from "react-router-dom";
// import { FaChevronDown, FaUniversity } from "react-icons/fa";
// import cloudImg from "../../Assets/logo-cloud.png";
// import logo from "../../Assets/logo_school.png"

// const Navbar = () => {
//   return (
//     <nav className="bg-[#ff5202] text-white px-10 py-3 relative">
//       <div className="flex justify-between items-center">

//         <div className="relative">
//           <img
//             src={cloudImg}
//             alt="Logo"
//             className="h-[130px] w-[200px] absolute -top-4 -left-10"
//           />
//           <img
//             src={logo}
//             alt="Logo"
//             className="relative h-[50px] w-[150px] -left-10"
//           />
//         </div>

//         <ul className="flex items-center gap-6">
//           <NavItem to="/" label="Home" />
//           <Dropdown
//             label="Exam Solution"
//             items={["1st-12th Exam", "Competitive Exam", "Entrance Exam"]}
//           />
//           <Dropdown
//             label="Online Study"
//             items={["1st-12th Exam", "Competitive Exam", "Entrance Exam"]}
//           />
//           <Dropdown
//             label="Tutor Solution"
//             items={["Find Tutor", "Become Tutor"]}
//           />
//           <NavItem to="/blog" label="Blog" />
//           <NavItem to="/contact" label="Contact Us" />

//           <Link
//             to="/school-management"
//             className="flex gap-x-2 items-center text-lg text-white bg-black px-4 py-1 rounded-md font-semibold hover:text-yellow-400 transition"
//           >
//             <FaUniversity/> School Management
//           </Link>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// const NavItem = ({ to, label }) => (
//   <li>
//     <NavLink to={to} className="hover:text-yellow-400 transition">
//       {label}
//     </NavLink>
//   </li>
// );

// const Dropdown = ({ label, items }) => {
//   return (
//     <li className="relative group">
//       <button className="flex items-center gap-1 hover:text-yellow-400 transition">
//         {label} <FaChevronDown size={12} />
//       </button>

//       <ul className="absolute left-0 mt-2 w-48 text-white font-semibold shadow-lg rounded-md overflow-hidden hidden group-hover:block transition">
//         {items.map((item, index) => (
//           <li
//             key={index}
//             className="px-4 py-2 bg-black opacity-70 mb-[1px] font-semibold hover:bg-[#ff5202] hover:text-white transition"
//           >
//             <NavLink to={`/${item.toLowerCase().replace(/\s/g, "-")}`}>
//               {item}
//             </NavLink>
//           </li>
//         ))}
//       </ul>
//     </li>
//   );
// };

// export default Navbar;
