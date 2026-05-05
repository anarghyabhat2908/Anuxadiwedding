import React from "react";

export const WelcomeOverlay = ({ onEnter }) => {
    return (
        <div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#faf6ee]"
            data-testid="welcome-overlay"
        >
            {/* Decorative border frame */}
            <div className="absolute inset-4 sm:inset-8 border border-[#b8893a]/30 rounded-lg pointer-events-none" />
            <div className="absolute inset-6 sm:inset-12 border border-[#b8893a]/20 rounded-lg pointer-events-none" />

            {/* Content */}
            <div className="text-center px-6 max-w-md">
                {/* Om symbol */}
                <p className="text-[#b8893a] text-3xl mb-4 font-serif">ॐ</p>

                {/* Invocation */}
                <p className="text-[#5a3d2b] text-sm tracking-[0.2em] uppercase mb-6 font-serif">
                    Sri Kuladevatha Prasanna
                </p>

                {/* Names */}
                <h1 className="font-serif text-4xl sm:text-5xl text-[#3d1d1d] mb-2 leading-tight">
                    Anarghya
                </h1>
                <p className="text-[#b8893a] text-2xl mb-2">&</p>
                <h1 className="font-serif text-4xl sm:text-5xl text-[#3d1d1d] mb-8 leading-tight">
                    Adithya
                </h1>

                {/* Decorative divider */}
                <div className="flex items-center justify-center gap-3 mb-8">
                    <span className="w-12 h-px bg-[#b8893a]/40" />
                    <span className="text-[#b8893a]">✦</span>
                    <span className="w-12 h-px bg-[#b8893a]/40" />
                </div>

                {/* Subtitle */}
                <p className="text-[#5a3d2b] text-sm tracking-[0.15em] uppercase mb-10">
                    Request the pleasure of your company
                </p>

                {/* Enter button */}
                <button
                    onClick={onEnter}
                    className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-[#b8893a] bg-transparent hover:bg-[#b8893a] transition-all duration-300"
                >
                    <span className="text-[#3d1d1d] group-hover:text-[#fffaf0] text-sm tracking-[0.25em] uppercase font-medium transition-colors duration-300">
                        Open Invitation
                    </span>
                    <svg
                        className="w-4 h-4 text-[#b8893a] group-hover:text-[#fffaf0] transition-colors duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>

                {/* Music hint */}
                <p className="mt-6 text-[#5a3d2b]/60 text-xs tracking-wide">
                    Best experienced with sound
                </p>
            </div>

            {/* Bottom decorative element */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                <svg
                    className="w-16 h-8 text-[#b8893a]/30"
                    viewBox="0 0 64 32"
                    fill="currentColor"
                >
                    <path d="M32 0C20 0 10 16 0 16C10 16 20 32 32 32C44 32 54 16 64 16C54 16 44 0 32 0Z" />
                </svg>
            </div>
        </div>
    );
};
