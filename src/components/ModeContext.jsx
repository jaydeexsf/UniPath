import React, { createContext, useState, useEffect } from 'react';

export const ModeContext = createContext();

export const ModeProvider = ({ children }) => {
  const [mode, setMode] = useState('dark'); //settting the deafault mode to dark

  const toggleMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    localStorage.setItem('mode', mode);
  };

  const ddd = localStorage.getItem('mode');

  useEffect(() => {
  localStorage.setItem('mode', mode);
  }, [mode]);

  let lastloca = '/';

  function gettingthelastpathname (){
    const loca = window.location.href.split('/');
     lastloca = loca.pop()
  }


  console.log(lastloca)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
      duration: 5,
    });
  };

  return (
    <ModeContext.Provider value={{ mode, toggleMode, ddd, scrollToTop, gettingthelastpathname, lastloca }}>
      {children}
    </ModeContext.Provider>
  );
};
