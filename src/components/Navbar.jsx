import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navItems = [
  { id: "home", label: "Home" },
  { id: "events", label: "Events" },
];

export default function Navbar({ onVisibilityChange }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [desktopVisible, setDesktopVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const pos = window.scrollY + window.innerHeight / 3;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(navItems[i].id);
        if (el && el.offsetTop <= pos) {
          setActive(navItems[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Notify parent when desktop nav visibility changes
  useEffect(() => {
    onVisibilityChange?.(desktopVisible);
  }, [desktopVisible, onVisibilityChange]);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      {/* Desktop — invisible hover trigger zone at top */}
      <div
        className="fixed top-0 left-0 right-0 z-50 h-[12px] hidden md:block"
        onMouseEnter={() => setDesktopVisible(true)}
      />

      {/* Desktop nav — slides down on hover */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: desktopVisible ? 0 : -80 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-40 hidden md:block py-3"
        style={{
          background: "rgba(8,6,4,0.92)",
          backdropFilter: "blur(24px) saturate(1.2)",
          borderBottom: "1px solid rgba(212,175,55,0.08)",
        }}
        onMouseEnter={() => setDesktopVisible(true)}
        onMouseLeave={() => setDesktopVisible(false)}
      >
        <div
          className="max-w-4xl px-6 flex items-center justify-end"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        >
          <div className="flex items-center gap-9">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative text-[10px] uppercase tracking-[0.25em] transition-colors duration-300 cursor-pointer font-medium ${
                  active === item.id
                    ? "text-gold/70"
                    : "text-cream/22 hover:text-cream/45"
                }`}
              >
                {item.label}
                {active === item.id && (
                  <motion.div
                    layoutId="navDot"
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold/50"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Mobile bottom nav */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
        <div
          className="mx-3 mb-3 rounded-2xl overflow-hidden"
          style={{
            background: "rgba(8,6,4,0.88)",
            backdropFilter: "blur(24px) saturate(1.2)",
            border: "1px solid rgba(212,175,55,0.06)",
            boxShadow: "0 -4px 30px rgba(0,0,0,0.3)",
          }}
        >
          <div className="flex items-center justify-around py-3 px-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`flex flex-col items-center gap-0.5 py-1 px-4 rounded-xl transition-all duration-300 cursor-pointer ${
                  active === item.id ? "text-gold/70" : "text-cream/18"
                }`}
              >
                <span className="text-[9px] uppercase tracking-wider font-medium">
                  {item.label}
                </span>
                {active === item.id && (
                  <motion.div
                    layoutId="mobileNav"
                    className="w-4 h-0.5 rounded-full bg-gold/40"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
