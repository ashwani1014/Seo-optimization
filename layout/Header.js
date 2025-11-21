'use client';
import TextHoverAnimation from '@/components/TextHoverAnimation';
import Link from 'next/link';
import { Fragment, useState } from 'react';
const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <Fragment>
      <header>
        <div className="main_menu navbar d-none d-xl-flex">
          <div className="container-fluid">
            <Link href="/" className="navbar-brand">
              <img
                src="/images/logo-black.png"
                alt="Postiview"
                className="img-fluid w-100"
              />
            </Link>
            <div className="main-menu">
              <nav className="navbar-nav m-auto" id="navbarNav">
                <ul>
                  <li>
                    <Link href="/" className="text_hover_animaiton">
                      <TextHoverAnimation text={'Home'} />
                    </Link>
                  </li>

                  <li>
                    <Link href="/about_us" className="text_hover_animaiton">
                      <TextHoverAnimation text={'About'} />
                    </Link>
                  </li>
                  <li className="dropdown-nav">
                    <Link href="/services" className="text_hover_animaiton">
                      <TextHoverAnimation text={'Services'} />
                    </Link>
                    <ul className="submenu">
                      <li>
                        <Link href="/services/brand-strategy">Brand Strategy</Link>
                      </li>
                      <li>
                        <Link href="/services/brand-identity">Brand Identity & Logo</Link>
                      </li>
                      <li>
                        <Link href="/services/visual-design">Visual & Graphic Design</Link>
                      </li>
                      <li>
                        <Link href="/services/digital-branding">Digital Brand Experience</Link>
                      </li>
                      <li>
                        <Link href="/services/packaging-print">Packaging & Print</Link>
                      </li>
                      <li>
                        <Link href="/services/video-motion">Video & Motion</Link>
                      </li>
                    </ul>
                  </li>
                   <li>
                    <Link href="/portfolio" className="text_hover_animaiton">
                      <TextHoverAnimation text={'Portfolio'} />
                    </Link>
                  </li>
                   <li>
                    <Link href="/blog" className="text_hover_animaiton">
                      <TextHoverAnimation text={'Blog'} />
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="right_menu">
              {/* <a
                href="#"
                className="search_icon"
                onClick={() => setToggle(true)}
              >
                <i className="fa-sharp fa-regular fa-magnifying-glass" />
              </a> */}
              <Link href="/contact" className="common_btn">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <div className="mobile-menu d-xl-none main_menu d-flex">
          <div className="container-fluid d-flex justify-content-between">
            <div className="d-flex align-items-center justify-content-between w-100">
              <div className="navbar-brand ms-3">
                <Link href="/">
                  <img
                    src="/images/logo-black.png"
                    alt="Postiview"
                    className="img-fluid w-100"
                  />
                </Link>
              </div>
              <div className="text-end me-3">
                <button
                  className="menu-bar navbar-toggler"
                  type="button"
                  onClick={() => setIsMobileMenuOpen(true)}
                >
                  ☰
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={`mobile_menu_container ${isMobileMenuOpen ? 'active' : ''}`}>
          <div className="mobile_menu_content">
            <div className="d-flex align-items-center justify-content-between">
              <div className="navbar-brand">
                <Link href="/">
                  <img
                    src="/images/logo-black.png"
                    alt="Postiview"
                    className="img-fluid w-100"
                  />
                </Link>
              </div>
              <div className="close_btn">
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <i className="fal fa-times" />
                </button>
              </div>
            </div>
            <div className="main-menu-mobile">
              <nav className="navbar-nav" id="navbarNavMobile">
                <ul>
                  <li>
                    <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about_us" onClick={() => setIsMobileMenuOpen(false)}>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" onClick={() => setIsMobileMenuOpen(false)}>
                      Services
                    </Link>
                    <ul className="mobile-submenu">
                      <li>
                        <Link href="/services/brand-strategy" onClick={() => setIsMobileMenuOpen(false)}>Brand Strategy</Link>
                      </li>
                      <li>
                        <Link href="/services/brand-identity" onClick={() => setIsMobileMenuOpen(false)}>Brand Identity & Logo</Link>
                      </li>
                      <li>
                        <Link href="/services/visual-design" onClick={() => setIsMobileMenuOpen(false)}>Visual & Graphic Design</Link>
                      </li>
                      <li>
                        <Link href="/services/digital-branding" onClick={() => setIsMobileMenuOpen(false)}>Digital Brand Experience</Link>
                      </li>
                      <li>
                        <Link href="/services/packaging-print" onClick={() => setIsMobileMenuOpen(false)}>Packaging & Print</Link>
                      </li>
                      <li>
                        <Link href="/services/video-motion" onClick={() => setIsMobileMenuOpen(false)}>Video & Motion</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/portfolio" onClick={() => setIsMobileMenuOpen(false)}>
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)}>
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <div
        className={`body-overlay ${toggle ? 'show' : ''}`}
        onClick={() => setToggle(false)}
      />
    </Fragment>
  );
};
export default Header;
