import React, { useEffect, useRef, useState } from "react";
import { Music, VolumeX } from "lucide-react";

// Soft Indian classical Veena instrumental (raga Asavari, public domain via Archive.org)
// Hosted locally to avoid CORS issues. Replace public/wedding-music.mp3 to swap track.
const TRACK_URL = "/wedding-music.mp3";

export const MusicToggle = () => {
    const audioRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const [ready, setReady] = useState(true);

    useEffect(() => {
        const a = new Audio(TRACK_URL);
        a.loop = true;
        a.volume = 0.35;
        a.preload = "auto";
        a.addEventListener("canplaythrough", () => setReady(true));
        a.addEventListener("error", () => setReady(true));
        audioRef.current = a;
        return () => {
            a.pause();
            audioRef.current = null;
        };
    }, []);

    const toggle = async () => {
        const a = audioRef.current;
        if (!a) return;
        try {
            if (playing) {
                a.pause();
                setPlaying(false);
            } else {
                await a.play();
                setPlaying(true);
            }
        } catch {
            setPlaying(false);
        }
    };

    return (
        <button
            type="button"
            onClick={toggle}
            aria-label={playing ? "Pause music" : "Play music"}
            data-testid="music-toggle-button"
            className="fixed bottom-6 right-6 z-50 group flex items-center gap-2 rounded-full border border-[#b8893a]/40 bg-[#fffaf0]/90 backdrop-blur-md px-4 py-3 shadow-[0_10px_30px_-10px_rgba(120,60,20,0.4)] hover:bg-[#fffaf0] transition-all"
        >
            <span
                className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
                    playing ? "bg-[#a47c2a]" : "bg-[#b8893a]/40"
                }`}
            >
                {playing && (
                    <span className="absolute inset-0 rounded-full bg-[#a47c2a] animate-ping opacity-75" />
                )}
            </span>
            {playing ? (
                <Music className="h-4 w-4 text-[#3d1d1d]" />
            ) : (
                <VolumeX className="h-4 w-4 text-[#3d1d1d]" />
            )}
            <span className="font-serif-elegant text-xs uppercase tracking-[0.25em] text-[#3d1d1d] hidden sm:inline">
                {playing ? "Music On" : ready ? "Play Music" : "Loading…"}
            </span>
        </button>
    );
};
