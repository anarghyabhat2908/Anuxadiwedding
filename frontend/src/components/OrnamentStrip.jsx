import React from "react";
import { Mango } from "./SouthIndianMotifs";

/**
 * Decorative horizontal mango/paisley strip — used as ornamental
 * top/bottom borders for sections.
 */
export const OrnamentStrip = ({
    color = "#b8893a",
    count = 9,
    className = "",
}) => (
    <div
        className={`flex items-center justify-center gap-2 sm:gap-3 opacity-70 ${className}`}
        aria-hidden="true"
        data-testid="ornament-strip"
    >
        <span className="h-px w-12 sm:w-24 bg-gradient-to-r from-transparent to-[#b8893a]/60" />
        {Array.from({ length: count }).map((_, i) => (
            <Mango
                key={i}
                size={i === Math.floor(count / 2) ? 32 : 22}
                color={color}
                className={i % 2 === 0 ? "" : "[transform:scaleX(-1)]"}
            />
        ))}
        <span className="h-px w-12 sm:w-24 bg-gradient-to-l from-transparent to-[#b8893a]/60" />
    </div>
);
