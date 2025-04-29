import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext'; // <-- Importa el ThemeProvider
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider> {/* Envuelve App con ThemeProvider */}
      <App />
    </ThemeProvider>
  </StrictMode>,
)