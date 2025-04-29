import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import DarkModeToggle from '../DarkModeToggle/DarkModeTogle'; // Importa el componente
import './Layout.css';

function Layout() {
  return (
    <div className="layout">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <DarkModeToggle />  {/* Renderiza el botón flotante */}
    </div>
  );
}

export default Layout;