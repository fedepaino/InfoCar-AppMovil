// src/mocks/browser.js
import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

// Esta configuración prepara un Service Worker con los manejadores de peticiones que definimos.
export const worker = setupWorker(...handlers);