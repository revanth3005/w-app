/* Premium SVG Floral Decorations — inspired by Adobe Express wreath/arch frames */

export function FloralCorner({ className = "", flip = false, size = 120 }) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      style={{ transform: flip ? "scaleX(-1)" : "none" }}
      fill="none"
    >
      {/* Main branch */}
      <path
        d="M10,10 C30,25 40,60 50,100 C55,120 55,150 50,180"
        stroke="rgba(91,142,111,0.35)"
        strokeWidth="1.2"
      />
      <path
        d="M10,10 C25,15 50,30 75,70"
        stroke="rgba(91,142,111,0.25)"
        strokeWidth="0.8"
      />

      {/* Leaves */}
      <ellipse
        cx="30"
        cy="35"
        rx="12"
        ry="6"
        transform="rotate(-30 30 35)"
        fill="rgba(27,107,74,0.18)"
        stroke="rgba(91,142,111,0.28)"
        strokeWidth="0.5"
      />
      <ellipse
        cx="40"
        cy="55"
        rx="14"
        ry="7"
        transform="rotate(-45 40 55)"
        fill="rgba(27,107,74,0.14)"
        stroke="rgba(91,142,111,0.22)"
        strokeWidth="0.5"
      />
      <ellipse
        cx="45"
        cy="80"
        rx="13"
        ry="6"
        transform="rotate(-50 45 80)"
        fill="rgba(27,107,74,0.12)"
        stroke="rgba(91,142,111,0.22)"
        strokeWidth="0.5"
      />
      <ellipse
        cx="50"
        cy="110"
        rx="11"
        ry="5.5"
        transform="rotate(-55 50 110)"
        fill="rgba(27,107,74,0.1)"
        stroke="rgba(91,142,111,0.18)"
        strokeWidth="0.4"
      />
      <ellipse
        cx="52"
        cy="140"
        rx="10"
        ry="5"
        transform="rotate(-60 52 140)"
        fill="rgba(27,107,74,0.08)"
        stroke="rgba(91,142,111,0.14)"
        strokeWidth="0.4"
      />

      {/* Right side leaves */}
      <ellipse
        cx="35"
        cy="42"
        rx="10"
        ry="5.5"
        transform="rotate(20 35 42)"
        fill="rgba(27,107,74,0.14)"
        stroke="rgba(91,142,111,0.22)"
        strokeWidth="0.5"
      />
      <ellipse
        cx="48"
        cy="68"
        rx="11"
        ry="5"
        transform="rotate(15 48 68)"
        fill="rgba(27,107,74,0.12)"
        stroke="rgba(91,142,111,0.2)"
        strokeWidth="0.4"
      />
      <ellipse
        cx="53"
        cy="95"
        rx="10"
        ry="5"
        transform="rotate(10 53 95)"
        fill="rgba(27,107,74,0.1)"
        stroke="rgba(91,142,111,0.18)"
        strokeWidth="0.4"
      />

      {/* Flower blooms — wine warmth */}
      <g transform="translate(22, 22)">
        {[0, 72, 144, 216, 288].map((angle, i) => (
          <ellipse
            key={i}
            cx="0"
            cy="-8"
            rx="5"
            ry="8"
            transform={`rotate(${angle})`}
            fill={
              i % 2 === 0 ? "rgba(212,168,172,0.24)" : "rgba(142,56,85,0.2)"
            }
            stroke="rgba(142,56,85,0.18)"
            strokeWidth="0.3"
          />
        ))}
        <circle cx="0" cy="0" r="3" fill="rgba(200,169,81,0.3)" />
      </g>

      <g transform="translate(55, 125)">
        {[0, 60, 120, 180, 240, 300].map((angle, i) => (
          <ellipse
            key={i}
            cx="0"
            cy="-6"
            rx="4"
            ry="6"
            transform={`rotate(${angle})`}
            fill={
              i % 2 === 0 ? "rgba(212,168,172,0.2)" : "rgba(142,56,85,0.14)"
            }
            stroke="rgba(142,56,85,0.12)"
            strokeWidth="0.3"
          />
        ))}
        <circle cx="0" cy="0" r="2.5" fill="rgba(200,169,81,0.24)" />
      </g>

      {/* Small buds */}
      <circle cx="42" cy="48" r="2" fill="rgba(200,169,81,0.18)" />
      <circle cx="38" cy="72" r="1.5" fill="rgba(212,168,172,0.18)" />
      <circle cx="55" cy="100" r="1.5" fill="rgba(200,169,81,0.14)" />

      {/* Gold dot accents */}
      <circle cx="15" cy="15" r="1" fill="rgba(200,169,81,0.3)" />
      <circle cx="60" cy="60" r="0.8" fill="rgba(200,169,81,0.2)" />
      <circle cx="25" cy="50" r="0.6" fill="rgba(200,169,81,0.15)" />
    </svg>
  );
}

export function FloralWreath({ className = "", size = 280 }) {
  return (
    <svg
      viewBox="0 0 300 300"
      width={size}
      height={size}
      className={className}
      fill="none"
    >
      {/* Wreath circle path */}
      <circle
        cx="150"
        cy="150"
        r="130"
        stroke="rgba(91,142,111,0.18)"
        strokeWidth="0.5"
        strokeDasharray="3 6"
      />

      {/* Left arc of leaves */}
      {Array.from({ length: 10 }).map((_, i) => {
        const angle = -90 + i * 18;
        const rad = (angle * Math.PI) / 180;
        const x = 150 + 125 * Math.cos(rad);
        const y = 150 + 125 * Math.sin(rad);
        return (
          <ellipse
            key={`l-${i}`}
            cx={x}
            cy={y}
            rx="10"
            ry="5"
            transform={`rotate(${angle + 90} ${x} ${y})`}
            fill={`rgba(27,107,74,${0.1 + (i % 3) * 0.04})`}
            stroke="rgba(91,142,111,0.18)"
            strokeWidth="0.4"
          />
        );
      })}

      {/* Right arc of leaves */}
      {Array.from({ length: 10 }).map((_, i) => {
        const angle = 90 + i * 18;
        const rad = (angle * Math.PI) / 180;
        const x = 150 + 125 * Math.cos(rad);
        const y = 150 + 125 * Math.sin(rad);
        return (
          <ellipse
            key={`r-${i}`}
            cx={x}
            cy={y}
            rx="10"
            ry="5"
            transform={`rotate(${angle + 90} ${x} ${y})`}
            fill={`rgba(27,107,74,${0.1 + (i % 3) * 0.04})`}
            stroke="rgba(91,142,111,0.18)"
            strokeWidth="0.4"
          />
        );
      })}

      {/* Top flower cluster */}
      <g transform="translate(150, 22)">
        {[0, 72, 144, 216, 288].map((angle, i) => (
          <ellipse
            key={i}
            cx="0"
            cy="-7"
            rx="5"
            ry="7"
            transform={`rotate(${angle})`}
            fill={
              i % 2 === 0 ? "rgba(212,168,172,0.2)" : "rgba(168,96,112,0.14)"
            }
            stroke="rgba(168,96,112,0.12)"
            strokeWidth="0.3"
          />
        ))}
        <circle cx="0" cy="0" r="3" fill="rgba(200,169,81,0.22)" />
      </g>

      {/* Bottom flower cluster */}
      <g transform="translate(150, 278)">
        {[0, 60, 120, 180, 240, 300].map((angle, i) => (
          <ellipse
            key={i}
            cx="0"
            cy="-6"
            rx="4"
            ry="6"
            transform={`rotate(${angle})`}
            fill={
              i % 2 === 0 ? "rgba(212,168,172,0.17)" : "rgba(168,96,112,0.12)"
            }
            stroke="rgba(168,96,112,0.1)"
            strokeWidth="0.3"
          />
        ))}
        <circle cx="0" cy="0" r="2.5" fill="rgba(200,169,81,0.2)" />
      </g>

      {/* Side accent blooms */}
      {[
        { x: 22, y: 150 },
        { x: 278, y: 150 },
      ].map((pos, j) => (
        <g key={j} transform={`translate(${pos.x}, ${pos.y})`}>
          {[0, 90, 180, 270].map((angle, i) => (
            <ellipse
              key={i}
              cx="0"
              cy="-4"
              rx="3"
              ry="5"
              transform={`rotate(${angle})`}
              fill="rgba(212,168,172,0.14)"
              stroke="rgba(168,96,112,0.1)"
              strokeWidth="0.2"
            />
          ))}
          <circle cx="0" cy="0" r="2" fill="rgba(200,169,81,0.15)" />
        </g>
      ))}

      {/* Gold accent dots scattered */}
      {[
        [40, 60],
        [260, 60],
        [40, 240],
        [260, 240],
        [70, 35],
        [230, 35],
        [70, 265],
        [230, 265],
        [18, 120],
        [282, 120],
        [18, 180],
        [282, 180],
      ].map(([cx, cy], i) => (
        <circle
          key={`d-${i}`}
          cx={cx}
          cy={cy}
          r={0.6 + (i % 3) * 0.3}
          fill={`rgba(200,169,81,${0.1 + (i % 4) * 0.05})`}
        />
      ))}
    </svg>
  );
}

export function GoldArchFrame({ className = "", children }) {
  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 400 500"
        className="absolute inset-0 w-full h-full pointer-events-none"
        fill="none"
        preserveAspectRatio="none"
      >
        {/* Arch shape */}
        <path
          d="M50,500 L50,200 Q50,50 200,50 Q350,50 350,200 L350,500"
          stroke="rgba(200,169,81,0.22)"
          strokeWidth="1.2"
        />
        {/* Inner arch */}
        <path
          d="M65,500 L65,205 Q65,70 200,70 Q335,70 335,205 L335,500"
          stroke="rgba(200,169,81,0.08)"
          strokeWidth="0.6"
        />
        {/* Top ornament */}
        <circle cx="200" cy="50" r="4" fill="rgba(200,169,81,0.15)" />
        <circle
          cx="200"
          cy="50"
          r="8"
          stroke="rgba(200,169,81,0.1)"
          strokeWidth="0.5"
        />
      </svg>
      {children}
    </div>
  );
}

export function GoldDots({ className = "" }) {
  const dots = [];
  for (let i = 0; i < 30; i++) {
    dots.push({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 1 + Math.random() * 2.5,
      opacity: 0.06 + Math.random() * 0.12,
    });
  }
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
    >
      {dots.map((d, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${d.x}%`,
            top: `${d.y}%`,
            width: `${d.size}px`,
            height: `${d.size}px`,
            background: `rgba(200,169,81,${d.opacity})`,
          }}
        />
      ))}
    </div>
  );
}

export function OrnamentDivider({ className = "" }) {
  return (
    <div
      className={`flex items-center justify-center gap-3 py-4 ${className}`}
      style={{ maxWidth: "300px", marginLeft: "auto", marginRight: "auto" }}
    >
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-rose-gold/10 to-gold/20" />
      <svg viewBox="0 0 40 40" className="w-5 h-5 flex-shrink-0">
        {/* Outer diamond */}
        <path
          d="M20,4 L36,20 L20,36 L4,20 Z"
          stroke="rgba(200,169,81,0.25)"
          strokeWidth="0.5"
          fill="none"
        />
        {/* Inner diamond */}
        <path
          d="M20,10 L30,20 L20,30 L10,20 Z"
          stroke="rgba(200,169,81,0.18)"
          strokeWidth="0.4"
          fill="rgba(200,169,81,0.04)"
        />
        {/* Heart center */}
        <path
          d="M20,16.5 C20,15 18.5,14 17.2,15 C16,14 14.5,15 14.5,16.5 C14.5,18.5 20,22 20,22 C20,22 25.5,18.5 25.5,16.5 C25.5,15 24,14 22.8,15 C21.5,14 20,15 20,16.5Z"
          fill="rgba(142,56,85,0.22)"
          stroke="rgba(142,56,85,0.28)"
          strokeWidth="0.3"
        />
      </svg>
      <div className="flex-1 h-px bg-gradient-to-l from-transparent via-rose-gold/10 to-gold/20" />
    </div>
  );
}
