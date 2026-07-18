import type { Metadata } from 'next'
import { MolluraMetaRetargetingLP } from '@/components/MolluraMetaLP'

export const metadata: Metadata = {
  title: 'Worried About Surgery or Shaving? Get Clarity in 60 Seconds | Mollura Medical Hair Restoration',
  description: 'Precision hair restoration protects your donor area and plans for natural-looking results—based on your hair loss pattern.',
  robots: 'noindex, nofollow',
  openGraph: {
    images: [{ url: 'https://c.mollurahairtransplant.com/og/m-meta-retargeting.webp', width: 1200, height: 630, alt: 'Mollura Medical Hair Restoration candidacy consultation' }],
  },
  twitter: { card: 'summary_large_image', images: ['https://c.mollurahairtransplant.com/og/m-meta-retargeting.webp'] },
}

export default function MetaRetargetingPage() {
  return (
    <MolluraMetaRetargetingLP
      heroFormId="8KHcIHqP6FoSKDDzPv8z"
      bottomFormId="refMTGG5514uDX4ehJoP"
    />
  )
}
