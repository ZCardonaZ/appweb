<<<<<<< HEAD
import { useState } from 'react';
=======
import { useState, useEffect } from 'react';
>>>>>>> parent of d7bce5e (asssssssssssss)
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login/Login';
import Layout from './components/Layout/Layout';
import CharacterList from './components/Characters/CharacterList';
import ContactForm from './components/Form/ContactForm';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
<<<<<<< HEAD

  const handleLogin = () => {
=======
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
>>>>>>> parent of d7bce5e (asssssssssssss)
    setIsLoggedIn(true);
  };

  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
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
=======
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
>>>>>>> parent of d7bce5e (asssssssssssss)
      </Routes>
    </BrowserRouter>
  );
}

export default App;