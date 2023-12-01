import { useState, useEffect } from "react";

function About() {
  const [aboutUs, setAboutUs] = useState([]);

  useEffect(() => {
    fetchAboutUs();
  }, []);

  function fetchAboutUs() {
    fetch(`${process.env.REACT_APP_BACKEND}api/about-us`)
      .then((res) => res.json())
      .then((aboutUs) => {
        setAboutUs(aboutUs.data);
      });
  }

  console.log(aboutUs);

  return <p>About</p>;
}

export default About;

// Digital Wev App
/*
  Contact Us and Testimonials
  Branding and Logo - Sis Nirmala 
  Theme Styling - Info / Education / Knowledge 
*/

// Digitialization
/*
  * Old Reg Form - Sis Nirmala 
  - Stratergy 
  
*/
