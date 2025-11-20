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
                alt="Fxotary"
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
                        <Link href="/services/graphic_designing">Graphic Designing</Link>
                      </li>
                      <li>
                        <Link href="/services/digital_marketing">Digital Marketing</Link>
                      </li>
                      <li>
                        <Link href="/services/programming-tech">Programming & Tech</Link>
                      </li>
                      <li>
                        <Link href="/services/video-animation">Video & Animation</Link>
                      </li>
                      <li>
                        <Link href="/services/writing-translation">
                          Writing & Translation
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/business_solution">Business Solution</Link>
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
                    alt="Fxotary"
                    className="img-fluid w-100"
                  />
                </Link>
              </div>
              <div className="text-end me-3">
                <button
                  className="menu-bar navbar-toggler"
                  type="button"
                  onClick={() => setIsMobileMenuOpen(true)}
                  // style={{ backgroundColor: 'black', color: 'white', fontSize: '20px', border: '1px solid white' }}
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
                    alt="Fxotary"
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
      {/* <div className={`menu_search ${toggle ? 'show_search' : ''}`}>
        <form>
          <input type="text" placeholder="Search" />
          <button type="submit">Search</button>
          <span
            className="close_search c-pointer"
            onClick={() => setToggle(false)}
          >
            <i className="fa-sharp fa-light fa-xmark" />
          </span>
          <i className="icon-down-arrow" />
        </form>
      </div> */}
      <div
        className={`body-overlay ${toggle ? 'show' : ''}`}
        onClick={() => setToggle(false)}
      />
    </Fragment>
  );
};
export default Header;
