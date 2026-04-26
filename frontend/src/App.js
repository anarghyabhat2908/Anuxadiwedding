import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Hero } from "./components/Hero";
import { CountdownSection } from "./components/CountdownSection";
import { StorySection } from "./components/StorySection";
import { DressCodeSection } from "./components/DressCodeSection";
import { VenueSection } from "./components/VenueSection";
import { Footer } from "./components/Footer";
import { MusicToggle } from "./components/MusicToggle";

const Home = () => {
    return (
        <main
            className="min-h-screen bg-[#faf6ee] text-[#2a1a14] selection:bg-[#b8893a]/30 selection:text-[#3d1d1d]"
            data-testid="home-page"
        >
            <Hero />
            <CountdownSection />
            <StorySection />
            <DressCodeSection />
            <VenueSection />
            <Footer />
            <MusicToggle />
        </main>
    );
};

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
