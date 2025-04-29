import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ThemeProvider } from './context/ThemeContext.jsx'; // Importa ThemeProvider

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ThemeProvider> {/* Envuelve App con ThemeProvider */}
      <App />
    </ThemeProvider>
  </StrictMode>
);