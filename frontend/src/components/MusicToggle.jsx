import React, { useEffect, useRef, useState } from "react";
import { Music, VolumeX } from "lucide-react";

// YouTube video ID for the wedding song
const VIDEO_ID = "KZDzO36P8Wg";

// Inject the YouTube IFrame API script once
const loadYTApi = () =>
    new Promise((resolve) => {
        if (window.YT && window.YT.Player) return resolve(window.YT);
        if (document.getElementById("yt-iframe-api")) {
            const i = setInterval(() => {
                if (window.YT && window.YT.Player) {
                    clearInterval(i);
                    resolve(window.YT);
                }
            }, 100);
            return;
        }
        const tag = document.createElement("script");
        tag.id = "yt-iframe-api";
        tag.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(tag);
        window.onYouTubeIframeAPIReady = () => resolve(window.YT);
    });

export const MusicToggle = () => {
    const playerRef = useRef(null);
    const containerId = useRef(`yt-player-${Math.random().toString(36).slice(2)}`);
    const [playing, setPlaying] = useState(false);
    const [muted, setMuted] = useState(true);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        let destroyed = false;
        loadYTApi().then((YT) => {
            if (destroyed) return;
            playerRef.current = new YT.Player(containerId.current, {
                videoId: VIDEO_ID,
                height: "0",
                width: "0",
                playerVars: {
                    // Autoplay muted is permitted by all major browsers.
                    autoplay: 1,
                    mute: 1,
                    controls: 0,
                    disablekb: 1,
                    loop: 0, // Disable native loop, we handle it manually
                    modestbranding: 1,
                    playsinline: 1,
                    rel: 0,
                    iv_load_policy: 3,
                    start: 18, // Skip first 18 seconds
                    end: 192, // Stop at 3:12 (192 seconds)
                },
                events: {
                    onReady: (e) => {
                        try {
                            e.target.setVolume(45);
                            e.target.mute();
                            e.target.playVideo();
                        } catch {
                            /* noop */
                        }
                        setReady(true);
                    },
                    onStateChange: (e) => {
                        if (e.data === 1) setPlaying(true);
                        else if (e.data === 2) setPlaying(false);
                        // When video ends at 3:12 (state 0), restart from 0:18 for looping
                        else if (e.data === 0) {
                            try {
                                e.target.seekTo(18);
                                e.target.playVideo();
                            } catch {
                                /* noop */
                            }
                        }
                    },
                },
            });
        });
        return () => {
            destroyed = true;
            try {
                playerRef.current?.destroy?.();
            } catch {
                /* noop */
            }
        };
    }, []);

    // Unmute on the very first user interaction anywhere on the page.
    useEffect(() => {
        if (!ready) return;
        let unmounted = false;

        const unmuteOnFirstInteraction = () => {
            const p = playerRef.current;
            if (!p || unmounted) return;
            try {
                p.unMute?.();
                p.setVolume?.(45);
                p.playVideo?.();
                setMuted(false);
            } catch {
                /* noop */
            }
            window.removeEventListener("pointerdown", unmuteOnFirstInteraction);
            window.removeEventListener("keydown", unmuteOnFirstInteraction);
            window.removeEventListener("touchstart", unmuteOnFirstInteraction);
            window.removeEventListener("scroll", unmuteOnFirstInteraction);
        };

        window.addEventListener("pointerdown", unmuteOnFirstInteraction, {
            once: true,
        });
        window.addEventListener("keydown", unmuteOnFirstInteraction, {
            once: true,
        });
        window.addEventListener("touchstart", unmuteOnFirstInteraction, {
            once: true,
        });
        window.addEventListener("scroll", unmuteOnFirstInteraction, {
            once: true,
        });

        return () => {
            unmounted = true;
            window.removeEventListener("pointerdown", unmuteOnFirstInteraction);
            window.removeEventListener("keydown", unmuteOnFirstInteraction);
            window.removeEventListener("touchstart", unmuteOnFirstInteraction);
            window.removeEventListener("scroll", unmuteOnFirstInteraction);
        };
    }, [ready]);

    const toggle = () => {
        const p = playerRef.current;
        if (!p) return;
        try {
            if (playing && !muted) {
                p.pauseVideo?.();
            } else if (muted) {
                p.unMute?.();
                p.setVolume?.(45);
                p.playVideo?.();
                setMuted(false);
            } else {
                p.playVideo?.();
            }
        } catch {
            /* noop */
        }
    };

    const audible = playing && !muted;
    const label = audible ? "Music On" : ready ? "Tap for Sound" : "Loading…";

    return (
        <>
            {/* Hidden YouTube player */}
            <div
                aria-hidden="true"
                style={{
                    position: "fixed",
                    width: 1,
                    height: 1,
                    opacity: 0,
                    pointerEvents: "none",
                    left: -9999,
                    top: -9999,
                }}
            >
                <div id={containerId.current} />
            </div>

            <button
                type="button"
                onClick={toggle}
                aria-label={audible ? "Pause music" : "Play music"}
                data-testid="music-toggle-button"
                className="fixed bottom-6 right-6 z-50 group flex items-center gap-2 rounded-full border border-[#b8893a]/40 bg-[#fffaf0]/90 backdrop-blur-md px-4 py-3 shadow-[0_10px_30px_-10px_rgba(120,60,20,0.4)] hover:bg-[#fffaf0] transition-all"
            >
                <span
                    className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
                        audible ? "bg-[#a47c2a]" : "bg-[#b8893a]/40"
                    }`}
                >
                    {audible && (
                        <span className="absolute inset-0 rounded-full bg-[#a47c2a] animate-ping opacity-75" />
                    )}
                </span>
                {audible ? (
                    <Music className="h-4 w-4 text-[#3d1d1d]" />
                ) : (
                    <VolumeX className="h-4 w-4 text-[#3d1d1d]" />
                )}
                <span className="font-serif-elegant text-xs uppercase tracking-[0.25em] text-[#3d1d1d] hidden sm:inline">
                    {label}
                </span>
            </button>
        </>
    );
};
