import './globals.css'

export const metadata = {
  title: 'GTM Collective | Accelerating InsurTech Growth',
  description: 'Strategic growth partner for InsurTech. Expert GTM strategy, sales systems, and revenue acceleration.',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5', // ADD THIS LINE
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}