import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local'
import FloatingButton from './components/FloatingButton';
import CustomCursor from './components/CustomCursor';

export const metadata: Metadata = {
  title: {
    default: "Lumixus studio | Web. development, E-commerce, Web. Optimization, Consultation | Nigeria",
    template: "%s | Lumixus studio",
  },
  description: 'Your one-stop shop for all things digital success',
  applicationName: 'Next.js',
  keywords: ['Web Development', 'Web Design', 'Web Optimization', 'Ecommerce', 'Digital Strategy']
}

const myFont = localFont({
  src: [
    {
      path: './fonts/GraphikExtralight.otf',
      weight: '200',
      style: 'extralight'
    },
    {
      path: './fonts/GraphikLight.otf',
      weight: '300',
      style: 'light'
    },
    {
      path: './fonts/GraphikRegular.otf',
      weight: '400',
      style: 'regular'
    },
    {
      path: './fonts/GraphikMedium.otf',
      weight: '500',
      style: 'medium'
    },
    {
      path: './fonts/GraphikBold.otf',
      weight: '600',
      style: 'bold'
    },
    {
      path: './fonts/GraphikBlack.otf',
      weight: '700',
      style: 'black'
    }
  ]
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Lumixus studio",
    "alternateName": "Lumixus",
    "url": "https://lumixus.studio",
    "logo": "https://lumixus.studio/public/logo-1.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+2348146265074",
      "contactType": "customer service",
      "areaServed": "NG",
      "availableLanguage": "en"
    },
    "sameAs": "https://www.instagram.com/lumixus_studio/"
  }

  const jsonString: any = JSON.stringify(jsonLd);


  return (
    <html lang="en" className={myFont.className}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="relative">
        {children}
        <FloatingButton />
        <CustomCursor />
        
        <script src="//code.tidio.co/eags5ma6uvurxlw7que0lrhkgybpmcfl.js" async></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonString }}
        />
      </body>
    </html>
  )
}
