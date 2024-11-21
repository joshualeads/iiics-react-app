import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// Example https://stackblitz.com/edit/react-ts-gvpqsb?file=SimpleGallery.js,index.tsx
// https://photoswipe.com/react-image-gallery/
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useEffect } from "react";

const GallerySection = (props) => {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#" + props.galleryID,
      children: "a",
      showHideAnimationType: "zoom",
      secondaryZoomLevel: "fill",
      maxZoomLevel: "2",
      pswpModule: () => import("photoswipe"),
    });

    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  let galleryList = props.gallery;

  if (galleryList) {
    galleryList = galleryList.Photos;
  }

  return (
    <section id="gallery" className="gallery section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>gallery</h2>
          <p>
            Check <span>Our Gallery</span>
          </p>
        </div>

        <div className="gallery-slider swiper">
          <div className="pswp-gallery" id={props.galleryID}>
            <Swiper
              navigation={false}
              pagination={true}
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={"auto"}
              spaceBetween={0}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                992: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
              }}
              speed={400}
              loop={true}
              centeredSlides={true}
              className="align-items-center"
            >
              {galleryList.map((gallery) => {
                let galleryPic =
                  gallery.formats.large ||
                  gallery.formats.medium ||
                  gallery.formats.small ||
                  gallery.formats.thumbnail;

                return (
                  <SwiperSlide key={galleryPic.hash}>
                    <a
                      href={galleryPic.url}
                      target="_blank"
                      rel="noreferrer"
                      data-pswp-width={galleryPic.width}
                      data-pswp-height={galleryPic.height}
                    >
                      <img
                        src={galleryPic ? galleryPic.url : ""}
                        className="img-fluid"
                      />
                    </a>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
