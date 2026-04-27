import React from "react";
import { Divider } from "./Divider";

// User-provided heritage Tharavadu courtyard illustration (animated parallax pan)
const VENUE_BG =
    "https://customer-assets.emergentagent.com/job_frosty-galois-2/artifacts/9p9p2ciq_IMG_1781.jpeg";

export const StorySection = () => (
    <section
        className="relative min-h-[80svh] overflow-hidden"
        data-testid="story-section"
    >
        {/* Animated venue background */}
        <div className="absolute inset-0">
            <div
                className="absolute inset-0 pan-x bg-cover bg-center"
                style={{ backgroundImage: `url(${VENUE_BG})` }}
            />
            {/* Warm sepia veil keeps text legible without darkening too much */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#3d1d1d]/65 via-[#3d1d1d]/45 to-[#3d1d1d]/80" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.35),transparent_55%)]" />
        </div>

        {/* Subtle banana-leaf silhouettes on the edges */}
        <svg
            className="pointer-events-none absolute -left-10 top-10 opacity-20"
            width="220"
            height="380"
            viewBox="0 0 220 380"
            aria-hidden
        >
            <path
                d="M20 0 C 110 80, 180 200, 60 380 C 80 250, 60 120, 20 0 Z"
                fill="#d4a84b"
            />
        </svg>
        <svg
            className="pointer-events-none absolute -right-10 bottom-0 opacity-20 [transform:scaleX(-1)]"
            width="220"
            height="380"
            viewBox="0 0 220 380"
            aria-hidden
        >
            <path
                d="M20 0 C 110 80, 180 200, 60 380 C 80 250, 60 120, 20 0 Z"
                fill="#d4a84b"
            />
        </svg>

        <div className="relative z-10 mx-auto max-w-3xl px-6 py-32 sm:py-44 text-center text-[#fffaf0]">
            <p
                className="text-[10px] uppercase tracking-[0.5em] text-[#f5dfa1]"
                data-testid="story-eyebrow"
            >
                ✦ Two Hearts · One Threshold ✦
            </p>
            <h2
                className="mt-6 font-display text-5xl sm:text-7xl leading-tight"
                data-testid="story-heading"
            >
                Our Story <span className="italic gold-text">Begins</span> Here
            </h2>
            <Divider symbol="❀" />
            <p className="font-serif-elegant text-xl sm:text-2xl italic leading-relaxed text-[#fff5e0]">
                Within the carved wooden pillars and quiet courtyards,
                beneath garlands of marigold and the warmth of family,
                we will light the lamp of a new beginning.
            </p>
        </div>
    </section>
);
