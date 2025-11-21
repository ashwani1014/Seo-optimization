import Question from "@/components/Question";
import FxotaryLayout from "@/layout/FxotaryLayout";
import { serviceData } from "@/lib/serviceData";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return serviceData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }) {
  const service = serviceData.find((s) => s.slug === params.slug);

  if (!service) {
    return {
      title: "Service Not Found - Postiview: Leading Branding Agency in Ahmedabad, Gujarat",
      description: "The requested service could not be found. Explore other branding services from Postiview, the leading branding agency in Ahmedabad, Gujarat.",
    };
  }

  return {
    title: `${service.title} - Postiview: Leading Branding Agency in Ahmedabad, Gujarat`,
    description: `${service.description1.substring(0, 150)}... Read more about ${service.title} from Postiview, the leading branding agency in Ahmedabad, Gujarat.`,
    keywords: ["Branding Agency Ahmedabad", "Best Branding Agency Gujarat", "Brand Identity Ahmedabad", "Visual Design Ahmedabad", "Website Design Ahmedabad", "Brand Strategy Ahmedabad", service.title],
    openGraph: {
      title: `${service.title} - Postiview: Leading Branding Agency in Ahmedabad, Gujarat`,
      description: `${service.description1.substring(0, 150)}...`,
      url: `https://postiview.in/services/${service.slug}`,
      images: [
        {
          url: `https://postiview.in/images/services/${service.image1}`,
          width: 800,
          height: 600,
          alt: service.title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} - Postiview: Leading Branding Agency in Ahmedabad, Gujarat`,
      description: `${service.description1.substring(0, 150)}...`,
      images: [`https://postiview.in/images/services/${service.image1}`],
    },
  };
}

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
                  {service.title} — From Ahmedabad’s Leading Branding Agency.
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
                  As the leading branding agency in Ahmedabad, our approach to {service.title} is thoughtful, strategic, and centered around your brand’s long-term growth. We begin by understanding your identity, audience, and goals, ensuring that every solution reflects who you are and resonates across Gujarat.
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
                <h3>Why Choose Postiview for {service.title}?</h3>
                <div className="d-lg-flex">
                  <p>
                    Choosing Postiview means working with Ahmedabad’s most trusted branding agency. Our expertise in {service.title} ensures that your brand receives the strategic thinking, creativity, and refinement it deserves—every step of the way.
                  </p>
                  <p>
                    We focus on delivering solutions that are effective, future-ready, and aligned with your brand’s vision. Businesses across Gujarat choose us for our precision, reliability, and commitment to creating meaningful brand impact.
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
