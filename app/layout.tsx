import type { Metadata } from "next";
import "./globals.css";
import { Bangers, Oswald, Pirata_One } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import Footer from "./components/Footer";

const bangers = Bangers({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bangers",
});

const oswald = Oswald({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-oswald",
});

const pirata = Pirata_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pirata",
});

export const metadata: Metadata = {
  title: "Pierro MMA - Staten Island MMA, BJJ & Kickboxing",
  description:
    "Professional MMA, Brazilian Jiu-Jitsu, Kickboxing, Boxing and personal fitness training in Staten Island. Expert martial arts instruction with coach Johnny Pierro. Call (646) 923-2215.",
  keywords:
    "Staten Island MMA, Brazilian Jiu-Jitsu staten island, kickboxing classes, boxing training, personal fitness trainer, Staten Island brazilian jiu jitsu mma",
  authors: [{ name: "Pierro MMA" }, { name: "Craig Sampson" }],
  creator: "Pierro MMA",
  publisher: "Craig Sampson",
  alternates: {
    canonical: "https://pierromma.com",
  },
  robots: "index, follow",
  openGraph: {
    title: "Pierro MMA - Staten Island Martial Arts Training",
    description:
      "Professional MMA, BJJ, Kickboxing & Boxing training. Personal fitness training available. Call (646) 923-2215 for expert instruction.",
    type: "website",
    locale: "en_US",
    url: "https://pierromma.com",
    images: [
      {
        url: "https://pierromma.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pierro MMA - Staten Island Martial Arts Training",
      },
    ],
    siteName: "Pierro MMA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pierro MMA - Staten Island Martial Arts Training",
    description:
      "Expert MMA, BJJ, Kickboxing & Boxing instruction. Personal training available.",
    images: ["https://pierromma.com/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/Logo.png" },
      { url: "/Logo.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/Logo.png" },
      { url: "/Logo.png", sizes: "180x180", type: "image/png" },
    ],
  },
  metadataBase: new URL("https://pierromma.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    "@id": "https://pierromma.com",
    name: "Pierro MMA",
    alternateName: "Pierro Mixed Martial Arts",
    description:
      "Professional MMA, Brazilian Jiu-Jitsu, Kickboxing, Boxing and personal fitness training in Staten Island with coach Johnny Pierro.",
    url: "https://pierromma.com",
    logo: "https://pierromma.com/Logo.png",
    image: "https://pierromma.com/og-image.png",
    telephone: "(646) 923-2215",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Staten Island",
      addressRegion: "NY",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      addressCountry: "US",
    },
    sameAs: [],
    priceRange: "$$",
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mixed Martial Arts Training",
          description:
            "Professional MMA training and instruction - Staten Island",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Brazilian Jiu-Jitsu",
          description: "BJJ classes for all skill levels - Staten Island",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Kickboxing Classes",
          description: "Kickboxing training and classes - Staten Island",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Boxing Training",
          description: "Professional boxing instruction - Staten Island",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Personal Fitness Training",
          description: "One-on-one personal training sessions - Staten Island",
        },
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`bg-off-black ${bangers.variable} ${oswald.variable} ${pirata.variable}`}
    >
      <head>
        {/* Resource hints for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <main className="grow">{children}</main>
        <Footer />
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ""} />
    </html>
  );
}
