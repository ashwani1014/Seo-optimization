import Preloader from "@/layout/Preloader";
import "@css/bootstrap.min.css";
import "@css/font-awesome-pro.css";
import "@css/fxotary-icon.css";
import "@css/slick.css";
import "@css/spacing.css";
import "@css/style.css";
import "@css/responsive.css";
import "./globals.css";

export const metadata = {
  metadataBase: new URL('https://postiview.in'),
  title: {
    default: "Postiview: Leading Branding Agency in Ahmedabad, Gujarat",
    template: "%s | Postiview: Leading Branding Agency in Ahmedabad, Gujarat",
  },
  description: "Postiview is the leading branding agency in Ahmedabad, Gujarat, shaping memorable brand identities and digital experiences. We offer top-tier branding services across Gujarat.",
  keywords: ["Branding Agency Ahmedabad", "Best Branding Agency Gujarat", "Brand Identity Ahmedabad", "Visual Design Ahmedabad", "Website Design Ahmedabad", "Brand Strategy Ahmedabad"],
  openGraph: {
    title: "Postiview: Leading Branding Agency in Ahmedabad, Gujarat",
    description: "Postiview is the leading branding agency in Ahmedabad, Gujarat, shaping memorable brand identities and digital experiences. We offer top-tier branding services across Gujarat.",
    url: "https://postiview.in/",
    siteName: "Postiview",
    images: [
      {
        url: "https://postiview.in/images/og-image.webp",
        width: 800,
        height: 600,
        alt: "Postiview - Branding Agency",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Postiview: Leading Branding Agency in Ahmedabad, Gujarat",
    description: "Postiview is the leading branding agency in Ahmedabad, Gujarat, shaping memorable brand identities and digital experiences. We offer top-tier branding services across Gujarat.",
    images: ["https://postiview.in/images/og-image.webp"],
  },
  alternates: {
    canonical: "https://postiview.in/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Preloader />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Postiview",
              "url": "https://postiview.in/",
              "logo": "https://postiview.in/images/logo.png",
              "description": "Postiview is the leading branding agency in Ahmedabad, Gujarat, shaping memorable brand identities and digital experiences.",
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+919426988865",
                  "contactType": "customer service",
                  "areaServed": "IN"
                },
                {
                  "@type": "ContactPoint",
                  "telephone": "+14379886426",
                  "contactType": "customer service",
                  "areaServed": "CA"
                }
              ],
              "address": [
                {
                  "@type": "PostalAddress",
                  "streetAddress": "47, Mehul Society, Near Airport",
                  "addressLocality": "Deesa",
                  "addressRegion": "Gujarat",
                  "addressCountry": "IN"
                },
                {
                  "@type": "PostalAddress",
                  "streetAddress": "13 Davenfield Cir",
                  "addressLocality": "Brampton",
                  "addressRegion": "ON",
                  "postalCode": "L6P 4M2",
                  "addressCountry": "CA"
                }
              ],
              "email": "mailto:info@postiview.com",
              "sameAs": [
                "https://www.facebook.com/your-page",
                "https://twitter.com/your-page",
                "https://www.linkedin.com/company/your-company"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://postiview.in/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://postiview.in/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://postiview.in/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "About",
                  "item": "https://postiview.in/about_us"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Services",
                  "item": "https://postiview.in/services"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Portfolio",
                  "item": "https://postiview.in/portfolio"
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "name": "Blog",
                  "item": "https://postiview.in/blog"
                },
                {
                  "@type": "ListItem",
                  "position": 6,
                  "name": "Contact",
                  "item": "https://postiview.in/contact"
                }
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
