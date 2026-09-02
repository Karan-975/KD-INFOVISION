import './globals.css';

export const metadata = {
  title: 'KD Infovision — Data. AI. Digital Transformation.',
  description:
    'KD Infovision empowers enterprises to build AI-powered solutions, unlock business intelligence, and accelerate digital transformation.',
  keywords:
    'AI, Machine Learning, Power BI, Data Analytics, Digital Transformation, Cloud Solutions, Azure, AWS, Next.js, KD Infovision',
  icons: {
    icon: '/icon.svg?v=2',
    shortcut: '/icon.svg?v=2',
    apple: '/icon.svg?v=2',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.svg?v=2" type="image/svg+xml" />
        <link rel="shortcut icon" href="/icon.svg?v=2" />
        <link rel="apple-touch-icon" href="/icon.svg?v=2" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
