import React, { useState, useEffect } from 'react';
import VehicleList from './VehicleList';
import RecentServices from './RecentServices';
import Alerts from './Alerts';

// Ya no importaríamos los datos de prueba, los obtendríamos de la red.
// import { vehicles, services, alerts } from '../mockData';

const Dashboard = () => {
    // Estados para almacenar los datos que vienen de la API
    const [vehicles, setVehicles] = useState([]);
    const [services, setServices] = useState([]);
    const [alerts, setAlerts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Usamos una función asíncrona dentro de useEffect para poder usar await
        const fetchData = async () => {
            try {
                // Hacemos las peticiones a nuestra API hipotética
                // Promise.all nos permite ejecutar varias promesas en paralelo
                const responses = await Promise.all([
                    fetch('https://api.infocar.com/vehicles'), // URL de ejemplo
                    fetch('https://api.infocar.com/services'), // URL de ejemplo
                    fetch('https://api.infocar.com/alerts')    // URL de ejemplo
                ]);

                // Verificamos si alguna de las respuestas tuvo un error
                for (const response of responses) {
                    if (!response.ok) {
                        throw new Error('Hubo un problema al obtener los datos.');
                    }
                }

                const [vehiclesData, servicesData, alertsData] = await Promise.all(responses.map(res => res.json()));

                setVehicles(vehiclesData);
                setServices(servicesData);
                setAlerts(alertsData);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []); // El array vacío [] asegura que este efecto se ejecute solo una vez, cuando el componente se monta.

    if (isLoading) {
        return <div>Cargando datos...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <main className="dashboard-content">

            <div className="dashboard-grid">
                <div className="main-panel">
                    <VehicleList vehicles={vehicles} />
                    <RecentServices services={services} />
                </div>
                <div className="side-panel">
                    <Alerts alerts={alerts} />
                </div>
            </div>
        </main>
    );
};

export default Dashboard;