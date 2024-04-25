function MenuCourse() {
  return (
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
              href="/"
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
              href="/"
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
              href="/"
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
              href="/"
            >
              <h4>Course 4</h4>
            </a>
          </li>
          {/* <!-- End tab nav item --> */}
        </ul>

        <div className="tab-content" data-aos="fade-up" data-aos-delay="300">
          <div className="tab-pane fade active show" id="menu-starters">
            <div className="tab-header text-center">
              <p>Menu</p>
              <h3>Beginners</h3>
            </div>

            <div className="row gy-5">
              <div className="col-lg-4 menu-item">
                <a href="assets/img/menu/menu-item-1.png" className="glightbox">
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
                <a href="assets/img/menu/menu-item-2.png" className="glightbox">
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
                <a href="assets/img/menu/menu-item-3.png" className="glightbox">
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
                <a href="assets/img/menu/menu-item-4.png" className="glightbox">
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
                <a href="assets/img/menu/menu-item-5.png" className="glightbox">
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
                <a href="assets/img/menu/menu-item-6.png" className="glightbox">
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
                <a href="assets/img/menu/menu-item-1.png" className="glightbox">
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
                <a href="assets/img/menu/menu-item-2.png" className="glightbox">
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
                <a href="assets/img/menu/menu-item-3.png" className="glightbox">
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
                <a href="assets/img/menu/menu-item-4.png" className="glightbox">
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
                <a href="assets/img/menu/menu-item-5.png" className="glightbox">
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
                <a href="assets/img/menu/menu-item-6.png" className="glightbox">
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
                <a href="assets/img/menu/menu-item-1.png" className="glightbox">
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
                <a href="assets/img/menu/menu-item-2.png" className="glightbox">
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
                <a href="assets/img/menu/menu-item-3.png" className="glightbox">
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
                <a href="assets/img/menu/menu-item-4.png" className="glightbox">
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
                <a href="assets/img/menu/menu-item-5.png" className="glightbox">
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
                <a href="assets/img/menu/menu-item-6.png" className="glightbox">
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
                <a href="assets/img/menu/menu-item-1.png" className="glightbox">
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
                <a href="assets/img/menu/menu-item-2.png" className="glightbox">
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
                <a href="assets/img/menu/menu-item-3.png" className="glightbox">
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
                <a href="assets/img/menu/menu-item-4.png" className="glightbox">
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
                <a href="assets/img/menu/menu-item-5.png" className="glightbox">
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
                <a href="assets/img/menu/menu-item-6.png" className="glightbox">
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
  );
}

export default MenuCourse;
