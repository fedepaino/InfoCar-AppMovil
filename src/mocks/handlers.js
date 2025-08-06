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

    // Intercepta la petición POST a /vehicles para crear un nuevo coche
    http.post('https://api.infocar.com/vehicles', async ({ request }) => {
        const newCarData = await request.json();

        // Generamos un ID único para el nuevo vehículo (ej: v4, v5, etc.)
        const newId = `v${vehicles.length + 1}`;

        const newVehicle = {
            id: newId,
            ...newCarData,
        };

        // Añadimos el nuevo vehículo a nuestra "base de datos" en memoria
        vehicles.push(newVehicle);

        // Respondemos con el vehículo creado y un status 201 (Created)
        return HttpResponse.json(newVehicle, { status: 201 });
    }),
];