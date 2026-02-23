import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { FloralCorner, FloralWreath } from "./Decorations/FloralElements";

export default function CurtainReveal({ onOpen }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = useCallback(() => {
    setIsOpening(true);
    setTimeout(() => onOpen?.(), 800);
  }, [onOpen]);

  return (
    <motion.div
      className="fixed inset-0 z-[300] flex items-center justify-center"
      style={{
        background: "linear-gradient(180deg, #1C0A12, #0E0508, #1C0A12)",
      }}
      animate={isOpening ? { opacity: 0 } : { opacity: 1 }}
      transition={isOpening ? { duration: 0.3, delay: 0.5 } : { duration: 0 }}
    >
      {/* Left Curtain */}
      <motion.div
        className="curtain-panel curtain-left"
        animate={isOpening ? { x: "-100%" } : { x: 0 }}
        transition={
          isOpening
            ? { duration: 0.7, ease: [0.45, 0, 0.15, 1] }
            : { duration: 0 }
        }
      >
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.07]"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="foldL1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#B8960C" stopOpacity="0" />
              <stop offset="30%" stopColor="#B8960C" stopOpacity="0.6" />
              <stop offset="70%" stopColor="#B8960C" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#B8960C" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[12, 28, 42, 58, 74, 88].map((x) => (
            <line
              key={x}
              x1={`${x}%`}
              y1="0"
              x2={`${x}%`}
              y2="100%"
              stroke="url(#foldL1)"
              strokeWidth="1"
            />
          ))}
        </svg>
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.15]"
          preserveAspectRatio="none"
        >
          {[18, 35, 50, 65, 82].map((x) => (
            <line
              key={x}
              x1={`${x}%`}
              y1="0"
              x2={`${x}%`}
              y2="100%"
              stroke="#000"
              strokeWidth="3"
            />
          ))}
        </svg>
      </motion.div>

      {/* Right Curtain */}
      <motion.div
        className="curtain-panel curtain-right"
        animate={isOpening ? { x: "100%" } : { x: 0 }}
        transition={
          isOpening
            ? { duration: 0.7, ease: [0.45, 0, 0.15, 1] }
            : { duration: 0 }
        }
      >
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.07]"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="foldR1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#B8960C" stopOpacity="0" />
              <stop offset="30%" stopColor="#B8960C" stopOpacity="0.6" />
              <stop offset="70%" stopColor="#B8960C" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#B8960C" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[12, 26, 42, 56, 72, 88].map((x) => (
            <line
              key={x}
              x1={`${x}%`}
              y1="0"
              x2={`${x}%`}
              y2="100%"
              stroke="url(#foldR1)"
              strokeWidth="1"
            />
          ))}
        </svg>
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.15]"
          preserveAspectRatio="none"
        >
          {[18, 33, 50, 67, 82].map((x) => (
            <line
              key={x}
              x1={`${x}%`}
              y1="0"
              x2={`${x}%`}
              y2="100%"
              stroke="#000"
              strokeWidth="3"
            />
          ))}
        </svg>
      </motion.div>

      {/* Gold seam line in center */}
      <motion.div
        className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px z-10"
        style={{
          background:
            "linear-gradient(to bottom, transparent 5%, rgba(184,150,12,0.3) 20%, rgba(184,150,12,0.4) 50%, rgba(184,150,12,0.3) 80%, transparent 95%)",
        }}
        animate={isOpening ? { opacity: 0 } : { opacity: 1 }}
        transition={isOpening ? { duration: 0.2 } : { duration: 0 }}
      />

      {/* Ambient glow behind center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full z-[5] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(142,56,85,0.12) 0%, rgba(212,175,55,0.06) 40%, transparent 70%)",
        }}
      />

      {/* Top valance / pelmet */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-16 sm:h-20 z-20"
        style={{
          background:
            "linear-gradient(180deg, #1C0A12 0%, #0E0508 60%, transparent 100%)",
          borderBottom: "2px solid rgba(184,150,12,0.22)",
          boxShadow: "0 4px 30px rgba(0,0,0,0.5)",
        }}
        animate={isOpening ? { y: "-100%" } : { y: 0 }}
        transition={
          isOpening
            ? { duration: 0.4, delay: 0.1, ease: "easeIn" }
            : { duration: 0 }
        }
      >
        <div
          className="absolute bottom-0 left-0 right-0 h-6"
          style={{
            background:
              "repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(184,150,12,0.06) 20px, rgba(184,150,12,0.06) 22px)",
            borderBottom: "1px solid rgba(184,150,12,0.15)",
          }}
        />
        <div className="absolute -bottom-3 left-0 right-0 flex justify-center">
          <svg
            viewBox="0 0 800 12"
            className="w-full max-w-[800px] h-3 opacity-30"
          >
            {Array.from({ length: 20 }).map((_, i) => (
              <path
                key={i}
                d={`M${i * 40},0 Q${i * 40 + 20},12 ${(i + 1) * 40},0`}
                fill="none"
                stroke="rgba(184,150,12,0.6)"
                strokeWidth="0.8"
              />
            ))}
          </svg>
        </div>
      </motion.div>

      {/* Floral corners */}
      <FloralCorner
        className="absolute top-16 left-0 sm:top-20 sm:left-2 z-20 pointer-events-none opacity-50"
        size={90}
      />
      <FloralCorner
        className="absolute top-16 right-0 sm:top-20 sm:right-2 z-20 pointer-events-none opacity-50"
        size={90}
        flip
      />
      <FloralCorner
        className="absolute bottom-2 left-0 sm:bottom-4 sm:left-2 z-20 pointer-events-none opacity-35 rotate-180 -scale-x-100"
        size={80}
      />
      <FloralCorner
        className="absolute bottom-2 right-0 sm:bottom-4 sm:right-2 z-20 pointer-events-none opacity-35 rotate-180"
        size={80}
        flip
      />

      {/* Floating sparkle dots */}
      {!isOpening &&
        [
          { x: "15%", y: "25%", delay: 0 },
          { x: "35%", y: "55%", delay: 1.2 },
          { x: "25%", y: "75%", delay: 2.4 },
          { x: "65%", y: "30%", delay: 0.8 },
          { x: "80%", y: "60%", delay: 1.8 },
          { x: "72%", y: "80%", delay: 2.8 },
        ].map((dot, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute w-1 h-1 rounded-full z-[8]"
            style={{
              left: dot.x,
              top: dot.y,
              background: "rgba(184,150,12,0.5)",
            }}
            animate={{ opacity: [0, 0.6, 0], scale: [0.5, 1.3, 0.5] }}
            transition={{
              duration: 3,
              delay: dot.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

      {/* CENTER CONTENT */}
      <motion.div
        className="relative z-30 flex flex-col items-center"
        animate={
          isOpening ? { opacity: 0, scale: 0.9 } : { opacity: 1, scale: 1 }
        }
        transition={isOpening ? { duration: 0.25 } : { duration: 0 }}
      >
        {/* Telugu welcome text */}
        <motion.p
          animate={isOpening ? {} : { opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="telugu text-sm sm:text-base tracking-wide mb-3"
          style={{ color: "rgba(212,197,160,0.35)" }}
        >
          స్వాగతం
        </motion.p>

        {/* Couple initials */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-8"
        >
          <p className="font-script text-3xl sm:text-4xl gold-shimmer text-center">
            R & U
          </p>
        </motion.div>

        {/* Wreath behind the button */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[42%] opacity-40 pointer-events-none">
          <FloralWreath size={220} />
        </div>

        {/* Romantic tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-script text-xl sm:text-2xl mb-6 tracking-wide"
          style={{ color: "rgba(212,197,160,0.4)" }}
        >
          Two Souls, One Love
        </motion.p>

        <button
          onClick={handleOpen}
          className="relative group cursor-pointer focus:outline-none"
          aria-label="Open invitation"
        >
          {/* Outer glow ring */}
          <div
            className="absolute inset-[-20px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{
              background:
                "radial-gradient(circle, rgba(142,56,85,0.18) 0%, rgba(212,175,55,0.10) 40%, transparent 70%)",
            }}
          />

          {/* Rope circle */}
          <div
            className="relative rounded-full flex items-center justify-center romantic-glow"
            style={{
              width: "5.5rem",
              height: "5.5rem",
              background:
                "radial-gradient(circle at 40% 35%, #3A0E1E, #1C0A12 60%, #0E0508)",
              border: "3px solid transparent",
              backgroundClip: "padding-box",
            }}
          >
            {/* Rope border ring */}
            <div className="absolute inset-[-3px] rounded-full rope-ring" />

            {/* Heart icon */}
            <div className="flex flex-col items-center">
              <svg
                viewBox="0 0 24 24"
                className="w-7 h-7 sm:w-8 sm:h-8 heartbeat"
                fill="rgba(184,150,12,0.45)"
                stroke="rgba(184,150,12,0.6)"
                strokeWidth="0.5"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>

            {/* Subtle pulse */}
            <div
              className="absolute inset-0 rounded-full animate-pulse"
              style={{
                boxShadow:
                  "0 0 25px rgba(212,175,55,0.15), inset 0 0 15px rgba(142,56,85,0.12)",
              }}
            />
          </div>

          {/* Tassel */}
          <div className="flex flex-col items-center mt-1">
            <div
              className="w-px h-5 sm:h-6"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(212,175,55,0.35), rgba(142,56,85,0.25))",
              }}
            />
            <div
              className="w-3 h-4 sm:w-4 sm:h-5 rounded-b-full"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(212,175,55,0.35), rgba(58,14,30,0.45))",
              }}
            />
            <div className="flex gap-px">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-px h-2 sm:h-3"
                  style={{
                    background: `rgba(184,150,12,${0.15 + i * 0.03})`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* "Open" text */}
          <motion.p
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[9px] uppercase tracking-[0.4em] whitespace-nowrap"
            style={{ color: "rgba(212,197,160,0.5)" }}
          >
            Pull to open
          </motion.p>
        </button>

        {/* Telugu below */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="telugu text-xs mt-16 tracking-wider"
          style={{ color: "rgba(212,197,160,0.25)" }}
        >
          ప్రేమతో ఆహ్వానం
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
