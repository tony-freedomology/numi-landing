import "./jesus-red.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://jesus.red"),
  title: "Zoe — A Partner in Your Walk with Jesus",
  description:
    "Practical formation for real men, real families, real churches.",
  icons: {
    icon: "/jesus-red/favicon.png",
    apple: "/jesus-red/apple-icon.png",
  },
  openGraph: {
    title: "Zoe — A Partner in Your Walk with Jesus",
    description:
      "Practical formation for real men, real families, real churches.",
    type: "website",
    url: "https://jesus.red",
    images: [
      {
        url: "/jesus-red/images/og-hero.png",
        width: 1200,
        height: 630,
        alt: "Zoe — A Partner in Your Walk with Jesus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zoe — A Partner in Your Walk with Jesus",
    description:
      "Practical formation for real men, real families, real churches.",
    images: ["/jesus-red/images/og-hero.png"],
  },
};

export default function JesusRedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
