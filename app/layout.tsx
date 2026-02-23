import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Numi | Your companion for your walk with God.",
  description:
    "Numi is an AI-powered guide that helps you build daily rhythms, engage Scripture, and connect with your community in a deeper way.",
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
