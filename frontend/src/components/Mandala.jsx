import React from "react";

export const Mandala = ({ size = 240, className = "", strokeColor = "#b8893a" }) => (
    <svg
        viewBox="0 0 200 200"
        width={size}
        height={size}
        className={className}
        aria-hidden="true"
        data-testid="mandala-decoration"
    >
        <g
            fill="none"
            stroke={strokeColor}
            strokeWidth="0.6"
            strokeLinecap="round"
            opacity="0.85"
        >
            <circle cx="100" cy="100" r="92" />
            <circle cx="100" cy="100" r="78" strokeDasharray="2 4" />
            <circle cx="100" cy="100" r="60" />
            <circle cx="100" cy="100" r="40" strokeDasharray="1 3" />
            {Array.from({ length: 16 }).map((_, i) => {
                const angle = (i * 360) / 16;
                return (
                    <g key={i} transform={`rotate(${angle} 100 100)`}>
                        <path d="M100 8 C 105 30, 105 50, 100 60 C 95 50, 95 30, 100 8 Z" />
                        <circle cx="100" cy="22" r="1.6" fill={strokeColor} />
                    </g>
                );
            })}
            {Array.from({ length: 8 }).map((_, i) => {
                const angle = (i * 360) / 8 + 22.5;
                return (
                    <g key={`p-${i}`} transform={`rotate(${angle} 100 100)`}>
                        <path d="M100 60 Q 104 75, 100 90 Q 96 75, 100 60 Z" />
                    </g>
                );
            })}
        </g>
    </svg>
);
