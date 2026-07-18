import type { Metadata } from 'next'
import MolluraMetaLP from '@/components/MolluraMetaLP'

export const metadata: Metadata = {
  title: 'See If Hair Restoration Is Right For You | Mollura Medical Hair Restoration',
  description: 'A private, personalized consultation to evaluate your hair loss, treatment options, and expected results—guided by experienced medical professionals.',
  robots: 'noindex, nofollow',
  openGraph: {
    images: [{ url: 'https://c.mollurahairtransplant.com/og/m-meta.webp', width: 1200, height: 630, alt: 'Mollura Medical Hair Restoration consultation' }],
  },
  twitter: { card: 'summary_large_image', images: ['https://c.mollurahairtransplant.com/og/m-meta.webp'] },
}

export default function MetaPage() {
  return (
    <MolluraMetaLP
      heroFormId="NgDPh3VgpgXfRVfV96Di"
      bottomFormId="dA50aRllE4yGBo5skPzV"
    />
  )
}
