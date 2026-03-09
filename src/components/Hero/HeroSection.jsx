import { motion } from "framer-motion";
import { ChevronDown, Heart } from "lucide-react";
import { weddingConfig } from "../../data/weddingConfig";
import Countdown from "./Countdown";
import { FloralCorner, OrnamentDivider } from "../Decorations/FloralElements";

const { couple, events } = weddingConfig;

/* Pick the next upcoming event to count down to */
function getNextEvent() {
  const now = new Date();
  const ordered = [events.engagement, events.marriage, events.reception];
  for (const evt of ordered) {
    if (new Date(evt.date) > now) return evt;
  }
  // All events passed — show the last one (will display "Celebration Has Begun")
  return ordered[ordered.length - 1];
}

/* Tiny heart SVG for decorative use */
function SmallHeart({ className = "", style = {} }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      style={style}
      fill="currentColor"
      stroke="none"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

export default function HeroSection() {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
  const nextEvent = getNextEvent();

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6"
      style={{ background: "var(--theme-hero-bg)" }}
    >
      {/* ══ Deep ambient glow layers — simplified on mobile ══ */}
      {!isMobile && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
            radial-gradient(ellipse at 50% 8%, rgba(139,32,64,0.09) 0%, transparent 35%),
            radial-gradient(circle at 50% 35%, rgba(212,175,55,0.09) 0%, transparent 30%),
            radial-gradient(ellipse at 25% 55%, rgba(142,56,85,0.04) 0%, transparent 28%),
            radial-gradient(ellipse at 75% 55%, rgba(142,56,85,0.04) 0%, transparent 28%),
            radial-gradient(circle at 50% 75%, rgba(212,175,55,0.03) 0%, transparent 22%),
            radial-gradient(ellipse at 50% 50%, rgba(88,30,60,0.025) 0%, transparent 35%)
          `,
          }}
        />
      )}
      {isMobile && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 30%, rgba(139,32,64,0.07) 0%, transparent 50%)",
          }}
        />
      )}

      {/* ══ Breathing background pulse — desktop only ══ */}
      {!isMobile && (
        <div
          className="absolute inset-0 pointer-events-none breathe-glow"
          style={{
            background:
              "radial-gradient(circle at 50% 40%, rgba(212,175,55,0.04) 0%, transparent 50%)",
          }}
        />
      )}

      {/* ══ Twinkling stars — hidden on mobile for performance ══ */}
      {!isMobile && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[
            { x: "12%", y: "15%", d: "3s", del: "0s", s: 2 },
            { x: "88%", y: "12%", d: "4s", del: "1.5s", s: 1.5 },
            { x: "25%", y: "28%", d: "3.5s", del: "0.8s", s: 2.5 },
            { x: "75%", y: "25%", d: "4.5s", del: "2s", s: 2 },
            { x: "8%", y: "55%", d: "3s", del: "3s", s: 1.5 },
            { x: "92%", y: "50%", d: "3.5s", del: "0.5s", s: 2 },
          ].map((star, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                left: star.x,
                top: star.y,
                width: `${star.s}px`,
                height: `${star.s}px`,
                background:
                  "radial-gradient(circle, rgba(212,175,55,0.9), rgba(212,175,55,0.3), transparent)",
                animation: `twinkle ${star.d} ease-in-out ${star.del} infinite`,
                boxShadow: "0 0 6px rgba(212,175,55,0.3)",
              }}
            />
          ))}
        </div>
      )}

      {/* Golden arch — signature editorial frame with glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <svg
          viewBox="0 0 500 700"
          className="w-[72%] sm:w-[72%] md:w-[58%] lg:w-[46%] max-w-[540px] h-auto"
          fill="none"
        >
          {/* Outer glow arch */}
          <path
            d="M60,680 L60,260 Q60,60 250,60 Q440,60 440,260 L440,680"
            stroke="rgba(212,175,55,0.18)"
            strokeWidth="2"
          />
          <path
            d="M80,680 L80,268 Q80,85 250,85 Q420,85 420,268 L420,680"
            stroke="rgba(212,175,55,0.08)"
            strokeWidth="0.8"
          />
          {/* Third faint arch for depth */}
          <path
            d="M45,680 L45,255 Q45,45 250,45 Q455,45 455,255 L455,680"
            stroke="rgba(142,56,85,0.08)"
            strokeWidth="0.5"
          />
          {/* Crown ornament at top */}
          <circle cx="250" cy="60" r="6" fill="rgba(212,175,55,0.15)" />
          <circle
            cx="250"
            cy="60"
            r="12"
            stroke="rgba(212,175,55,0.1)"
            strokeWidth="0.6"
          />
          <path
            d="M235,60 L250,42 L265,60"
            stroke="rgba(212,175,55,0.14)"
            strokeWidth="0.8"
            fill="none"
          />
          {/* Base ornaments */}
          <line
            x1="50"
            y1="680"
            x2="75"
            y2="680"
            stroke="rgba(212,175,55,0.15)"
            strokeWidth="1.2"
          />
          <line
            x1="425"
            y1="680"
            x2="450"
            y2="680"
            stroke="rgba(212,175,55,0.15)"
            strokeWidth="1.2"
          />
          {/* Small heart at arch crown */}
          <path
            d="M250,42 C250,38 246,35 243,38 C240,35 236,38 236,42 C236,47 250,54 250,54 C250,54 264,47 264,42 C264,38 260,35 257,38 C254,35 250,38 250,42Z"
            fill="rgba(142,56,85,0.12)"
            stroke="rgba(142,56,85,0.18)"
            strokeWidth="0.4"
          />
        </svg>
      </div>

      {/* Floral corner decorations — smaller on mobile */}
      <FloralCorner
        className="absolute top-2 left-0 sm:top-4 sm:left-2 pointer-events-none opacity-35 sm:opacity-70"
        size={isMobile ? 60 : 100}
      />
      <FloralCorner
        className="absolute top-2 right-0 sm:top-4 sm:right-2 pointer-events-none opacity-35 sm:opacity-70"
        size={isMobile ? 60 : 100}
        flip
      />
      <FloralCorner
        className="absolute bottom-2 left-0 sm:bottom-4 sm:left-2 pointer-events-none opacity-20 sm:opacity-45 rotate-180 -scale-x-100"
        size={isMobile ? 50 : 90}
      />
      <FloralCorner
        className="absolute bottom-2 right-0 sm:bottom-4 sm:right-2 pointer-events-none opacity-20 sm:opacity-45 rotate-180"
        size={isMobile ? 50 : 90}
        flip
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 sm:px-12 md:px-16 pt-14 sm:pt-24 pb-8 max-w-3xl mx-auto w-full">
        {/* Invocation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="mb-6"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="h-px w-14 bg-gradient-to-r from-transparent to-gold/20" />
            <SmallHeart className="w-3 h-3 text-rose-gold/30" />
            <div className="h-px w-14 bg-gradient-to-l from-transparent to-gold/20" />
          </div>
          <p className="telugu text-gold/70 text-sm sm:text-base tracking-widest">
            ॐ శ్రీ గణేశాయ నమః
          </p>
        </motion.div>

        {/* Badge — romantic pill */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-6 sm:mb-12"
        >
          <span
            className="inline-flex items-center gap-2 px-8 py-2.5 rounded-full text-[9px] sm:text-[10px] uppercase tracking-[0.45em] text-gold/60 font-medium"
            style={{
              border: "1px solid rgba(212,175,55,0.12)",
              background:
                "linear-gradient(135deg, rgba(212,175,55,0.05), rgba(142,56,85,0.03))",
              boxShadow:
                "0 2px 30px rgba(212,175,55,0.05), inset 0 1px 0 rgba(212,175,55,0.05)",
            }}
          >
            <Heart
              className="w-2.5 h-2.5 text-rose-gold/40"
              fill="rgba(142,56,85,0.35)"
            />
            Wedding Invitation
            <Heart
              className="w-2.5 h-2.5 text-rose-gold/40"
              fill="rgba(142,56,85,0.35)"
            />
          </span>
        </motion.div>

        {/* Couple Photos — Premium gold frames with warm ambient glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex items-center justify-center gap-6 sm:gap-12 mb-8 sm:mb-14"
        >
          {/* Bride */}
          <div className="relative group">
            <div
              className="photo-frame-gold w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full overflow-hidden flex items-center justify-center glow-pulse"
              style={{ background: "var(--theme-photo-bg)" }}
            >
              {couple.bride.photo ? (
                <img
                  src={couple.bride.photo}
                  alt={couple.bride.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-4xl sm:text-4xl md:text-5xl">👰</span>
              )}
            </div>
            {/* <span
              className="absolute -bottom-5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-[8px] sm:text-[9px] telugu text-gold/50 bg-dark-bg/95 backdrop-blur-sm whitespace-nowrap"
              style={{
                border: "1px solid rgba(212,175,55,0.12)",
                boxShadow: "0 2px 12px rgba(0,0,0,0.3)",
              }}
            >
              వధువు
            </span> */}
          </div>

          {/* Romantic heart connector — static on mobile */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-px h-6 bg-gradient-to-b from-transparent via-gold/12 to-transparent" />
            {isMobile ? (
              <Heart
                className="w-5 h-5 text-rose-gold/35"
                fill="rgba(142,56,85,0.22)"
              />
            ) : (
              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Heart
                  className="w-5 h-5 sm:w-6 sm:h-6 text-rose-gold/35"
                  fill="rgba(142,56,85,0.22)"
                />
              </motion.div>
            )}
            <div className="w-px h-6 bg-gradient-to-b from-transparent via-gold/12 to-transparent" />
          </div>

          {/* Groom */}
          <div className="relative group">
            <div
              className="photo-frame-gold w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full overflow-hidden flex items-center justify-center glow-pulse"
              style={{ background: "var(--theme-photo-bg)" }}
            >
              {couple.groom.photo ? (
                <img
                  src={couple.groom.photo}
                  alt={couple.groom.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-4xl sm:text-4xl md:text-5xl">🤵</span>
              )}
            </div>
            {/* <span
              className="absolute -bottom-5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-[8px] sm:text-[9px] telugu text-gold/50 bg-dark-bg/95 backdrop-blur-sm whitespace-nowrap"
              style={{
                border: "1px solid rgba(212,175,55,0.12)",
                boxShadow: "0 2px 12px rgba(0,0,0,0.3)",
              }}
            >
              వరుడు
            </span> */}
          </div>
        </motion.div>

        {/* Bride Name — elegant sizing with breathing room */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="px-2"
        >
          <h2 className="font-script text-[2.25rem] sm:text-[2.75rem] md:text-[3.25rem] gold-shimmer leading-snug">
            {couple.bride.name}
          </h2>
          <p className="telugu text-gold/50 text-xs sm:text-sm mt-0.5">
            {couple.bride.nameTelugu}
          </p>
        </motion.div>

        {/* Romantic heart connector */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.6, type: "spring" }}
          className="my-2 sm:my-4 flex items-center justify-center gap-4"
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-rose-gold/25 to-gold/25" />
          <Heart
            className="w-6 h-6 sm:w-7 sm:h-7 text-rose-gold/50"
            fill="rgba(142,56,85,0.35)"
          />
          <div className="h-px w-16 bg-gradient-to-l from-transparent via-rose-gold/25 to-gold/25" />
        </motion.div>

        {/* Groom Name — matching elegant sizing */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.9 }}
          className="px-2"
        >
          <h2 className="font-script text-[2.25rem] sm:text-[2.75rem] md:text-[3.25rem] gold-shimmer leading-snug">
            {couple.groom.name}
          </h2>
          <p className="telugu text-gold/50 text-xs sm:text-sm mt-0.5">
            {couple.groom.nameTelugu}
          </p>
        </motion.div>

        {/* Romantic invitation text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.3 }}
          className="mt-6 sm:mt-10 space-y-2 sm:space-y-3"
        >
          <p className="text-cream/65 text-[10px] sm:text-[11px] uppercase tracking-[0.45em] font-light">
            Request the honour of your presence
          </p>
          <p className="font-script text-lg sm:text-xl text-rose-gold/80 italic">
            at the celebration of our love
          </p>
          {/* <p className="telugu text-gold/55 text-xs sm:text-sm leading-relaxed">
            మా ప్రేమ పెళ్ళికి మీకు హృదయపూర్వక ఆహ్వానం
          </p> */}
        </motion.div>

        {/* Ornament divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          <OrnamentDivider className="my-6 sm:my-10" />
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.7 }}
        >
          <Countdown
            targetDate={nextEvent.date}
            label={`Countdown to ${nextEvent.title}`}
          />
        </motion.div>

        {/* Family — elegant premium cards with depth */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.2 }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6"
          style={{ marginTop: "1.5rem", padding: "10px 0", paddingBottom: "0" }}
        >
          {[
            { label: "Bride's Family", family: couple.brideFamily },
            { label: "Groom's Family", family: couple.groomFamily },
          ].map((side) => (
            <div
              key={side.label}
              className="family-card relative p-5 sm:p-8 text-center rounded-2xl overflow-hidden group"
              style={{
                background: "var(--theme-card-bg)",
                boxShadow: "var(--theme-card-shadow)",
                paddingBottom: "15px",
              }}
            >
              {/* Top shine line */}
              <div
                className="absolute top-0 left-[10%] right-[10%] h-px"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(212,175,55,0.2), transparent)",
                }}
              />
              {/* Bottom rose accent */}
              <div
                className="absolute bottom-0 left-[18%] right-[18%] h-px"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(142,56,85,0.1), transparent)",
                }}
              />
              {/* Corner accents */}
              <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-gold/[0.08] rounded-tl-lg" />
              <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-gold/[0.08] rounded-tr-lg" />
              <SmallHeart className="w-3.5 h-3.5 text-rose-gold/18 mx-auto mb-2.5" />
              <p className="text-gold/65 text-[9px] uppercase tracking-[0.35em] mb-3.5 font-medium">
                {side.label}
              </p>
              <p className="text-[15px] sm:text-base text-cream/80 font-light leading-relaxed px-1">
                {side.family.father} & {side.family.mother}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll CTA — static on mobile to avoid infinite animation */}
      <div
        className="flex flex-col items-center gap-1.5 cursor-pointer group mt-4"
        onClick={() =>
          document
            .getElementById("events")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <span className="text-[8px] uppercase tracking-[0.4em] text-gold/40 group-hover:text-gold/60 transition-colors">
          Explore
        </span>
        <ChevronDown className="w-3.5 h-3.5 text-gold/35 group-hover:text-gold/55 transition-colors" />
      </div>
    </section>
  );
}
