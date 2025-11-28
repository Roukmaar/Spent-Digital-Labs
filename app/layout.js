import { Inter, Manrope } from 'next/font/google';
// import './globals.css';
import './globals.css';
import Header from '../components/header';
import Footer from '../components/footer';



// Font configurations
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata = {
  title: {
    default: 'Blockchain Research Institute Africa | Advancing Innovation & Policy',
    template: '%s | Blockchain Research Institute Africa'
  },
  description: 'Leading African blockchain research institute advancing innovation, education, and policy development across the continent. Explore cutting-edge research, training programs, and collaborative projects.',
  keywords: [
    'blockchain research',
    'Africa blockchain',
    'blockchain education',
    'Web3 Africa',
    'blockchain innovation',
    'blockchain policy',
    'DeFi Africa',
    'blockchain training',
    'smart contracts',
    'decentralized systems'
  ],
  authors: [{ name: 'Blockchain Research Institute Africa' }],
  creator: 'Blockchain Research Institute Africa',
  publisher: 'Blockchain Research Institute Africa',
  metadataBase: new URL('https://blockchainresearch.africa'), // Replace with actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://blockchainresearch.africa',
    siteName: 'Blockchain Research Institute Africa',
    title: 'Blockchain Research Institute Africa | Advancing Innovation & Policy',
    description: 'Leading African blockchain research institute advancing innovation, education, and policy development across the continent.',
    images: [
      {
        url: '/og-image.jpg', // Add this image to public folder
        width: 1200,
        height: 630,
        alt: 'Blockchain Research Institute Africa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blockchain Research Institute Africa',
    description: 'Leading African blockchain research institute advancing innovation, education, and policy development.',
    images: ['/twitter-image.jpg'], // Add this image to public folder
    creator: '@blockchainresearchafrica', // Replace with actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add Google Search Console verification
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  category: 'technology',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0A1F44' },
    { media: '(prefers-color-scheme: dark)', color: '#0A1F44' },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} theme-elevate`}>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon and App Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="antialiased">
      

        {/* Main Layout Structure */}
        <div className="flex flex-col min-h-screen">
          {/* Header */}
          <Header />

          {/* Main Content */}
          <div id="main-content" className="grow">
            {children}
          </div>

          {/* Footer */}
          <Footer />
        </div>

        {/* Toast Container (for notifications) */}
        <div id="toast-container" className="fixed bottom-0 right-0 p-4 z-[1070] pointer-events-none">
          {/* Toast notifications will be rendered here */}
        </div>

        {/* Global Scripts - Add analytics, etc. */}
        {process.env.NODE_ENV === 'production' && (
          <>
            {/* Google Analytics - To be replaced with tracking ID */}
            {/* <Script
              src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'GA_MEASUREMENT_ID');
              `}
            </Script> */}
          </>
        )}
      </body>
    </html>
  );
}