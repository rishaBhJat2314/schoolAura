// query added 
import React from "react";

const HighlightText = ({ first, second }) => {
  return (
    <div className="text-center sm:text-left">
      <h1 className="text-black sm:text-2xl text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
        {first}
      </h1>
      <h1 className="text-[#ff5202] sm:text-2xl text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
        {second}
      </h1>
    </div>
  );
};

export default HighlightText;



// ----------------------------------------------------
// correct code

// import React from "react";

// const HighlightText = ({ first,second }) => {
//   return (
//     <div>
//       <h1 className="text-black text-5xl font-bold">
//         {first}
//       </h1>
//       <h1 className="text-[#ff5202] text-5xl font-bold">
//         {" "}
//         {second}
//       </h1>
//     </div>
//   );
// };

// export default HighlightText;
