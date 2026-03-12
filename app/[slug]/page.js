import { keywords } from "@/data/keywords"
import { places } from "@/data/places"
import FxotaryLayout from '@/layout/FxotaryLayout';
import Link from 'next/link';

export async function generateStaticParams() {
  const pages = []

  keywords.forEach(keyword => {
    places.forEach(place => {
      pages.push({
        slug: `${keyword}-in-${place}`
      })
    })
  })

  return pages
}

export function generateMetadata({ params }) {
  const slug = params.slug
  if (!slug) return { title: 'Postiview', description: 'Digital Marketing Services' }

  let keyword = '';
  let place = '';

  if (slug.includes('-in-')) {
    const parts = slug.split('-in-')
    keyword = parts[0]
    place = parts[1]
  } else {
    return { title: 'Postiview', description: 'Digital Marketing Services' }
  }


  const formattedKeyword = keyword.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  const formattedPlace = place.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

  return {
    title: `${formattedKeyword} in ${formattedPlace} | Postiview`,
    description: `Looking for ${formattedKeyword} in ${formattedPlace}? Postiview helps businesses grow online with expert digital marketing services.`
  }
}

export default function Page({ params }) {
  const slug = params.slug
  if (!slug || !slug.includes('-in-')) {
    return (
      <FxotaryLayout>
        <section className="pt_120 pb_120">
          <div className="container">
            <h1>Page Not Found</h1>
          </div>
        </section>
      </FxotaryLayout>
    )
  }

  const [keyword, place] = slug.split("-in-")

  const formattedKeyword = keyword.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  const formattedPlace = place.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

  return (
    <FxotaryLayout>
      <section className="service_details pt_120 xs_pt_80 pb_120 xs_pb_80">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="service_details_text mt_40">
                <h1 className="mb-4">{formattedKeyword} in {formattedPlace}</h1>
                <h3 className="mb-3">Best {formattedKeyword} in {formattedPlace} – Postiview</h3>

                <p>
                  If you are searching for a reliable <strong>{formattedKeyword} in {formattedPlace}</strong>, Postiview is a trusted partner for businesses looking to grow online. In today's competitive digital world, companies need a strong online presence to attract new customers and increase revenue. Our team at Postiview helps companies in {formattedPlace} build visibility, generate qualified leads, and increase revenue through effective digital marketing strategies.
                </p>

                <p>
                  As an experienced <strong>{formattedKeyword} in {formattedPlace}</strong>, we understand how local markets work and how customer behavior varies across regions. Our marketing specialists combine data, creativity, and advanced marketing tools to develop customized strategies that help businesses achieve measurable growth.
                </p>

                <p>
                  Whether you are a startup, local business, or an established company in {formattedPlace}, Postiview offers scalable digital marketing solutions designed to maximize your online performance.
                </p>

                <h3 className="mt-5 mb-3">Why Choose Postiview as Your {formattedKeyword} in {formattedPlace}</h3>

                <p>
                  Choosing the right <strong>{formattedKeyword} in {formattedPlace}</strong> can significantly impact the success of your marketing campaigns. At Postiview, we focus on delivering results through strategic planning, data-driven decision making, and continuous optimization.
                </p>

                <p>
                  Our team works closely with businesses in {formattedPlace} to understand their goals, industry competition, and target audience. This allows us to create marketing campaigns that not only attract traffic but also convert visitors into customers.
                </p>

                <p>Some key advantages of working with Postiview include:</p>
                <ul className="details_list mt_25 mb_30">
                  <li>Experienced digital marketing professionals</li>
                  <li>Data-driven campaign strategies</li>
                  <li>Transparent reporting and analytics</li>
                  <li>ROI-focused marketing solutions</li>
                  <li>Customized strategies for businesses in {formattedPlace}</li>
                </ul>
                <p>We believe in long-term partnerships and sustainable growth for our clients.</p>


                <h3 className="mt-5 mb-3">Our {formattedKeyword} Services in {formattedPlace}</h3>

                <p>Postiview provides a wide range of digital marketing services designed to help businesses succeed online.</p>

                <h4 className="mt-4 mb-2">Search Engine Optimization (SEO)</h4>
                <p>Our SEO services help businesses in {formattedPlace} improve their search engine rankings, increase organic traffic, and attract customers actively searching for their services.</p>

                <h4 className="mt-4 mb-2">Pay Per Click Advertising (PPC)</h4>
                <p>As a professional {formattedKeyword} in {formattedPlace}, we create high-performing paid advertising campaigns that drive targeted traffic and maximize return on investment.</p>

                <h4 className="mt-4 mb-2">Social Media Marketing</h4>
                <p>We help brands build a strong presence on social media platforms and connect with potential customers in {formattedPlace} through engaging content and strategic campaigns.</p>

                <h4 className="mt-4 mb-2">Content Marketing</h4>
                <p>Quality content is essential for online visibility. Our team creates optimized content that helps businesses establish authority and trust in their industry.</p>

                <h4 className="mt-4 mb-2">Performance Marketing</h4>
                <p>Our performance marketing strategies focus on measurable results, ensuring every marketing campaign contributes to business growth.</p>

                <h3 className="mt-5 mb-3">Grow Your Business in {formattedPlace}</h3>

                <p>
                  Working with an experienced <strong>{formattedKeyword} in {formattedPlace}</strong> like Postiview allows businesses to leverage the full potential of digital marketing. Our goal is to help companies improve brand visibility, generate high-quality leads, and achieve consistent growth.
                </p>

                <p>
                  If you want to expand your digital presence and attract more customers in {formattedPlace}, Postiview provides the expertise and strategies required to achieve long-term success.
                </p>
                <div className="mt-4">
                  <Link href="/contact" className="common_btn">Contact Us Today</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FxotaryLayout>
  )
}
