import { useState, useEffect } from "react";
import HeroSection from "./components/Hero/HeroSection";
import EventsSection from "./components/Events/EventsSection";
import Footer from "./components/Footer";
import FloatingPetals from "./components/Decorations/FloatingPetals";
import GoldParticles from "./components/Decorations/GoldParticles";
import CurtainReveal from "./components/CurtainReveal";
import StageCurtains from "./components/StageCurtains";

function App() {
  const [curtainOpen, setCurtainOpen] = useState(false);

  /* Lock body scroll while curtain is covering the screen */
  useEffect(() => {
    if (!curtainOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [curtainOpen]);

  return (
    <div className="relative min-h-screen">
      {/* Curtain — covers everything until user opens */}
      {!curtainOpen && <CurtainReveal onOpen={() => setCurtainOpen(true)} />}

      {/* Decorative particles — only after curtain opens to save perf */}
      {curtainOpen && (
        <>
          <FloatingPetals count={14} />
          <GoldParticles count={18} />
          <StageCurtains />
        </>
      )}

      <main>
        <HeroSection />
        <EventsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
