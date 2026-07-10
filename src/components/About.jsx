// src/components/About.jsx
export default function About({ theme }) {
  const isDark = theme === "dark";

  return (
    <section id="about" className="py-24 max-w-7xl mx-auto px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Column: The Personal Story */}
        <div>
          <h2 className={`text-3xl font-bold jetbrains-mono mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
            About Me
          </h2>
          <div className={`space-y-4 leading-8 jetbrains-mono ${isDark ? 'text-white' : 'text-black'}`}>
            <p>
              I'm a Computer Science student who loves bridging the gap between 
              hardware and software. Whether it's optimizing an Arduino circuit 
              or building a smooth, high-performance React interface, I enjoy 
              solving problems that sit at the intersection of physical and digital worlds.
            </p>
            <p>
              I believe the best projects come from a mix of thoughtful design, 
              clean engineering, and a willingness to tinker until things work perfectly.
            </p>
            
            {/* Personal touch */}
            <div className={`pt-4 border-t ${isDark ? 'border-white/10' : 'border-gray-300'}`}>
              <p className={`text-sm ${isDark ? 'text-white/50' : 'text-black/50'}`}>
                Currently exploring: Embedded C, Machine Learning pipelines, and modern UI patterns.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: The Brutalist Grayscale Card */}
        <div className={`rounded-2xl p-8 transition-colors duration-300 ${
          isDark 
            ? 'bg-[#252525] border border-white/10' 
            : 'bg-[#f0f0f0] border border-gray-300'
        }`}>
          <p className={`jetbrains-mono text-sm ${isDark ? 'text-white/60' : 'text-black/50'}`}>
            /focus
          </p>
          
          <div className="mt-6 space-y-6">
            <div>
              <p className={`jetbrains-mono text-xs ${isDark ? 'text-white/60' : 'text-black/40'}`}>
                CORE PHILOSOPHY
              </p>
              <p className={`mt-1 jetbrains-mono text-sm ${isDark ? 'text-white' : 'text-black'}`}>
                "Build things that actually work."
              </p>
            </div>

            <div>
              <p className={`jetbrains-mono text-xs ${isDark ? 'text-white/60' : 'text-black/40'}`}>
                TECH INTERESTS
              </p>
              <div className="flex flex-wrap gap-2 mt-1">
                {["Embedded Systems", "React", "Python", "IoT", "ML/AI"].map((item) => (
                  <span key={item} className={`text-xs px-3 py-1 rounded-full border ${
                    isDark ? 'border-white/10 text-white/70' : 'border-gray-300 text-black/60'
                  }`}>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className={`jetbrains-mono text-xs ${isDark ? 'text-white/60' : 'text-black/40'}`}>
                OUTSIDE OF CODE
              </p>
              <p className={`mt-1 jetbrains-mono text-sm ${isDark ? 'text-white' : 'text-black'}`}>
                Tinkering with old electronics and drinking way too much iced coffee.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}