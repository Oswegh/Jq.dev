// src/components/Contact.jsx
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact({ theme }) {
  const isDark = theme === "dark";

  return (
    <section id="contact" className="py-24 max-w-7xl mx-auto px-8 border-t border-white/10 dark:border-white/10 mt-10">
      <div className="text-center">
        <h2 className={`text-3xl font-bold jetbrains-mono ${isDark ? 'text-white' : 'text-black'}`}>
          Let's Connect
        </h2>
        <p className={`mt-2 mb-8 jetbrains-mono ${isDark ? 'text-white/70' : 'text-black/70'}`}>
          I'm always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out through any of the platforms below!
        </p>
        
        {/* Added flex-wrap for mobile, gap-12 for space between links, gap-4 for icon & text */}
        <div className="flex flex-wrap justify-center gap-12">
          <a href="mailto:Lorenzoanrei5@gmail.com" className={`flex items-center gap-4 transition hover:scale-110 ${isDark ? 'text-white hover:text-blue-400' : 'text-black hover:text-blue-600'}`}>
            <Mail size={24} /> Email
          </a>
          <a href="https://github.com/Oswegh" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-4 transition hover:scale-110 ${isDark ? 'text-white hover:text-gray-400' : 'text-black hover:text-gray-600'}`}>
            <Github size={24} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/joshua-anrei-quilala-192667335/" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-4 transition hover:scale-110 ${isDark ? 'text-white hover:text-blue-400' : 'text-black hover:text-blue-600'}`}>
            <Linkedin size={24} /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}