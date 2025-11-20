import Question from "@/components/Question";
import FxotaryLayout from "@/layout/FxotaryLayout";
import Link from "next/link";
import { blogs } from "@/lib/blogs";
import { redirect } from "next/navigation";

export const metadata = {
  title: `${blogs[0].title} - Postiview Blog: Digital Marketing Agency Ahmedabad, Gujarat`,
  description: `${blogs[0].content[0].substring(0, 150)}... Read more insights from the best digital marketing agency in Ahmedabad, Gujarat.`,
  keywords: ["Digital Marketing Blog", "SEO Tips", "Content Strategy", "Digital Marketing Agency Ahmedabad", "Gujarat Marketing Trends", blogs[0].title, blogs[0].category],
};

const page = () => {
  return (
    // <FxotaryLayout>
    //   <section className="tf__blog_details mt_190 xs_mt_150">
    //     <div className="container">
    //       <div className="row">
    //         <div className="col-xl-10">
    //           <div className="tf__blog_details_header">
    //             <h5>{blogs[0].category} / {blogs[0].date}</h5>
    //             <h1 className="banner_title">
    //               {blogs[0].title}
    //             </h1>
    //             <ul>
    //               <li>
    //                 <div className="img">
    //                   <img
    //                     src="images/details_bloger.png"
    //                     alt="bloger"
    //                     className="img-fluid w-100"
    //                   />
    //                 </div>
    //               </li>
    //               {/* <li>
    //                 <h4>Written by</h4>
    //                 <p>Tomas Markt</p>
    //               </li>
    //               <li>
    //                 <h4>Viewed</h4>
    //                 <p>3 min read</p>
    //               </li> */}
    //             </ul>
    //           </div>
    //         </div>
    //         <div className="col-xl-12">
    //           <div className="tf__blog_details_img">
    //             <div data-animation="img-blur" data-scroll={0}>
    //               <img
    //                 src="images/futured_work_img_9.jpg"
    //                 alt="blog details"
    //                 className="img-fluid w-100"
    //               />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="row justify-content-between">
    //         <div className="col-xxl-7 col-lg-8">
    //           <div className="tf__blog_details_text">
    //             {blogs[0].content.map((para, i) =>
    //               i === 4 ? (
    //                 <div key={i} className="details_quot_text">
    //                   <p>{para}</p>
    //                 </div>
    //               ) : (
    //                 <p key={i}>{para}</p>
    //               )
    //             )}
    //           </div>
    //           <form className="tf__contact_form blog_contact_form">
    //             <div className="row">
    //               <div className="col-xl-6">
    //                 <div className="tf__contact_form_imput">
    //                   <label>First Name:</label>
    //                   <input type="text" placeholder="e.g. Willy" />
    //                 </div>
    //               </div>
    //               <div className="col-xl-6">
    //                 <div className="tf__contact_form_imput">
    //                   <label>Email:</label>
    //                   <input
    //                     type="email"
    //                     placeholder="e.g. youremail@gmail.com"
    //                   />
    //                 </div>
    //               </div>
    //               <div className="col-xl-6">
    //                 <div className="tf__contact_form_imput">
    //                   <label>Phone:</label>
    //                   <input type="text" placeholder="e.g. +8801" />
    //                 </div>
    //               </div>
    //               <div className="col-xl-6">
    //                 <div className="tf__contact_form_imput">
    //                   <label>subject:</label>
    //                   <input type="text" placeholder="e.g. I need help" />
    //                 </div>
    //               </div>
    //               <div className="col-xl-12">
    //                 <div className="tf__contact_form_imput">
    //                   <label>Message:</label>
    //                   <textarea
    //                     rows={4}
    //                     placeholder="e.g. you need any help"
    //                     defaultValue={""}
    //                   />
    //                 </div>
    //                 <button
    //                   className="circle_btn circle_btn_2 learn_more_2"
    //                   type="submit"
    //                 >
    //                   <i className="fx-icon-long-next-arrow" />
    //                   Send Message
    //                 </button>
    //               </div>
    //             </div>
    //           </form>
    //         </div>
    //         <div className="col-xxl-4 col-lg-4">
    //           <div className="tf__details_sidebar" id="sticky_sidebar">
    //             <div className="tf__sidebar_search">
    //               <form>
    //                 <input type="text" placeholder="Search" />
    //                 <button type="submit">
    //                   <i className="far fa-search" />
    //                 </button>
    //               </form>
    //             </div>
    //             <div className="tf__sidebar_post mt_35">
    //               <h3>Recent Posts</h3>
    //               <ul>
    //                 {blogs.slice(1, 6).map((blog, index) => (
    //                   <li key={blog.id}>
    //                     <div className="img">
    //                       <img
    //                         src={`images/sidebar_post_img_${index + 1}.jpg`}
    //                         alt="post"
    //                         className="img-fluid w-100"
    //                       />
    //                     </div>
    //                     <div className="text">
    //                       <Link href="blog_details">{blog.title}</Link>
    //                       <p>{blog.date}</p>
    //                     </div>
    //                   </li>
    //                 ))}
    //               </ul>
    //             </div>
    //             <div className="tf__sidebar_archive mt_65">
    //               <h3>Archive</h3>
    //               <p>January 2021</p>
    //               <p>February 2021</p>
    //             </div>
    //             <div className="tf__sidebar_category mt_65">
    //               <h3>Categories</h3>
    //               <ul>
    //                 {[...new Set(blogs.map(b => b.category))].map(cat => (
    //                   <li key={cat}>
    //                     <a href="#">{cat}</a>
    //                   </li>
    //                 ))}
    //               </ul>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    //   <Question />
    // </FxotaryLayout>
    redirect("/blog")
  );
};
export default page;
