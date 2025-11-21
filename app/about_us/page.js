import CounterSection from "@/components/CounterSection";
import Question from "@/components/Question";
import TestimonialSlider from "@/components/TestimonialSlider";
import FxotaryLayout from "@/layout/FxotaryLayout";
import Link from "next/link";

export const metadata = {
  title: "About Us - Postiview: Leading Branding Agency in Ahmedabad, Gujarat",
  description: "Learn about Postiview, the leading branding agency in Ahmedabad, Gujarat. Our story, mission, and dedicated team provide innovative brand solutions across Gujarat.",
  keywords: ["About Postiview", "Branding Agency Ahmedabad", "Best Branding Agency Gujarat", "Our Story", "Brand Solutions Gujarat", "Marketing Company Ahmedabad"],
  alternates: {
    canonical: `https://postiview.in/about_us`,
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "About Us - Postiview: Leading Branding Agency in Ahmedabad, Gujarat",
    description: "Learn about Postiview, the leading branding agency in Ahmedabad, Gujarat. Our story, mission, and dedicated team provide innovative brand solutions across Gujarat.",
    url: "https://postiview.in/about_us",
    siteName: "Postiview",
    images: [
      {
        url: "https://postiview.in/images/og-image.webp", // Use a generic OG image for about us
        width: 800,
        height: 600,
        alt: "About Postiview - Branding Agency",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - Postiview: Leading Branding Agency in Ahmedabad, Gujarat",
    description: "Learn about Postiview, the leading branding agency in Ahmedabad, Gujarat. Our story, mission, and dedicated team provide innovative brand solutions across Gujarat.",
    images: ["https://postiview.in/images/og-image.webp"],
  },
};

const page = () => {
  return (
    <FxotaryLayout>
      {/*===============================
  ABOUT US 2 START
    ===============================*/}
    <section className="tf__about_us_2 mt_190 xs_mt_150">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="section_heading">
          <h5>ABOUT US</h5>
          <h2 className="banner_title" data-text-animation="slide-up">
            We empower clients to grow by crafting powerful brand identities and unforgettable visual experiences.
          </h2>
        </div>
        <div className="about_text_2">
          <p>
            Welcome to Postiview, the leading branding agency in Ahmedabad, Gujarat. We are dedicated to shaping brands that stand out with strategic thinking, creative precision, and identity-driven solutions that leave a lasting impact.
          </p>
          <Link
            className="circle_btn circle_btn_2 learn_more_2"
            href="services"
          >
            <i className="fx-icon-long-next-arrow" /> Explore Our <br />
            Services
          </Link>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-12 col-md-9 mx-auto ">
        <div className="about_us_2_img">
          <div data-animation="img-blur" data-scroll={0} data-delay={0}>
            <img
              src="/images/about_img_3.webp"
              alt="about us"
              className="img-fluid w-100"
            />
          </div>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-12">
        <div className="about_text_2_details section_heading">
          <h5>OUR STORY</h5>
          <p>
            Our journey began with a clear mission: to become the most trusted branding agency in Ahmedabad. Our team of strategists, designers, and visual thinkers excels at transforming complex ideas into meaningful brand experiences that connect with audiences across Gujarat. We don’t just build brands; we build long-term partnerships.
          </p>
          <p>
            As Ahmedabad’s leading branding agency, we focus on delivering excellence at every step. Our approach blends research-driven insights with creative storytelling to elevate your brand identity. With deep understanding of Gujarat’s market landscape, we craft branding solutions that not only stand out but also resonate, ensuring strong and sustainable brand growth.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/*===============================
  ABOUT US 2 END
    ===============================*/}
      {/*===============================
  COUNTER 3 START
    ===============================*/}
      {/* <section className="counter counter_3 mt_80 xs_mt_30 pt_120 xs_pt_70 pb_120 xs_pb_70">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-6 col-md-6">
              <div className="counter_img">
                <img
                  src="/images/counter_img_2.png"
                  alt="counter"
                  className="img-fluid w-100"
                />
              </div>
            </div>
            <div className="col-xl-5 col-md-6">
              <div className="row">
                <div className="col-xl-6 col-sm-6">
                  <div
                    className="counter_item counter_item_icon"
                    data-animation="fade-right"
                  >
                    <h2 className="count">70+</h2>
                    <p>Project completed</p>
                  </div>
                </div>
                <div className="col-xl-6 col-sm-6">
                  <div
                    className="counter_item"
                    data-animation="fade-right"
                    data-delay=".75"
                  >
                    <h2 className="count">15</h2>
                    <p>Skilled Professional</p>
                  </div>
                </div>
                <div className="col-xl-6 col-sm-6">
                  <div
                    className="counter_item"
                    data-animation="fade-right"
                    data-delay={1}
                  >
                    <h2 className="count">100</h2>
                    <p>Visited Conference</p>
                  </div>
                </div>
                <div className="col-xl-6 col-sm-6">
                  <div
                    className="counter_item counter_item_icon"
                    data-animation="fade-right"
                    data-delay="1.25"
                  >
                    <h2 className="count">50+</h2>
                    <p>Happy Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <CounterSection/>
      {/*===============================
  COUNTER 3 END
    ===============================*/}
      {/*============================
  TEAM START
    =============================*/}
      {/* <section className="tf__team tf__team_about mt_120 xs_mt_70">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-md-8">
              <div className="section_heading section_heading_2">
                <h2>Meet The Minds Behind Our Success.</h2>
                <p>
                  Our strength lies in our people. As the best digital marketing agency in Ahmedabad, we have a team of dedicated professionals who bring creativity, expertise, and passion to every project, ensuring our clients in Gujarat receive unparalleled service.
                </p>
              </div>
            </div>
          </div>
          <Link
            className="circle_btn circle_btn_2 learn_more_2"
            href="team_page"
          >
            <i className="fx-icon-long-next-arrow" /> See All Team <br />
            Member
          </Link>
          <div className="row">
            <div className="col-xl-4 col-md-6 col-lg-4">
              <div
                className="single_team"
                data-animation="fade-left"
                data-delay=".5"
              >
                <a href="#" className="single_team_img cursor-arrow">
                  <img
                    src="/images/team_1.jpg"
                    alt="team"
                    className="img-fluid w-100"
                  />
                </a>
                <h3>Wade Warren</h3>
                <p>UI/UX Designer</p>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-lg-4">
              <div
                className="single_team"
                data-animation="fade-left"
                data-delay=".75"
              >
                <a href="#" className="single_team_img cursor-arrow">
                  <img
                    src="/images/team_2.jpg"
                    alt="team"
                    className="img-fluid w-100"
                  />
                </a>
                <h3>Willy Tommy</h3>
                <p>Web Developer</p>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-lg-4">
              <div
                className="single_team"
                data-animation="fade-left"
                data-delay={1}
              >
                <a href="#" className="single_team_img cursor-arrow">
                  <img
                    src="/images/team_3.jpg"
                    alt="team"
                    className="img-fluid w-100"
                  />
                </a>
                <h3>Jacob Wilson</h3>
                <p>Digital Marketer</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*============================
  TEAM END
    =============================*/}
      {/*===============================
  TESTIMONIAL START
    ===============================*/}
      <section className="testimonial pt_120 mt_120 xs_mt_70">
        <div className="container">
          <TestimonialSlider />
        </div>
      </section>
      {/*===============================
  TESTIMONIAL END
    ===============================*/}
      <Question />
    </FxotaryLayout>
  );
};
export default page;
