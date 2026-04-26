import React, { useEffect, useState } from "react";

const TARGET = new Date("2026-08-21T10:45:00+05:30").getTime();

const calc = () => {
    const diff = TARGET - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true };
    return {
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
        done: false,
    };
};

const Cell = ({ value, label, testId }) => (
    <div
        className="flex flex-col items-center justify-center px-3 sm:px-6 py-4 sm:py-6 min-w-[78px] sm:min-w-[120px] rounded-md bg-[#fffaf0]/80 backdrop-blur-sm border border-[#b8893a]/30 shadow-[0_4px_20px_-8px_rgba(120,80,20,0.25)]"
        data-testid={testId}
    >
        <span className="font-display text-4xl sm:text-6xl tabular-nums gold-text shimmer leading-none">
            {String(value).padStart(2, "0")}
        </span>
        <span className="mt-2 sm:mt-3 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#6b4a1f]">
            {label}
        </span>
    </div>
);

export const Countdown = () => {
    const [t, setT] = useState(calc());

    useEffect(() => {
        const id = setInterval(() => setT(calc()), 1000);
        return () => clearInterval(id);
    }, []);

    if (t.done) {
        return (
            <div
                className="text-center font-display text-3xl sm:text-4xl gold-text"
                data-testid="countdown-celebrate"
            >
                Today We Begin Forever ✦
            </div>
        );
    }

    return (
        <div
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-4"
            data-testid="countdown-timer"
        >
            <Cell value={t.days} label="Days" testId="countdown-days" />
            <Cell value={t.hours} label="Hours" testId="countdown-hours" />
            <Cell value={t.minutes} label="Minutes" testId="countdown-minutes" />
            <Cell value={t.seconds} label="Seconds" testId="countdown-seconds" />
        </div>
    );
};
