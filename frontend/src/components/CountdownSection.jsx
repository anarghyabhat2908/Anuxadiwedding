import React from "react";
import { Countdown } from "./Countdown";
import { Divider } from "./Divider";
import { AddToCalendarButton } from "./AddToCalendarButton";

export const CountdownSection = () => (
    <section
        id="countdown-section"
        className="relative py-24 sm:py-32 px-6 bg-[#faf6ee]"
        data-testid="countdown-section"
    >
        <div className="mx-auto max-w-5xl text-center">
            <p className="text-[10px] uppercase tracking-[0.5em] text-[#8a5a1f]">
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
        </div>
    </section>
);
