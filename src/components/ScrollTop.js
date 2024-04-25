import { useState, useEffect } from "react";

function ScrollTop() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  // Function to scroll to the top
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Hook to toggle the visibility of the button
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  return (
    showTopBtn && (
      <span
        className="scroll-top d-flex align-items-center justify-content-center"
        onClick={goToTop}
      >
        <i className="bi bi-arrow-up-short"></i>
      </span>
    )
  );
}

export default ScrollTop;
