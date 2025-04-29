import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react'; // Importa useState y useEffect
import './Navbar.css';

function Navbar() {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false); // Estado para mostrar/ocultar el menú
  const [loggedInUser, setLoggedInUser] = useState(''); // Estado para el nombre del usuario

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
    window.location.href = '/'; // Recarga la página para forzar el Login
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