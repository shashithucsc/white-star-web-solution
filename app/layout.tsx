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
  metadataBase: new URL("https://www.whitestarwebsolutions.com"),
  title: {
    default: "White Star Web Solutions",
    template: "%s | White Star Web Solutions",
  },
  description:
    "White Star Web Solutions is a holding company powering innovative software and technology-driven businesses.",
  applicationName: "White Star Web Solutions",
  keywords: [
    "White Star Web Solutions",
    "software",
    "technology",
    "SaaS",
    "e-commerce",
    "digital marketing",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "White Star Web Solutions",
    description:
      "Holding company powering innovative software and technology-driven businesses.",
    url: "/",
    siteName: "White Star Web Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "White Star Web Solutions",
    description:
      "Holding company powering innovative software and technology-driven businesses.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-[#0B1F44]`}
      >
        <div id="__portal_root" />
        {children}
      </body>
    </html>
  );
}
