import React from "react";

/**
 * Subtle paisley/mango tile pattern used as a low-opacity background
 * texture to break up flat beige surfaces.
 */
const PATTERN_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180">
  <g fill="none" stroke="#b8893a" stroke-opacity="0.20" stroke-width="1" stroke-linejoin="round">
    <path d="M40 120 C 18 100, 18 58, 50 38 C 80 28, 92 50, 82 72 C 72 90, 58 102, 48 108 Z"/>
    <path d="M48 108 C 36 94, 36 66, 56 50 C 72 44, 78 58, 70 72 C 62 86, 56 96, 50 100 Z"/>
    <circle cx="66" cy="66" r="1.6" fill="#b8893a" fill-opacity="0.30" stroke="none"/>
    <path d="M140 60 C 158 70, 158 100, 130 116 C 110 122, 102 108, 110 92 C 118 78, 128 70, 138 66 Z"/>
    <path d="M138 66 C 148 76, 148 96, 134 108 C 122 112, 118 102, 124 92 C 130 84, 134 76, 138 70 Z"/>
    <circle cx="124" cy="90" r="1.4" fill="#b8893a" fill-opacity="0.28" stroke="none"/>
    <g fill="#b8893a" fill-opacity="0.22" stroke="none">
      <circle cx="10" cy="10" r="1.2"/>
      <circle cx="170" cy="170" r="1.2"/>
      <circle cx="170" cy="10" r="1.2"/>
      <circle cx="10" cy="170" r="1.2"/>
      <circle cx="90" cy="10" r="1"/>
      <circle cx="90" cy="170" r="1"/>
    </g>
    <path d="M0 90 Q 30 70, 60 90 T 120 90 T 180 90" stroke-opacity="0.10"/>
  </g>
</svg>`;

const dataUrl = `url("data:image/svg+xml;utf8,${encodeURIComponent(PATTERN_SVG)}")`;

export const PaisleyBackdrop = ({ className = "", opacity = 0.55 }) => (
    <div
        className={`pointer-events-none absolute inset-0 ${className}`}
        aria-hidden="true"
        data-testid="paisley-backdrop"
        style={{
            backgroundImage: dataUrl,
            backgroundRepeat: "repeat",
            backgroundSize: "200px 200px",
            opacity,
        }}
    />
);
