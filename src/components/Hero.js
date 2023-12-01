function Hero({ title, description, buttonLink, VideoLink, image }) {
  return (
    <>
      <section id="hero" className="hero d-flex align-items-center section-bg">
        <div className="container">
          <div className="row justify-content-between gy-5">
            <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
              <h2 data-aos="fade-up">{title}</h2>
              <p data-aos="fade-up" data-aos-delay="100">
                {description}
              </p>
              <div className="d-flex" data-aos="fade-up" data-aos-delay="200">
                <a href={buttonLink} className="btn-book-a-table">
                  Contact Us
                </a>
                <a
                  href={VideoLink}
                  className="glightbox btn-watch-video d-flex align-items-center"
                >
                  <i className="bi bi-play-circle"></i>
                  <span>Watch Video</span>
                </a>
              </div>
            </div>
            <div className="col-lg-5 order-1 order-lg-2 text-center text-lg-start">
              <img
                src={image}
                className="img-fluid"
                alt=""
                data-aos="zoom-out"
                data-aos-delay="300"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
