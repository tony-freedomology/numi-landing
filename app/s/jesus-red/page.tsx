"use client";

import { useEffect } from "react";
import Script from "next/script";
import HomePageContentShort from "../../../components/HomePageContentShort";

export default function ShortJesusRed() {
  useEffect(() => {
    document.body.classList.add("theme-jesus-red");

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Source+Sans+3:wght@300;400;500;600;700&display=swap";
    link.id = "jesus-red-fonts";
    document.head.appendChild(link);

    document.documentElement.style.setProperty("--font-serif", '"Lora", Georgia, serif');
    document.documentElement.style.setProperty("--font-sans", '"Source Sans 3", system-ui, sans-serif');

    return () => {
      document.body.classList.remove("theme-jesus-red");
      document.getElementById("jesus-red-fonts")?.remove();
      document.documentElement.style.removeProperty("--font-serif");
      document.documentElement.style.removeProperty("--font-sans");
    };
  }, []);

  return (
    <>
      <Script id="theme-jesus-red-init" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: `document.body.classList.add('theme-jesus-red');` }} />
      <HomePageContentShort variant="jesus-red" />
    </>
  );
}
