import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState('');

  useEffect(() => {
    const user = localStorage.getItem('loggedInUser');
    if (user) {
      setLoggedInUser(user);
    }
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    window.location.href = '/';
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/characters">
            <span className="logo-text">FUTURAMA</span>
          </Link>
        </div>

        <div className="navbar-links">
          <Link
            to="/characters"
            className={location.pathname === '/characters' ? 'active' : ''}
          >
            Personajes
          </Link>
          <Link
            to="/form"
            className={location.pathname === '/form' ? 'active' : ''}
          >
            Formulario
          </Link>
          <Link
            to="/about"
            className={location.pathname === '/about' ? 'active' : ''}
          >
            Acerca de
          </Link>
          {loggedInUser && (
            <div className="user-menu">
              <button className="user-button" onClick={toggleMenu}>
                {loggedInUser}
              </button>
              {showMenu && (
                <div className="menu">
                  <button onClick={handleLogout}>Cerrar Sesión</button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;