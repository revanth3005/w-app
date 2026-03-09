import { motion } from "framer-motion";
import { Heart, CheckCircle } from "lucide-react";
import { weddingConfig } from "../../data/weddingConfig";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import EventCard from "./EventCard";
import { FloralCorner, OrnamentDivider } from "../Decorations/FloralElements";

const eventKeys = ["engagement", "marriage", "reception"];
const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

/* Split events into completed and upcoming */
function categorizeEvents() {
  const now = new Date();
  const completed = [];
  const upcoming = [];
  for (const key of eventKeys) {
    const eventDate = new Date(weddingConfig.events[key].date);
    if (eventDate > now) upcoming.push(key);
    else completed.push(key);
  }
  return { completed, upcoming };
}

export default function EventsSection() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.05 });
  const { completed, upcoming } = categorizeEvents();

  // If all events are done, hide the entire section
  if (upcoming.length === 0 && completed.length === 0) return null;

  return (
    <section
      id="events"
      ref={ref}
      className="relative py-28 sm:py-36 overflow-hidden section-ornate"
      style={{
        background: "var(--theme-events-bg)",
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >
      {/* Glowing section separator at top */}
      <div
        className="absolute top-0 left-0 right-0 glow-line"
        style={{ height: "1px" }}
      />

      {/* Ambient romantic glow — desktop only */}
      {!isMobile && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
            radial-gradient(ellipse at 50% 15%, rgba(212,175,55,0.05) 0%, transparent 45%),
            radial-gradient(ellipse at 30% 70%, rgba(142,56,85,0.03) 0%, transparent 35%),
            radial-gradient(ellipse at 70% 70%, rgba(142,56,85,0.03) 0%, transparent 35%),
            radial-gradient(circle at 50% 50%, rgba(212,175,55,0.025) 0%, transparent 40%)
          `,
          }}
        />
      )}

      {/* Breathing center glow — desktop only */}
      {!isMobile && (
        <div
          className="absolute inset-0 pointer-events-none breathe-glow"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(212,175,55,0.03) 0%, transparent 45%)",
          }}
        />
      )}

      {/* Twinkling stars for events section — hidden on mobile for perf */}
      {!isMobile && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[
            { x: "5%", y: "20%", d: "4s", del: "0s", s: 1.5 },
            { x: "95%", y: "30%", d: "3.5s", del: "1s", s: 2 },
            { x: "15%", y: "60%", d: "3s", del: "2s", s: 1.5 },
            { x: "85%", y: "70%", d: "4s", del: "0.5s", s: 2 },
            { x: "50%", y: "10%", d: "5s", del: "1.5s", s: 2 },
            { x: "30%", y: "90%", d: "3.5s", del: "3s", s: 1.5 },
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
                boxShadow: "0 0 6px rgba(212,175,55,0.2)",
              }}
            />
          ))}
        </div>
      )}

      {/* Floral corners — hidden on mobile for perf */}
      {!isMobile && (
        <>
          <FloralCorner
            className="absolute top-4 right-0 pointer-events-none opacity-25"
            size={85}
            flip
          />
          <FloralCorner
            className="absolute bottom-4 left-0 pointer-events-none opacity-20 rotate-180 -scale-x-100"
            size={80}
          />
        </>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="relative z-10 px-2 sm:px-12 md:px-16 w-full"
        style={{ maxWidth: "768px", marginLeft: "auto", marginRight: "auto" }}
      >
        {/* Header — romantic style */}
        <div className="text-center mb-14 sm:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-[10px] uppercase tracking-[0.4em] text-gold/60 mb-3 font-medium flex items-center justify-center gap-2"
          >
            <Heart
              className="w-2.5 h-2.5 text-rose-gold/50"
              fill="rgba(142,56,85,0.40)"
            />
            Celebrations
            <Heart
              className="w-2.5 h-2.5 text-rose-gold/50"
              fill="rgba(142,56,85,0.40)"
            />
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="font-display text-3xl sm:text-4xl lg:text-[3.5rem] gold-shimmer leading-tight"
          >
            Wedding Events
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ delay: 0.28 }}
            className="font-script text-base sm:text-lg text-rose-gold/50 mt-2 italic"
          >
            Where our journey begins
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ delay: 0.35 }}
            className="telugu text-sm text-gold/55 mt-2"
          >
            శుభ కార్యక్రమాలు
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isVisible ? { scaleX: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <OrnamentDivider className="mt-5" />
          </motion.div>
        </div>

        {/* Completed events — compact mini cards */}
        {completed.length > 0 && (
          <div className="mb-8 sm:mb-12">
            <p className="text-center text-[9px] uppercase tracking-[0.35em] text-gold/40 mb-4 font-medium">
              Completed
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {completed.map((key) => {
                const evt = weddingConfig.events[key];
                return (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full"
                    style={{
                      background: "var(--theme-card-bg)",
                      border:
                        "1px solid rgba(var(--completed-border, 212,175,55), 0.12)",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
                      opacity: 0.7,
                    }}
                  >
                    <span className="text-base">{evt.emoji}</span>
                    <span className="text-xs font-medium text-cream/60">
                      {evt.title}
                    </span>
                    <CheckCircle className="w-3.5 h-3.5 text-green-500/70" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}

        {/* Upcoming Events — full cards */}
        <div className="flex flex-col items-center gap-10 sm:gap-14">
          {upcoming.map((key, i) => (
            <motion.div
              key={key}
              className="w-full"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.15,
                ease: [0.215, 0.61, 0.355, 1],
              }}
            >
              <EventCard event={weddingConfig.events[key]} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
