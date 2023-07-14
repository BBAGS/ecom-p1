'use client';

import React, { useEffect } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import { useTernaryDarkMode } from 'usehooks-ts';

const SwitchTheme = () => {
  const { isDarkMode, setTernaryDarkMode } = useTernaryDarkMode();

  useEffect(() => {
    const body = document.body;
    body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setTernaryDarkMode(isDarkMode ? 'light' : 'dark');
  };

  return (
    <button className='btn-circle btn' onClick={toggleTheme}>
      {isDarkMode ? (
        <FiMoon className='h-5 w-5' />
      ) : (
        <FiSun className='h-5 w-5' />
      )}
    </button>
  );
};

export default SwitchTheme;
