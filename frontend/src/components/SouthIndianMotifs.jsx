import React from "react";

/**
 * Mango/paisley (Mangai / Kairi) — iconic South Indian motif
 * found on kanjivaram silks, mehendi designs, and temple borders.
 */
export const Mango = ({ size = 80, className = "", color = "#b8893a" }) => (
    <svg
        viewBox="0 0 100 120"
        width={size}
        height={size}
        className={className}
        aria-hidden="true"
        data-testid="mango-decoration"
    >
        <g fill="none" stroke={color} strokeWidth="1.2" strokeLinejoin="round">
            {/* Outer paisley curve */}
            <path
                d="M30 110 C 5 90, 5 35, 45 12 C 80 -2, 95 30, 80 60 C 70 80, 55 90, 40 95 Z"
                strokeWidth="1.6"
            />
            {/* Inner curve */}
            <path d="M40 95 C 25 80, 22 50, 50 28 C 72 18, 80 38, 72 58 C 65 75, 55 88, 45 92 Z" />
            {/* Leaf veins */}
            <path d="M44 92 C 50 80, 56 65, 60 50" opacity="0.7" />
            <path d="M40 88 L 50 78" opacity="0.5" />
            <path d="M44 78 L 54 68" opacity="0.5" />
            {/* Petal pattern */}
            <g fill={color} opacity="0.55" stroke="none">
                <circle cx="60" cy="48" r="2.2" />
                <circle cx="68" cy="38" r="1.6" />
                <circle cx="52" cy="58" r="1.6" />
            </g>
        </g>
    </svg>
);

/**
 * Kalasham — sacred pot of mango leaves crowned by a coconut.
 * Placed at the entrance of every South Indian wedding.
 */
export const Kalasham = ({ size = 110, className = "", color = "#b8893a" }) => (
    <svg
        viewBox="0 0 120 180"
        width={size}
        height={size}
        className={className}
        aria-hidden="true"
        data-testid="kalasham-decoration"
    >
        <g fill={color} opacity="0.85">
            {/* Coconut */}
            <ellipse cx="60" cy="36" rx="11" ry="14" />
            {/* Coconut tuft */}
            <path d="M52 22 L 48 12 M60 20 L 60 8 M68 22 L 72 12" stroke={color} strokeWidth="1.2" fill="none" />
            {/* Mango leaves */}
            <path d="M60 50 C 30 50, 18 40, 14 60 C 26 60, 46 60, 60 60 Z" />
            <path d="M60 50 C 90 50, 102 40, 106 60 C 94 60, 74 60, 60 60 Z" />
            <path d="M60 48 C 44 48, 36 40, 32 30 C 50 36, 58 44, 60 50 Z" opacity="0.7" />
            <path d="M60 48 C 76 48, 84 40, 88 30 C 70 36, 62 44, 60 50 Z" opacity="0.7" />
            {/* Pot shoulder */}
            <path d="M22 60 Q 60 70, 98 60 L 96 80 Q 60 88, 24 80 Z" />
            {/* Pot belly */}
            <path d="M20 80 Q 60 100, 100 80 L 96 130 Q 60 144, 24 130 Z" />
            {/* Decorative bands on pot */}
            <g fill="none" stroke="#fff5e0" strokeWidth="0.6" opacity="0.55">
                <path d="M24 100 Q 60 110, 96 100" />
                <path d="M28 118 Q 60 126, 92 118" />
            </g>
            {/* Pot dots */}
            <g opacity="0.7">
                <circle cx="40" cy="105" r="1.6" />
                <circle cx="60" cy="110" r="1.8" />
                <circle cx="80" cy="105" r="1.6" />
            </g>
            {/* Base */}
            <ellipse cx="60" cy="142" rx="36" ry="6" />
            <rect x="34" y="140" width="52" height="8" rx="1" />
            <ellipse cx="60" cy="152" rx="40" ry="6" />
        </g>
    </svg>
);

/**
 * Banana leaf — strung at the entrance for auspicious blessing.
 */
export const BananaLeaf = ({ size = 200, className = "", color = "#1d6f5f" }) => (
    <svg
        viewBox="0 0 120 280"
        width={size}
        height={size}
        className={className}
        aria-hidden="true"
        data-testid="banana-leaf-decoration"
    >
        <g>
            <path
                d="M60 0 C 110 90, 110 200, 70 280 C 80 200, 75 110, 60 0 Z"
                fill={color}
                opacity="0.55"
            />
            <path
                d="M60 0 C 10 90, 10 200, 50 280 C 40 200, 45 110, 60 0 Z"
                fill={color}
                opacity="0.45"
            />
            <path
                d="M60 0 L 60 280"
                stroke={color}
                strokeWidth="1.2"
                opacity="0.7"
                fill="none"
            />
            {/* Leaf veins */}
            {Array.from({ length: 14 }).map((_, i) => {
                const y = 20 + i * 18;
                return (
                    <g
                        key={i}
                        stroke={color}
                        strokeWidth="0.6"
                        opacity="0.5"
                        fill="none"
                    >
                        <path d={`M60 ${y} Q 30 ${y + 18}, 22 ${y + 32}`} />
                        <path d={`M60 ${y} Q 90 ${y + 18}, 98 ${y + 32}`} />
                    </g>
                );
            })}
        </g>
    </svg>
);

/**
 * Brass diya / oil lamp — auspicious South Indian motif.
 */
export const Diya = ({ size = 80, className = "", color = "#b8893a" }) => (
    <svg
        viewBox="0 0 100 140"
        width={size}
        height={size}
        className={className}
        aria-hidden="true"
        data-testid="diya-decoration"
    >
        <g fill={color} opacity="0.9">
            {/* Flame */}
            <path
                d="M50 8 C 56 18, 60 28, 56 36 C 53 32, 50 30, 50 28 C 50 30, 47 32, 44 36 C 40 28, 44 18, 50 8 Z"
                opacity="0.95"
            />
            {/* Lamp body */}
            <path d="M30 50 Q 50 38, 70 50 L 64 70 Q 50 74, 36 70 Z" />
            {/* Stem */}
            <rect x="46" y="70" width="8" height="14" />
            {/* Plate */}
            <ellipse cx="50" cy="88" rx="22" ry="6" />
            {/* Base */}
            <rect x="40" y="92" width="20" height="6" rx="1" />
            <ellipse cx="50" cy="100" rx="26" ry="6" />
        </g>
    </svg>
);

/**
 * Stylised Ganesha silhouette — invoked at the start of every auspicious work.
 */
export const Ganesha = ({ size = 64, className = "", color = "#b8893a" }) => (
    <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        className={className}
        aria-hidden="true"
        data-testid="ganesha-icon"
    >
        <g fill={color} stroke={color} strokeLinejoin="round">
            {/* Crown / mukuta */}
            <path
                d="M50 6 L 44 14 L 48 18 L 50 14 L 52 18 L 56 14 Z"
                strokeWidth="0.6"
            />
            {/* Head */}
            <circle cx="50" cy="32" r="14" stroke="none" />
            {/* Tilak (small dot) */}
            <circle cx="50" cy="26" r="1.4" fill="#fff5e0" stroke="none" />
            {/* Big ears */}
            <ellipse
                cx="32"
                cy="34"
                rx="6"
                ry="9"
                stroke="none"
                opacity="0.95"
            />
            <ellipse
                cx="68"
                cy="34"
                rx="6"
                ry="9"
                stroke="none"
                opacity="0.95"
            />
            <ellipse
                cx="32"
                cy="34"
                rx="2.5"
                ry="4.5"
                fill="#fff5e0"
                stroke="none"
            />
            <ellipse
                cx="68"
                cy="34"
                rx="2.5"
                ry="4.5"
                fill="#fff5e0"
                stroke="none"
            />
            {/* Trunk - signature curl */}
            <path
                d="M50 42 C 52 50, 56 56, 54 62 C 52 66, 47 66, 45 62 C 43 58, 47 56, 50 58"
                fill="none"
                strokeWidth="3"
                strokeLinecap="round"
            />
            {/* Tusks */}
            <path
                d="M44 46 L 41 52"
                stroke="#fff5e0"
                strokeWidth="1.6"
                strokeLinecap="round"
            />
            <path
                d="M56 46 L 59 52"
                stroke="#fff5e0"
                strokeWidth="1.6"
                strokeLinecap="round"
            />
            {/* Body / belly */}
            <path
                d="M30 78 Q 50 92, 70 78 L 66 88 Q 50 96, 34 88 Z"
                stroke="none"
            />
            <ellipse
                cx="50"
                cy="74"
                rx="22"
                ry="14"
                stroke="none"
                opacity="0.92"
            />
            {/* Belly highlight */}
            <circle cx="50" cy="78" r="3" fill="#fff5e0" stroke="none" />
        </g>
    </svg>
);
