import React from "react";
import { MapPin, Navigation, Clock } from "lucide-react";
import { Divider } from "./Divider";
import { Kolam } from "./SouthIndianMotifs";

const ADDRESS_FULL =
    "Tharavadu Mane, Byalkere Rd, Yelahanka, Bengaluru, Karnataka 560090, India";
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    "Tharavadu Mane, Byalkere Rd, Yelahanka, Bengaluru, Karnataka 560090"
)}`;
const MAP_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
    "Tharavadu Mane, Byalkere Rd, Yelahanka, Bengaluru, Karnataka 560090"
)}&output=embed`;

export const VenueSection = () => (
    <section
        className="relative py-24 sm:py-32 px-6 bg-[#fffaf0]"
        data-testid="venue-section"
    >
        <div className="pointer-events-none absolute -left-32 top-12 opacity-20">
            <Kolam size={260} />
        </div>
        <div className="pointer-events-none absolute -right-32 bottom-12 opacity-20 [transform:scaleX(-1)]">
            <Kolam size={260} />
        </div>

        <div className="relative mx-auto max-w-6xl">
            <div className="text-center">
                <p className="text-[10px] uppercase tracking-[0.5em] text-[#8a5a1f]">
                    The Venue
                </p>
                <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl text-[#3d1d1d]">
                    <span className="italic gold-text">Tharavadu</span> Mane
                </h2>
                <Divider />
                <p className="font-serif-elegant italic text-lg sm:text-xl text-[#4a2a1f] max-w-xl mx-auto">
                    A heritage South Indian home where tradition lingers in
                    every carved pillar.
                </p>
            </div>

            <div className="mt-14 grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                {/* Map */}
                <div
                    className="relative rounded-md overflow-hidden border border-[#b8893a]/30 shadow-[0_20px_60px_-20px_rgba(120,60,20,0.3)] min-h-[360px]"
                    data-testid="venue-map-wrapper"
                >
                    <iframe
                        title="Tharavadu Mane location"
                        src={MAP_EMBED}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="absolute inset-0 h-full w-full"
                        data-testid="venue-map-iframe"
                    />
                </div>

                {/* Details card */}
                <div
                    className="rounded-md border border-[#b8893a]/30 bg-[#faf6ee] p-8 sm:p-10 flex flex-col justify-between shadow-[0_10px_40px_-15px_rgba(120,60,20,0.25)]"
                    data-testid="venue-details-card"
                >
                    <div className="space-y-7">
                        <div className="flex gap-4">
                            <MapPin className="h-5 w-5 mt-1 text-[#a47c2a] shrink-0" />
                            <div>
                                <p className="text-[10px] uppercase tracking-[0.35em] text-[#8a5a1f]">
                                    Address
                                </p>
                                <p
                                    className="mt-2 font-serif-elegant text-lg sm:text-xl text-[#3d1d1d] leading-relaxed"
                                    data-testid="venue-address"
                                >
                                    Tharavadu Mane <br />
                                    Byalkere Rd, Yelahanka <br />
                                    Bengaluru, Karnataka 560090 <br />
                                    India
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <Clock className="h-5 w-5 mt-1 text-[#a47c2a] shrink-0" />
                            <div>
                                <p className="text-[10px] uppercase tracking-[0.35em] text-[#8a5a1f]">
                                    Muhurtham
                                </p>
                                <p
                                    className="mt-2 font-serif-elegant text-lg sm:text-xl text-[#3d1d1d]"
                                    data-testid="venue-muhurtham"
                                >
                                    10:45 AM · Thula Lagna <br />
                                    Friday, 21 August 2026
                                </p>
                            </div>
                        </div>
                    </div>

                    <a
                        href={DIRECTIONS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-10 group inline-flex items-center justify-center gap-3 rounded-full bg-[#3d1d1d] hover:bg-[#5a2a2a] text-[#fffaf0] px-8 py-4 transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(60,20,20,0.6)]"
                        data-testid="venue-directions-button"
                        aria-label={`Get directions to ${ADDRESS_FULL}`}
                    >
                        <Navigation className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        <span className="font-serif-elegant text-base tracking-[0.15em] uppercase">
                            Get Directions
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </section>
);
