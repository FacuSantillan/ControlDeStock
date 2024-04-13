import React, { useState } from 'react';
import { FaHome, FaUser, FaCog, FaChartBar, FaBox, FaMoneyBillAlt, FaReceipt, FaSignOutAlt } from 'react-icons/fa';
import './navBar.css';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const clearLocalStorage = () => {
    localStorage.clear();
    window.location.reload();
  };

  const overlayClickHandler = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {/* Overlay se muestra cuando la barra está expandida */}
      {isOpen && <div className="overlay" onClick={overlayClickHandler}></div>}

      <div className={isOpen ? 'sidebar active' : 'sidebar'}>
        <div className="toggle-button" onClick={toggleSidebar}>
          ☰
        </div>

        <div className="sidebar-content">
          <ul>
            <li className={isOpen ? 'sidebar-item-active' : ''}>
              <div className="icon-container">
                <FaHome size="1.8em" />
              </div>
              <span className={isOpen ? 'sidebar-item-active' : ''}>Inicio</span>
            </li>
            <li className={isOpen ? 'sidebar-item-active' : ''}>
              <div className="icon-container">
                <FaUser size="1.8em" />
              </div>
              <span className={isOpen ? 'sidebar-item-active' : ''}>Perfil</span>
            </li>
            <li className={isOpen ? 'sidebar-item-active' : ''}>
              <div className="icon-container">
                <FaCog size="1.8em" />
              </div>
              <span className={isOpen ? 'sidebar-item-active' : ''}>Configuración</span>
            </li>
            <li className={isOpen ? 'sidebar-item-active' : ''}>
              <div className="icon-container">
                <FaChartBar size="1.8em" />
              </div>
              <span className={isOpen ? 'sidebar-item-active' : ''}>Estadísticas</span>
            </li>
            <li className={isOpen ? 'sidebar-item-active' : ''}>
              <div className="icon-container">
                <FaBox size="1.8em" />
              </div>
              <span className={isOpen ? 'sidebar-item-active' : ''}>Productos</span>
            </li>
            <li className={isOpen ? 'sidebar-item-active' : ''}>
              <div className="icon-container">
                <FaMoneyBillAlt size="1.8em" />
              </div>
              <span className={isOpen ? 'sidebar-item-active' : ''}>Vender</span>
            </li>
            <li className={isOpen ? 'sidebar-item-active' : ''}>
              <div className="icon-container">
                <FaReceipt size="1.8em" />
              </div>
              <span className={isOpen ? 'sidebar-item-active' : ''}>Facturar</span>
            </li>
          </ul>
        </div>
        <div>
          {/* Aquí solo dejamos el icono dentro del botón */}
          <button onClick={clearLocalStorage} className='button-Logout'><FaSignOutAlt size="1.8em" /></button>
        </div>
      </div>

      <div className="images-container" onClick={toggleSidebar}></div>
    </div>
  );
}
