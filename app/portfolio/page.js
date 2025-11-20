import Question from "@/components/Question";
import FxotaryLayout from "@/layout/FxotaryLayout";
import Link from "next/link";
import { portfolioData } from "@/lib/portfolioData";

export const metadata = {
  title: "Portfolio - Postiview: Digital Marketing Agency Ahmedabad, Gujarat",
  description: "Explore the innovative digital marketing and creative work portfolio of Postiview, the best digital marketing agency in Ahmedabad, Gujarat. See our success stories.",
  keywords: ["Digital Marketing Portfolio", "Creative Projects Ahmedabad", "Web Design Portfolio Gujarat", "SEO Case Studies", "Social Media Campaigns", "Digital Marketing Agency Ahmedabad Work"],
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
                  Explore our diverse portfolio showcasing innovative digital marketing solutions and creative projects from the best digital marketing agency in Ahmedabad, serving clients across Gujarat.
                </p>
              </div>
            </div>
          </div>
          <div className="row mt_60 justify-content-between">
            {portfolioData.map((item, index) => (
              <div
                key={item.id}
                className={`col-xl-5 col-md-6 ${item.id % 2 === 0 ? "item_2" : ""}`}
              >
                <div className={`tf__featured_work_item ${item.id % 2 === 0 ? "" : (item.id === 3 || item.id === 5) ? "tf__featured_work_item_small" : ""}`}>
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
                  <Link href={item.link}>
                    <h3 data-text-animation="" data-split="word">
                      {item.title}
                    </h3>
                  </Link>
                  <p data-text-animation="slide-from-right" data-split="char">
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
