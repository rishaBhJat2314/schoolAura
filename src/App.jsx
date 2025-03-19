import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Common/Header";
import Navbar from "./components/Common/Navbar";
import Home from "./Pages/Home";
import Footer from "./components/Common/Footer";
import BackToTop from "./components/Common/BackToTop";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
    });
  }, []);

  return (
    <div>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <BackToTop />
      <Footer />
    </div>
  );
};

export default App;

// import React,{useEffect} from 'react'
// import Header from './components/Common/Header'
// import Navbar from './components/Common/Navbar'
// import Home from './Pages/Home'
// import Footer from './components/Common/Footer'
// import AOS from "aos";
// import "aos/dist/aos.css";
// import BackToTop from './components/Common/BackToTop'

// const App = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1200,
//       once: false,
//     });
//   }, []);
//   return (
//     <div>
//       <Header />
//       <Navbar />
//       <Home />
//       <BackToTop/>
//       <Footer />
//     </div>
//   )
// }

// export default App
