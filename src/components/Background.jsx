// src/components/Background.jsx
import { useState, useEffect } from "react";

export default function Background({ theme }) {
  const isDark = theme === "dark";
  
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
      {/* 1. Raw concrete base color for light mode */}
      <div 
        className="fixed inset-0 -z-20 transition-colors duration-700"
        style={{ 
          background: isDark
            ? "#121212" 
            : "#e5e5e5" 
        }} 
      />

      {/* 2. Hard-edged brutalist geometric blocks */}
      <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
        <div 
          className={`absolute -top-40 -right-40 w-[500px] h-[600px] transition-colors duration-300 ${
            isDark ? 'bg-[#1e1e1e]' : 'bg-[#d5d5d5]'
          }`}
        />
        <div 
          className={`absolute -bottom-40 -left-40 w-[400px] h-[400px] transform rotate-12 transition-colors duration-300 ${
            isDark ? 'bg-[#1e1e1e]' : 'bg-[#d5d5d5]'
          }`}
        />
      </div>

      {/* 3. Raw architectural grid */}
      <div 
        className="fixed inset-0 -z-20 transition-opacity duration-300 pointer-events-none"
        style={{
          backgroundImage: isDark
            ? `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
               linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`
            : `linear-gradient(rgba(0,0,0,0.10) 1px, transparent 1px),
               linear-gradient(90deg, rgba(0,0,0,0.10) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          backgroundPosition: "center center",
        }}
      />

      {/* 4. Heavy Concrete Grain Texture - LIGHT MODE BUMPED TO 0.35 */}
      <div 
        className="fixed inset-0 -z-20 pointer-events-none"
        style={{
          opacity: isDark ? 0.35 : 0.35, // Light mode grain is now much more visible
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "256px 256px",
          mixBlendMode: isDark ? 'screen' : 'multiply',
        }}
      />

      {/* 5. Subtle Cursor Spotlight */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none transition-all duration-200 ease-out"
        style={{
          background: `radial-gradient(circle at ${mouse.x}px ${mouse.y}px, ${
            isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.10)'
          } 0%, transparent 60%)`
        }}
      />
    </>
  );
}