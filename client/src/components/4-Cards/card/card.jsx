import React from 'react';
import image from '../../../assets/diseno-de-producto.png'
import { useState } from 'react';
import {productosSeleccionados} from '../../../redux/actions';
import { useDispatch } from 'react-redux'

import './card.css'


export default function Card1(props) {
    const { nombre, stock, precio, cantidad, id } = props;
    const dispatch = useDispatch();

    const handleExportProducto = () => {
        const producto = { nombre, stock, precio, id, cantidad };
        dispatch(productosSeleccionados(producto));
    };
    
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

