// src/App.jsx
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useTheme } from './context/ThemeContext';
import Login from './components/Login/Login';
import Layout from './components/Layout/Layout';
import CharacterList from './components/Characters/CharacterList';
import ContactForm from './components/Form/ContactForm';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className={`app ${theme}`}>
      {isLoggedIn && (
        <button 
          onClick={toggleTheme} 
          className="theme-toggle"
          aria-label={`Cambiar a modo ${theme === 'light' ? 'oscuro' : 'claro'}`}
          title={`Cambiar a modo ${theme === 'light' ? 'oscuro' : 'claro'}`}
        >
          <span className="theme-icon">
            {theme === 'light' ? '🌙' : '☀️'}
          </span>
          <span className="theme-text">
            {theme === 'light' ? 'Modo Oscuro' : 'Modo Claro'}
          </span>
        </button>
      )}
      
      <BrowserRouter>
        <Routes>
          {!isLoggedIn ? (
            <Route path="/" element={<Login onLogin={handleLogin} />} />
          ) : (
            <>
              <Route path="/" element={<Layout />}>
                <Route index element={<Navigate to="/characters" replace />} />
                <Route path="characters" element={<CharacterList />} />
                <Route path="form" element={<ContactForm />} />
              </Route>
            </>
          )}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;