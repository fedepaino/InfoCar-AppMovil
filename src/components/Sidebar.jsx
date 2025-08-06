import React, { useState } from 'react';
import { Link } from 'react-router-dom';


// Importa los iconos de React Icons
import { AiOutlineHome, AiOutlineTool, AiOutlineBell, AiOutlineSetting } from 'react-icons/ai';
import { IoCarSportOutline } from "react-icons/io5";

const Sidebar = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <aside
            className={`sidebar ${isHovered ? 'expanded' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="logo-container">
                <AiOutlineSetting className="logo-icon" />
                {isHovered && <span className="logo-text">InfoCar</span>}
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/" className="sidebar-link">
                            <AiOutlineHome className="icon" />
                            {isHovered && <span className="link-text">Home</span>}
                        </Link>
                    </li>
                    <li>
                        <Link to="/add-vehicle" className="sidebar-link">
                            <IoCarSportOutline className="icon" />
                            {isHovered && <span className="link-text">Vehículos</span>}
                        </Link>
                    </li>
                    <li>
                        <Link to="/add-maintenance" className="sidebar-link">
                            <AiOutlineTool className="icon" />
                            {isHovered && <span className="link-text">Mantenimiento</span>}
                        </Link>
                    </li>
                    <li>
                        <Link to="/alertas" className="sidebar-link">
                            <AiOutlineBell className="icon" />
                            {isHovered && <span className="link-text">Alertas</span>}
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;