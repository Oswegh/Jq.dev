// src/components/SwipeableLayout.jsx
import { motion } from "framer-motion";
import { useState } from "react";

export default function SwipeableLayout({ children, theme }) {
  const [page, setPage] = useState(0);
  const isDark = theme === "dark";
  const totalPages = children.length;

  const handleDragEnd = (event, info) => {
    const swipe = info.offset.x;
    if (swipe < -50 && page < totalPages - 1) {
      setPage(page + 1);
    } else if (swipe > 50 && page > 0) {
      setPage(page - 1);
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden z-10">
      
      {/* THE SWIPEABLE TRACK */}
      <motion.div
        className="flex flex-row h-full w-max"
        /* 1. Drag is now ALWAYS allowed (set to "x") */
        drag="x"
        /* 2. THE PHYSICAL BARRIER: Prevents the track from moving past the last page */
        dragConstraints={{ left: -(totalPages - 1) * 100 + '%', right: 0 }}
        /* 3. ZERO elasticity means zero bounce when hitting the barrier */
        dragElastic={0}
        /* 4. Snaps to the exact nearest slide when released */
        onDragEnd={handleDragEnd}
        animate={{ x: `-${page * 100}%` }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {children.map((child, index) => (
          <div 
            key={index} 
            className="min-w-[100vw] h-full overflow-y-auto custom-scrollbar"
          >
            {child}
          </div>
        ))}
      </motion.div>
    </div>
  );
}