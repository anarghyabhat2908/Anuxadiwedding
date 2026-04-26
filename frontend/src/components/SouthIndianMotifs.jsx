import React from "react";

/**
 * Pulli Kolam — traditional South Indian dot-grid floor pattern,
 * drawn as a single continuous looping line.
 * Used as a decorative background motif.
 */
export const Kolam = ({
    size = 240,
    className = "",
    strokeColor = "#b8893a",
}) => (
    <svg
        viewBox="0 0 240 240"
        width={size}
        height={size}
        className={className}
        aria-hidden="true"
        data-testid="kolam-decoration"
    >
        <g
            fill="none"
            stroke={strokeColor}
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.85"
        >
            {/* Pulli (dot grid) */}
            {Array.from({ length: 7 }).flatMap((_, r) =>
                Array.from({ length: 7 }).map((__, c) => {
                    const cx = 40 + c * 27;
                    const cy = 40 + r * 27;
                    return (
                        <circle
                            key={`${r}-${c}`}
                            cx={cx}
                            cy={cy}
                            r="1.2"
                            fill={strokeColor}
                            stroke="none"
                            opacity="0.45"
                        />
                    );
                })
            )}

            {/* Central 8-petal lotus loop */}
            <g transform="translate(120 120)">
                {Array.from({ length: 8 }).map((_, i) => (
                    <path
                        key={i}
                        d="M0 0 C 14 -10, 28 -10, 38 0 C 28 10, 14 10, 0 0 Z"
                        transform={`rotate(${i * 45})`}
                    />
                ))}
                <circle r="6" />
                <circle r="2" fill={strokeColor} stroke="none" />
            </g>

            {/* 4 corner curl petals */}
            {[0, 90, 180, 270].map((deg) => (
                <g
                    key={deg}
                    transform={`translate(120 120) rotate(${deg}) translate(0 -78)`}
                >
                    <path d="M -16 0 Q 0 -22, 16 0 Q 0 16, -16 0 Z" />
                    <circle r="3" fill={strokeColor} stroke="none" />
                </g>
            ))}

            {/* 4 diagonal interlock loops */}
            {[45, 135, 225, 315].map((deg) => (
                <g
                    key={deg}
                    transform={`translate(120 120) rotate(${deg}) translate(0 -55)`}
                >
                    <path d="M -10 0 C -14 -10, 14 -10, 10 0 C 14 10, -14 10, -10 0 Z" />
                </g>
            ))}

            {/* Outer border curl */}
            <circle cx="120" cy="120" r="100" strokeDasharray="3 6" opacity="0.55" />
        </g>
    </svg>
);

/**
 * Brass diya / oil lamp silhouette — classic South Indian temple motif.
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
        <g fill={color} opacity="0.85">
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
            {/* Hanging chain dots */}
            <circle cx="50" cy="2" r="1.5" />
        </g>
    </svg>
);

/**
 * Stylised peacock feather — auspicious South Indian motif.
 */
export const PeacockFeather = ({
    size = 120,
    className = "",
    color = "#1d6f5f",
    accent = "#b8893a",
}) => (
    <svg
        viewBox="0 0 120 240"
        width={size}
        height={size}
        className={className}
        aria-hidden="true"
        data-testid="peacock-decoration"
    >
        <g fill="none" strokeLinecap="round">
            {/* Stem */}
            <path
                d="M60 240 L 60 60"
                stroke={color}
                strokeWidth="1.5"
                opacity="0.7"
            />
            {/* Eye outer */}
            <ellipse
                cx="60"
                cy="50"
                rx="34"
                ry="46"
                fill={color}
                opacity="0.18"
            />
            <ellipse
                cx="60"
                cy="50"
                rx="22"
                ry="32"
                fill={accent}
                opacity="0.22"
            />
            <ellipse cx="60" cy="50" rx="12" ry="18" fill={color} opacity="0.55" />
            <circle cx="60" cy="50" r="6" fill={accent} />
            <circle cx="60" cy="50" r="2.5" fill={color} />
            {/* Feather barbs */}
            {Array.from({ length: 14 }).map((_, i) => {
                const y = 60 + i * 12;
                const len = 24 - i * 1.2;
                return (
                    <g key={i} stroke={color} strokeWidth="0.8" opacity="0.55">
                        <path d={`M60 ${y} L ${60 - len} ${y + 6}`} />
                        <path d={`M60 ${y} L ${60 + len} ${y + 6}`} />
                    </g>
                );
            })}
        </g>
    </svg>
);
