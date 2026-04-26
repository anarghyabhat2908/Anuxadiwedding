import React from "react";
import { Kolam } from "./SouthIndianMotifs";

export const Footer = () => (
    <footer
        className="relative bg-[#3d1d1d] text-[#f5dfa1] py-20 px-6 overflow-hidden"
        data-testid="footer"
    >
        <div className="pointer-events-none absolute -bottom-32 left-1/2 -translate-x-1/2 opacity-15">
            <Kolam size={520} strokeColor="#f5dfa1" />
        </div>

        <div className="relative mx-auto max-w-3xl text-center">
            <p className="text-[10px] uppercase tracking-[0.5em] text-[#e8c170]">
                ✦ Shubha Vivaha ✦
            </p>
            <h3 className="mt-6 font-display text-4xl sm:text-5xl text-[#fffaf0]">
                Anarghya
                <span className="italic gold-text mx-3">&amp;</span>
                Adithya
            </h3>
            <p className="mt-6 font-serif-elegant italic text-lg text-[#fff5e0]/90">
                "Two souls, one promise — under the blessing of family,
                lamp, and lotus."
            </p>
            <p className="mt-10 text-[11px] uppercase tracking-[0.4em] text-[#e8c170]/70">
                21 · 08 · 2026 · Tharavadu Mane
            </p>
        </div>
    </footer>
);
