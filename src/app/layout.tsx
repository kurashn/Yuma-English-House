import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yuma English House | 小中高生向け英検対策コース",
  description: "富士市の小中高生向け英検対策ならYuma English House。ティーチング×コーチングで自信を育て、英検二次試験合格率100%を実現。",
  verification: {
    google: "8TnSeZOvDFaI4Iy__uvVpzl9DFC3bj5ywiU6nHmq96k",
  },
};

import StickyBanner from "@/components/StickyBanner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased pb-20 md:pb-0`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6BL90FYWTT"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-6BL90FYWTT');
          `}
        </Script>
        {children}
        <StickyBanner />
      </body>
    </html>
  );
}
