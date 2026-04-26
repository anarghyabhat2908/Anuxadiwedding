import React from "react";
import { Petals } from "./Petals";
import { Kolam, Diya } from "./SouthIndianMotifs";

const COVER =
    "https://customer-assets.emergentagent.com/job_frosty-galois-2/artifacts/j10hirj8_IMG_1210.jpeg";

export const Hero = () => {
    const scrollDown = () => {
        document
            .getElementById("countdown-section")
            ?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            className="relative min-h-[100svh] w-full overflow-hidden"
            data-testid="hero-section"
        >
            {/* Soft warm base */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#fff5e0] via-[#faf0d8] to-[#faf6ee]" />

            {/* Floating petals */}
            <Petals count={22} />

            {/* Decorative South Indian motifs */}
            <div className="pointer-events-none absolute -left-24 top-10 opacity-25">
                <Kolam size={280} />
            </div>
            <div className="pointer-events-none absolute -right-24 bottom-10 opacity-25 [transform:scaleX(-1)]">
                <Kolam size={320} />
            </div>
            <div className="pointer-events-none absolute left-6 bottom-10 opacity-40 hidden md:block">
                <Diya size={70} />
            </div>

            {/* Content */}
            <div className="relative z-10 mx-auto grid min-h-[100svh] max-w-7xl grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-6 px-6 py-20 lg:py-28">
                {/* LEFT — text */}
                <div className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1">
                    <p
                        className="fade-up text-[10px] sm:text-xs uppercase tracking-[0.5em] text-[#8a5a1f]"
                        data-testid="hero-eyebrow"
                    >
                        ✦ Save the Date ✦
                    </p>

                    <h1
                        className="fade-up delay-1 mt-6 font-display text-6xl sm:text-7xl lg:text-8xl text-[#3d1d1d] leading-[1.02]"
                        data-testid="hero-couple-names"
                    >
                        Anarghya
                        <span className="block font-serif-elegant italic text-4xl sm:text-5xl lg:text-6xl my-1 gold-text">
                            &amp;
                        </span>
                        Adithya
                    </h1>

                    <div className="fade-up delay-2 mt-6 flex items-center justify-center lg:justify-start gap-3 text-[#6b4a1f]">
                        <span className="h-px w-10 bg-[#b8893a]" />
                        <span className="font-serif-elegant italic text-lg">
                            are getting married
                        </span>
                        <span className="h-px w-10 bg-[#b8893a] lg:hidden" />
                    </div>

                    <div
                        className="fade-up delay-3 mt-10 flex w-fit mx-auto lg:mx-0 flex-col items-center rounded-md border border-[#b8893a]/40 bg-[#fffaf0]/85 backdrop-blur-sm px-6 sm:px-8 py-5 shadow-[0_10px_40px_-15px_rgba(120,60,20,0.4)]"
                        data-testid="hero-date-card"
                    >
                        <div className="flex items-center gap-4 sm:gap-6 text-[#3d1d1d]">
                            <div className="text-right">
                                <div className="font-serif-elegant text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#8a5a1f]">
                                    Friday
                                </div>
                                <div className="font-display text-3xl sm:text-4xl">
                                    21
                                </div>
                            </div>
                            <div className="h-12 w-px bg-[#b8893a]/40" />
                            <div className="text-center">
                                <div className="font-display text-2xl sm:text-3xl tracking-wide">
                                    August
                                </div>
                                <div className="font-serif-elegant text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#8a5a1f] mt-1">
                                    2026
                                </div>
                            </div>
                            <div className="h-12 w-px bg-[#b8893a]/40" />
                            <div className="text-left">
                                <div className="font-serif-elegant text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#8a5a1f]">
                                    Muhurtham
                                </div>
                                <div className="font-display text-3xl sm:text-4xl">
                                    10:45
                                </div>
                                <div className="font-serif-elegant text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-[#8a5a1f]">
                                    AM · Thula Lagna
                                </div>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={scrollDown}
                        className="fade-up delay-5 mt-12 group flex w-fit mx-auto lg:mx-0 flex-col items-center text-[#6b4a1f] hover:text-[#3d1d1d] transition-colors"
                        data-testid="hero-scroll-cta"
                    >
                        <span className="text-[10px] uppercase tracking-[0.4em]">
                            Scroll
                        </span>
                        <span className="mt-2 h-10 w-px bg-[#b8893a] group-hover:h-14 transition-all" />
                    </button>
                </div>

                {/* RIGHT — couple illustration */}
                <div
                    className="lg:col-span-5 order-1 lg:order-2 fade-up delay-2 relative"
                    data-testid="hero-illustration-wrapper"
                >
                    {/* Soft halo */}
                    <div className="absolute inset-0 -z-10 m-auto h-[88%] w-[88%] rounded-full bg-[radial-gradient(circle,rgba(255,210,140,0.7)_0%,rgba(255,210,140,0)_65%)] blur-2xl" />

                    {/* Decorative arch frame */}
                    <div className="relative mx-auto max-w-md lg:max-w-none">
                        <div className="overflow-hidden rounded-t-[140px] rounded-b-md border-2 border-[#b8893a]/40 bg-[#fff5e0] shadow-[0_30px_80px_-30px_rgba(120,60,20,0.5)]">
                            <img
                                src={COVER}
                                alt="Anarghya and Adithya in traditional South Indian wedding attire"
                                className="block w-full h-auto"
                                data-testid="hero-couple-image"
                            />
                        </div>
                        {/* Garland-style dots around the arch */}
                        <div className="pointer-events-none absolute -inset-3 rounded-t-[148px] rounded-b-md border border-dashed border-[#b8893a]/40" />
                    </div>
                </div>
            </div>
        </section>
    );
};
