import "./globals.css";
import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import clsx from "clsx";
import Navbar from "../components/Navbar";
import ImagePrefetcher from "../components/ImagePrefetcher";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const newsreader = Newsreader({ subsets: ["latin"], variable: "--font-serif", display: "swap", adjustFontFallback: false });

export const metadata: Metadata = {
  metadataBase: new URL("https://zoe.live"),
  title: {
    default: "Zoe — Walk with Jesus",
    template: "%s | Zoe",
  },
  description:
    "Zoe is an AI-powered guide that helps you build daily rhythms, engage Scripture, and connect with your community in a deeper way.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Zoe — Walk with Jesus",
    description:
      "Zoe is an AI-powered guide that helps you build daily rhythms, engage Scripture, and connect with your community in a deeper way.",
    type: "website",
    url: "/",
    images: [
      {
        url: "/images/og-default.png",
        width: 1200,
        height: 630,
        alt: "Zoe Discipleship Companion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zoe — Walk with Jesus",
    description:
      "Zoe is an AI-powered guide that helps you build daily rhythms, engage Scripture, and connect with your community in a deeper way.",
    images: ["/images/og-default.png"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Zoe",
  url: "https://zoe.live",
  logo: "https://zoe.live/images/og-hero-v2.png",
  description:
    "Zoe is an SMS-based AI discipleship tool that delivers daily scripture with original Greek and Hebrew context. No app to download — just text messages that help you build a real Bible habit.",
  sameAs: [],
  foundingDate: "2025",
  founder: {
    "@type": "Person",
    name: "Tony Allen",
  },
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Zoe",
  applicationCategory: "ReligiousApp",
  operatingSystem: "SMS (any phone)",
  description:
    "SMS-based AI discipleship tool. Daily scripture with original language context delivered via text message. No download required.",
  url: "https://zoe.live",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free beta — join the waitlist",
  },
  aggregateRating: undefined,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareSchema),
          }}
        />
      </head>
      <body className={clsx(inter.variable, newsreader.variable, "font-sans tracking-tight-fine")}>
        <Navbar />
        <ImagePrefetcher />
        {children}
      </body>
    </html>
  );
}
