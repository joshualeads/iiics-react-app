import { useRef } from "react";
import Logo from "../images/logo.png";

import NestedDropDown from "./NestedDropDown";

function Header({ title, navLinks, nestedDropDownOptions, toggleMobileNav }) {
  const header = useRef(null);
  const mobileNavShow = useRef(null);
  const mobileNavHide = useRef(null);
  const menuLink = useRef(null);

  function stickyHeaderOnScroll() {
    window.scrollY > 100
      ? header.current.classList.add("sticked")
      : header.current.classList.remove("sticked");
  }

  function toggleMobileNav() {
    console.log(mobileNavShow.current.classList);
    console.log(mobileNavHide.current.classList);

    document.querySelector("body").classList.toggle("mobile-nav-active");
    mobileNavShow.current.classList.toggle("d-none");
    mobileNavHide.current.classList.toggle("d-none");
  }

  return (
    <>
      {/* <!-- ======= Header ======= --> */}
      <header
        id="header"
        className="header fixed-top d-flex align-items-center"
        ref={header}
        onScroll={stickyHeaderOnScroll}
      >
        <div className="container d-flex align-items-center justify-content-between">
          <a
            href="index.html"
            className="logo d-flex align-items-center me-auto me-lg-0"
          >
            {/* {/* <!-- Uncomment the line below if you also wish to use an image logo --> */}
            {/* {/* <!-- <img src="assets/img/logo.png" alt=""> --> */}
            <h1>
              {/* <img src={Logo} alt={title} /> */}
              IIICS
              <span>.</span>
            </h1>
          </a>

          <nav id="navbar" className="navbar">
            <ul>
              {navLinks.map((link) => {
                return (
                  <li key={link.url}>
                    <a href={link.url} ref={menuLink} onClick={toggleMobileNav}>
                      {link.name}
                    </a>
                  </li>
                );
              })}

              {/* For Nested Drop Down refer */}
              <NestedDropDown nestedDropDownOptions={nestedDropDownOptions} />
            </ul>
          </nav>
          {/* <!-- .navbar --> */}

          <a className="btn-book-a-table" href="#book-a-table">
            Join Us !
          </a>
          <i
            className="mobile-nav-toggle mobile-nav-show bi bi-list"
            ref={mobileNavShow}
            onClick={toggleMobileNav}
          ></i>
          <i
            className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"
            ref={mobileNavHide}
            onClick={toggleMobileNav}
          ></i>
        </div>
      </header>
      {/* <!-- End Header --> */}
    </>
  );
}

export default Header;
