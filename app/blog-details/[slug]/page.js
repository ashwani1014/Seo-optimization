import Question from "@/components/Question";
import FxotaryLayout from "@/layout/FxotaryLayout";
import Link from "next/link";
import { blogs } from "@/lib/blogs";
import ContactForm from "@/components/ContactForm";

export async function generateMetadata({ params }) {
  const blog = blogs.find((blog) => blog.slug === params.slug);

  if (!blog) {
    return {
      title: "Blog Not Found - Postiview: Digital Marketing Agency in Ahmedabad, Gujarat",
      description: "The requested blog post could not be found. Explore other digital marketing insights from Postiview, the best digital marketing agency in Ahmedabad, Gujarat.",
    };
  }

  return {
    title: `${blog.title} - Postiview Blog: Digital Marketing Agency Ahmedabad, Gujarat`,
    description: `${blog.content[0].substring(0, 150)}... Read the full article for insights from the best digital marketing agency in Ahmedabad, Gujarat.`,
    keywords: ["Digital Marketing Blog", "SEO Tips", "Content Strategy", "Digital Marketing Agency Ahmedabad", "Gujarat Marketing Trends", blog.title, blog.category],
    openGraph: {
      title: `${blog.title} - Postiview Blog`,
      description: `${blog.content[0].substring(0, 150)}...`,
      url: `https://postiview.in/blog-details/${blog.slug}`,
      images: [
        {
          url: `https://postiview.in${blog.image}`, // Assuming blog.image is relative path
          width: 800,
          height: 600,
          alt: blog.title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${blog.title} - Postiview Blog`,
      description: `${blog.content[0].substring(0, 150)}...`,
      images: [`https://postiview.in${blog.image}`],
    },
  };
}

const page = ({params}) => {
  const slug = params.slug;
  const blog = blogs.find(blog => blog.slug === slug);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <FxotaryLayout>
      <section className="tf__blog_details mt_190 xs_mt_150">
        <div className="container">
          <div className="row">
            <div className="col-xl-10">
              <div className="tf__blog_details_header">
                <h5>{blog.category} / {blog.date}</h5>
                <h1 className="banner_title">
                  {blog.title}
                </h1>
                <ul>
                  {/* <li>
                    <div className="img">
                      <img
                        src="images/details_bloger.png"
                        alt="bloger"
                        className="img-fluid w-100"
                      />
                    </div>
                  </li> */}
                  {/* <li>
                    <h4>Written by</h4>
                    <p>Tomas Markt</p>
                  </li>
                  <li>
                    <h4>Viewed</h4>
                    <p>3 min read</p>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="tf__blog_details_img">
                <div data-animation="img-blur" data-scroll={0}>
                  <img
                    src={`/images/blogs/${blog?.image}`}
                    alt={blog?.title}
                    className="img-fluid w-100"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col-xxl-7 col-lg-8">
              <div className="tf__blog_details_text">
                {blog.content.map((para, i) =>
                  i === 4 ? (
                    <div key={i} className="details_quot_text">
                      <p>{para}</p>
                    </div>
                  ) : (
                    <p key={i}>{para}</p>
                  )
                )}
              </div>
            <ContactForm/>
            </div>
            <div className="col-xxl-4 col-lg-4">
              <div className="tf__details_sidebar" id="sticky_sidebar">
                {/* <div className="tf__sidebar_search">
                  <form>
                    <input type="text" placeholder="Search" />
                    <button type="submit">
                      <i className="far fa-search" />
                    </button>
                  </form>
                </div> */}
                <div className="tf__sidebar_post mt_35">
                  <h3>Recent Posts</h3>
                  <ul>
                    {blogs.slice(1, 6).map((blog, index) => (
                      <li key={blog.id}>
                        <div className="img">
                          <img
                             src={`/images/blogs/${blog?.image}`}
                            alt="post"
                            className="img-fluid w-100"
                          />
                        </div>
                        <div className="text">
                          <Link href={`/blog-details/${blog.slug}`}>{blog.title}</Link>
                          <p>{blog.date}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* <div className="tf__sidebar_archive mt_65">
                  <h3>Archive</h3>
                  <p>January 2021</p>
                  <p>February 2021</p>
                </div> */}
                <div className="tf__sidebar_category mt_65">
                  <h3>Categories</h3>
                  <ul>
                    {[...new Set(blogs.map(b => b.category))].map(cat => (
                      <li key={cat}>
                        <a href="#">{cat}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Question />
    </FxotaryLayout>
  );
};

export default page;
