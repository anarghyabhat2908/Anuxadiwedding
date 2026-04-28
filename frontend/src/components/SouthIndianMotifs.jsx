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
 * Detailed Ganesha — sitting, crowned, trunk curled to the left, holding modaka.
 * Drawn to be clearly recognisable at small sizes.
 */
export const Ganesha = ({ size = 64, className = "", color = "#b8893a" }) => (
    <svg
        viewBox="0 0 200 220"
        width={size}
        height={size}
        className={className}
        aria-hidden="true"
        data-testid="ganesha-icon"
    >
        <g fill={color} stroke={color} strokeLinejoin="round" strokeLinecap="round">
            {/* HALO / aura behind head */}
            <circle cx="100" cy="78" r="62" fill={color} opacity="0.10" stroke="none" />

            {/* CROWN — three-tiered mukuta */}
            <path
                d="M70 38 L 78 18 L 86 32 L 100 8 L 114 32 L 122 18 L 130 38 Z"
                strokeWidth="1"
            />
            <circle cx="100" cy="14" r="3.5" fill={color} stroke="none" />
            {/* Crown band */}
            <path
                d="M68 38 Q 100 44, 132 38 L 130 46 Q 100 52, 70 46 Z"
                strokeWidth="0.8"
            />

            {/* HEAD — elephant skull (slightly oval) */}
            <ellipse cx="100" cy="76" rx="32" ry="34" stroke="none" />

            {/* FOREHEAD highlight + tilak */}
            <path
                d="M88 60 Q 100 56, 112 60"
                stroke="#fff5e0"
                strokeWidth="1.2"
                fill="none"
                opacity="0.9"
            />
            <circle cx="100" cy="58" r="2.4" fill="#fff5e0" stroke="none" />
            <path
                d="M97 64 Q 100 70, 103 64"
                stroke="#fff5e0"
                strokeWidth="1"
                fill="none"
                opacity="0.85"
            />

            {/* EYES */}
            <ellipse cx="86" cy="74" rx="4" ry="2.5" fill="#fff5e0" stroke="none" />
            <ellipse cx="114" cy="74" rx="4" ry="2.5" fill="#fff5e0" stroke="none" />
            <circle cx="86" cy="74" r="1.4" fill={color} stroke="none" />
            <circle cx="114" cy="74" r="1.4" fill={color} stroke="none" />

            {/* EARS — large fan-shaped, sticking out on both sides */}
            <path
                d="M68 60 C 50 58, 38 70, 40 92 C 42 110, 56 116, 70 108 Z"
                stroke="none"
            />
            <path
                d="M132 60 C 150 58, 162 70, 160 92 C 158 110, 144 116, 130 108 Z"
                stroke="none"
            />
            {/* Inner ear shading */}
            <path
                d="M64 70 C 54 72, 50 82, 54 96 C 60 102, 68 102, 72 96"
                fill="#fff5e0"
                stroke="none"
                opacity="0.55"
            />
            <path
                d="M136 70 C 146 72, 150 82, 146 96 C 140 102, 132 102, 128 96"
                fill="#fff5e0"
                stroke="none"
                opacity="0.55"
            />

            {/* TUSKS — left full, right broken (Ekadanta) */}
            <path
                d="M93 96 L 89 108"
                stroke="#fff5e0"
                strokeWidth="3"
                fill="none"
            />
            <path
                d="M107 96 L 110 102"
                stroke="#fff5e0"
                strokeWidth="3"
                fill="none"
            />

            {/* TRUNK — curls downward then to the LEFT, holding a modaka */}
            <path
                d="M100 96 C 102 110, 108 122, 104 134 C 98 144, 84 146, 78 138 C 74 130, 80 124, 88 124 C 94 124, 96 130, 92 134"
                fill="none"
                strokeWidth="7"
            />
            {/* Modaka in trunk tip */}
            <path
                d="M84 130 L 80 124 L 92 124 L 88 130 Z"
                stroke="none"
            />
            <circle cx="86" cy="124" r="2.5" stroke="none" />

            {/* BODY — sitting, big belly */}
            <path
                d="M58 158 C 50 138, 60 122, 80 120 L 120 120 C 140 122, 150 138, 142 158 L 138 178 Q 100 196, 62 178 Z"
                stroke="none"
            />
            {/* Belly highlight */}
            <ellipse cx="100" cy="160" rx="22" ry="14" fill="#fff5e0" stroke="none" opacity="0.45" />
            <circle cx="100" cy="160" r="2.6" fill={color} stroke="none" />

            {/* ARMS — two visible, one holding modaka, other in abhaya mudra */}
            {/* Left arm holding modaka */}
            <path
                d="M62 142 C 50 144, 44 156, 50 168 L 58 164 C 56 156, 60 150, 66 150 Z"
                stroke="none"
            />
            <circle cx="50" cy="172" r="5" stroke="none" />
            {/* Right arm raised in blessing */}
            <path
                d="M138 142 C 150 138, 156 128, 150 116 L 142 122 C 144 130, 140 138, 134 140 Z"
                stroke="none"
            />
            <path
                d="M148 110 C 152 104, 152 98, 148 96 C 146 102, 144 108, 146 112 Z"
                stroke="none"
            />

            {/* SACRED THREAD across torso */}
            <path
                d="M70 132 Q 100 152, 138 130"
                stroke="#fff5e0"
                strokeWidth="1.4"
                fill="none"
                opacity="0.85"
            />

            {/* LOTUS PEDESTAL */}
            <g>
                {Array.from({ length: 9 }).map((_, i) => {
                    const x = 30 + i * 17.5;
                    return (
                        <path
                            key={i}
                            d={`M${x} 196 Q ${x + 8} 184, ${x + 16} 196 Z`}
                            stroke="none"
                            opacity="0.9"
                        />
                    );
                })}
                <ellipse
                    cx="100"
                    cy="200"
                    rx="78"
                    ry="6"
                    stroke="none"
                />
                <ellipse
                    cx="100"
                    cy="208"
                    rx="64"
                    ry="4"
                    stroke="none"
                    opacity="0.7"
                />
            </g>
        </g>
    </svg>
);
