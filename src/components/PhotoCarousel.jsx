// src/components/PhotoCarousel.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const photos = [
  { id: 1, label: "Portrait", color: "bg-[#252525]" },
  { id: 2, label: "Project", color: "bg-[#343434]" },
  { id: 3, label: "Desk Setup", color: "bg-[#1a1a1a]" },
];

export default function PhotoCarousel({ theme }) {
  const [[page, direction], setPage] = useState([0, 0]);
  const isDark = theme === "dark";

  const paginate = (newDirection) => {
    const nextPage = page + newDirection;
    if (nextPage < 0 || nextPage >= photos.length) return;
    setPage([nextPage, newDirection]);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <div className={`relative w-full aspect-[16/9] md:aspect-[16/5] rounded-3xl overflow-hidden ${isDark ? 'bg-[#252525]' : 'bg-[#f0f0f0]'}`}>
      
      {/* THE SLIDER */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute inset-0 flex flex-col items-center justify-center z-10 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = offset.x;
            if (swipe < -50) {
              paginate(1); // Swipe left to go next
            } else if (swipe > 50) {
              paginate(-1); // Swipe right to go previous
            }
          }}
        >
          {/* PLACEHOLDER FOR CURRENT IMAGE */}
          <div className="flex flex-col items-center justify-center text-gray-400/50 dark:text-gray-600/50 font-serif text-xs md:text-sm tracking-widest uppercase z-0 select-none">
            <span className="mb-1">Slide {page + 1} - {photos[page].label}</span>
            <span className="text-[10px] opacity-50">~ 16:5 aspect ratio ~</span>
          </div>
          
          {/* UNCOMMENT THIS WHEN YOU HAVE REAL IMAGES */}
          {/* <img src={`/photo-${page + 1}.jpg`} alt="Slide" className="w-full h-full object-cover" /> */}
        </motion.div>
      </AnimatePresence>

      {/* SWIPE INDICATORS / DOTS */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20 pointer-events-none">
        {photos.map((_, idx) => (
          <div
            key={idx}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              idx === page
                ? isDark ? "bg-white" : "bg-black"
                : isDark ? "bg-white/20" : "bg-black/20"
            }`}
          />
        ))}
      </div>

      {/* LEFT ARROW (Only show on Hover Desktop) */}
      <button
        onClick={() => paginate(-1)}
        className={`absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full border opacity-0 hover:opacity-100 transition-opacity duration-300 ${
          isDark ? "border-white/20 text-white hover:bg-white/10" : "border-black/20 text-black hover:bg-black/10"
        }`}
        aria-label="Previous slide"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={() => paginate(1)}
        className={`absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full border opacity-0 hover:opacity-100 transition-opacity duration-300 ${
          isDark ? "border-white/20 text-white hover:bg-white/10" : "border-black/20 text-black hover:bg-black/10"
        }`}
        aria-label="Next slide"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  );
}