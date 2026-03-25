/**
 * @fileoverview Punto de entrada principal de la aplicación React.
 * Renderiza el componente raíz App dentro del elemento con id 'root'.
 */
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
