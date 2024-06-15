import React from 'react';
import image from '../../../assets/diseno-de-producto.png'
import { useState } from 'react';

import './card.css'


export default function Card1(props) {
    const { nombre, stock, precio, key } = props;

    const [productosSelect, setProductosSelect] = useState([]);

    const handleExportProducto = () => {
        productosSelect.push(props)
        console.log(productosSelect)
    }

    return (
        <div className="container-information">
        <div className="card-content">
            <button onClick={() => handleExportProducto()}>            
                <img src={image} alt={nombre} className="imagen" />
            <p>{nombre}</p>
            <div className="hidden-info">
                <p>Stock: {stock}</p>
                <p>Precio: {precio}</p>
            </div>
            </button>
        </div>
    </div>
    );
}

