import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import DarkModeToggle from '../DarkModeToggle/DarkModeTogle'; // <-- Importa el botón
import './Layout.css';

function Layout() {
  return (
    <div className="layout">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <DarkModeToggle /> {/* <-- Agrega el botón aquí */}
    </div>
  );
}

export default Layout;