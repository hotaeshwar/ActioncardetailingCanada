import Script from 'next/script';
import '../index.css';
import ClientLayout from '../components/ClientLayout';
import FlashScreenWrapper from '../components/FlashScreenWrapper';

export const metadata = {
  title: 'Action Car Detailing',
  description: 'Action Car Detailing Winnipeg - MPI accredited auto detailing, ceramic coating, paint protection film and window tinting.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://actioncardetailing.ca',
  },
  other: {
    'google-site-verification': 'j88H68GXCSsp2GcMutx9YI6RIl0T3I7yxMcRGQG4WMw',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/src/assets/images/action%20car%20logo.png" />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ERL3QM888K"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ERL3QM888K');
          `}
        </Script>
      </head>
      <body>
        <FlashScreenWrapper>
          <ClientLayout>{children}</ClientLayout>
        </FlashScreenWrapper>
      </body>
    </html>
  );
}
