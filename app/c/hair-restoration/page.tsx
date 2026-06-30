import type { Metadata } from 'next'
import MolluraLP from '@/components/MolluraLP'

export const metadata: Metadata = {
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
