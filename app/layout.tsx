import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://brainappmedia.com"),
  title: {
    default: "BrainApp Media | Pakistan Performance Marketing Agency",
    template: "%s | BrainApp Media",
  },
  description:
    "Grow your business online with Pakistan's performance marketing experts for Google Ads, Meta Ads, SEO, ecommerce growth, automation, and lead generation.",
  keywords: [
    "digital marketing agency Pakistan",
    "Google Ads Pakistan",
    "Meta Ads agency",
    "SEO services Pakistan",
    "ecommerce marketing Pakistan",
    "lead generation agency",
  ],
  openGraph: {
    title: "BrainApp Media | Pakistan Performance Marketing Agency",
    description:
      "Premium growth marketing for ecommerce stores, real estate, local services, startups, and international brands.",
    url: "https://brainappmedia.com",
    siteName: "BrainApp Media",
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BrainApp Media | Pakistan Performance Marketing Agency",
    description:
      "Google Ads, Meta Ads, SEO, automation, and conversion strategy for businesses in Pakistan and beyond.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
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
      <body>
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
