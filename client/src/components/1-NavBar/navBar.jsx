import React, { useState } from 'react';
import {Link} from "react-router-dom";
import { FaHome, FaUser, FaCog, FaChartBar, FaBox, FaMoneyBillAlt, FaReceipt, FaSignOutAlt, FaHistory, FaQuestionCircle } from 'react-icons/fa';
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

          <Link className='link' to={"/Vender"}> 
            <li className={isOpen ? 'sidebar-item-active' : ''}>
              <div className="icon-container">
                <FaMoneyBillAlt size="1.8em" />
              </div>
              <span className={isOpen ? 'sidebar-item-active' : ''}>Vender</span>
            </li>
            </Link>


          <Link className='link' to={"/Productos"}> 
            <li className={isOpen ? 'sidebar-item-active' : ''}>
              <div className="icon-container">
                <FaBox size="1.8em" />
              </div>
              <span className={isOpen ? 'sidebar-item-active' : ''}>Productos</span>
            </li>
            </Link>


          <Link className='link' to={"/Facturar"}> 
            <li className={isOpen ? 'sidebar-item-active' : ''}>
              <div className="icon-container">
                <FaReceipt size="1.8em" />
              </div>
              <span className={isOpen ? 'sidebar-item-active' : ''}>Facturar</span>
            </li>
            </Link>
            
          <Link className='link' to={"/Estadísticas"}> 
            <li className={isOpen ? 'sidebar-item-active' : ''}>
              <div className="icon-container">
                <FaChartBar size="1.8em" />
              </div>
              <span className={isOpen ? 'sidebar-item-active' : ''}>Estadísticas</span>
            </li>
            </Link>

            <Link className='link' to={"/Historial"}> 
            <li className={isOpen ? 'sidebar-item-active' : ''}>
              <div className="icon-container">
                <FaHistory   size="1.8em" />
              </div>
              <span className={isOpen ? 'sidebar-item-active' : ''}>Historial</span>
            </li>
            </Link>

            <Link className='link' to={"/Ayuda"}> 
            <li className={isOpen ? 'sidebar-item-active' : ''}>
              <div className="icon-container">
                <FaQuestionCircle size="1.8em" />
              </div>
              <span className={isOpen ? 'sidebar-item-active' : ''}>Ayuda</span>
            </li>
            </Link>

            <Link className='link' to={"/Configuración"}> 
            <li className={isOpen ? 'sidebar-item-active' : ''}>
              <div className="icon-container">
                <FaCog size="1.8em" />
              </div>
              <span className={isOpen ? 'sidebar-item-active' : ''}>Configuración</span>
            </li>
            </Link>

          </ul>
        </div>
        
        {/* <div>

          <button onClick={clearLocalStorage} className='button-Logout'><FaSignOutAlt size="1.8em" /></button>
        </div> */}

      </div>

      <div className="images-container" onClick={toggleSidebar}></div>
    </div>
  );
}
