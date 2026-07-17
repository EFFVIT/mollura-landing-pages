import type { Metadata } from 'next'
import MolluraLP from '@/components/MolluraLP'

export const metadata: Metadata = {
  openGraph: { images: [{ url: "https://c.mollurahairtransplant.com/og/c-evaluation.webp", width: 1200, height: 630, alt: "Dr. Mollura of Mollura Medical Hair Restoration" }] },
  twitter: { card: "summary_large_image", images: ["https://c.mollurahairtransplant.com/og/c-evaluation.webp"] },
  title: 'Hair Loss Evaluation | Mollura Medical Hair Restoration',
  robots: 'noindex, nofollow',
}

export default function EvaluationPage() {
  return (
    <MolluraLP
      heroFormId="MERXSja58XwPWQkz54I0"
      bottomFormId="cp78H1dY6oCkMQF6k56v"
    />
  )
}
