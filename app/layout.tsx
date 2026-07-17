import DniSwap from '@/components/DniSwap'
import Script from 'next/script'
import Fab from '@/components/fab/Fab'
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
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P57BCVBC');`,
          }}
        />
      </head>
      <body>
        <Fab client="mollura" />
        <DniSwap />
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="678e7adf1b88770f1e648c17"
          strategy="afterInteractive"
        />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P57BCVBC"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  )
}
