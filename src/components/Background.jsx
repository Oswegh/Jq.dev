// src/components/Background.jsx
import { useState, useEffect } from "react";

export default function Background({ theme }) {
  const isDark = theme === "dark";
  
  // Position state for the mouse spotlight
  const [mouse, setMouse] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* 1. Base background color */}
      <div 
        className="fixed inset-0 -z-20 transition-colors duration-700"
        style={{ 
          background: isDark
            ? "#00004c" 
            : "#f8f9fa" 
        }} 
      />

      {/* 2. The Ambient Glow shapes */}
      <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
        
        {/* Shape 1: Top Left pool */}
        <div 
          className={`absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full blur-[120px] transition-colors duration-1000 ${
            isDark ? 'bg-blue-900/40' : 'bg-blue-100/60'
          }`}
        />

        {/* Shape 2: Bottom Right pool */}
        <div 
          className={`absolute -bottom-40 -right-40 w-[700px] h-[700px] rounded-full blur-[140px] transition-colors duration-1000 ${
            isDark ? 'bg-blue-800/30' : 'bg-blue-100/50'
          }`}
        />
      </div>

      {/* 3. Minimalist linear grid */}
      <div 
        className="fixed inset-0 -z-20 transition-opacity duration-700 pointer-events-none"
        style={{
          backgroundImage: isDark
            ? `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
               linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`
            : `linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
               linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
          backgroundPosition: "center center",
        }}
      />

      {/* 4. Angled overlay line */}
      <div 
        className="fixed inset-0 -z-20 transition-opacity duration-700 pointer-events-none"
        style={{
          background: isDark
            ? `repeating-linear-gradient(45deg, rgba(255,255,255,0.01) 0px, rgba(255,255,255,0.01) 1px, transparent 1px, transparent 30px)`
            : `repeating-linear-gradient(45deg, rgba(0,0,0,0.01) 0px, rgba(0,0,0,0.01) 1px, transparent 1px, transparent 40px)`,
        }}
      />

      {/* 5. The Subtle Liquid Spotlight (Option 2) */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none transition-all duration-200 ease-out"
        style={{
          background: `radial-gradient(circle at ${mouse.x}px ${mouse.y}px, ${
            isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,76,0.10)'
          } 0%, transparent 45%)`
        }}
      />
    </>
  );
}