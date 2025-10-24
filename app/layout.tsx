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
  metadataBase: new URL("https://whitestarwebsolutions.com"),
  title: {
    default: "White Star Web Solutions | Innovative Software & Technology Solutions",
    template: "%s | White Star Web Solutions",
  },
  description:
    "White Star Web Solutions is a technology holding company that incubates innovative businesses across digital marketing, SaaS, e-commerce, and wellness sectors. Explore our portfolio of AI-powered products including Artslab, Legistant, Aumerix, FlowCart, Nyvara, and Influencer Showcase.",
  applicationName: "White Star Web Solutions",
  keywords: [
    "White Star Web Solutions",
    "software solutions",
    "technology company",
    "holding company",
    "digital marketing agency",
    "SaaS platforms",
    "e-commerce tools",
    "AI solutions",
    "Artslab Creatives",
    "Legistant",
    "Aumerix",
    "FlowCart",
    "Nyvara",
    "Influencer Showcase",
    "case management software",
    "HR management",
    "WordPress to Shopify migration",
    "wellness app",
    "UGC plugin",
  ],
  authors: [{ name: "White Star Web Solutions" }],
  creator: "White Star Web Solutions",
  publisher: "White Star Web Solutions",
  icons: {
    icon: "/WSWB_logo.png",
    apple: "/WSWB_logo.png",
  },
  openGraph: {
    title: "White Star Web Solutions | Innovative Software & Technology Solutions",
    description:
      "Building Digital Futures with AI-powered solutions, enterprise-grade platforms, and innovative products across digital marketing, SaaS, e-commerce, and wellness sectors.",
    url: "https://whitestarwebsolutions.com",
    siteName: "White Star Web Solutions",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/WSWB_logo.png",
        width: 1200,
        height: 630,
        alt: "White Star Web Solutions Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "White Star Web Solutions | Innovative Software & Technology Solutions",
    description:
      "Building Digital Futures with AI-powered solutions, enterprise-grade platforms, and innovative products.",
    images: ["/WSWB_logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "White Star Web Solutions",
    "description": "Technology holding company that incubates innovative businesses across digital marketing, SaaS, e-commerce, and wellness sectors",
    "url": "https://whitestarwebsolutions.com",
    "logo": "https://whitestarwebsolutions.com/WSWB_logo.png",
    "email": "info@whitestarwebsolutions.com",
    "telephone": ["+94778385938", "+94776273901"],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "LK"
    },
    "sameAs": [],
    "foundingDate": "2025",
    "owns": [
      {
        "@type": "Product",
        "name": "Artslab Creatives",
        "description": "Full-service digital marketing and technology agency"
      },
      {
        "@type": "SoftwareApplication",
        "name": "Legistant",
        "description": "AI-powered case management software for lawyers",
        "applicationCategory": "BusinessApplication"
      },
      {
        "@type": "SoftwareApplication",
        "name": "Aumerix",
        "description": "HR and work management platform",
        "applicationCategory": "BusinessApplication"
      },
      {
        "@type": "SoftwareApplication",
        "name": "FlowCart",
        "description": "WordPress to Shopify migration plugin",
        "applicationCategory": "DeveloperApplication"
      },
      {
        "@type": "MobileApplication",
        "name": "Nyvara",
        "description": "Wellness and mindfulness app",
        "applicationCategory": "HealthApplication"
      },
      {
        "@type": "SoftwareApplication",
        "name": "Influencer Showcase",
        "description": "Shopify plugin for user-generated content integration",
        "applicationCategory": "BusinessApplication"
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-[#0B1F44]`}
      >
        <div id="__portal_root" />
        {children}
      </body>
    </html>
  );
}
