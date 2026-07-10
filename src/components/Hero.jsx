// src/components/Hero.jsx
import PhotoCarousel from './PhotoCarousel';

export default function Hero({ theme }) {
  const isDark = theme === "dark";

  return (
    <section id="home" className="relative mx-auto max-w-7xl px-8 pt-36 pb-16 w-full h-full flex flex-col justify-center">
      
      {/* Centered Text Section */}
      <div className="flex flex-col items-center text-center w-full gap-2 mb-10 mt-10">
        
        <h1 className="text-[clamp(2rem,7vw,5.5rem)] leading-[0.85] tracking-tighter font-bold uppercase jetbrains-mono text-black dark:text-white whitespace-nowrap">
          Joshua Quilala
        </h1>
        
        <div className="flex flex-row items-center justify-center gap-4 mt-1">
          <p className={`text-base md:text-xl jetbrains-mono tracking-wide ${isDark ? 'text-gray-400' : 'text-black'}`}>
            & this is my portfolio
          </p>
          
          <svg 
            width="28" 
            height="28" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className={`transition-colors duration-300 translate-y-1 ${isDark ? 'text-white' : 'text-black'}`}
          >
            <path d="M6 6 L18 18 M18 18 L18 12 M18 18 L12 18" />
          </svg>
        </div>
      </div>

      {/* Photo Carousel */}
      <div className="mt-8 w-full">
        <PhotoCarousel theme={theme} />
      </div>

      {/* 👇 THE SUBTLE SWIPE INDICATOR 👇 */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-50 opacity-50 flex flex-col items-center gap-1 pointer-events-none">
        <style>{`
          @keyframes slide-pulse {
            0% { transform: translateX(0px); opacity: 0.2; }
            50% { transform: translateX(12px); opacity: 1; }
            100% { transform: translateX(0px); opacity: 0.2; }
          }
          .swipe-arrow {
            animation: slide-pulse 2.5s ease-in-out infinite;
          }
          .swipe-arrow:nth-child(2) {
            animation-delay: 0.3s;
          }
        `}</style>
        
        {/* Two sharp, brutalist arrows */}
        <svg className="swipe-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: isDark ? '#ffffff' : '#000000' }}>
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
        <svg className="swipe-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: isDark ? '#ffffff' : '#000000' }}>
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>
    </section>
  );
}