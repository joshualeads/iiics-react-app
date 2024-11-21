import { useQuery, gql } from "@apollo/client";

// Components
import Hero from "../components/Home/Hero";
import AboutUs from "../components/Home/AboutUs";
import WhyUs from "../components/Home/WhyUs";
import StatusCounter from "../components/Home/StatusCounter";
import MenuCourse from "../components/Home/MenuCourse";
import Testimonials from "../components/Home/Testimonials";
import OurLeaders from "../components/Home/OurLeaders";
import BookSession from "../components/Home/BookSession";
import Gallery from "../components/Home/Gallery";
import ContactUs from "../components/Home/ContactUs";

// Media Files
import HeroImage from "../images/hero-img.png";
import AboutUsImage from "../images/about.jpg";
import AboutVideoPreview from "../images/about-2.jpg";

const HomePage_Query = gql`
  query {
    gallery {
      documentId
      Photos {
        documentId
        name,
        alternativeText,
        caption,
        width,
        height,
        formats,
        hash
      }
    }
    testimonials{
      documentId,
      From,
      Designation,
      Quote,
      Ratings,
      Photo {
        documentId
        name,
        alternativeText,
        caption,
        width,
        height,
        formats
      }
    }
    leaders {
      documentId,
      Name,
      Role,
      Short_Description,
      Email,
      Leader_Id,
      Profile_Picture {
        documentId,
        name,
        alternativeText,
        caption,
        width,
        height,
        formats
      }
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(HomePage_Query);

  if (loading) {
    return <div id="preloader"></div>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  if (data) {
    console.log(data);

    const { gallery, leaders, testimonials } = data;

    console.log(gallery);
    console.log(leaders);
    console.log(testimonials);

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
          <WhyUs />
          {/* {/* <!-- End Why Us Section --> */}

          {/* {/* <!-- ======= Stats Counter Section ======= --> */}
          <StatusCounter />
          {/* {/* <!-- End Stats Counter Section --> */}

          {/* <!-- ======= Menu Section ======= --> */}
          <MenuCourse />
          {/* <!-- End Menu Section --> */}

          {/* <!-- ======= Testimonials Section ======= --> */}
          {testimonials.length ? (
            <Testimonials testimonials={testimonials} />
          ) : (
            <></>
          )}
          {/* <!-- End Testimonials Section --> */}

          {/* <!-- ======= Leaders Section ======= --> */}
          {leaders.length ? <OurLeaders leaders={leaders} /> : <> </>}
          {/* <!-- End Leasers Section --> */}

          {/* <!-- ======= Book A Table Section ======= --> */}
          <BookSession />
          {/* <!-- End Book A Table Section --> */}

          {/* <!-- ======= Gallery Section ======= --> */}
          {gallery ? (
            <Gallery gallery={gallery} galleryID={"home-gallery"} />
          ) : (
            <></>
          )}
          {/* <!-- End Gallery Section --> */}

          {/* <!-- ======= Contact Section ======= --> */}
          <ContactUs />
          {/* <!-- End Contact Section --> */}
        </main>
        {/* <!-- End #main --> */}
      </>
    );
  }
};

export default Home;
