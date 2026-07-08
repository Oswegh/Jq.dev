// src/components/Hero.jsx
export default function Hero({ theme }) {
  const isDark = theme === "dark";

  // Helper function to smoothly scroll to a section
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="mx-auto flex min-h-screen max-w-7xl items-center px-8 pt-20 flex-col lg:flex-row"
    >
      {/* Left Side */}
      <div className="flex-1 lg:pr-12">
        <p className={`jetbrains-mono mb-5 text-sm uppercase tracking-[0.25em] ${isDark ? 'text-white/60' : 'text-black/50'}`}>
          Available for Opportunities
        </p>

        <h1 className={`text-6xl font-bold leading-none md:text-7xl jetbrains-mono ${isDark ? 'text-white' : 'text-black'}`}>
          Joshua Quilala
          <br />
        </h1>

        <p className={`mt-8 max-w-xl text-lg leading-8 jetbrains-mono ${isDark ? 'text-white' : 'text-black'}`}>
          Computer Science student passionate about
          embedded systems, machine learning,
          and creating modern web applications with
          thoughtful user experiences.
        </p>

        {/* BUTTONS WITH SMOOTH SCROLL ACTIONS */}
        <div className="mt-10 flex gap-4">
          {/* View Projects Button - Links to #projects */}
          <button 
            onClick={() => scrollTo('projects')}
            className={`jetbrains-mono rounded-full px-7 py-3 transition-colors duration-200 cursor-pointer ${
              isDark 
                ? 'bg-white text-black hover:bg-[#EAEAEA]' 
                : 'bg-gray-900 text-white hover:bg-gray-800'
            }`}
          >
            View Projects
          </button>

          {/* Contact Button - Links to #contact */}
          <button 
            onClick={() => scrollTo('contact')}
            className={`jetbrains-mono rounded-full border px-7 py-3 transition-colors duration-200 cursor-pointer ${
              isDark 
                ? 'border-white/20 text-white hover:bg-white/5' 
                : 'border-gray-300 text-black hover:bg-gray-100'
            }`}
          >
            Contact
          </button>
        </div>

        {/* Mobile Card */}
        <div className={`mt-12 w-full rounded-2xl p-8 transition-colors duration-300 lg:hidden ${
          isDark 
            ? 'bg-[#19195d] border border-white/10' 
            : 'bg-[#f5f5fa] border border-gray-200'
        }`}>
          <p className={`jetbrains-mono text-sm ${isDark ? 'text-white/60' : 'text-black/50'}`}>
            portfolio.status
          </p>

          <div className="mt-8 space-y-6">
            <div>
              <p className={`jetbrains-mono text-xs ${isDark ? 'text-white/60' : 'text-black/40'}`}>
                LOCATION
              </p>
              <p className={`mt-1 jetbrains-mono ${isDark ? 'text-white' : 'text-black'}`}>
                Caloocan City, Philippines
              </p>
            </div>

            <div>
              <p className={`jetbrains-mono text-xs ${isDark ? 'text-white/60' : 'text-black/40'}`}>
                EDUCATION
              </p>
              <p className={`mt-1 jetbrains-mono ${isDark ? 'text-white' : 'text-black'}`}>
                EARIST · BS Computer Science
              </p>
            </div>

            <div>
              <p className={`jetbrains-mono text-xs ${isDark ? 'text-white/60' : 'text-black/40'}`}>
                STACK
              </p>
              <p className={`mt-1 jetbrains-mono ${isDark ? 'text-white' : 'text-black'}`}>
                React · Arduino · Python · Java
              </p>
            </div>

            <div>
              <p className={`jetbrains-mono text-xs ${isDark ? 'text-white/60' : 'text-black/40'}`}>
                STATUS
              </p>
              <p className={`mt-1 jetbrains-mono ${isDark ? 'text-emerald-300' : 'text-emerald-600'}`}>
                ● Available
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Card */}
      <div className="hidden flex-1 justify-end lg:flex">
        <div className={`w-[380px] rounded-2xl p-8 transition-colors duration-300 ${
          isDark 
            ? 'bg-[#19195d] border border-white/10' 
            : 'bg-[#f5f5fa] border border-gray-200'
        }`}>
          <p className={`jetbrains-mono text-sm ${isDark ? 'text-white/60' : 'text-black/50'}`}>
            portfolio.status
          </p>

          <div className="mt-8 space-y-6">
            <div>
              <p className={`jetbrains-mono text-xs ${isDark ? 'text-white/60' : 'text-black/40'}`}>
                LOCATION
              </p>
              <p className={`mt-1 jetbrains-mono ${isDark ? 'text-white' : 'text-black'}`}>
                Caloocan City, Philippines
              </p>
            </div>

            <div>
              <p className={`jetbrains-mono text-xs ${isDark ? 'text-white/60' : 'text-black/40'}`}>
                EDUCATION
              </p>
              <p className={`mt-1 jetbrains-mono ${isDark ? 'text-white' : 'text-black'}`}>
                EARIST · BS Computer Science
              </p>
            </div>

            <div>
              <p className={`jetbrains-mono text-xs ${isDark ? 'text-white/60' : 'text-black/40'}`}>
                STACK
              </p>
              <p className={`mt-1 jetbrains-mono ${isDark ? 'text-white' : 'text-black'}`}>
                React · Arduino · Python · Java
              </p>
            </div>

            <div>
              <p className={`jetbrains-mono text-xs ${isDark ? 'text-white/60' : 'text-black/40'}`}>
                STATUS
              </p>
              <p className={`mt-1 jetbrains-mono ${isDark ? 'text-emerald-300' : 'text-emerald-600'}`}>
                ● Available
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}