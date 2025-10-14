import React from 'react';
import ReactDOM from 'react-dom/client';
// Solusi: Memanggil file dengan ekstensi eksplisit untuk mengatasi case-sensitivity
import App from './App.tsx'; 
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);