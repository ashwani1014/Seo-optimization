import Question from "@/components/Question";
import FxotaryLayout from "@/layout/FxotaryLayout";
import Link from "next/link";
import { portfolioData } from "@/lib/portfolioData";

export const metadata = {
  title: "Portfolio - Postiview: Leading Branding Agency in Ahmedabad, Gujarat",
  description:
    "Explore Postiview's branding portfolio featuring identity design, UI/UX, digital branding, packaging, and visual communication work. A showcase of creative excellence from Ahmedabad’s top branding agency.",
  keywords: [
    "Branding Portfolio Ahmedabad",
    "Brand Identity Work Gujarat",
    "UI/UX Design Portfolio",
    "Brand Strategy Case Studies",
    "Creative Agency Portfolio",
    "Branding Agency Ahmedabad Work",
  ],
  alternates: {
    canonical: `https://postiview.in/portfolio`,
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
    title: "Portfolio - Postiview: Leading Branding Agency in Ahmedabad, Gujarat",
    description: "Explore Postiview's branding portfolio featuring identity design, UI/UX, digital branding, packaging, and visual communication work. A showcase of creative excellence from Ahmedabad’s top branding agency.",
    url: "https://postiview.in/portfolio",
    siteName: "Postiview",
    images: [
      {
        url: "https://postiview.in/images/og-image.webp", // Use a generic OG image for portfolio
        width: 800,
        height: 600,
        alt: "Postiview Portfolio - Branding Agency",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Postiview: Leading Branding Agency in Ahmedabad, Gujarat",
    description: "Explore Postiview's branding portfolio featuring identity design, UI/UX, digital branding, packaging, and visual communication work. A showcase of creative excellence from Ahmedabad’s top branding agency.",
    images: ["https://postiview.in/images/og-image.webp"],
  },
};

const page = () => {
  return (
    <FxotaryLayout>
      <section className="tf__portfolio_page mt_190 xs_mt_150">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5 col-md-5">
              <div className="section_heading">
                <h5>OUR PORTFOLIO</h5>
                <h2 className="banner_title">Our Latest Creative Works</h2>
              </div>
            </div>

            <div className="col-lg-5 col-md-7">
              <div className="tf__portfolio_page_text">
                <p>
                  Explore our curated selection of branding, identity design, digital experiences, packaging, and creative visuals crafted for brands across Gujarat. Every project reflects our commitment to strategic clarity and creative excellence as Ahmedabad’s leading branding agency.
                </p>
              </div>
            </div>
          </div>

          <div className="row mt_60 justify-content-between">
            {portfolioData.map((item) => (
              <div
                key={item.id}
                className={`col-xl-5 col-md-6`}
              >
                <div
                  className={` tf__featured_work_item_small mb-5
                  `} 
                >
                  <Link
                    href={item.link}
                    className="cursor-arrow tf__featured_work_item_img"
                  >
                    <div data-animation="img-blur">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="img-fluid w-100"
                      />
                    </div>
                  </Link>

                  <Link href={item.link} className="d-flex">
                    <h3 data-text-animation="" data-split="word">
                      {item.title}
                    </h3>
                  </Link>

                  <p
                    data-text-animation="slide-from-right"
                    data-split="char"
                  >
                    {item.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Question />
    </FxotaryLayout>
  );
};

export default page;
