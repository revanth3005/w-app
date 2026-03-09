import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { isDark, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full flex items-center justify-center cursor-pointer"
      style={{
        background: isDark
          ? "linear-gradient(135deg, rgba(212,175,55,0.15), rgba(142,56,85,0.08))"
          : "linear-gradient(135deg, #ffffff, #f8faf9)",
        border: isDark
          ? "1px solid rgba(212,175,55,0.25)"
          : "1px solid rgba(0,106,78,0.25)",
        boxShadow: isDark
          ? "0 4px 20px rgba(0,0,0,0.4), 0 0 30px rgba(212,175,55,0.05)"
          : "0 4px 20px rgba(0,60,40,0.1), 0 0 0 1px rgba(0,106,78,0.08)",
        transition: "all 0.3s ease",
      }}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <Sun className="w-[18px] h-[18px] text-gold/70" />
      ) : (
        <Moon className="w-[18px] h-[18px]" style={{ color: "#006A4E" }} />
      )}
    </button>
  );
}
