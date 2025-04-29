import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Login from './components/Login/Login';
import CharacterList from './components/Characters/CharacterList';
import CharacterDetail from './components/Characters/CharacterDetail';
import About from './components/About/About';
import ContactForm from './components/Form/ContactForm';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (username) => {
    setIsAuthenticated(true);
    setUsername(username);
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('username', username);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername('');
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('username');
  };

  // Verificar autenticación al cargar
  useState(() => {
    const storedAuth = localStorage.getItem('isAuthenticated');
    const storedUser = localStorage.getItem('username');
    if (storedAuth === 'true' && storedUser) {
      setIsAuthenticated(true);
      setUsername(storedUser);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={
          !isAuthenticated ? 
            <Login onLogin={handleLogin} /> : 
            <Navigate to="/characters" replace />
        } />
        
        <Route path="/*" element={
          isAuthenticated ? 
            <Layout username={username} onLogout={handleLogout}>
              <Routes>
                <Route path="/characters" element={<CharacterList />} />
                <Route path="/characters/:id" element={<CharacterDetail />} />
                <Route path="/about" element={<About />} />
                <Route path="/form" element={<ContactForm />} />
                <Route path="/" element={<Navigate to="/characters" replace />} />
                <Route path="*" element={<Navigate to="/characters" replace />} />
              </Routes>
            </Layout> : 
            <Navigate to="/login" replace />
        } />
      </Routes>
    </Router>
  );
}

export default App;