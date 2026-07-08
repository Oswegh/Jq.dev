// src/components/Background.jsx
export default function Background({ theme }) {
  const isDark = theme === "dark";

  return (
    <>
      {/* 1. Base background color (Fast 300ms smooth transition) */}
      <div 
        className="fixed inset-0 -z-20 transition-colors duration-300 ease-out"
        style={{ 
          background: isDark
            ? "#00004c" 
            : "#f8f9fa" 
        }} 
      />

      {/* 2. The "Liquid Spotlight" shapes */}
      <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
        
        {/* Shape 1: Top Left pool (Fast 300ms) */}
        <div 
          className={`absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full blur-[120px] transition-colors duration-300 ease-out ${
            isDark ? 'bg-[#4a2b7a]/40' : 'bg-[#d4c7f0]/40'
          }`}
        />

        {/* Shape 2: Bottom Right pool (Fast 300ms) */}
        <div 
          className={`absolute -bottom-40 -right-40 w-[700px] h-[700px] rounded-full blur-[140px] transition-colors duration-300 ease-out ${
            isDark ? 'bg-[#2a4a7a]/30' : 'bg-[#c7ddf0]/40'
          }`}
        />
      </div>

      {/* 3. Minimalist linear grid (Fast 300ms) */}
      <div 
        className="fixed inset-0 -z-20 transition-opacity duration-300 ease-out pointer-events-none"
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

      {/* 4. Angled overlay line (Fast 300ms) */}
      <div 
        className="fixed inset-0 -z-20 transition-opacity duration-300 ease-out pointer-events-none"
        style={{
          background: isDark
            ? `repeating-linear-gradient(45deg, rgba(255,255,255,0.01) 0px, rgba(255,255,255,0.01) 1px, transparent 1px, transparent 30px)`
            : `repeating-linear-gradient(45deg, rgba(0,0,0,0.01) 0px, rgba(0,0,0,0.01) 1px, transparent 1px, transparent 40px)`,
        }}
      />
    </>
  );
}