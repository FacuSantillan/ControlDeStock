// Ventas.js
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import productos from './productos';

import "./Ventas.css";

export default function Ventas({ id, nombre, stock, precio }) {
    console.log()
    const [cantidad, setCantidad] = useState(1); 

    const handleCantidadChange = (event) => {
        const nuevaCantidad = event.target.value;
        setCantidad(nuevaCantidad);
    };

    const calcularPrecioTotal = (precio, cantidad) => {
        return (parseFloat(precio.replace('$', '')) * cantidad).toFixed(2);
    };

    return (
        <div className='venta-producto'>
            <input type='number' value={cantidad} onChange={handleCantidadChange} />
            <p className='producto-nombre'>{nombre}</p>
            <p className='cantidad-stock'>{stock}</p>
            <p className='precio-prducto'>${calcularPrecioTotal(precio, cantidad)}</p>
            <button className='button-delete'><FaTimes size={18}/></button>
        </div>
    );
}
