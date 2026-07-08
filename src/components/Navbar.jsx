// src/components/Navbar.jsx
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { title: "Projects", href: "#projects" },
  { title: "About", href: "#about" },
  { title: "Contact", href: "#contact" },
];

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const isDark = theme === "dark";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? isDark 
            ? "backdrop-blur-xl border-b border-white/10 bg-black/20" 
            : "backdrop-blur-xl border-b border-gray-200 bg-white/60"
          : ""
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
        <a
          href="#home"
          className="jetbrains-mono text-xl font-medium tracking-tight transition-colors duration-300"
        >
          {/* Made .dev visible in light mode */}
          <span className={`${isDark ? 'text-white' : 'text-black'}`}>JQ</span>
          <span className={`${isDark ? 'text-white/50' : 'text-black/50'}`}>.dev</span>
        </a>

        <div className="flex items-center gap-10">
          <ul className="jetbrains-mono flex gap-8">
            {links.map((link) => (
              <li key={link.title}>
                <a
                  href={link.href}
                  className={`jetbrains-mono text-sm transition-all duration-300 opacity-70 hover:opacity-100 ${isDark ? 'text-white' : 'text-black'}`}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={toggleTheme}
            className={`
              flex h-10 w-10 items-center justify-center
              rounded-full
              transition-all duration-300 ease-out
              hover:scale-110 active:scale-90
              ${isDark ? 'hover:bg-white/10' : 'hover:bg-gray-200'}
            `}
          >
            {theme === "dark" ? (
              <Sun size={18} className="text-yellow-300 transition-transform duration-500 rotate-0 hover:rotate-90" />
            ) : (
              <Moon size={18} className="text-[#666693] transition-transform duration-500 rotate-0 hover:-rotate-90" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}