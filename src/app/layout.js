import './globals.css';

export const metadata = {
  title: 'KD Infovision — Consulting | Outsourcing | Digital',
  description:
    'KD Infovision empowers enterprises with Data & Analytics, Data Engineering, Agentic AI, and Digital Transformation solutions.',
  keywords:
    'KD Infovision, Consulting, Outsourcing, Digital, Data & Analytics, Data Engineering, Agentic AI, Snowflake, Databricks, AWS, Power BI, Tableau, Domo, Spotfire, Machine Learning',
  icons: {
    icon: [
      { url: '/favicon.ico?v=3' },
      { url: '/icon.png?v=3', sizes: '512x512', type: 'image/png' },
      { url: '/icon.svg?v=3', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico?v=3',
    apple: [
      { url: '/apple-icon.png?v=3', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico?v=3" sizes="any" />
        <link rel="icon" href="/icon.svg?v=3" type="image/svg+xml" />
        <link rel="icon" href="/icon.png?v=3" type="image/png" sizes="512x512" />
        <link rel="shortcut icon" href="/favicon.ico?v=3" />
        <link rel="apple-touch-icon" href="/apple-icon.png?v=3" sizes="180x180" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300..900;1,300..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
