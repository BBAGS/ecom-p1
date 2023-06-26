'use client'

import React, { useEffect } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTernaryDarkMode } from "usehooks-ts";

const SwitchTheme = () => {
  const { isDarkMode, setTernaryDarkMode } = useTernaryDarkMode();

  useEffect(() => {
    const body = document.body;
    body.setAttribute("data-theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleTheme = () => {
    setTernaryDarkMode(isDarkMode ? "light" : "dark");
  };

  return (
    <button className="btn btn-circle" onClick={toggleTheme}>
      {isDarkMode ? <FiMoon className="w-5 h-5" /> : <FiSun className="w-5 h-5" />}
    </button>
  );
};

export default SwitchTheme;

