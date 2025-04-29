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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // Verificar si hay un usuario guardado al cargar la aplicación
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }
  }, []);

  const handleLogin = (user) => {
    localStorage.setItem('username', user);
    setIsLoggedIn(true);
    setUsername(user);
  };

  const handleLogout = () => {
    localStorage.removeItem('username');
    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/login" 
          element={!isLoggedIn ? 
            <Login onLogin={handleLogin} /> : 
            <Navigate to="/characters" replace />} 
        />
        <Route 
          path="/" 
          element={isLoggedIn ? 
            <Layout username={username} onLogout={handleLogout} /> : 
            <Navigate to="/login" replace />}
        >
          <Route index element={<Navigate to="/characters" replace />} />
          <Route path="characters" element={<CharacterList characters={characters} />} />
          <Route path="characters/:id" element={<CharacterDetail characters={characters} />} />
          <Route path="form" element={<ContactForm />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="*" element={<Navigate to={isLoggedIn ? "/characters" : "/login"} replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;