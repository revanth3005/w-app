import { useMemo } from "react";

/* Royal wine & gold petal palette */
const petalColors = [
  "#C9A84C",
  "#e8d48a",
  "#d4b96a",
  "#9E5060",
  "#D4A8AC",
  "#A86070",
];

export default function FloatingPetals({ count = 8 }) {
  const petals = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 10 + 6,
      duration: Math.random() * 12 + 16,
      delay: Math.random() * 15,
      color: petalColors[Math.floor(Math.random() * petalColors.length)],
    }));
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="petal"
          style={{
            left: petal.left,
            width: `${petal.size}px`,
            height: `${petal.size}px`,
            animationDuration: `${petal.duration}s`,
            animationDelay: `${petal.delay}s`,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            width={petal.size}
            height={petal.size}
            fill={petal.color}
            opacity="0.4"
          >
            <ellipse
              cx="12"
              cy="12"
              rx="5"
              ry="10"
              transform="rotate(25 12 12)"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}
