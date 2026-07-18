import DniSwap from '@/components/DniSwap'
import Script from 'next/script'
import Fab from '@/components/fab/Fab'
import GtmTags from '@/components/GtmTags'
import './globals.css'

export const metadata = {
  openGraph: {
    images: [{ url: 'https://start.mollurahairtransplant.com/wp-content/uploads/2026/01/logo-mollura.png', width: 1200, height: 630, alt: 'Mollura Medical Hair Restoration' }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <GtmTags />
        <Fab client="mollura" />
        <DniSwap />
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="678e7adf1b88770f1e648c17"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  )
}
