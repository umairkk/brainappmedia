import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://brainappmedia.com"),
  title: {
    default: "BrainApp Media | Revenue-Focused Digital Marketing Agency Pakistan",
    template: "%s | BrainApp Media",
  },
  description:
    "BrainApp Media is a revenue-focused digital marketing agency in Pakistan helping businesses prove marketing impact through Google Ads, Meta Ads, SEO, automation, and conversion strategy.",
  keywords: [
    "digital marketing agency Pakistan",
    "Google Ads Pakistan",
    "Meta Ads agency",
    "SEO services Pakistan",
    "ecommerce marketing Pakistan",
    "lead generation agency",
  ],
  openGraph: {
    title: "BrainApp Media | Revenue-Focused Digital Marketing Agency Pakistan",
    description:
      "WebFX-inspired revenue marketing for ecommerce stores, real estate, local services, startups, and international brands.",
    url: "https://brainappmedia.com",
    siteName: "BrainApp Media",
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BrainApp Media | Revenue-Focused Digital Marketing Agency Pakistan",
    description:
      "Google Ads, Meta Ads, SEO, automation, and conversion strategy for businesses in Pakistan and beyond.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#083A74",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
