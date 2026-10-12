import type { Metadata, Viewport } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-instrument",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://brainappmedia.com"),
  title: {
    default: "Neurva | Make sense of it all",
    template: "%s | Neurva",
  },
  description:
    "A new mindset for a new reality. Explore the Neurva experience — work, create, explore, or don't.",
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
  themeColor: "#efe0d4",
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
      <body className={instrumentSans.variable}>
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
