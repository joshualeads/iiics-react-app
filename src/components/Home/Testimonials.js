import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Testimonials = (props) => {
  let testimonialList = props.testimonials.data;
  return (
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
          <Swiper
            navigation={false}
            pagination={true}
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={0}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={1200}
          >
            {testimonialList.map((testimony) => {
              let testimonyPic = testimony.attributes.Photo.data || "";

              if (testimonyPic) {
                testimonyPic =
                  testimonyPic.attributes.formats.large ||
                  testimonyPic.attributes.formats.medium ||
                  testimonyPic.attributes.formats.small ||
                  testimonyPic.attributes.formats.thumbnail;
              }

              let generateStarRating = (rating) => {
                let stars = [];
                for (let star = 1; star <= 5; star++) {
                  if (star <= rating) {
                    stars.push(
                      <>
                        <i className="bi bi-star-fill"></i>
                      </>
                    );
                  } else {
                    stars.push(
                      <>
                        <i className="bi bi-star"></i>
                      </>
                    );
                  }
                }
                return stars;
              };

              return (
                <SwiperSlide>
                  <div
                    className="testimonial-item"
                    key={`${"testimony-"}testimony.id`}
                  >
                    <div className="row gy-4 justify-content-center">
                      <div className="col-lg-6">
                        <div className="testimonial-content">
                          <p>
                            <i className="bi bi-quote quote-icon-left"></i>
                            {testimony.attributes.Quote}
                            <i className="bi bi-quote quote-icon-right"></i>
                          </p>
                          <h3>{testimony.attributes.From}</h3>
                          <h4>{testimony.attributes.Designation}</h4>

                          <div className="stars">
                            {generateStarRating(testimony.attributes.Ratings)}
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 text-center">
                        <img
                          src={testimonyPic ? testimonyPic.url : ""}
                          className="img-fluid testimonial-img"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
