// src/App.jsx
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Background from './components/Background';
import Projects from './components/Projects'; // <--- 1. Add this import

// CORRECTED IMPORT PATH BASED ON YOUR FILE TREE
import { playDomainThemeTransition } from './lib/playDomainThemeTransition'; 

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved;
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    }
    return 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    
    playDomainThemeTransition({
      newTheme,
      onThemeSwap: () => {
        setTheme(newTheme);
      }
    });
  };

  return (
    <>
      <Background theme={theme} />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="relative z-10">
        <Hero theme={theme} />
          {/* 2. Add the new Projects component here */}
        <Projects theme={theme} />
      </main>
    </>
  );
}

export default App;