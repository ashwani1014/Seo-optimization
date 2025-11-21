import CounterSection from '@/components/CounterSection';
import TestimonialSlider from '@/components/TestimonialSlider';
import FxotaryLayout from '@/layout/FxotaryLayout';
import { blogs } from '@/lib/blogs';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';

export const metadata = {
  title: 'Postiview: Best Digital Marketing Agency in Ahmedabad, Gujarat',
  description:
    'Postiview is the leading digital marketing agency in Ahmedabad, Gujarat. We help businesses grow with expert SEO, social media, web design, and comprehensive digital marketing services.',
  keywords: [
    'Digital Marketing Agency Ahmedabad',
    'Best Digital Marketing Agency Gujarat',
    'SEO Ahmedabad',
    'Social Media Marketing Ahmedabad',
    'Website Design Ahmedabad',
    'Digital Marketing Services Ahmedabad',
    'Home',
  ],
};

const page = () => {
  return (
    <FxotaryLayout>
      {/*===============================
  BANNER START
    ===============================*/}
      <section
        className="banner"
        style={{ background: 'url(images/banner_bg.png)' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="banner_text">
                <h4>Branding Studio Hub</h4>
                <h1 className="banner_title">
                  Top Branding Agency
                  <span>
                    in <b>Ahmedabad!</b>
                  </span>
                </h1>
              </div>
              <div className="banner_img">
                <div className="overflow-hidden hero-image">
                  <img
                    src="/images/banner/hero.webp"
                    alt="banner"
                    className="img-fluid w-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <ul className="d-flex flex-wrap">
          <li>
            <span>Follow Us</span>
          </li>
          <li>
            <a href="https://www.facebook.com/postiview">Fb.</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/postiview">Ln.</a>
          </li>
          <li>
            <a href="https://www.instagram.com/postiview/">In.</a>
          </li>
        </ul>
      </section>
      {/*===============================
  BANNER END
    ===============================*/}
      {/*===============================
  ABOUT START
    ===============================*/}
      <section className="about_us pt_120 xs_pt_70 pb_120 xs_pb_70">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-7">
              <div className="about_text">
                <div className="section_heading">
                  <h5 data-text-animation="">ABOUT US</h5>
                  <h2
                    data-text-animation=""
                    data-split="word"
                    data-duration={1}
                  >
                    We are a top branding agency in Gujarat.
                  </h2>
                </div>
                <Link className="circle_btn" href="/about_us">
                  Learn More <i className="fx-icon-next-arrow" />
                </Link>
              </div>
            </div>
            <div className="col-lg-5 col-md-7">
              <div className="about_img_1">
                <div className="img">
                  <div data-animation="img-blur">
                    <img
                      src="/images/about/about_img_1.webp"
                      alt="about"
                      className="img-fluid w-100"
                    />
                  </div>
                </div>
                <p>
                  We are the leading branding agency in Ahmedabad, crafting
                  future-ready brand identities, communication systems, and
                  visual experiences that strengthen brands, shape perception,
                  and elevate businesses across Gujarat and worldwide.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-5">
              <div className="about_img_2">
                <div data-animation="img-blur">
                  <img
                    src="/images/about/about_img_2.webp"
                    alt="about"
                    className="img-fluid w-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*===============================
  ABOUT END
    ===============================*/}
      {/*===============================
  WHAT WE DO START
    ===============================*/}
      <section className="what_we_do pt_120 xs_pt_70 pb_120 xs_pb_70">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-5 col-md-7">
              <div className="what_we_do_text">
                <p>
                  We create strategic brand experiences designed to help
                  businesses stand out, inspire trust, and achieve measurable
                  growth. As the best branding agency in Ahmedabad, our team
                  blends creative intelligence with modern tools to build brands
                  that thrive across Gujarat.
                </p>
                <Link className="view_btn" href="/services">
                  View All Services <i className="fx-icon-next-arrow" />
                </Link>
              </div>
            </div>
            <div className="col-xl-5 col-md-5">
              <div className="section_heading">
                <h5 data-text-animation="">WHAT WE DO</h5>
                <h2 data-text-animation="" data-split="word">
                  Expertise Field.
                </h2>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-12">
              <ul>
                <li
                  data-animation=""
                  className="image-view"
                  data-img-cursor="<img src='images/quot_icon_1.png' />"
                >
                  <div className="icon">
                    <img
                      src="icons/ui-ux.svg"
                      alt="about"
                      className="img-fluid w-100 svg"
                    />
                  </div>
                  <div className="text">
                    <h3>Brand Identity & Design</h3>
                    <p>
                    Bring your brand to life with powerful identity systems and thoughtful design. Build a strong visual presence and communicate your brand story through consistent, well-crafted creative work.
                    </p>
                  </div>
                  <div className="img">
                    <img
                      src="/images/what_we_do_img.jpg"
                      alt="what we do"
                      className="img-fluid w-100"
                    />
                  </div>
                  <Link
                    className="circle_btn"
                    href="/services/graphic_designing"
                  >
                    details
                  </Link>
                </li>
                <li
                  data-animation=""
                  className="image-view"
                  data-img-cursor="<img src='images/quot_icon_1.png' />"
                >
                  <div className="icon">
                    <img
                      src="/icons/web-programming.svg"
                      alt="about"
                      className="img-fluid w-100 svg"
                    />
                  </div>
                  <div className="text">
                    <h3>Brand-Tech Solutions</h3>
                    <p>
                      Give your brand a modern digital edge. Our Brand-Tech services include websites, digital ecosystems, and interactive tools designed to support your goals and keep your business relevant across Gujarat.
                    </p>
                  </div>
                </li>
                <li
                  data-animation=""
                  className="image-view"
                  data-img-cursor="<img src='images/quot_icon_1.png' />"
                >
                  <div className="icon">
                    <img
                      src="icons/megaphone.svg"
                      alt="about"
                      className="img-fluid w-100 svg"
                    />
                  </div>
                  <div className="text">
                    <h3>Digital Brand Building</h3>
                    <p>
                     Strengthen your presence in a digital-first world. As the best branding agency in Ahmedabad, we create strategies and campaigns that improve visibility, enhance perception, and amplify your brand across online channels.
                    </p>
                  </div>
                  <div className="img">
                    <img
                      src="/images/what_we_do_img.jpg"
                      alt="what we do"
                      className="img-fluid w-100"
                    />
                  </div>
                  <Link
                    className="circle_btn"
                    href="/services/digital_marketing"
                  >
                    details
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/*===============================
  WHAT WE DO END
    ===============================*/}
      {/*===============================
  LATEST PROJECT START
    ===============================*/}
      <section className="latest_project pt_120 xs_pt_70 pb_120 xs_pb_70">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-5 col-md-6">
              <div className="latest_project_text">
                <div className="section_heading">
                  <h5>LATEST PROJECTS</h5>
                  <h2 data-text-animation="" data-split="char">
                    Here’s our latest projects
                  </h2>
                </div>
                <p>
                 As the best branding agency in Ahmedabad, we showcase work built on strategy, design precision, and creative excellence. Our team in Gujarat delivers branding solutions that merge identity, storytelling, and technology to elevate every brand we partner with.
                </p>
              </div>
              <Link
                href="https://thevandana.in/"
                className="latest_project_img d-block cursor-arrow c-pointer "
                data-cursor='<i class="fx-icon-long-next-arrow"></i>'
              >
                <div data-animation="img-blur">
                  <img
                    src="/images/project/project_img_1.png"
                    alt="projext"
                    className="img-fluid"
                  />
                </div>
                {/* <div className="text d-flex flex-column">
                  <h3>VH Club Website</h3>
                  <h3>Design and Development</h3>
                </div> */}
              </Link>
            </div>
            <div className="col-xl-5 col-md-6">
              <Link
                href="https://bvmhospitals.in/"
                className="latest_project_img d-block cursor-arrow latest_project_img_2 c-pointer"
                data-cursor='<i class="fx-icon-long-next-arrow"></i>'
              >
                <div data-animation="img-blur">
                  <img
                    src="/images/project/project_img_2.png"
                    alt="projext"
                    className="img-fluid w-100"
                  />
                </div>
                {/* <div className="text d-flex flex-column">
                  <h3>BVM Hospital Website</h3>
                  <h3>Design and Development</h3>
                </div> */}
              </Link>
              <h4>Want to See More Projects</h4>
            </div>
          </div>
        </div>
      <div className="row mt_175 marquee_section">
  <div className="col-12">
    <div className="marquee-container">
      <Marquee className="marquee_animi" direction="left">
        <ul className="project_slider d-flex flex-wrap">
          <li>
            <Link href="/services/digital-branding">
              <p>Digital Branding</p>
            </Link>
          </li>
          <li>
            <Link href="/services/digital-branding">
              <p>UI/UX & Website</p>
            </Link>
          </li>
          <li>
            <Link href="/services/packaging-print">
              <p>Packaging Design</p>
            </Link>
          </li>
          <li>
            <Link href="/services/brand-strategy">
              <p>Business Branding</p>
            </Link>
          </li>
          <li>
            <Link href="/services/visual-design">
              <p>Visual Communication</p>
            </Link>
          </li>
          <li>
            <Link href="/services/brand-identity">
              <p>Brand Identity</p>
            </Link>
          </li>
          <li>
            <Link href="/services/digital-branding">
              <p>Digital Branding</p>
            </Link>
          </li>
        </ul>
      </Marquee>
    </div>
  </div>

  <div className="col-12 mt_30">
    <Marquee className="marquee_animi2" direction="right">
      <ul className="project_slider d-flex flex-wrap">
        <li>
          <Link href="/services/digital-branding">
            <p>Digital Branding</p>
          </Link>
        </li>
        <li>
          <Link href="/services/digital-branding">
            <p>UI/UX & Website</p>
          </Link>
        </li>
        <li>
          <Link href="/services/packaging-print">
            <p>Packaging Design</p>
          </Link>
        </li>
        <li>
          <Link href="/services/brand-strategy">
            <p>Business Branding</p>
          </Link>
        </li>
        <li>
          <Link href="/services/visual-design">
            <p>Visual Communication</p>
          </Link>
        </li>
        <li>
          <Link href="/services/brand-identity">
            <p>Brand Identity</p>
          </Link>
        </li>
        <li>
          <Link href="/services/digital-branding">
            <p>Digital Branding</p>
          </Link>
        </li>
      </ul>
    </Marquee>
  </div>
</div>

      </section>
      {/*===============================
  LATEST PROJECT END
    ===============================*/}
      {/*===============================
  COUNTER START
    ===============================*/}
      <CounterSection />
      {/*===============================
  COUNTER END
    ===============================*/}
      {/*===============================
  ACHIVEMENT START
    ===============================*/}
      {/* <section className="achivement pt_100 xs_pt_50 pb_120 xs_pb_70">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-5 col-lg-6">
              <div className="section_heading">
                <h5>ACHIVEMENTS</h5>
                <h2 data-text-animation="" data-split="word">
                  Company awards &amp; achievements
                </h2>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="achivement_right_text">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit viverra
                  purus senectus sapien habitant rutrum himenaeos curabitur
                  posuere congue ac non eu odio tempor placerat id.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-between mt_50">
            <div className="col-xxl-3 col-md-6 col-lg-4 col-xl-4">
              <div className="achivement_img">
                <div className="img_1">
                  <div data-animation="img-blur">
                    <img
                      src="/images/achivement_img_1.jpg"
                      alt="achivement"
                      className="img-fluid w-100"
                    />
                  </div>
                </div>
                <div className="img_2">
                  <div data-animation="img-blur">
                    <img
                      src="/images/achivement_img_2.jpg"
                      alt="achivement"
                      className="img-fluid w-100"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-8 col-lg-8 col-xl-8">
              <div className="achivement_list">
                <ul>
                  <li data-animation="">
                    <div className="icon">
                      <img
                        src="/images/achivement_icon_1.png"
                        alt="icon"
                        className="img-fluid w-100"
                      />
                    </div>
                    <div className="text">
                      <h4>Awwwards Interior excellence.</h4>
                      <span>2015</span>
                      <a href="#" className="achivement_link">
                        <i className="fx-icon-long-next-arrow" />
                      </a>
                    </div>
                  </li>
                  <li data-animation="">
                    <div className="icon">
                      <img
                        src="/images/achivement_icon_2.png"
                        alt="icon"
                        className="img-fluid w-100"
                      />
                    </div>
                    <div className="text">
                      <h4>Best Site of the Year Awards.</h4>
                      <span>2018</span>
                      <a href="#" className="achivement_link">
                        <i className="fx-icon-long-next-arrow" />
                      </a>
                    </div>
                  </li>
                  <li data-animation="">
                    <div className="icon">
                      <img
                        src="/images/achivement_icon_3.png"
                        alt="icon"
                        className="img-fluid w-100"
                      />
                    </div>
                    <div className="text">
                      <h4>Template of the seasons in this month.</h4>
                      <span>2020</span>
                      <a href="#" className="achivement_link">
                        <i className="fx-icon-long-next-arrow" />
                      </a>
                    </div>
                  </li>
                  <li data-animation="">
                    <div className="icon">
                      <img
                        src="/images/achivement_icon_4.png"
                        alt="icon"
                        className="img-fluid w-100"
                      />
                    </div>
                    <div className="text">
                      <h4>Best Selling of this week &amp; month.</h4>
                      <span>2023</span>
                      <a href="#" className="achivement_link">
                        <i className="fx-icon-long-next-arrow" />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*===============================
  ACHIVEMENT END
    ===============================*/}
      {/*===============================
  TESTIMONIAL START
    ===============================*/}
      <section className="testimonial pt_120">
        <div className="container">
          <TestimonialSlider />
        </div>
      </section>
      {/*===============================
  TESTIMONIAL END
    ===============================*/}
      {/*===============================
  BLOG START
    ===============================*/}
      <section className="blog pt_120 xs_pt_80">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5 col-md-8">
              <div className="section_heading">
                <h5>LATEST BLOGS</h5>
                <h2 data-text-animation="" data-split="word">
                  Latest Blogs & Updates.
                </h2>
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="blog_right_text">
                <p>
                  "Dive into branding insights, creative trends, and strategic updates to stay ahead in the evolving brand landscape with Gujarat's leading branding agency in Ahmedabad."
                </p>
                <Link className="circle_btn" href="/blog">
                  View All <br />
                  Our Blogs <i className="fx-icon-next-arrow" />
                </Link>
              </div>
            </div>
          </div>
          <div className="row mt_20">
            {blogs.slice(0, 3).map((blog, index) => (
              <div
                key={blog.id}
                className={`col-lg-4 col-md-6 ${
                  index === 0 ? 'first_blog' : index === 2 ? 'last_blog' : ''
                }`}
                data-animation="fade-left"
                data-delay={index === 0 ? '' : index === 1 ? '.75' : '1'}
              >
                <div className="single_blog">
                  <div className="single_blog_text">
                    <ul className="d-flex flex-wrap">
                      <li>{blog.category}</li>
                      <li>{blog.date}</li>
                    </ul>
                    <Link
                      className="title"
                      href={`/blog-details/${blog?.slug}`}
                    >
                      {blog.title}
                    </Link>
                  </div>
                  <div className="single_blog_img">
                    <Link
                      href={`/blog-details/${blog?.slug}`}
                      data-cursor='<i class="fx-icon-long-next-arrow"></i>'
                      className="img w-100"
                    >
                      <div data-animation="img-blur" className="w-100">
                        <img
                          src={`/images/blogs/${blog.image}`}
                          alt="blog"
                          className="img-fluid w-100"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*===============================
  BLOG END
    ===============================*/}
      {/*============================
  BRAND START
    =============================*/}
      {/* <section className="tf__brand pt_100 xs_pt_60 pb_100 xs_pb_60">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Marquee className="marquee_animi">
                <ul className="tf__brand_logo_area d-flex flex-wrap justify-content-between">
                  <li>
                    <a href="#">
                      <img
                        src="/images/brand_1.jpg"
                        alt="brand"
                        className="img-fluid w-100"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="/images/brand_5.jpg"
                        alt="brand"
                        className="img-fluid w-100"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="/images/brand_2.jpg"
                        alt="brand"
                        className="img-fluid w-100"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="/images/brand_3.jpg"
                        alt="brand"
                        className="img-fluid w-100"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="/images/brand_6.jpg"
                        alt="brand"
                        className="img-fluid w-100"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="/images/brand_4.jpg"
                        alt="brand"
                        className="img-fluid w-100"
                      />
                    </a>
                  </li>
                </ul>
              </Marquee>
            </div>
          </div>
        </div>
      </section> */}
      {/*============================
  BRAND END
    =============================*/}
    </FxotaryLayout>
  );
};
export default page;
