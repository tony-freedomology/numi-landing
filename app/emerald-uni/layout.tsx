import "./emerald-uni.css";

export const metadata = {
  title: "Zoe — Walk with Jesus",
  description:
    "A discipleship companion rooted in Scripture, built for depth.",
  icons: {
    icon: [
      { url: "/emerald-uni/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/emerald-uni/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/emerald-uni/apple-touch-icon.png",
  },
  openGraph: {
    title: "Zoe — Walk with Jesus",
    description:
      "A discipleship companion rooted in Scripture, built for depth.",
    type: "website",
    images: [
      {
        url: "/images/og-emerald.png",
        width: 1200,
        height: 630,
        alt: "Zoe by Freedomology",
      },
    ],
  },
};

export default function EmeraldUniLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
