import { motion } from "framer-motion";
import { Heart, Share2 } from "lucide-react";
import { weddingConfig } from "../data/weddingConfig";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import {
  FloralCorner,
  OrnamentDivider,
  FloralWreath,
} from "./Decorations/FloralElements";

export default function Footer() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });
  const { bride, groom } = weddingConfig.couple;

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareText = `You're invited to the wedding of ${groom.name} & ${bride.name}!`;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${groom.name} & ${bride.name} Wedding`,
          text: shareText,
          url: shareUrl,
        });
      } catch {
        /* user cancelled */
      }
    } else {
      navigator.clipboard?.writeText(shareUrl);
    }
  };

  return (
    <footer
      ref={ref}
      className="relative py-24 sm:py-32 overflow-hidden px-4 sm:px-6"
      style={{ background: "linear-gradient(180deg, #06040A, #040208)" }}
    >
      {/* Glowing section separator at top */}
      <div
        className="absolute top-0 left-0 right-0 glow-line"
        style={{ height: "1px" }}
      />

      {/* Ambient romantic glow — more dramatic */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at 50% 40%, rgba(142,56,85,0.05) 0%, transparent 50%),
            radial-gradient(circle at 50% 60%, rgba(212,175,55,0.035) 0%, transparent 40%)
          `,
        }}
      />

      {/* Breathing glow */}
      <div
        className="absolute inset-0 pointer-events-none breathe-glow"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(142,56,85,0.03) 0%, transparent 45%)",
        }}
      />

      {/* Floral corners */}
      <FloralCorner
        className="absolute top-4 left-0 pointer-events-none opacity-18"
        size={70}
      />
      <FloralCorner
        className="absolute top-4 right-0 pointer-events-none opacity-18"
        size={70}
        flip
      />

      {/* Top divider */}
      <div
        className="px-8 sm:px-8"
        style={{ maxWidth: "768px", marginLeft: "auto", marginRight: "auto" }}
      >
        <OrnamentDivider className="mb-14" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center relative z-10 px-8 sm:px-8"
        style={{ maxWidth: "768px", marginLeft: "auto", marginRight: "auto" }}
      >
        {/* Romantic header */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="font-script text-xl sm:text-2xl text-rose-gold/55 mb-3 italic"
        >
          Forever begins with us
        </motion.p>

        {/* Names with wreath behind */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="relative inline-block"
        >
          {/* Wreath decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15 pointer-events-none">
            <FloralWreath size={220} />
          </div>
          <div className="relative py-10 px-14">
            <p className="font-script text-3xl sm:text-4xl md:text-[2.75rem] gold-shimmer mb-3">
              {groom.name.split(" ").pop()}
            </p>
            <div className="flex items-center justify-center gap-4 my-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-rose-gold/30 to-gold/30" />
              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <Heart
                  className="w-4 h-4 text-rose-gold/55"
                  fill="rgba(142,56,85,0.45)"
                />
              </motion.div>
              <div className="h-px w-12 bg-gradient-to-l from-transparent via-rose-gold/30 to-gold/30" />
            </div>
            <p className="font-script text-3xl sm:text-4xl md:text-[2.75rem] gold-shimmer">
              {bride.name.split(" ").pop()}
            </p>
          </div>
        </motion.div>

        {/* Telugu blessing */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="telugu text-sm sm:text-base text-gold/60 mb-12 leading-relaxed"
        >
          మీ ఆశీర్వాదం మా పెళ్ళికి వెలుగు
        </motion.p>

        {/* Share */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <button onClick={handleShare} className="btn-premium cursor-pointer">
            <Share2 className="w-3 h-3" />
            Share Invitation
          </button>
        </motion.div>

        {/* Romantic separator */}
        <div
          className="romantic-separator mb-6"
          style={{ maxWidth: "200px", marginLeft: "auto", marginRight: "auto" }}
        />

        {/* Made with love */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-cream/35 text-[10px] tracking-[0.2em] uppercase flex items-center justify-center gap-1.5"
        >
          Made with{" "}
          <Heart
            className="w-2.5 h-2.5 text-rose-gold/45 heartbeat"
            fill="rgba(142,56,85,0.35)"
          />{" "}
          for our special day
        </motion.p>
      </motion.div>
    </footer>
  );
}
