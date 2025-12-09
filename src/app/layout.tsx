import type { Metadata } from "next";
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
  title: "Yuma English House | 小学生向け英検対策コース",
  description: "富士市の小学生向け英検対策ならYuma English House。ティーチング×コーチングで自信を育て、英検二次試験合格率100%を実現。",
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
        {children}
        <StickyBanner />
      </body>
    </html>
  );
}
