import React from 'react';
import { Link } from 'react-router-dom';
import './VehicleCard.css';

const VehicleCard = ({ vehicle }) => {
    // Función para formatear el kilometraje con separadores de miles
    const formatKilometraje = (km) => {
        return km.toLocaleString('es-ES');
    };

    return (
        <li className="vehicle-card">
            <Link to={`/vehicles/${vehicle.id}`} className="vehicle-card-link">
                <h4>{vehicle.marca} {vehicle.modelo}</h4>
                <p>Kilometraje: {formatKilometraje(vehicle.kilometraje)} km</p>
            </Link>
        </li>
    );
};

export default VehicleCard;