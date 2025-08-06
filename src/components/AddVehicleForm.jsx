import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddVehicleForm = ({ onSubmit }) => {
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [kilometraje, setKilometraje] = useState('');
    const [ultimaITV, setUltimaITV] = useState('');
    const [matricula, setMatricula] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newVehicle = {
            marca,
            modelo,
            kilometraje: parseInt(kilometraje, 10),
            ultimaITV,
            matricula,
            imageUrl,
        };

        const success = await onSubmit(newVehicle);
        if (success) {
            navigate('/'); // Redirige a la página principal si el guardado fue exitoso
        }
    };

    return (
        <div className="form-card">
            <h2>Agregar Nuevo Vehículo</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Marca:</label>
                    <input type="text" value={marca} onChange={(e) => setMarca(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Modelo:</label>
                    <input type="text" value={modelo} onChange={(e) => setModelo(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Matrícula:</label>
                    <input type="text" value={matricula} onChange={(e) => setMatricula(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Kilometraje:</label>
                    <input type="number" value={kilometraje} onChange={(e) => setKilometraje(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Última ITV:</label>
                    <input type="date" value={ultimaITV} onChange={(e) => setUltimaITV(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>URL de la Imagen (Opcional):</label>
                    <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="https://ejemplo.com/imagen.png" />
                </div>
                <div className="form-actions">
                    <button type="submit">Guardar Vehículo</button>
                    <button type="button" onClick={() => navigate('/')} className="cancel-btn">Cancelar</button>
                </div>
            </form>
        </div>
    );
};

export default AddVehicleForm;