import React from "react";
import { CalendarPlus } from "lucide-react";

const buildICS = () => {
    const lines = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "PRODID:-//Anarghya & Adithya Wedding//EN",
        "CALSCALE:GREGORIAN",
        "METHOD:PUBLISH",
        "BEGIN:VEVENT",
        "UID:anarghya-adithya-wedding-2026@tharavadumane",
        "DTSTAMP:20260101T000000Z",
        // 21 Aug 2026 10:45 AM IST = 05:15 UTC
        "DTSTART:20260821T051500Z",
        // ~2 hour ceremony
        "DTEND:20260821T071500Z",
        "SUMMARY:Anarghya & Adithya — Wedding (Muhurtham 10:45 AM, Thula Lagna)",
        "DESCRIPTION:With the blessings of family\\, Anarghya & Adithya invite you to their wedding ceremony. Muhurtham at 10:45 AM (Thula Lagna).",
        "LOCATION:Tharavadu Mane\\, Byalkere Rd\\, Yelahanka\\, Bengaluru\\, Karnataka 560090\\, India",
        "STATUS:CONFIRMED",
        "END:VEVENT",
        "END:VCALENDAR",
    ];
    return lines.join("\r\n");
};

export const AddToCalendarButton = () => {
    const handleClick = () => {
        const blob = new Blob([buildICS()], {
            type: "text/calendar;charset=utf-8",
        });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "anarghya-adithya-wedding.ics";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setTimeout(() => URL.revokeObjectURL(url), 1000);
    };

    return (
        <button
            type="button"
            onClick={handleClick}
            data-testid="add-to-calendar-button"
            className="group inline-flex items-center gap-3 rounded-full border border-[#b8893a]/50 bg-[#fffaf0] hover:bg-[#fff5e0] text-[#3d1d1d] px-7 py-3 transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(120,60,20,0.4)]"
            aria-label="Add wedding to calendar"
        >
            <CalendarPlus className="h-4 w-4 text-[#a47c2a] transition-transform group-hover:scale-110" />
            <span className="font-serif-elegant text-sm tracking-[0.18em] uppercase">
                Add to Calendar
            </span>
        </button>
    );
};
