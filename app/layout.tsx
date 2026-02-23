import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NuMi | AI Discipleship Companion",
  description: "Meet NuMi, an AI discipleship companion for modern spiritual formation.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
