// src/App.jsx
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Background from './components/Background';
import Projects from './components/Projects';
import Contact from './components/Contact'; // <-- Add this
import About from './components/About'; 

// IMPORT FIX: Corrected relative path to go up one level (`../lib`)
import { playDomainThemeTransition } from '../lib/playDomainThemeTransition';

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
        <Projects theme={theme} />
        <Contact theme={theme} /> {/* <-- Add this here */}
        <About theme={theme} />   
      </main>
    </>
  );
}

export default App;