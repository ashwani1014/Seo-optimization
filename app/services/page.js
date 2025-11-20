import Question from "@/components/Question";
import FxotaryLayout from "@/layout/FxotaryLayout";
import Link from "next/link";
const page = () => {
  return (
    <FxotaryLayout>
      {" "}
      {/*===============================
  SERVICES PAGE START
    ===============================*/}
      <section className="tf__services_page tf__about_us_2 mt_190 xs_mt_150">
        <div className="container">
          <div className="row">
            <div className="col-xl-10">
              <div className="section_heading">
                <h5>OUR SERVICES</h5>
                <h2 className="banner_title" data-text-animation="slide-up">
                  Comprehensive Digital Solutions to Elevate Your Brand in Gujarat.
                </h2>
              </div>
              <div className="about_text_2">
                <p>
                  As the best digital marketing agency in Ahmedabad, we offer a complete suite of services designed to help your business thrive in the digital landscape. From creative design to technical execution, our team in Gujarat is here to bring your vision to life.
                </p>
                {/* <a className="circle_btn" href="#service_list">
                  View All <br />
                  Our Services <i className="fx-icon-next-arrow" />
                </a> */}
              </div>
            </div>
          </div>
        </div>
        <div className="tf__service_2 mt_60">
          <div className="tf__services_page_item" id="service_list">
            <div className="row mt_120 xs_mt_70 item_1">
              <div className="col-xl-5 col-md-6">
                <div className="tf__services_2_img">
                  <div data-animation="img-blur">
                    <img
                      src="images/services/graphic-designing.webp"
                      alt="Graphic Designing"
                      className="img-fluid w-100"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-md-6">
                <div className="tf__services_2_text">
                  <h3 data-text-animation="" data-split="word">
                    Graphic Designing
                  </h3>
                  <p>
                    Our creative team in Ahmedabad specializes in crafting stunning visuals that tell your brand’s story. We design everything from logos to complete brand identities, ensuring your business stands out in the competitive Gujarat market.
                  </p>
                  <ul>
                    <li>Logo Design & Branding</li>
                    <li>Marketing Materials</li>
                    <li>UI/UX Design</li>
                    <li>Social Media Graphics</li>
                    <li>Print Design</li>
                  </ul>
                  <Link
                    className="circle_btn circle_btn_2 learn_more_2"
                    href="/services/graphic_designing"
                  >
                    <i className="fx-icon-long-next-arrow" /> Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="row mt_120 xs_mt_70 item_2">
              <div className="col-xl-5 col-md-6">
                <div className="tf__services_2_text">
                  <h3 data-text-animation="" data-split="char">
                    Digital Marketing
                  </h3>
                  <p>
                    As the best digital marketing agency in Ahmedabad, we drive growth with data-driven strategies. We enhance your online presence, engage your audience, and convert leads into loyal customers across Gujarat and beyond.
                  </p>
                  <ul>
                    <li>Search Engine Optimization (SEO)</li>
                    <li>Social Media Marketing (SMM)</li>
                    <li>Pay-Per-Click (PPC) Campaigns</li>
                    <li>Content Marketing</li>
                    <li>Email Marketing</li>
                  </ul>
                  <Link
                    className="circle_btn circle_btn_2 learn_more_2"
                    href="/services/digital_marketing"
                  >
                    <i className="fx-icon-long-next-arrow" /> Learn More
                  </Link>
                </div>
              </div>
              <div className="col-xl-5 col-md-6">
                <div className="tf__services_2_img">
                  <div data-animation="img-blur">
                    <img
                      src="images/services/digital-marketing.webp"
                      alt="Digital Marketing"
                      className="img-fluid w-100"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt_120 xs_mt_70 item_1">
              <div className="col-xl-5 col-md-6">
                <div className="tf__services_2_img">
                  <div data-animation="img-blur">
                    <img
                      src="images/services/programming.webp"
                      alt="Programming & Tech"
                      className="img-fluid w-100"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-md-6">
                <div className="tf__services_2_text">
                  <h3 data-text-animation="">
                    Programming & Tech
                  </h3>
                  <p>
                    Our Ahmedabad-based tech experts build robust and scalable digital solutions. From custom websites to complex applications, we use the latest technology to create seamless user experiences that drive business results.
                  </p>
                  <ul>
                    <li>Custom Website Development</li>
                    <li>E-commerce Solutions</li>
                    <li>Mobile App Development</li>
                    <li>CMS Development</li>
                    <li>API Integration</li>
                  </ul>
                  <Link
                    className="circle_btn circle_btn_2 learn_more_2"
                    href="/services/programming-tech"
                  >
                    <i className="fx-icon-long-next-arrow" /> Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="row mt_120 xs_mt_70 item_2">
              <div className="col-xl-5 col-md-6">
                <div className="tf__services_2_text">
                  <h3 data-text-animation="" data-split="char">
                    Video & Animation
                  </h3>
                  <p>
                    Capture your audience's attention with compelling video content. Our team produces high-quality promotional videos, explainer animations, and motion graphics that convey your message effectively and boost engagement.
                  </p>
                  <ul>
                    <li>Promotional Videos</li>
                    <li>2D/3D Animation</li>
                    <li>Motion Graphics</li>
                    <li>Explainer Videos</li>
                    <li>Corporate Videography</li>
                  </ul>
                  <Link
                    className="circle_btn circle_btn_2 learn_more_2"
                    href="/services/video-animation"
                  >
                    <i className="fx-icon-long-next-arrow" /> Learn More
                  </Link>
                </div>
              </div>
              <div className="col-xl-5 col-md-6">
                <div className="tf__services_2_img">
                  <div data-animation="img-blur">
                    <img
                      src="images/services/video.webp"
                      alt="Video & Animation"
                      className="img-fluid w-100"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt_120 xs_mt_70 item_1">
              <div className="col-xl-5 col-md-6">
                <div className="tf__services_2_img">
                  <div data-animation="img-blur">
                    <img
                      src="images/services/translation.webp"
                      alt="Writing & Translation"
                      className="img-fluid w-100"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-md-6">
                <div className="tf__services_2_text">
                  <h3 data-text-animation="">
                    Writing & Translation
                  </h3>
                  <p>
                    Words matter. Our skilled writers in Ahmedabad create persuasive and SEO-friendly content that connects with your audience. We also offer professional translation services to help you reach a wider, multilingual market in Gujarat and beyond.
                  </p>
                  <ul>
                    <li>SEO Copywriting</li>
                    <li>Blog & Article Writing</li>
                    <li>Website Content Creation</li>
                    <li>Technical Writing</li>
                    <li>Professional Translation</li>
                  </ul>
                  <Link
                    className="circle_btn circle_btn_2 learn_more_2"
                    href="/services/writing-translation"
                  >
                    <i className="fx-icon-long-next-arrow" /> Learn More
                  </Link>
                </div>
              </div>
            </div>
             <div className="row mt_120 xs_mt_70 item_2">
              <div className="col-xl-5 col-md-6">
                <div className="tf__services_2_text">
                  <h3 data-text-animation="" data-split="char">
                    Business Solution
                  </h3>
                  <p>
                    Beyond marketing, we provide strategic business solutions to help your company grow. Our consultants in Ahmedabad offer market research, brand strategy, and digital transformation services to ensure long-term success.
                  </p>
                  <ul>
                    <li>Business Strategy Consulting</li>
                    <li>Market Research & Analysis</li>
                    <li>Brand Development</li>
                    <li>Digital Transformation</li>
                    <li>Lead Generation Strategies</li>
                  </ul>
                  <Link
                    className="circle_btn circle_btn_2 learn_more_2"
                    href="/services/business_solution"
                  >
                    <i className="fx-icon-long-next-arrow" /> Learn More
                  </Link>
                </div>
              </div>
              <div className="col-xl-5 col-md-6">
                <div className="tf__services_2_img">
                  <div data-animation="img-blur">
                    <img
                      src="images/services/business.webp"
                      alt="Business Solution"
                      className="img-fluid w-100"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*===============================
  SERVICES PAGE END
    ===============================*/}
      <Question />
    </FxotaryLayout>
  );
};
export default page;
