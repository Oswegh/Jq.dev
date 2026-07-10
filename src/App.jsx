// src/App.jsx
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Background from './components/Background';
import SwipeableLayout from './components/SwipeableLayout'; 
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
      
      {/* Swipeable Layout - Kept exactly as you wanted */}
      <SwipeableLayout theme={theme}>
        <Hero theme={theme} />
        <About theme={theme} />
        <Projects theme={theme} />
        <Contact theme={theme} />
      </SwipeableLayout>
    </>
  );
}

export default App;