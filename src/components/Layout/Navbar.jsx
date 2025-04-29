import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/characters">
            <span className="logo-text">FUTURAMA</span>
          </Link>
        </div>
        
        <div className="navbar-links">
  <Link to="/characters" className={location.pathname.startsWith('/characters') ? 'active' : ''}>
    Personajes
  </Link>
  <Link to="/form" className={location.pathname === '/form' ? 'active' : ''}>
    Formulario
  </Link>
  <Link 
    to="/about" 
    className={location.pathname === '/about' ? 'active' : ''}
    style={{
      backgroundColor: location.pathname === '/about' ? '#2a50c4' : '#3563E9',
      color: 'white',
      borderRadius: '4px'
    }}
  >
    Acerca de
  </Link>
</div>
      </div>
    </nav>
  );
}

export default Navbar;