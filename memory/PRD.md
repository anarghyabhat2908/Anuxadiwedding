# Anarghya & Adithya — Wedding Website (PRD)

## Original Problem Statement
> Create a beautiful South Indian house wedding website with a wedding date countdown.
> Bride: Anarghya · Groom: Adithya · Venue: Tharavadu Mane, Byalkere Rd, Yelahanka,
> Bengaluru, Karnataka 560090, India · include directions link.

## User Choices
- Wedding date: **21 August 2026**, Muhurtham **10:45 AM (Thula Lagna)**
- Style: **Modern minimal with subtle South Indian motifs** (cream/ivory + maroon + gold)
- Sections: countdown + venue + directions only (no RSVP)
- Story section uses user-provided **heritage Tharavadu courtyard illustration** as animated background
- Cover hero uses user-provided couple illustration (kasavu + maroon kanjivaram)
- Add-to-Calendar button: enabled
- Background music toggle: enabled (Veena raga Asavari, public-domain via Archive.org, hosted at /wedding-music.mp3)
- Language: English

## Architecture
- React 19 + Tailwind 3 + lucide-react icons + custom CSS animations
- Frontend-only (no backend usage). FastAPI/Mongo template untouched.
- Fonts: Playfair Display (display), Cormorant Garamond (serif italic), Inter (UI)
- All sections + buttons carry `data-testid` attributes for testability.

## Implemented (2026-04-26)
- Hero (couple illustration in arch frame, names, date card, Muhurtham, scroll CTA)
- Countdown (live ticking days/hours/minutes/seconds to 21-Aug-2026 10:45 IST)
- Add-to-Calendar (.ics download, RFC-5545 compliant)
- Story section ("Our Story Begins Here", animated parallax courtyard background)
- Venue section (embedded Google Map iframe + "Get Directions" button → maps.google)
- Footer ("Shubha Vivaha" · couple monogram)
- Floating-petal animation, mandala decorations, ornamental dividers
- Background music toggle (fixed bottom-right, plays /wedding-music.mp3)
- Mobile responsive (375 / 768 / 1280); horizontal-overflow guard on html/body

## Backlog / Next
- P2: replace music with custom nadaswaram if user provides
- P2: add real photos of Tharavadu Mane interior once available
- P2: add WhatsApp share button for the invite link
