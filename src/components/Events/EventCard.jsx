import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Navigation } from "lucide-react";

export default function EventCard({ event }) {
  const {
    title,
    titleTelugu,
    emoji,
    displayDate,
    displayDateTelugu,
    time,
    muhurtam,
    venue,
    rituals,
  } = event;

  return (
    <div className="event-card">
      {/* Top accent shine — animated gold gradient */}
      <div
        className="h-[2px] w-full"
        style={{
          background:
            "linear-gradient(to right, transparent 5%, rgba(142,56,85,0.22) 20%, rgba(212,175,55,0.45) 50%, rgba(142,56,85,0.22) 80%, transparent 95%)",
          boxShadow: "0 0 10px rgba(212,175,55,0.12)",
        }}
      />

      {/* Ambient glow inside card — more dramatic */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-40 pointer-events-none breathe-glow"
        style={{
          background:
            "radial-gradient(ellipse, rgba(212,175,55,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="p-5 sm:p-7 lg:p-9">
        {/* Title row — emoji + name */}
        <div className="flex items-center gap-4 sm:gap-5 mb-5 sm:mb-6">
          <motion.div
            whileHover={{ scale: 1.05, rotate: 3 }}
            className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl flex items-center justify-center flex-shrink-0"
            style={{
              background:
                "linear-gradient(145deg, rgba(212,175,55,0.09), rgba(142,56,85,0.035), rgba(212,175,55,0.02))",
              boxShadow:
                "0 6px 30px rgba(0,0,0,0.25), inset 0 1px 0 rgba(212,175,55,0.06)",
            }}
          >
            <span className="text-3xl sm:text-4xl">{emoji}</span>
          </motion.div>
          <div>
            <h3 className="font-display text-xl sm:text-2xl lg:text-[1.875rem] gold-shimmer leading-tight">
              {title}
            </h3>
            <p className="telugu text-xs text-gold/55 mt-1.5">{titleTelugu}</p>
          </div>
        </div>

        {/* Info rows */}
        <div className="space-y-3 mb-6">
          {/* Date */}
          <div className="info-row">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(212,175,55,0.08), rgba(142,56,85,0.03))",
              }}
            >
              <Calendar className="w-4 h-4 text-gold/60" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-cream/65 text-sm font-light">{displayDate}</p>
              <p className="telugu text-[11px] text-gold/50 mt-0.5">
                {displayDateTelugu}
              </p>
            </div>
          </div>

          {/* Time */}
          <div className="info-row">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(212,175,55,0.08), rgba(142,56,85,0.03))",
              }}
            >
              <Clock className="w-4 h-4 text-gold/60" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-cream/65 text-sm font-light">{time}</p>
              {muhurtam && (
                <p className="text-gold/55 text-[10px] mt-0.5 tracking-wide">
                  Muhurtam: {muhurtam}
                </p>
              )}
            </div>
          </div>

          {/* Venue */}
          <div className="info-row">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
              style={{
                background:
                  "linear-gradient(135deg, rgba(212,175,55,0.08), rgba(142,56,85,0.03))",
              }}
            >
              <MapPin className="w-4 h-4 text-gold/60" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-cream/65 text-sm font-light">{venue.name}</p>
              <p className="telugu text-[11px] text-gold/50 mt-0.5">
                {venue.nameTelugu}
              </p>
              <p className="text-cream/45 text-[10px] mt-1.5 leading-relaxed">
                {venue.address}
              </p>
            </div>
          </div>
        </div>

        {/* Directions — premium button */}
        <div
          className="text-center"
          style={{
            padding: "10px",
          }}
        >
          <a
            href={venue.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-premium"
          >
            <Navigation className="w-3 h-3" />
            Get Directions
          </a>
        </div>
      </div>

      {/* Bottom accent — glowing wine-gold */}
      <div
        className="h-[2px] w-full"
        style={{
          background:
            "linear-gradient(to right, transparent 15%, rgba(142,56,85,0.15) 35%, rgba(212,175,55,0.22) 50%, rgba(142,56,85,0.15) 65%, transparent 85%)",
          boxShadow: "0 0 8px rgba(142,56,85,0.06)",
        }}
      />
    </div>
  );
}
