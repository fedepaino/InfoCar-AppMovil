// src/mocks/handlers.js
import { http, HttpResponse } from 'msw';
import { vehicles, services, alerts } from '../mockData'; // Reutilizamos tus datos de prueba

// Añadimos un pequeño retardo para simular una llamada de red real
const delayedResponse = (data, delay = 150) => {
    return new Promise(resolve => setTimeout(() => resolve(HttpResponse.json(data)), delay));
};

export const handlers = [
    // Intercepta la petición GET a /vehicles
    http.get('https://api.infocar.com/vehicles', async () => {
        return await delayedResponse(vehicles);
    }),

    // Intercepta la petición GET a /services
    http.get('https://api.infocar.com/services', async () => {
        return await delayedResponse(services);
    }),

    // Intercepta la petición GET a /alerts
    http.get('https://api.infocar.com/alerts', async () => {
        return await delayedResponse(alerts);
    }),
];