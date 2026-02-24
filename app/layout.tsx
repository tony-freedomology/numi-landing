import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://zoe.live"),
  title: {
    default: "Zoe | Your Companion for Your Walk with God.",
    template: "%s | Zoe",
  },
  description:
    "Zoe is an AI-powered guide that helps you build daily rhythms, engage Scripture, and connect with your community in a deeper way.",
  openGraph: {
    title: "Zoe | Your Companion for Your Walk with God.",
    description:
      "Zoe is an AI-powered guide that helps you build daily rhythms, engage Scripture, and connect with your community in a deeper way.",
    type: "website",
    url: "/",
    images: [
      {
        url: "/images/hero-modern.png",
        width: 1200,
        height: 630,
        alt: "Zoe Discipleship Companion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zoe | Your Companion for Your Walk with God.",
    description:
      "Zoe is an AI-powered guide that helps you build daily rhythms, engage Scripture, and connect with your community in a deeper way.",
    images: ["/images/hero-modern.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(inter.variable, "font-sans")}>{children}</body>
    </html>
  );
}
