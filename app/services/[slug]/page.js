import Question from "@/components/Question";
import FxotaryLayout from "@/layout/FxotaryLayout";
import { serviceData } from "@/lib/serviceData";
import { notFound } from "next/navigation";

export default function ServiceDetails({ params }) {
  const service = serviceData.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <FxotaryLayout>
      <section className="tf__about_us_2 mt_190 xs_mt_150">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section_heading">
                <h5>{service.title.toUpperCase()}</h5>
                <h2 className="banner_title">
                  {service.title} - The Best Digital Marketing Agency in Ahmedabad.
                </h2>
              </div>
            </div>
          </div>
          <div className="row mt_30 xs_mt_50 item_1">
            <div className="col-xl-4 col-md-6" />
            <div className="col-xl-8 col-md-6">
              <div className="tf__services_2_text">
                <div className="d-lg-flex">
                  <p>{service.description1}</p>
                  <p>{service.description2}</p>
                </div>
                <ul>
                  {service.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <div className="mt-5">
                  <img
                    src={`/images/services/${service.image1}`}
                    alt={service.title}
                    className="img-fluid w-100"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row mt_130 xs_mt_50 item_1">
            <div className="col-xl-6 col-md-6">
              <div className="tf__services_2_text p-0 h-auto">
                <h3>Our Approach to {service.title}</h3>
              </div>
            </div>
            <div className="col-xl-6 col-md-6">
              <div className="tf__services_2_text p-0 h-auto">
                <p className="mt-0">
                  As the best digital marketing agency in Ahmedabad, our approach to {service.title} is holistic and client-centric. We begin by understanding your unique business objectives, target audience, and competitive landscape. This allows us to tailor strategies that not only deliver measurable results but also align with your long-term vision in Gujarat.
                </p>
              </div>
            </div>
          </div>
          <div className="row mt_130 xs_mt_50 item_1">
            <div className="col-md-6 col-xl-8 mb-3">
              <img src={`/images/services/${service.image2}`} alt={service.title} />
            </div>
            <div className="col-md-6 col-xl-4 mb-3">
              <img src={`/images/services/${service.image3}`} alt={service.title} />
            </div>
          </div>
          <div className="row mt_130 xs_mt_50 item_1">
            <div className="col-md-0 col-xl-2" />
            <div className="col-md-12 col-xl-10">
              <div className="tf__services_2_text">
                <h3>
                  Why Choose Postiview for {service.title}?
                </h3>
                <div className="d-lg-flex">
                  <p>
                    Choosing Postiview means partnering with the best digital marketing agency in Ahmedabad, a team dedicated to your success. Our expertise in {service.title} ensures that your projects are handled with precision, creativity, and strategic insight.
                  </p>
                  <p>
                    We pride ourselves on delivering innovative and effective solutions, making us the preferred choice for businesses in Gujarat looking to make a significant impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Question />
    </FxotaryLayout>
  );
}
