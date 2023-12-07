import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local'
import FloatingButton from './components/FloatingButton';

export const metadata: Metadata = {
  title: 'Lumixus studio',
  description: '',
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
        <script src="//code.tidio.co/eags5ma6uvurxlw7que0lrhkgybpmcfl.js" async></script>
      </body>
    </html>
  )
}
