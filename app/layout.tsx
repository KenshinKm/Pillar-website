import type { Metadata, Viewport } from "next";
import { archivo, jbMono } from "@/lib/fonts";
import MotionProvider from "@/components/motion/MotionProvider";
import "./globals.css";

const SITE_URL = "https://pillarwebagency.com";
const SITE_NAME = "PILLAR";
const TITLE = "PILLAR | Web Development & SEO Agency";
const DESCRIPTION =
  "PILLAR builds premium websites and positions businesses where customers are already searching: Google Search, Google Maps, and beyond. Web development, local SEO, and ongoing growth management.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | PILLAR",
  },
  description: DESCRIPTION,
  keywords: [
    "web development agency",
    "SEO agency",
    "local SEO",
    "Google Business Profile optimization",
    "custom website design",
    "Google Maps visibility",
    "website redesign",
  ],
  authors: [{ name: "PILLAR" }],
  creator: "PILLAR",
  applicationName: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#1a1a1a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#organization`,
  name: "PILLAR",
  description: DESCRIPTION,
  url: SITE_URL,
  slogan: "Build. Get Found. Grow.",
  areaServed: "US",
  knowsAbout: [
    "Web Development",
    "Search Engine Optimization",
    "Local SEO",
    "Google Business Profile Management",
  ],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Web Development",
        description:
          "Premium custom websites, redesigns, mobile optimization, landing pages, conversion optimization, and hosting & maintenance.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Google & SEO",
        description:
          "Google Business Profile setup, local SEO, technical SEO, and ongoing search optimization.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${jbMono.variable} scheme-dark`}
    >
      <body className="bg-bg font-sans text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="grain" />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
