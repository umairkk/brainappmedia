import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { SiteShell } from "@/components/layout/SiteShell";
import { OrganizationJsonLd } from "@/components/seo/JsonLd";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://brainappmedia.com"),
  title: {
    default: "BrainApp Media | Marketing, Web & Brand for Growing Businesses",
    template: "%s | BrainApp Media",
  },
  description:
    "BrainApp Media connects digital marketing, websites, e-commerce, and brand design into practical growth programs for small and medium businesses.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "BrainApp Media",
    title: "BrainApp Media | Marketing, Web & Brand for Growing Businesses",
    description:
      "Integrated marketing, web development, paid media, and creative services with clear reporting and tailored proposals.",
  },
  twitter: {
    card: "summary_large_image",
    title: "BrainApp Media",
    description:
      "Marketing, websites, and brand design aligned to measurable business goals.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <OrganizationJsonLd />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
