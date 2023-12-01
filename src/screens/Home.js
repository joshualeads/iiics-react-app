// Components
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";

// Media Files
import HeroImage from "../images/hero-img.png";
import AboutUsImage from "../images/about.jpg";
import AboutVideoPreview from "../images/about-2.jpg";
import Testimonial1 from "../images/testimonials/testimonials-1.jpg";
import Testimonial2 from "../images/testimonials/testimonials-2.jpg";
import Testimonial3 from "../images/testimonials/testimonials-3.jpg";
import Testimonial4 from "../images/testimonials/testimonials-4.jpg";

function Home() {
  return (
    <>
      {/* {/* <!-- ======= Hero Section ======= --> */}
      <Hero
        title={
          <>
            Welcome to IIICS,
            <br />
            Bible and Christ training program
          </>
        }
        description={
          "Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat"
        }
        buttonLink={"#book-a-table"}
        VideoLink={"https://www.youtube.com/watch?v=LXb3EKWsInQ"}
        image={HeroImage}
      />
      {/* {/* <!-- End Hero Section --> */}

      <main id="main">
        <AboutUs
          image={AboutUsImage}
          phoneNumber={"+1 9999 99999 99"}
          aboutVideoPreview={AboutVideoPreview}
        />

        {/* {/* <!-- ======= Why Us Section ======= --> */}
        <section id="why-us" className="why-us section-bg">
          <div className="container" data-aos="fade-up">
            <div className="row gy-4">
              <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                <div className="why-box">
                  <h3>Why IIICS?</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Duis aute irure dolor in reprehenderit Asperiores
                    dolores sed et. Tenetur quia eos. Autem tempore quibusdam
                    vel necessitatibus optio ad corporis.
                  </p>
                  <div className="text-center">
                    <a href="#" className="more-btn">
                      Learn More <i className="bx bx-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              {/* {/* <!-- End Why Box --> */}

              <div className="col-lg-8 d-flex align-items-center">
                <div className="row gy-4">
                  <div
                    className="col-xl-4"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                      <i className="bi bi-clipboard-data"></i>
                      <h4>Corporis voluptates officia eiusmod</h4>
                      <p>
                        Consequuntur sunt aut quasi enim aliquam quae harum
                        pariatur laboris nisi ut aliquip
                      </p>
                    </div>
                  </div>
                  {/* {/* <!-- End Icon Box --> */}

                  <div
                    className="col-xl-4"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                      <i className="bi bi-gem"></i>
                      <h4>Ullamco laboris ladore pan</h4>
                      <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt
                      </p>
                    </div>
                  </div>
                  {/* {/* <!-- End Icon Box --> */}

                  <div
                    className="col-xl-4"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                      <i className="bi bi-inboxes"></i>
                      <h4>Labore consequatur incidid dolore</h4>
                      <p>
                        Aut suscipit aut cum nemo deleniti aut omnis. Doloribus
                        ut maiores omnis facere
                      </p>
                    </div>
                  </div>
                  {/* {/* <!-- End Icon Box --> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* {/* <!-- End Why Us Section --> */}

        {/* {/* <!-- ======= Stats Counter Section ======= --> */}
        <section id="stats-counter" className="stats-counter">
          <div className="container" data-aos="zoom-out">
            <div className="row gy-4">
              <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100">
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="232"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>Students Enrolled</p>
                </div>
              </div>
              {/* {/* <!-- End Stats Item --> */}

              <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100">
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="521"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>Students Completed</p>
                </div>
              </div>
              {/* {/* <!-- End Stats Item --> */}

              <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100">
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="1453"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>Currently Training</p>
                </div>
              </div>
              {/* {/* <!-- End Stats Item --> */}

              <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100">
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="32"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>Our Staffs</p>
                </div>
              </div>
              {/* {/* <!-- End Stats Item --> */}
            </div>
          </div>
        </section>
        {/* {/* <!-- End Stats Counter Section --> */}

        {/* <!-- ======= Menu Section ======= --> */}
        <section id="menu" className="menu">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>Our Courses</h2>
              <p>
                Check Our <span>Courses</span>
              </p>
            </div>

            <ul
              className="nav nav-tabs d-flex justify-content-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <li className="nav-item">
                <a
                  className="nav-link active show"
                  data-bs-toggle="tab"
                  data-bs-target="#menu-starters"
                >
                  <h4>Course 1</h4>
                </a>
              </li>
              {/* <!-- End tab nav item --> */}

              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#menu-breakfast"
                >
                  <h4>Course 2</h4>{" "}
                </a>
                {/* <!-- End tab nav item --> */}
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#menu-lunch"
                >
                  <h4>Course 3</h4>
                </a>
              </li>
              {/* <!-- End tab nav item --> */}

              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#menu-dinner"
                >
                  <h4>Course 4</h4>
                </a>
              </li>
              {/* <!-- End tab nav item --> */}
            </ul>

            <div
              className="tab-content"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="tab-pane fade active show" id="menu-starters">
                <div className="tab-header text-center">
                  <p>Menu</p>
                  <h3>Beginners</h3>
                </div>

                <div className="row gy-5">
                  <div className="col-lg-4 menu-item">
                    <a
                      href="assets/img/menu/menu-item-1.png"
                      className="glightbox"
                    >
                      <img
                        src="assets/img/menu/menu-item-1.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Magnam Tiste</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price d-none">$5.95</p>
                  </div>
                  {/* <!-- Menu Item --> */}

                  <div className="col-lg-4 menu-item">
                    <a
                      href="assets/img/menu/menu-item-2.png"
                      className="glightbox"
                    >
                      <img
                        src="assets/img/menu/menu-item-2.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Aut Luia</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price d-none">$14.95</p>
                  </div>
                  {/* <!-- Menu Item --> */}

                  <div className="col-lg-4 menu-item">
                    <a
                      href="assets/img/menu/menu-item-3.png"
                      className="glightbox"
                    >
                      <img
                        src="assets/img/menu/menu-item-3.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Est Eligendi</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price d-none">$8.95</p>
                  </div>
                  {/* <!-- Menu Item --> */}

                  <div className="col-lg-4 menu-item">
                    <a
                      href="assets/img/menu/menu-item-4.png"
                      className="glightbox"
                    >
                      <img
                        src="assets/img/menu/menu-item-4.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Eos Luibusdam</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price d-none">$12.95</p>
                  </div>
                  {/* <!-- Menu Item --> */}

                  <div className="col-lg-4 menu-item">
                    <a
                      href="assets/img/menu/menu-item-5.png"
                      className="glightbox"
                    >
                      <img
                        src="assets/img/menu/menu-item-5.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Eos Luibusdam</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price d-none">$12.95</p>
                  </div>
                  {/* <!-- Menu Item --> */}

                  <div className="col-lg-4 menu-item">
                    <a
                      href="assets/img/menu/menu-item-6.png"
                      className="glightbox"
                    >
                      <img
                        src="assets/img/menu/menu-item-6.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Laboriosam Direva</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price d-none">$9.95</p>
                  </div>
                  {/* <!-- Menu Item --> */}
                </div>
              </div>
              {/* <!-- End Starter Menu Content --> */}

              <div className="tab-pane fade" id="menu-breakfast">
                <div className="tab-header text-center">
                  <p>Menu</p>
                  <h3>Breakfast</h3>
                </div>

                <div className="row gy-5">
                  <div className="col-lg-4 menu-item">
                    <a
                      href="assets/img/menu/menu-item-1.png"
                      className="glightbox"
                    >
                      <img
                        src="assets/img/menu/menu-item-1.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Magnam Tiste</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price d-none">$5.95</p>
                  </div>
                  {/* <!-- Menu Item --> */}

                  <div className="col-lg-4 menu-item">
                    <a
                      href="assets/img/menu/menu-item-2.png"
                      className="glightbox"
                    >
                      <img
                        src="assets/img/menu/menu-item-2.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Aut Luia</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price d-none">$14.95</p>
                  </div>
                  {/* <!-- Menu Item --> */}

                  <div className="col-lg-4 menu-item">
                    <a
                      href="assets/img/menu/menu-item-3.png"
                      className="glightbox"
                    >
                      <img
                        src="assets/img/menu/menu-item-3.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Est Eligendi</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price d-none">$8.95</p>
                  </div>
                  {/* <!-- Menu Item --> */}

                  <div className="col-lg-4 menu-item">
                    <a
                      href="assets/img/menu/menu-item-4.png"
                      className="glightbox"
                    >
                      <img
                        src="assets/img/menu/menu-item-4.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Eos Luibusdam</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price d-none">$12.95</p>
                  </div>
                  {/* <!-- Menu Item --> */}

                  <div className="col-lg-4 menu-item">
                    <a
                      href="assets/img/menu/menu-item-5.png"
                      className="glightbox"
                    >
                      <img
                        src="assets/img/menu/menu-item-5.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Eos Luibusdam</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price d-none">$12.95</p>
                  </div>
                  {/* <!-- Menu Item --> */}

                  <div className="col-lg-4 menu-item">
                    <a
                      href="assets/img/menu/menu-item-6.png"
                      className="glightbox"
                    >
                      <img
                        src="assets/img/menu/menu-item-6.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Laboriosam Direva</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price d-none">$9.95</p>
                  </div>
                  {/* <!-- Menu Item --> */}
                </div>
              </div>
              {/* <!-- End Breakfast Menu Content --> */}

              <div className="tab-pane fade" id="menu-lunch">
                <div className="tab-header text-center">
                  <p>Menu</p>
                  <h3>Lunch</h3>
                </div>

                <div className="row gy-5">
                  <div className="col-lg-4 menu-item">
                    <a
                      href="assets/img/menu/menu-item-1.png"
                      className="glightbox"
                    >
                      <img
                        src="assets/img/menu/menu-item-1.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Magnam Tiste</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price d-none">$5.95</p>
                  </div>
                  {/* <!-- Menu Item --> */}

                  <div className="col-lg-4 menu-item">
                    <a
                      href="assets/img/menu/menu-item-2.png"
                      className="glightbox"
                    >
                      <img
                        src="assets/img/menu/menu-item-2.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Aut Luia</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price d-none">$14.95</p>
                  </div>
                  {/* <!-- Menu Item --> */}

                  <div className="col-lg-4 menu-item">
                    <a
                      href="assets/img/menu/menu-item-3.png"
                      className="glightbox"
                    >
                      <img
                        src="assets/img/menu/menu-item-3.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Est Eligendi</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price d-none">$8.95</p>
                  </div>
                  {/* <!-- Menu Item --> */}

                  <div className="col-lg-4 menu-item">
                    <a
                      href="assets/img/menu/menu-item-4.png"
                      className="glightbox"
                    >
                      <img
                        src="assets/img/menu/menu-item-4.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Eos Luibusdam</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price d-none">$12.95</p>
                  </div>
                  {/* <!-- Menu Item --> */}

                  <div className="col-lg-4 menu-item">
                    <a
                      href="assets/img/menu/menu-item-5.png"
                      className="glightbox"
                    >
                      <img
                        src="assets/img/menu/menu-item-5.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Eos Luibusdam</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price d-none">$12.95</p>
                  </div>
                  {/* <!-- Menu Item --> */}

                  <div className="col-lg-4 menu-item">
                    <a
                      href="assets/img/menu/menu-item-6.png"
                      className="glightbox"
                    >
                      <img
                        src="assets/img/menu/menu-item-6.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Laboriosam Direva</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price d-none">$9.95</p>
                  </div>
                  {/* <!-- Menu Item --> */}
                </div>
              </div>
              {/* <!-- End Lunch Menu Content --> */}

              <div className="tab-pane fade" id="menu-dinner">
                <div className="tab-header text-center">
                  <p>Menu</p>
                  <h3>Dinner</h3>
                </div>

                <div className="row gy-5">
                  <div className="col-lg-4 menu-item">
                    <a
                      href="assets/img/menu/menu-item-1.png"
                      className="glightbox"
                    >
                      <img
                        src="assets/img/menu/menu-item-1.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Magnam Tiste</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price d-none">$5.95</p>
                  </div>
                  {/* <!-- Menu Item --> */}

                  <div className="col-lg-4 menu-item">
                    <a
                      href="assets/img/menu/menu-item-2.png"
                      className="glightbox"
                    >
                      <img
                        src="assets/img/menu/menu-item-2.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Aut Luia</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price d-none">$14.95</p>
                  </div>
                  {/* <!-- Menu Item --> */}

                  <div className="col-lg-4 menu-item">
                    <a
                      href="assets/img/menu/menu-item-3.png"
                      className="glightbox"
                    >
                      <img
                        src="assets/img/menu/menu-item-3.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Est Eligendi</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price d-none">$8.95</p>
                  </div>
                  {/* <!-- Menu Item --> */}

                  <div className="col-lg-4 menu-item">
                    <a
                      href="assets/img/menu/menu-item-4.png"
                      className="glightbox"
                    >
                      <img
                        src="assets/img/menu/menu-item-4.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Eos Luibusdam</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price d-none">$12.95</p>
                  </div>
                  {/* <!-- Menu Item --> */}

                  <div className="col-lg-4 menu-item">
                    <a
                      href="assets/img/menu/menu-item-5.png"
                      className="glightbox"
                    >
                      <img
                        src="assets/img/menu/menu-item-5.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Eos Luibusdam</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price d-none">$12.95</p>
                  </div>
                  {/* <!-- Menu Item --> */}

                  <div className="col-lg-4 menu-item">
                    <a
                      href="assets/img/menu/menu-item-6.png"
                      className="glightbox"
                    >
                      <img
                        src="assets/img/menu/menu-item-6.png"
                        className="menu-img img-fluid"
                        alt=""
                      />
                    </a>
                    <h4>Laboriosam Direva</h4>
                    <p className="ingredients">
                      Lorem, deren, trataro, filede, nerada
                    </p>
                    <p className="price d-none">$9.95</p>
                  </div>
                  {/* <!-- Menu Item --> */}
                </div>
              </div>
              {/* <!-- End Dinner Menu Content --> */}
            </div>
          </div>
        </section>
        {/* <!-- End Menu Section --> */}

        {/* <!-- ======= Testimonials Section ======= --> */}
        <section id="testimonials" className="testimonials section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>Testimonials</h2>
              <p>
                What Are They <span>Saying About Us</span>
              </p>
            </div>

            <div
              className="slides-1 swiper"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="row gy-4 justify-content-center">
                      <div className="col-lg-6">
                        <div className="testimonial-content">
                          <p>
                            <i className="bi bi-quote quote-icon-left"></i>
                            Proin iaculis purus consequat sem cure digni ssim
                            donec porttitora entum suscipit rhoncus. Accusantium
                            quam, ultricies eget id, aliquam eget nibh et.
                            Maecen aliquam, risus at semper.
                            <i className="bi bi-quote quote-icon-right"></i>
                          </p>
                          <h3>Saul Goodman</h3>
                          <h4>Ceo &amp; Founder</h4>
                          <div className="stars">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 text-center">
                        <img
                          src={Testimonial1}
                          className="img-fluid testimonial-img"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End testimonial item --> */}

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="row gy-4 justify-content-center">
                      <div className="col-lg-6">
                        <div className="testimonial-content">
                          <p>
                            <i className="bi bi-quote quote-icon-left"></i>
                            Export tempor illum tamen malis malis eram quae
                            irure esse labore quem cillum quid cillum eram malis
                            quorum velit fore eram velit sunt aliqua noster
                            fugiat irure amet legam anim culpa.
                            <i className="bi bi-quote quote-icon-right"></i>
                          </p>
                          <h3>Sara Wilsson</h3>
                          <h4>Designer</h4>
                          <div className="stars">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 text-center">
                        <img
                          src={Testimonial2}
                          className="img-fluid testimonial-img"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End testimonial item --> */}

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="row gy-4 justify-content-center">
                      <div className="col-lg-6">
                        <div className="testimonial-content">
                          <p>
                            <i className="bi bi-quote quote-icon-left"></i>
                            Enim nisi quem export duis labore cillum quae magna
                            enim sint quorum nulla quem veniam duis minim tempor
                            labore quem eram duis noster aute amet eram fore
                            quis sint minim.
                            <i className="bi bi-quote quote-icon-right"></i>
                          </p>
                          <h3>Jena Karlis</h3>
                          <h4>Store Owner</h4>
                          <div className="stars">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 text-center">
                        <img
                          src={Testimonial3}
                          className="img-fluid testimonial-img"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End testimonial item --> */}

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="row gy-4 justify-content-center">
                      <div className="col-lg-6">
                        <div className="testimonial-content">
                          <p>
                            <i className="bi bi-quote quote-icon-left"></i>
                            Quis quorum aliqua sint quem legam fore sunt eram
                            irure aliqua veniam tempor noster veniam enim culpa
                            labore duis sunt culpa nulla illum cillum fugiat
                            legam esse veniam culpa fore nisi cillum quid.
                            <i className="bi bi-quote quote-icon-right"></i>
                          </p>
                          <h3>John Larson</h3>
                          <h4>Entrepreneur</h4>
                          <div className="stars">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 text-center">
                        <img
                          src={Testimonial4}
                          className="img-fluid testimonial-img"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End testimonial item --> */}
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </section>
        {/* <!-- End Testimonials Section --> */}

        {/* <!-- ======= Chefs Section ======= --> */}
        <section id="chefs" className="chefs section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>Leaders</h2>
              <p>
                Our <span>Leaders</span> in Mission
              </p>
            </div>

            <div className="row gy-4">
              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="chef-member">
                  <div className="member-img">
                    <img
                      src="assets/img/chefs/chefs-1.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="social">
                      <a href="">
                        <i className="bi bi-twitter"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Walter White</h4>
                    <span>Master Chef</span>
                    <p>
                      Velit aut quia fugit et et. Dolorum ea voluptate vel
                      tempore tenetur ipsa quae aut. Ipsum exercitationem iure
                      minima enim corporis et voluptate.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- End Chefs Member --> */}

              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="chef-member">
                  <div className="member-img">
                    <img
                      src="assets/img/chefs/chefs-2.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="social">
                      <a href="">
                        <i className="bi bi-twitter"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Sarah Jhonson</h4>
                    <span>Patissier</span>
                    <p>
                      Quo esse repellendus quia id. Est eum et accusantium
                      pariatur fugit nihil minima suscipit corporis. Voluptate
                      sed quas reiciendis animi neque sapiente.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- End Chefs Member --> */}

              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="chef-member">
                  <div className="member-img">
                    <img
                      src="assets/img/chefs/chefs-3.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="social">
                      <a href="">
                        <i className="bi bi-twitter"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>William Anderson</h4>
                    <span>Cook</span>
                    <p>
                      Vero omnis enim consequatur. Voluptas consectetur unde qui
                      molestiae deserunt. Voluptates enim aut architecto porro
                      aspernatur molestiae modi.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- End Chefs Member --> */}
            </div>
          </div>
        </section>
        {/* <!-- End Chefs Section --> */}

        {/* <!-- ======= Book A Table Section ======= --> */}
        <section id="book-a-table" className="book-a-table">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>Book A Session</h2>
              <p>
                Book <span>Your Session</span> With Us
              </p>
            </div>

            <div className="row g-0">
              <div
                className="col-lg-4 reservation-img"
                //style="background-image: url(assets/img/reservation.jpg)"
                data-aos="zoom-out"
                data-aos-delay="200"
              ></div>

              <div className="col-lg-8 d-flex align-items-center reservation-form-bg">
                <form
                  action="forms/book-a-table.php"
                  method="post"
                  role="form"
                  className="php-email-form"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="row gy-4">
                    <div className="col-lg-4 col-md-6">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        data-rule="minlen:4"
                        data-msg="Please enter at least 4 chars"
                      />
                      <div className="validate"></div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        data-rule="email"
                        data-msg="Please enter a valid email"
                      />
                      <div className="validate"></div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        name="phone"
                        id="phone"
                        placeholder="Your Phone"
                        data-rule="minlen:4"
                        data-msg="Please enter at least 4 chars"
                      />
                      <div className="validate"></div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <input
                        type="text"
                        name="date"
                        className="form-control"
                        id="date"
                        placeholder="Date"
                        data-rule="minlen:4"
                        data-msg="Please enter at least 4 chars"
                      />
                      <div className="validate"></div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        name="time"
                        id="time"
                        placeholder="Time"
                        data-rule="minlen:4"
                        data-msg="Please enter at least 4 chars"
                      />
                      <div className="validate"></div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <input
                        type="number"
                        className="form-control"
                        name="people"
                        id="people"
                        placeholder="# of people"
                        data-rule="minlen:1"
                        data-msg="Please enter at least 1 chars"
                      />
                      <div className="validate"></div>
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <textarea
                      className="form-control"
                      name="message"
                      rows="5"
                      placeholder="Message"
                    ></textarea>
                    <div className="validate"></div>
                  </div>
                  <div className="mb-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">
                      Your booking request was sent. We will call back or send
                      an Email to confirm your reservation. Thank you!
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit">Book a Table</button>
                  </div>
                </form>
              </div>
              {/* <!-- End Reservation Form --> */}
            </div>
          </div>
        </section>
        {/* <!-- End Book A Table Section --> */}

        {/* <!-- ======= Gallery Section ======= --> */}
        <section id="gallery" className="gallery section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>gallery</h2>
              <p>
                Check <span>Our Gallery</span>
              </p>
            </div>

            <div className="gallery-slider swiper">
              <div className="swiper-wrapper align-items-center">
                <div className="swiper-slide">
                  <a
                    className="glightbox"
                    data-gallery="images-gallery"
                    href="assets/img/gallery/gallery-1.jpg"
                  >
                    <img
                      src="assets/img/gallery/gallery-1.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
                <div className="swiper-slide">
                  <a
                    className="glightbox"
                    data-gallery="images-gallery"
                    href="assets/img/gallery/gallery-2.jpg"
                  >
                    <img
                      src="assets/img/gallery/gallery-2.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
                <div className="swiper-slide">
                  <a
                    className="glightbox"
                    data-gallery="images-gallery"
                    href="assets/img/gallery/gallery-3.jpg"
                  >
                    <img
                      src="assets/img/gallery/gallery-3.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
                <div className="swiper-slide">
                  <a
                    className="glightbox"
                    data-gallery="images-gallery"
                    href="assets/img/gallery/gallery-4.jpg"
                  >
                    <img
                      src="assets/img/gallery/gallery-4.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
                <div className="swiper-slide">
                  <a
                    className="glightbox"
                    data-gallery="images-gallery"
                    href="assets/img/gallery/gallery-5.jpg"
                  >
                    <img
                      src="assets/img/gallery/gallery-5.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
                <div className="swiper-slide">
                  <a
                    className="glightbox"
                    data-gallery="images-gallery"
                    href="assets/img/gallery/gallery-6.jpg"
                  >
                    <img
                      src="assets/img/gallery/gallery-6.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
                <div className="swiper-slide">
                  <a
                    className="glightbox"
                    data-gallery="images-gallery"
                    href="assets/img/gallery/gallery-7.jpg"
                  >
                    <img
                      src="assets/img/gallery/gallery-7.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
                <div className="swiper-slide">
                  <a
                    className="glightbox"
                    data-gallery="images-gallery"
                    href="assets/img/gallery/gallery-8.jpg"
                  >
                    <img
                      src="assets/img/gallery/gallery-8.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </section>
        {/* <!-- End Gallery Section --> */}

        {/* <!-- ======= Contact Section ======= --> */}
        <section id="contact" className="contact">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>Contact</h2>
              <p>
                Need Help? <span>Contact Us</span>
              </p>
            </div>

            <div className="mb-3">
              <iframe
                //style="border: 0; width: 100%; height: 350px"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            {/* <!-- End Google Maps --> */}

            <div className="row gy-4">
              <div className="col-md-6">
                <div className="info-item d-flex align-items-center">
                  <i className="icon bi bi-map flex-shrink-0"></i>
                  <div>
                    <h3>Our Address</h3>
                    <p>A108 Adam Street, New York, NY 535022</p>
                  </div>
                </div>
              </div>
              {/* <!-- End Info Item --> */}

              <div className="col-md-6">
                <div className="info-item d-flex align-items-center">
                  <i className="icon bi bi-envelope flex-shrink-0"></i>
                  <div>
                    <h3>Email Us</h3>
                    <p>contact@example.com</p>
                  </div>
                </div>
              </div>
              {/* <!-- End Info Item --> */}

              <div className="col-md-6">
                <div className="info-item d-flex align-items-center">
                  <i className="icon bi bi-telephone flex-shrink-0"></i>
                  <div>
                    <h3>Call Us</h3>
                    <p>+1 5589 55488 55</p>
                  </div>
                </div>
              </div>
              {/* <!-- End Info Item --> */}

              <div className="col-md-6">
                <div className="info-item d-flex align-items-center">
                  <i className="icon bi bi-share flex-shrink-0"></i>
                  <div>
                    <h3>Opening Hours</h3>
                    <div>
                      <strong>Mon-Sat:</strong> 11AM - 23PM;
                      <strong>Sunday:</strong> Closed
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End Info Item --> */}
            </div>

            <form
              action="forms/contact.php"
              method="post"
              role="form"
              className="php-email-form p-3 p-md-4"
            >
              <div className="row">
                <div className="col-xl-6 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="col-xl-6 form-group">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  name="message"
                  rows="5"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
            {/* <!--End Contact Form --> */}
          </div>
        </section>
        {/* <!-- End Contact Section --> */}
      </main>
      {/* <!-- End #main --> */}

      <a
        href="#"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
}

export default Home;
