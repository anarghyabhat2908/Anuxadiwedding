import React from "react";
import { Mango, Diya } from "./SouthIndianMotifs";

export const Footer = () => (
    <footer
        className="relative bg-[#3d1d1d] text-[#f5dfa1] py-20 px-6 overflow-hidden"
        data-testid="footer"
    >
        {/* South Indian motifs */}
        <div className="pointer-events-none absolute -left-6 top-10 opacity-40">
            <Mango size={70} color="#f5dfa1" />
        </div>
        <div className="pointer-events-none absolute -right-6 top-10 opacity-40 [transform:scaleX(-1)]">
            <Mango size={70} color="#f5dfa1" />
        </div>
        <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-2 opacity-50">
            <Diya size={64} color="#f5dfa1" />
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
            <p
                className="mt-8 font-serif-elegant italic text-lg sm:text-xl leading-relaxed text-[#fff5e0]/95 max-w-2xl mx-auto"
                data-testid="footer-blessings-note"
            >
                We kindly ask for no presents, as your warm wishes and blessings
                are all we need to begin this new chapter.
            </p>
            <p className="mt-10 text-[11px] uppercase tracking-[0.4em] text-[#e8c170]/70">
                21 · 08 · 2026 · Tharavadu Mane
            </p>
        </div>
    </footer>
);
