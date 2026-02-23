import { motion } from "framer-motion";

/**
 * Permanent decorative curtain drapes on both screen edges,
 * like a theater stage frame. Renders after the CurtainReveal opens.
 */
export default function StageCurtains() {
  return (
    <div className="fixed inset-0 z-30 pointer-events-none overflow-hidden">
      {/* ─── Left gathered drape ─── */}
      <motion.div
        className="absolute top-0 bottom-0 left-0 w-[10px] sm:w-[14px] md:w-[18px] lg:w-[22px]"
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <svg
          viewBox="0 0 80 1000"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full"
        >
          <defs>
            {/* Base velvet gradient */}
            <linearGradient id="velvetL" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#3A0E1E" />
              <stop offset="35%" stopColor="#280A16" />
              <stop offset="70%" stopColor="#1C060E" />
              <stop offset="100%" stopColor="#120408" />
            </linearGradient>

            {/* Inner shadow gradient for depth */}
            <linearGradient id="shadowL" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(0,0,0,0)" />
              <stop offset="60%" stopColor="rgba(0,0,0,0.15)" />
              <stop offset="100%" stopColor="rgba(0,0,0,0.5)" />
            </linearGradient>

            {/* Fold highlight */}
            <linearGradient id="foldHighL" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(100,25,40,0)" />
              <stop offset="20%" stopColor="rgba(100,25,40,0.15)" />
              <stop offset="40%" stopColor="rgba(65,12,24,0)" />
              <stop offset="55%" stopColor="rgba(115,30,45,0.12)" />
              <stop offset="75%" stopColor="rgba(48,10,20,0)" />
              <stop offset="100%" stopColor="rgba(82,20,34,0.1)" />
            </linearGradient>

            {/* Gold tieback gradient */}
            <radialGradient id="tiebackGoldL" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.7" />
              <stop offset="60%" stopColor="#B8962E" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#8B6914" stopOpacity="0.3" />
            </radialGradient>

            {/* Clip path for gathered shape */}
            <clipPath id="drapeShapeL">
              <path
                d="
                  M 0,0
                  L 80,0
                  C 75,40  65,100  55,160
                  C 48,210  42,250  38,290
                  C 34,330  32,360  32,400
                  C 32,440  34,480  38,520
                  C 42,560  48,610  52,660
                  C 56,710  62,770  66,830
                  C 70,870  75,920  80,1000
                  L 0,1000
                  Z
                "
              />
            </clipPath>
          </defs>

          {/* Main drape shape */}
          <g clipPath="url(#drapeShapeL)">
            {/* Base velvet fill */}
            <rect width="80" height="1000" fill="url(#velvetL)" />

            {/* Fold highlights */}
            <rect width="80" height="1000" fill="url(#foldHighL)" />

            {/* Vertical fold lines — gathered fabric effect */}
            {[10, 22, 35, 48, 60, 72].map((x) => (
              <line
                key={x}
                x1={x}
                y1="0"
                x2={x}
                y2="1000"
                stroke="rgba(0,0,0,0.2)"
                strokeWidth="1.5"
              />
            ))}
            {[16, 30, 42, 55, 66].map((x) => (
              <line
                key={x}
                x1={x}
                y1="0"
                x2={x}
                y2="1000"
                stroke="rgba(115,30,45,0.12)"
                strokeWidth="1"
              />
            ))}

            {/* Inner shadow for depth on the curved edge */}
            <rect width="80" height="1000" fill="url(#shadowL)" />
          </g>

          {/* Gold edge trim on inner curve */}
          <path
            d="
              M 80,0
              C 75,40  65,100  55,160
              C 48,210  42,250  38,290
              C 34,330  32,360  32,400
              C 32,440  34,480  38,520
              C 42,560  48,610  52,660
              C 56,710  62,770  66,830
              C 70,870  75,920  80,1000
            "
            fill="none"
            stroke="rgba(212,175,55,0.25)"
            strokeWidth="1"
          />

          {/* Tieback ornament — gold rope at gathering point */}
          <ellipse
            cx="38"
            cy="400"
            rx="12"
            ry="18"
            fill="url(#tiebackGoldL)"
            stroke="rgba(212,175,55,0.45)"
            strokeWidth="0.8"
          />
          <line
            x1="26"
            y1="400"
            x2="50"
            y2="400"
            stroke="rgba(212,175,55,0.3)"
            strokeWidth="2"
          />
          {/* Tieback rope texture lines */}
          <line
            x1="28"
            y1="394"
            x2="48"
            y2="394"
            stroke="rgba(212,175,55,0.15)"
            strokeWidth="0.6"
          />
          <line
            x1="28"
            y1="406"
            x2="48"
            y2="406"
            stroke="rgba(212,175,55,0.15)"
            strokeWidth="0.6"
          />
        </svg>
      </motion.div>

      {/* ─── Right gathered drape (mirrored) ─── */}
      <motion.div
        className="absolute top-0 bottom-0 right-0 w-[10px] sm:w-[14px] md:w-[18px] lg:w-[22px]"
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <svg
          viewBox="0 0 80 1000"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full"
          style={{ transform: "scaleX(-1)" }}
        >
          <defs>
            {/* Reuse gradients with unique IDs */}
            <linearGradient id="velvetR" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#3A0E1E" />
              <stop offset="35%" stopColor="#280A16" />
              <stop offset="70%" stopColor="#1C060E" />
              <stop offset="100%" stopColor="#120408" />
            </linearGradient>

            <linearGradient id="shadowR" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(0,0,0,0)" />
              <stop offset="60%" stopColor="rgba(0,0,0,0.15)" />
              <stop offset="100%" stopColor="rgba(0,0,0,0.5)" />
            </linearGradient>

            <linearGradient id="foldHighR" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(100,25,40,0)" />
              <stop offset="20%" stopColor="rgba(100,25,40,0.15)" />
              <stop offset="40%" stopColor="rgba(65,12,24,0)" />
              <stop offset="55%" stopColor="rgba(115,30,45,0.12)" />
              <stop offset="75%" stopColor="rgba(48,10,20,0)" />
              <stop offset="100%" stopColor="rgba(82,20,34,0.1)" />
            </linearGradient>

            <radialGradient id="tiebackGoldR" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.7" />
              <stop offset="60%" stopColor="#B8962E" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#8B6914" stopOpacity="0.3" />
            </radialGradient>

            <clipPath id="drapeShapeR">
              <path
                d="
                  M 0,0
                  L 80,0
                  C 75,40  65,100  55,160
                  C 48,210  42,250  38,290
                  C 34,330  32,360  32,400
                  C 32,440  34,480  38,520
                  C 42,560  48,610  52,660
                  C 56,710  62,770  66,830
                  C 70,870  75,920  80,1000
                  L 0,1000
                  Z
                "
              />
            </clipPath>
          </defs>

          <g clipPath="url(#drapeShapeR)">
            <rect width="80" height="1000" fill="url(#velvetR)" />
            <rect width="80" height="1000" fill="url(#foldHighR)" />

            {[10, 22, 35, 48, 60, 72].map((x) => (
              <line
                key={x}
                x1={x}
                y1="0"
                x2={x}
                y2="1000"
                stroke="rgba(0,0,0,0.2)"
                strokeWidth="1.5"
              />
            ))}
            {[16, 30, 42, 55, 66].map((x) => (
              <line
                key={x}
                x1={x}
                y1="0"
                x2={x}
                y2="1000"
                stroke="rgba(115,30,45,0.12)"
                strokeWidth="1"
              />
            ))}

            <rect width="80" height="1000" fill="url(#shadowR)" />
          </g>

          <path
            d="
              M 80,0
              C 75,40  65,100  55,160
              C 48,210  42,250  38,290
              C 34,330  32,360  32,400
              C 32,440  34,480  38,520
              C 42,560  48,610  52,660
              C 56,710  62,770  66,830
              C 70,870  75,920  80,1000
            "
            fill="none"
            stroke="rgba(212,175,55,0.25)"
            strokeWidth="1"
          />

          <ellipse
            cx="38"
            cy="400"
            rx="12"
            ry="18"
            fill="url(#tiebackGoldR)"
            stroke="rgba(212,175,55,0.45)"
            strokeWidth="0.8"
          />
          <line
            x1="26"
            y1="400"
            x2="50"
            y2="400"
            stroke="rgba(212,175,55,0.3)"
            strokeWidth="2"
          />
          <line
            x1="28"
            y1="394"
            x2="48"
            y2="394"
            stroke="rgba(212,175,55,0.15)"
            strokeWidth="0.6"
          />
          <line
            x1="28"
            y1="406"
            x2="48"
            y2="406"
            stroke="rgba(212,175,55,0.15)"
            strokeWidth="0.6"
          />
        </svg>
      </motion.div>
    </div>
  );
}
