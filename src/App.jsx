import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login/Login';
import Layout from './components/Layout/Layout';
import CharacterList from './components/Characters/CharacterList';
import CharacterDetail from './components/Characters/CharacterDetail';
import ContactForm from './components/Form/ContactForm';
import About from './components/About/About';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('loggedInUser')); // Inicializa basado en localStorage

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem('loggedInUser'));
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <BrowserRouter>
      <Routes>
        {!isLoggedIn ? (
          <Route path="/" element={<Login onLogin={handleLogin} />} />
        ) : (
          <>
            <Route path="/" element={<Layout />}>
              <Route index element={<Navigate to="/characters" replace />} />
              <Route path="characters" element={<CharacterList />} />
              <Route path="characters/:id" element={<CharacterDetail />} />
              <Route path="form" element={<ContactForm />} />
              <Route path="about" element={<About />} />
            </Route>
          </>
        )}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;