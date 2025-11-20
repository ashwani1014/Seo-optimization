import Question from "@/components/Question";
import FxotaryLayout from "@/layout/FxotaryLayout";
import ContactForm from "@/components/ContactForm"; // Import the new component

export const metadata = {
  title: "Contact Us - Postiview: Best Digital Marketing Agency in Ahmedabad, Gujarat",
  description: "Get in touch with Postiview, the best digital marketing agency in Ahmedabad, Gujarat. Contact us for inquiries, partnerships, or to discuss your digital marketing needs.",
  keywords: ["Contact Digital Marketing Agency Ahmedabad", "Postiview Contact", "Digital Marketing Inquiry Gujarat", "Ahmedabad Marketing Agency Phone", "Email Postiview"],
};

const page = () => {
  return (
    <FxotaryLayout>
      <section className="tf__contact_page mt_190 xs_mt_150">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5 col-md-5">
              <div className="section_heading">
                <h5>CONTACT US</h5>
                <h2 className="banner_title">
                  Let's Connect and Grow Your Business!
                </h2>
              </div>
            </div>
            <div className="col-lg-5 col-md-7">
              <div className="tf__portfolio_page_text">
             
                <div className="contact_details_info">
                    <h4>Call Us:</h4>
                    <p><a href="tel:+919426988865">+91 94269 88865</a></p>
                    <p><a href="tel:+14379886426">+1 (437) 988-6426</a></p>
                    <br />
                    <h4>Email:</h4>
                    <p><a href="mailto:info@postiview.com">info@postiview.com</a></p>
                    <br />
                    <h4>Visit Us:</h4>
                    <p>India: 47, Mehul Society, Near Airport, Deesa, Gujarat, India</p>
                    <p>Canada: 13 Davenfield Cir, Brampton, ON L6P 4M2, Canada</p>
                </div>
              </div>
            </div>
          </div>
          <ContactForm /> {/* Use the new ContactForm component */}
        </div>
      </section>
      <Question />
    </FxotaryLayout>
  );
};
export default page;
