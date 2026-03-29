// import './globals.css'
// import Script from 'next/script'

// export const metadata = {
//   title: 'GTM Collective | Revenue Strategy for InsurTech Leaders',
//   description: 'Accelerating growth for InsurTech founders and CEOs through proven go-to-market strategies.',
//   keywords: 'InsurTech GTM strategy, insurance revenue growth, fractional CRO, go-to-market consulting',
//   verification: {
//     google: 'G-9C08C6PSDK',
//   },
//   openGraph: {
//     title: 'GTM Collective | Revenue Strategy for InsurTech Leaders',
//     description: 'Accelerating growth for InsurTech founders and CEOs.',
//     url: 'https://gtm-collective.vercel.app',
//     siteName: 'GTM Collective',
//     type: 'website',
//   },
// }

// export const viewport = {
//   width: 'device-width',
//   initialScale: 1,
//   maximumScale: 5,
// }

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head>
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
//         <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
//       </head>
//       <body>
//         {children}
//         <Script
//           src="https://www.googletagmanager.com/gtag/js?id=G-9C08C6PSDK"
//           strategy="afterInteractive"
//         />
//         <Script id="google-analytics" strategy="afterInteractive">
//           {`
//             window.dataLayer = window.dataLayer || [];
//             function gtag(){dataLayer.push(arguments);}
//             gtag('js', new Date());
//             gtag('config', 'G-9C08C6PSDK');
//           `}
//         </Script>
//       </body>
//     </html>
//   )
// }

import './globals.css'
import Script from 'next/script'

export const metadata = {
  title: 'GTM Collective | Revenue Strategy for InsurTech Leaders',
  description: 'Accelerating growth for InsurTech founders and CEOs through proven go-to-market strategies.',
  keywords: 'InsurTech GTM strategy, insurance revenue growth, fractional CRO, go-to-market consulting',
  verification: {
    google: 'WXi6t5-4Cv_FOMJQIGSVBBRhC46FOzQyed4gcPdG7tM',
  },
  openGraph: {
    title: 'GTM Collective | Revenue Strategy for InsurTech Leaders',
    description: 'Accelerating growth for InsurTech founders and CEOs.',
    url: 'https://gtm-collective.com',
    siteName: 'GTM Collective',
    type: 'website',
  },
  // ✅ ADD THIS
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9C08C6PSDK"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9C08C6PSDK');
          `}
        </Script>
      </body>
    </html>
  )
}