import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import initializeApp from "./initializeApp";
import "./App.scss";
import { NAV_LINKS, NESTED_DROPDOWN_OPTIONS } from "./constants/global";

// Screens
import Home from "./screens/Home";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Blogs from "./screens/Blogs";

//Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";

function App() {
  const [preloader, togglePreloader] = useState(true);

  useEffect(() => {
    initializeApp(togglePreloader);
  }, [preloader]);

  return (
    <>
      <Header
        title={"IIICS"}
        navLinks={NAV_LINKS}
        nestedDropDownOptions={NESTED_DROPDOWN_OPTIONS}
      />
      <Router>
        <Routes>
          {/* Home Page */}
          <Route exact path="/" element={<Home />} />

          {/* About Page */}
          <Route path="/about" element={<About />} />

          {/* Contact Us Page */}
          <Route path="/contact" element={<Contact />} />

          {/* Blogs */}
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </Router>
      <Footer />

      <ScrollTop />
      {preloader === true ? <div id="preloader"></div> : null}
    </>
  );
}

export default App;
