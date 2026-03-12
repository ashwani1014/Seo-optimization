import Link from "next/link";

const Footer = () => {
  return (
    <footer className="pt_120 xs_pt_80">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xl-4 col-sm-8 col-md-6 col-lg-4">
            <div className="footer_content">
              <Link className="footer_logo" href="/">
                <img
                  src="/images/logo-white.png"
                  alt="postiview"
                  className="img-fluid w-100"
                />
              </Link>
              <p>
                Discover PostiView, the best branding agency in Ahmedabad, Gujarat. We excel as the leading branding studio in Ahmedabad Gujarat, building strong brands through strategy, creativity, and smart execution.
              </p>
              <ul className="d-flex flex-wrap">
                <li>
                  <a href="https://www.facebook.com/postiview">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/postiview">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/postiview/">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                {/* <li>
                  <a href="#">
                    <i className="fab fa-pinterest-p" />
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
          <div className="col-xl-2 col-sm-3 col-md-6 col-lg-2">
            <ul className="footer_menu">
              <li>
                <Link
                  href="/"
                  className="text_hover_animaiton text_hover_type_2"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text_hover_animaiton text_hover_type_2"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text_hover_animaiton text_hover_type_2"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text_hover_animaiton text_hover_type_2"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text_hover_animaiton text_hover_type_2"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-xl-2 col-md-6 col-lg-3">
            <div className="footer_address">
              <h3>Address</h3>
              <p>Ahmedabad</p>
              <p>Deesa</p>
              <p>Canada</p>
              <p>Delhi</p>
            </div>
          </div>
          <div className="col-xl-2 col-md-6 col-lg-3">
            <div className="footer_address">
              <h3>Contact</h3>
              <p>
                <a href="mailto:info@postiview.com">info@postiview.com</a>
              </p>
              <p>
                <a href="tel:+919426988865">+91 94269 88865</a>
              </p>
              <p>
                <a href="tel:+14379886426">+1 (437) 988-6426</a>
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="footer_copyright">
              <p>Copyright © 2025 PostiView. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
