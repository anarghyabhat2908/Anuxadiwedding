import React, { useMemo } from "react";

export const Petals = ({ count = 18 }) => {
    const petals = useMemo(() => {
        return Array.from({ length: count }).map((_, i) => {
            const left = Math.random() * 100;
            const duration = 9 + Math.random() * 14;
            const delay = -Math.random() * 18;
            const drift = (Math.random() * 80 - 40).toFixed(0) + "px";
            const size = 8 + Math.random() * 14;
            const hue = Math.random() > 0.5 ? "marigold" : "rose";
            const bg =
                hue === "marigold"
                    ? "radial-gradient(circle at 30% 30%, #ffc266, #d97706 70%)"
                    : "radial-gradient(circle at 30% 30%, #fda4af, #9f1239 80%)";
            return { i, left, duration, delay, drift, size, bg };
        });
    }, [count]);

    return (
        <div
            className="pointer-events-none absolute inset-0 overflow-hidden"
            aria-hidden="true"
            data-testid="floating-petals"
        >
            {petals.map((p) => (
                <span
                    key={p.i}
                    className="petal"
                    style={{
                        left: `${p.left}%`,
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        animationDuration: `${p.duration}s`,
                        animationDelay: `${p.delay}s`,
                        background: p.bg,
                        ["--drift"]: p.drift,
                    }}
                />
            ))}
        </div>
    );
};
