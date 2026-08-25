import type { Metadata } from 'next'
import MolluraLP from '@/components/MolluraLP'

export const metadata: Metadata = {
  openGraph: { images: [{ url: "https://c.mollurahairtransplant.com/og/c-hair-transplant.webp", width: 1200, height: 630, alt: "Hair transplant education at Mollura Medical Hair Restoration" }] },
  twitter: { card: "summary_large_image", images: ["https://c.mollurahairtransplant.com/og/c-hair-transplant.webp"] },
  title: 'Hair Transplant Educational Information | Mollura Medical Hair Restoration',
  robots: 'noindex, nofollow',
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["MedicalClinic", "MedicalBusiness", "LocalBusiness"],
      "@id": "https://mollurahairtransplant.com/#business",
      "name": "Mollura Medical Hair Restoration",
      "url": "https://mollurahairtransplant.com",
      "telephone": "+15166144608",
      "hasMap": "https://maps.app.goo.gl/sXkcRDJbZuu2PZiM7",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "393 Franklin Avenue Suite 105",
        "addressLocality": "Franklin Square",
        "addressRegion": "NY",
        "postalCode": "11010",
        "addressCountry": "US"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "17:00"
        }
      ],
      "medicalSpecialty": "Hair Restoration Surgery",
      "availableService": [
        { "@type": "MedicalTherapy", "name": "FUE Hair Transplant" },
        { "@type": "MedicalTherapy", "name": "FUT Hair Transplant" },
        { "@type": "MedicalTherapy", "name": "PRP Therapy" },
        { "@type": "MedicalTherapy", "name": "Eyebrow Hair Restoration" },
        { "@type": "MedicalTherapy", "name": "Laser Light Therapy" },
        { "@type": "MedicalTherapy", "name": "Female Hair Loss Treatment" }
      ],
      "areaServed": [
        { "@type": "AdministrativeArea", "name": "Long Island" },
        { "@type": "AdministrativeArea", "name": "Nassau County" }
      ],
      "description": "Mollura Medical Hair Restoration is one of Long Island's top clinics for surgical and non-surgical hair loss treatments including FUE, FUT, PRP, and hair loss medications.",
      "physician": {
        "@type": "Physician",
        "@id": "https://mollurahairtransplant.com/#physician",
        "name": "Anthony Mollura, MD",
        "medicalSpecialty": "Hair Restoration Surgery",
        "worksFor": { "@id": "https://mollurahairtransplant.com/#business" },
        "sameAs": ["https://ishrs.org/doctor/37356/"]
      }
    },
    {
      "@type": "Organization",
      "@id": "https://mollurahairtransplant.com/#organization",
      "name": "Mollura Medical Hair Restoration",
      "url": "https://mollurahairtransplant.com",
      "telephone": "+15166144608",
      "logo": {
        "@type": "ImageObject",
        "url": "https://mollurahairtransplant.com/logo-mollura.png"
      },
      "sameAs": [
        "https://maps.app.goo.gl/sXkcRDJbZuu2PZiM7",
        "https://www.instagram.com/molluramedical/",
        "https://www.facebook.com/molluramedical",
        "https://www.youtube.com/channel/UCuS03Gl8iPCZeQ6DZR_pE-A",
        "https://ishrs.org/doctor/37356/"
      ]
    }
  ]
}

export default function HairTransplantPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <MolluraLP
        heroFormId="MERXSja58XwPWQkz54I0"
        bottomFormId="cp78H1dY6oCkMQF6k56v"
      />
    </>
  )
}
