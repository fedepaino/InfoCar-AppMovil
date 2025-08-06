import React from 'react';

import VehicleCard from './VehicleCard'; // 1. Importamos el nuevo componente


const VehicleList = ({ vehicles }) => {
    return (
        <div className="card">
            <h3>Mis vehiculos</h3>
            {/* 2. Usamos una lista con una clase para aplicar estilos */}
            <ul className="vehicle-list">
                {vehicles.map(vehicle => (
                    // 3. Renderizamos un VehicleCard por cada vehículo
                    <VehicleCard key={vehicle.id} vehicle={vehicle} />
                ))}
            </ul>
        </div>
    );
};

export default VehicleList;