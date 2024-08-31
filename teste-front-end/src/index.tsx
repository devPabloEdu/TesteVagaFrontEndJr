import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.scss';
import App from './App';  // Corrigido para usar aspas simples

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement!); // Usa o createRoot

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
