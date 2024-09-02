import React, { createContext, useState, useEffect } from 'react';

export const ModeContext = createContext();

export const ModeProvider = ({ children }) => {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    localStorage.setItem('mode', mode);
  };

  const ddd = localStorage.getItem('mode');

  useEffect(() => {
  localStorage.setItem('mode', mode);
  }, [mode]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional: Makes the scroll smooth
    });
  };

  return (
    <ModeContext.Provider value={{ mode, toggleMode, ddd, scrollToTop }}>
      {children}
    </ModeContext.Provider>
  );
};
