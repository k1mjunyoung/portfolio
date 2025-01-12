import '@/style/style.scss';

import Favicon from '/public/favicon.ico';
import type { Metadata, Viewport } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';

import { Header } from '@/components/ui/header';
import {
  fontPretendard,
  fontNeueHaasGrotesk,
  fontScript,
} from '@/components/fonts';
import Footer from '@/components/ui/footer/Footer';
import GSAPRegister from '@/components/register/gsap/GSAPRegister';
import { Cursor } from '@/components/ui/cursor';
import RenisScroll from '@/components/register/renis/RenisScroll';

export const metadata: Metadata = {
  title: 'KIM JUN YOUNG',
  description:
    '안녕하세요. 백엔드 개발자, 김준영입니다.',
  keywords: [
    '백엔드 개발자',
  ],
  icons: [{ rel: 'icon', url: Favicon.src }],
  verification: {
    google: 'xLRCidkpMADKtHJKUzGuhzRnOBaR-o37aamjth4VCyQ',
  },
  applicationName: 'KIMJUNYOUNG',
  openGraph: {
    images: '/og-image.png',
    title: 'KIM JUN YOUNG :: 백엔드 개발자, 김준영',
    type: 'website',
    description:
      '안녕하세요. 백엔드 개발자, 김준영입니다.',
  },
};
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='ko'
      className={`${fontScript.variable} ${fontPretendard.variable} ${fontNeueHaasGrotesk.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <GSAPRegister>
          <GoogleAnalytics gaId='G-2YK7XW4NGL' />
          <Header />
          {children}
          <Cursor />
          <Footer />
        </GSAPRegister>
        <RenisScroll />
      </body>
    </html>
  );
}
