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
                  Comprehensive Branding Solutions to Elevate Your Brand in Gujarat.
                </h2>
              </div>
              <div className="col-xl-8 col-12">
                <p>
                  As the leading branding agency in Ahmedabad, we offer a full suite of identity-first services designed to help your business stand out and build lasting equity. From strategic direction to polished visual systems, our Gujarat team brings brands to life with clarity and purpose.
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
                      src="images/services/brand-strategy.webp"
                      alt="Brand Strategy"
                      className="img-fluid w-100"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-md-6">
                <div className="tf__services_2_text">
                  <h3 data-text-animation="" data-split="word">
                    Brand Strategy
                  </h3>
                  <p>
                    Our strategic team in Ahmedabad develops clear brand foundations — positioning, messaging, and roadmaps that build trust and long-term recognition across Gujarat.
                  </p>
                  <ul>
                    <li>Brand Positioning</li>
                    <li>Brand Messaging</li>
                    <li>Competitive Analysis</li>
                    <li>Audience Insights</li>
                    <li>Brand Roadmap</li>
                  </ul>
                  <Link
                    className="circle_btn circle_btn_2 learn_more_2"
                    href="/services/brand-strategy"
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
                    Brand Identity & Logo
                  </h3>
                  <p>
                    Our branding experts craft iconic visual identities — from logos to complete identity systems — ensuring your brand communicates with clarity and stands out in the Gujarat market.
                  </p>
                  <ul>
                    <li>Logo Design</li>
                    <li>Complete Identity System</li>
                    <li>Color & Typography Guides</li>
                    <li>Brand Stationery</li>
                    <li>Brand Guidelines</li>
                  </ul>
                  <Link
                    className="circle_btn circle_btn_2 learn_more_2"
                    href="/services/brand-identity"
                  >
                    <i className="fx-icon-long-next-arrow" /> Learn More
                  </Link>
                </div>
              </div>
              <div className="col-xl-5 col-md-6">
                <div className="tf__services_2_img">
                  <div data-animation="img-blur">
                    <img
                      src="images/services/brand-identity.webp"
                      alt="Brand Identity & Logo"
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
                      src="images/services/graphic-designing.webp"
                      alt="Visual & Graphic Design"
                      className="img-fluid w-100"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-md-6">
                <div className="tf__services_2_text">
                  <h3 data-text-animation="">
                    Visual & Graphic Design
                  </h3>
                  <p>
                    Our design team produces impactful visuals that strengthen your brand identity across digital and physical touchpoints, making your communications clearer and more compelling.
                  </p>
                  <ul>
                    <li>Marketing Creatives</li>
                    <li>Social Media Graphics</li>
                    <li>Corporate Collateral</li>
                    <li>Illustrations</li>
                    <li>Brand Templates</li>
                  </ul>
                  <Link
                    className="circle_btn circle_btn_2 learn_more_2"
                    href="/services/visual-design"
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
                    Digital Brand Experience
                  </h3>
                  <p>
                    We design and build digital experiences — websites and UI/UX systems — that reflect your brand personality while delivering intuitive interactions for users across devices.
                  </p>
                  <ul>
                    <li>Website UI/UX Design</li>
                    <li>Corporate Website Development</li>
                    <li>Landing Pages</li>
                    <li>Wireframing & Prototyping</li>
                    <li>Design Systems</li>
                  </ul>
                  <Link
                    className="circle_btn circle_btn_2 learn_more_2"
                    href="/services/digital-branding"
                  >
                    <i className="fx-icon-long-next-arrow" /> Learn More
                  </Link>
                </div>
              </div>
              <div className="col-xl-5 col-md-6">
                <div className="tf__services_2_img">
                  <div data-animation="img-blur">
                    <img
                      src="images/services/programming.webp"
                      alt="Digital Brand Experience"
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
                      src="images/services/packaging.webp"
                      alt="Packaging & Print"
                      className="img-fluid w-100"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-md-6">
                <div className="tf__services_2_text">
                  <h3 data-text-animation="">
                    Packaging & Print
                  </h3>
                  <p>
                    Packaging is a key brand touchpoint. We design packaging and print collateral that communicate your identity instantly and make your products stand out on shelf and online.
                  </p>
                  <ul>
                    <li>Product Packaging</li>
                    <li>Label Design</li>
                    <li>Print Collateral</li>
                    <li>Brochures & Flyers</li>
                    <li>Brand Merchandise</li>
                  </ul>
                  <Link
                    className="circle_btn circle_btn_2 learn_more_2"
                    href="/services/packaging-print"
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
                    Video & Motion
                  </h3>
                  <p>
                    We create video and motion content that brings your brand story to life—promotional films, explainers, and motion graphics designed to boost recall and engagement.
                  </p>
                  <ul>
                    <li>Brand Films</li>
                    <li>2D/3D Animation</li>
                    <li>Motion Graphics</li>
                    <li>Explainer Videos</li>
                    <li>Product Demos</li>
                  </ul>
                  <Link
                    className="circle_btn circle_btn_2 learn_more_2"
                    href="/services/video-motion"
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
                      alt="Video & Motion"
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
