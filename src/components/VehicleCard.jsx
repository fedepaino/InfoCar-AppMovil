import React from 'react';
import { Link } from 'react-router-dom';
import './VehicleCard.css';

const VehicleCard = ({ vehicle }) => {
    const placeholderImage = 'https://via.placeholder.com/100x80.png?text=InfoCar';
    return (
        <li className="vehicle-card">
            <Link to={`/vehicles/${vehicle.id}`} className="vehicle-card-link">
                <img
                    src={vehicle.imageUrl || placeholderImage}
                    alt={`${vehicle.marca} ${vehicle.modelo}`}
                    className="vehicle-card-image"
                />
                <div className="vehicle-card-details">
                    <h4>{vehicle.marca} {vehicle.modelo}</h4>
                    <h3>{vehicle.matricula}</h3>
                </div>
            </Link>
        </li>
    );

};

export default VehicleCard;