"use client";

import { useEffect } from "react";

/**
 * Invisible component that eagerly loads hero images into the browser's
 * memory cache on initial page visit.  By the time the user clicks a nav
 * link, the image bytes are already decoded and the browser can paint
 * them in a single frame — no flash, no placeholder.
 *
 * Uses `requestIdleCallback` so it never blocks first-paint.
 */

const HERO_IMAGES = [
    "/images/features-bg.webp",
    "/images/about-bg.webp",
    "/images/blog-bg.webp",
];

export default function ImagePrefetcher() {
    useEffect(() => {
        const prefetch = () => {
            HERO_IMAGES.forEach((src) => {
                const img = new Image();
                img.decoding = "async";
                img.fetchPriority = "low";
                img.src = src;
            });
        };

        // Use requestIdleCallback if available, otherwise a short timeout
        if ("requestIdleCallback" in window) {
            (window as any).requestIdleCallback(prefetch);
        } else {
            setTimeout(prefetch, 200);
        }
    }, []);

    return null;
}
