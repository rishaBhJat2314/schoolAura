// media queries added 
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 sm:bottom-6 z-10 right-4 sm:right-6 bg-orange-500 text-white 
      p-2 sm:p-3 lg:p-4 rounded-full shadow-lg transition-opacity 
      ${visible ? "opacity-100" : "opacity-0"}
      text-sm sm:text-base lg:text-xl`}
    >
      <FaArrowUp className="text-lg sm:text-xl lg:text-2xl" />
    </button>
  );
};

export default BackToTop;




// --------------------------------------------------------------------------------
// Correct code

// import React, { useState, useEffect } from "react";
// import { FaArrowUp } from "react-icons/fa";

// const BackToTop = () => {
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const toggleVisibility = () => {
//       if (window.scrollY > 300) {
//         setVisible(true);
//       } else {
//         setVisible(false);
//       }
//     };
//     window.addEventListener("scroll", toggleVisibility);
//     return () => window.removeEventListener("scroll", toggleVisibility);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <button
//       onClick={scrollToTop}
//       className={`fixed bottom-6 z-20 right-6 bg-orange-500 text-white p-3 rounded-full shadow-lg transition-opacity ${
//         visible ? "opacity-100" : "opacity-0"
//       }`}
//     >
//       <FaArrowUp className="text-xl" />
//     </button>
//   );
// };

// export default BackToTop;
