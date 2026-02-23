import { useCountdown } from "../../hooks/useCountdown";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Countdown({
  targetDate,
  label = "Until the Celebration",
}) {
  const { days, hours, minutes, seconds, isOver } = useCountdown(targetDate);

  const units = [
    { value: days, label: "Days", t: "రోజులు" },
    { value: hours, label: "Hours", t: "గంటలు" },
    { value: minutes, label: "Min", t: "ని." },
    { value: seconds, label: "Sec", t: "సె." },
  ];

  if (isOver) {
    return (
      <div className="text-center py-4">
        <p className="font-display text-lg text-gold/60">
          The Celebration Has Begun
        </p>
        <p className="telugu text-gold/30 text-sm mt-1">
          వేడుకలు ప్రారంభమయ్యాయి!
        </p>
      </div>
    );
  }

  return (
    <div className="text-center">
      <p className="text-[10px] uppercase tracking-[0.35em] text-gold/30 mb-6 font-medium flex items-center justify-center gap-2">
        <Heart
          className="w-2 h-2 text-rose-gold/25"
          fill="rgba(142,56,85,0.18)"
        />
        {label}
        <Heart
          className="w-2 h-2 text-rose-gold/25"
          fill="rgba(142,56,85,0.18)"
        />
      </p>
      <div className="flex justify-center items-center gap-3 sm:gap-4">
        {units.map((u, i) => (
          <motion.div
            key={u.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
          >
            <div className="countdown-box">
              <motion.span
                key={u.value}
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                className="block text-2xl sm:text-3xl md:text-4xl font-display font-bold gold-shimmer leading-none"
              >
                {String(u.value).padStart(2, "0")}
              </motion.span>
              <span className="block text-[7px] sm:text-[8px] uppercase tracking-[0.25em] text-cream/30 mt-2.5 font-medium">
                {u.label}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
