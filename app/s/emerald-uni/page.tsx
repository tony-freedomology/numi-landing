"use client";

import { useEffect } from "react";
import Script from "next/script";
import HomePageContentShort from "../../../components/HomePageContentShort";

export default function ShortEmeraldUni() {
  useEffect(() => {
    document.body.classList.add("theme-emerald-uni");

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=DM+Sans:wght@400;500;600;700&display=swap";
    link.id = "emerald-fonts";
    document.head.appendChild(link);

    document.documentElement.style.setProperty("--font-serif", '"Cormorant Garamond", Georgia, serif');
    document.documentElement.style.setProperty("--font-sans", '"DM Sans", system-ui, sans-serif');

    return () => {
      document.body.classList.remove("theme-emerald-uni");
      document.getElementById("emerald-fonts")?.remove();
      document.documentElement.style.removeProperty("--font-serif");
      document.documentElement.style.removeProperty("--font-sans");
    };
  }, []);

  return (
    <>
      <Script id="theme-emerald-init" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: `document.body.classList.add('theme-emerald-uni');` }} />
      <HomePageContentShort variant="emerald-uni" />
    </>
  );
}
