import Question from '@/components/Question';
import FxotaryLayout from '@/layout/FxotaryLayout';
import Link from 'next/link';
import { blogs } from '@/lib/blogs';

export const metadata = {
  title:
    'Blog - Postiview: Digital Marketing Insights & Updates in Ahmedabad, Gujarat',
  description:
    'Explore the latest digital marketing trends, strategies, and insights from Postiview, the best digital marketing agency in Ahmedabad, Gujarat. Stay informed with our expert blog posts.',
  keywords: [
    'Digital Marketing Blog',
    'SEO Blog',
    'Social Media Marketing Blog',
    'Content Marketing Blog',
    'Digital Marketing Agency Ahmedabad Blog',
    'Gujarat Marketing Insights',
  ],
};

const page = () => {
  return (
    <FxotaryLayout>
      <section className="tf__blog_page mt_190 xs_mt_70">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-4 col-sm-5 col-md-6">
              <div className="section_heading">
                <h5>OUR BLOG</h5>
                <h2 className="banner_title">Latest Blogs</h2>
              </div>
            </div>
            <div className="col-xl-5 col-sm-7 col-md-6">
              <div className="tf__portfolio_page_text">
                <p>
                  Explore our latest blogs from the leading branding agency in
                  Ahmedabad Gujarat, where we share insights, trends, and
                  strategies to help brands across Ahmedabad and Gujarat
                  strengthen their identity and presence. Stay updated with
                  expert guidance from Postiview’s team of branding specialists.
                </p>
              </div>
            </div>
          </div>

          <div className="row mt_35">
            {blogs.map((blog, index) => (
              <div key={blog.id} className="col-lg-4 col-md-6">
                <div
                  className={`single_blog ${
                    index % 3 === 0
                      ? 'first_blog'
                      : index % 3 === 2
                      ? 'last_blog'
                      : ''
                  }`}
                >
                  <div className="single_blog_text">
                    <ul className="d-flex flex-wrap">
                      <li>{blog.category}</li>
                      <li>{blog.date}</li>
                    </ul>
                    <Link className="title" href={`/blog-details/${blog.slug}`}>
                      {blog.title}
                    </Link>
                  </div>
                  <div className="single_blog_img">
                    <Link
                      href={`/blog-details/${blog.slug}`}
                      data-cursor='<i class="fx-icon-long-next-arrow"></i>'
                      className="img d-block"
                    >
                      <div data-animation="img-blur">
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
          {/* <div className="tf__pagination mt_65">
            <div className="row">
              <div className="col-12">
                <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Previous">
                        <i className="fas fa-chevron-left" />
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link active" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        ...
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        15
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Next">
                        <i className="fas fa-chevron-right" />
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div> */}
        </div>
      </section>
      <Question />
    </FxotaryLayout>
  );
};
export default page;
