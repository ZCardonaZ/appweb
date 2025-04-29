import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import './DarkModeToggle.css'; // Importa el CSS

function DarkModeToggle() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <button className="dark-mode-toggle" onClick={toggleDarkMode}>
      {darkMode ? '☀️' : '🌙'}
    </button>
  );
}

export default DarkModeToggle;