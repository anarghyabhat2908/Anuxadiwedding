import React from "react";
import { Divider } from "./Divider";
import { Mango, Diya, Kalasham } from "./SouthIndianMotifs";
import { OrnamentStrip } from "./OrnamentStrip";
import { PaisleyBackdrop } from "./PaisleyBackdrop";

export const DressCodeSection = () => (
    <section
        className="relative py-24 sm:py-32 px-6 bg-[#fffaf0] overflow-hidden"
        data-testid="dress-code-section"
    >
        <PaisleyBackdrop opacity={0.45} />

        {/* Kalasham edges */}
        <div className="pointer-events-none absolute -left-8 top-1/2 -translate-y-1/2 opacity-35 hidden lg:block">
            <Kalasham size={130} />
        </div>
        <div className="pointer-events-none absolute -right-8 top-1/2 -translate-y-1/2 opacity-35 hidden lg:block [transform:translateY(-50%)_scaleX(-1)]">
            <Kalasham size={130} />
        </div>

        {/* Mangoes top */}
        <div className="pointer-events-none absolute left-10 top-12 opacity-50 hidden md:block">
            <Mango size={56} />
        </div>
        <div className="pointer-events-none absolute right-10 top-12 opacity-50 hidden md:block [transform:scaleX(-1)]">
            <Mango size={56} />
        </div>

        <div className="relative mx-auto max-w-5xl">
            <OrnamentStrip count={7} />

            <div className="mt-10 text-center">
                <p className="text-[10px] uppercase tracking-[0.5em] text-[#8a5a1f]">
                    What to Wear
                </p>
                <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl text-[#3d1d1d]">
                    Dress <span className="italic gold-text">Code</span>
                </h2>
                <Divider symbol="❀" />
                <p className="font-serif-elegant italic text-lg text-[#4a2a1f] max-w-xl mx-auto">
                    Bring your festive best — let&rsquo;s fill the courtyard with colour.
                </p>
            </div>

            <div className="mt-14 grid md:grid-cols-2 gap-8 lg:gap-10">
                {/* Women */}
                <article
                    className="relative rounded-md border border-[#b8893a]/30 bg-[#fffaf0] p-8 sm:p-10 shadow-[0_10px_40px_-15px_rgba(120,60,20,0.25)] overflow-hidden"
                    data-testid="dress-code-women"
                >
                    <div className="absolute -right-4 -top-4 opacity-50">
                        <Diya size={70} color="#b8893a" />
                    </div>
                    <p className="text-[10px] uppercase tracking-[0.4em] text-[#8a5a1f]">
                        For the Ladies
                    </p>
                    <h3 className="mt-3 font-display text-3xl sm:text-4xl text-[#3d1d1d]">
                        Sarees &amp; <span className="italic gold-text">silks</span>
                    </h3>
                    <div className="mt-5 h-px w-16 bg-gradient-to-r from-[#b8893a] to-transparent" />
                    <p className="mt-5 font-serif-elegant text-lg sm:text-xl leading-relaxed text-[#3d1d1d]">
                        We invite the ladies to celebrate in rich silks or
                        beautifully draped sarees, adding to the colour and
                        splendour of the occasion.
                    </p>
                    <div className="mt-6 flex items-center gap-2 opacity-60">
                        <Mango size={26} color="#a47c2a" />
                        <Mango size={20} color="#c79a3e" className="[transform:scaleX(-1)]" />
                        <Mango size={26} color="#a47c2a" />
                    </div>
                </article>

                {/* Men */}
                <article
                    className="relative rounded-md border border-[#b8893a]/30 bg-[#fffaf0] p-8 sm:p-10 shadow-[0_10px_40px_-15px_rgba(120,60,20,0.25)] overflow-hidden"
                    data-testid="dress-code-men"
                >
                    <div className="absolute -right-4 -top-4 opacity-50">
                        <Diya size={70} color="#a47c2a" />
                    </div>
                    <p className="text-[10px] uppercase tracking-[0.4em] text-[#8a5a1f]">
                        For the Gentlemen
                    </p>
                    <h3 className="mt-3 font-display text-3xl sm:text-4xl text-[#3d1d1d]">
                        Kurtas &amp; <span className="italic gold-text">veshtis</span>
                    </h3>
                    <div className="mt-5 h-px w-16 bg-gradient-to-r from-[#b8893a] to-transparent" />
                    <p className="mt-5 font-serif-elegant text-lg sm:text-xl leading-relaxed text-[#3d1d1d]">
                        Break out your best kurtas or go full South Indian in a
                        classic veshti! We can&rsquo;t wait to see your dapper
                        traditional looks.
                    </p>
                    <div className="mt-6 flex items-center gap-2 opacity-60">
                        <Mango size={26} color="#a47c2a" />
                        <Mango size={20} color="#c79a3e" className="[transform:scaleX(-1)]" />
                        <Mango size={26} color="#a47c2a" />
                    </div>
                </article>
            </div>

            <OrnamentStrip count={7} className="mt-16" />
        </div>
    </section>
);
