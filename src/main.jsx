import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

async function enableMocking() {
  // Asegúrate de que esto solo se ejecute en desarrollo
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const { worker } = await import('./mocks/browser.js');

  // `worker.start()` devuelve una promesa que se resuelve cuando el Service Worker está listo.
  return worker.start();
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <BrowserRouter><App /></BrowserRouter>
    </React.StrictMode>
  );
});