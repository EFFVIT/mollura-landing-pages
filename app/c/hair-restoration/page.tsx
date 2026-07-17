import type { Metadata } from 'next'
import MolluraLP from '@/components/MolluraLP'

export const metadata: Metadata = {
  openGraph: { images: [{ url: "https://c.mollurahairtransplant.com/og/c-hair-restoration.webp", width: 1200, height: 630, alt: "Hair restoration education at Mollura Medical Hair Restoration" }] },
  twitter: { card: "summary_large_image", images: ["https://c.mollurahairtransplant.com/og/c-hair-restoration.webp"] },
  title: 'Hair Restoration Educational Information | Mollura Medical Hair Restoration',
  robots: 'noindex, nofollow',
}

export default function HairRestorationPage() {
  return (
    <MolluraLP
      heroFormId="MERXSja58XwPWQkz54I0"
      bottomFormId="cp78H1dY6oCkMQF6k56v"
    />
  )
}
