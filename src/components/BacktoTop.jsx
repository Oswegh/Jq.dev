// src/components/BackToTop.jsx
import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function BackToTop({ theme }) {
  const [isVisible, setIsVisible] = useState(false);
  const isDark = theme === "dark";

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed right-6 bottom-6 z-50 
        flex h-12 w-12 items-center justify-center rounded-full
        border transition-all duration-300 ease-in-out
        ${
          isDark
            ? "border-white/10 bg-white/5 text-white/30 hover:border-white/60 hover:bg-white/20 hover:text-white hover:scale-110"
            : "border-black/10 bg-black/5 text-black/30 hover:border-black/60 hover:bg-black/20 hover:text-black hover:scale-110"
        }
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
      `}
      aria-label="Scroll to top"
    >
      <ArrowUp size={22} strokeWidth={2.5} />
    </button>
  );
}