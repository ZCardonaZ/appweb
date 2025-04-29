import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'; // Importa DarkModeToggle
import './Layout.css';

function Layout() {
  return (
    <div className="layout">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <DarkModeToggle />  {/* Agrega DarkModeToggle */}
    </div>
  );
}

export default Layout;