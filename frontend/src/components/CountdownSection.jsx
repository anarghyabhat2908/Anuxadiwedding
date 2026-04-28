import React from "react";
import { Countdown } from "./Countdown";
import { Divider } from "./Divider";
import { AddToCalendarButton } from "./AddToCalendarButton";
import { OrnamentStrip } from "./OrnamentStrip";
import { PaisleyBackdrop } from "./PaisleyBackdrop";
import { Kalasham, Diya, BananaLeaf } from "./SouthIndianMotifs";

export const CountdownSection = () => (
    <section
        id="countdown-section"
        className="relative py-24 sm:py-32 px-6 bg-[#faf6ee] overflow-hidden"
        data-testid="countdown-section"
    >
        <PaisleyBackdrop opacity={0.4} />

        {/* Banana leaves on far edges */}
        <div className="pointer-events-none absolute -left-16 top-10 opacity-30 hidden md:block">
            <BananaLeaf size={220} />
        </div>
        <div className="pointer-events-none absolute -right-16 top-10 opacity-30 hidden md:block [transform:scaleX(-1)]">
            <BananaLeaf size={220} />
        </div>

        {/* Kalasham at bottom corners */}
        <div className="pointer-events-none absolute -left-6 bottom-6 opacity-50 hidden md:block">
            <Kalasham size={140} />
        </div>
        <div className="pointer-events-none absolute -right-6 bottom-6 opacity-50 hidden md:block [transform:scaleX(-1)]">
            <Kalasham size={140} />
        </div>

        <div className="relative mx-auto max-w-5xl text-center">
            <OrnamentStrip count={9} />
            <p className="mt-10 text-[10px] uppercase tracking-[0.5em] text-[#8a5a1f]">
                Counting the moments
            </p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl text-[#3d1d1d]">
                Until We Say <span className="gold-text italic">"I Do"</span>
            </h2>
            <Divider />
            <Countdown />
            <p className="mt-10 font-serif-elegant italic text-[#6b4a1f] text-base sm:text-lg">
                Friday, 21 August 2026 · 10:45 AM IST
            </p>
            <div className="mt-8 flex justify-center">
                <AddToCalendarButton />
            </div>
            <div className="mt-12 flex items-center justify-center gap-6">
                <Diya size={48} color="#a47c2a" />
                <span className="h-px w-24 bg-[#b8893a]/40" />
                <Diya size={48} color="#a47c2a" />
            </div>
            <OrnamentStrip count={9} className="mt-10" />
        </div>
    </section>
);
