import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StickyBanner from "@/components/StickyBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Yuma English House｜富士市の小中高生向け英検対策コース";
const description =
  "静岡県富士市の小中高生向け英検対策ならYuma English House。ティーチング×伴走型サポートで自信を育て、英検合格へ。対面・オンライン対応。LINEで無料相談を受け付けています。";

export const metadata: Metadata = {
  metadataBase: new URL("https://eiken.yuma-english.com"),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Yuma English House",
    locale: "ja_JP",
    type: "website",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Yuma English Houseのレッスンの様子" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.jpg"],
  },
  verification: {
    google: "8TnSeZOvDFaI4Iy__uvVpzl9DFC3bj5ywiU6nHmq96k",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased pb-28 md:pb-0`}
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

            // 本番のドメイン以外（作業中のパソコン・確認用URL）からの閲覧は数えない
            if (location.hostname === 'eiken.yuma-english.com') {
              gtag('config', 'G-6BL90FYWTT');
            }
          `}
        </Script>
        {/* LINEボタンが「どこで」押されたかを数える（line_click_hero / sticky / info / offer / header / menu） */}
        <Script id="cta-tracking" strategy="afterInteractive">
          {`
            document.addEventListener('click', function (e) {
              var a = e.target && e.target.closest ? e.target.closest('a[data-cta]') : null;
              if (!a || typeof window.gtag !== 'function') return;
              window.gtag('event', 'line_click_' + a.getAttribute('data-cta'), { link_url: a.href, transport_type: 'beacon' });
            }, true);
          `}
        </Script>
        {children}
        <StickyBanner />
      </body>
    </html>
  );
}
