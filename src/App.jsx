import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode

  useEffect(() => {
    // Check local storage for theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDarkMode(false);
      document.body.classList.add('light-mode');
    } else {
      setIsDarkMode(true);
      document.body.classList.remove('light-mode');
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.body.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
    }
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    const elements = document.querySelectorAll('.section-animate, .skill-category, .project-card, .education-item');
    elements.forEach(el => observer.observe(el));

    // Mouse glow effect — skip on touch/mobile devices for performance
    const isMobile = window.matchMedia('(max-width: 768px)').matches || 'ontouchstart' in window;
    const glow = document.getElementById('glow');
    const handleMouseMove = (e) => {
      if (glow) {
        glow.style.left = e.clientX - 250 + 'px';
        glow.style.top = e.clientY - 250 + 'px';
      }
    };
    if (!isMobile) {
      document.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      elements.forEach(el => observer.unobserve(el));
      document.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []); // Run once on mount

  return (
    <>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      <div className="background-grid"></div>
      <div className="glow-effect" id="glow"></div>

      <div className="container">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </div>

      <Footer />
    </>
  );
}

export default App;
