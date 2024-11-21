import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Testimonials = (props) => {
  let testimonialList = props.testimonials;
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
            spaceBetween={0}
            speed={600}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            slidesPerView={"auto"}
          >
            {testimonialList.map((testimony) => {
              let testimonyPic = testimony.Photo || "";

              if (testimonyPic) {
                testimonyPic =
                  testimonyPic.formats.large ||
                  testimonyPic.formats.medium ||
                  testimonyPic.formats.small ||
                  testimonyPic.formats.thumbnail;
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
                    key={`testimony_${testimony.documentId}`}
                  >
                    <div className="row gy-4 justify-content-center">
                      <div className="col-lg-6">
                        <div className="testimonial-content">
                          <p>
                            <i className="bi bi-quote quote-icon-left"></i>
                            {testimony.Quote}
                            <i className="bi bi-quote quote-icon-right"></i>
                          </p>
                          <h3>{testimony.From}</h3>
                          <h4>{testimony.Designation}</h4>

                          <div className="stars">
                            {generateStarRating(testimony.Ratings)}
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
