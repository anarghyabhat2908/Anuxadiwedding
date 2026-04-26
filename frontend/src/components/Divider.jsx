import React from "react";

export const Divider = ({ symbol = "✦" }) => (
    <div
        className="flex items-center justify-center gap-4 my-8"
        data-testid="ornamental-divider"
    >
        <span className="h-px w-16 sm:w-28 bg-gradient-to-r from-transparent via-[#b8893a] to-[#b8893a]/30" />
        <span className="text-[#b8893a] text-lg tracking-[0.4em]">{symbol}</span>
        <span className="h-px w-16 sm:w-28 bg-gradient-to-l from-transparent via-[#b8893a] to-[#b8893a]/30" />
    </div>
);
