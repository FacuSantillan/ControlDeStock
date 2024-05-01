// Cards.js
import React from 'react';
import Ventas from "./Ventas";
import productos from '../productos';

export default function Cards() {
  
    return (
        <div>
            {productos.map((data) => (
                <Ventas
                    key={data.id}
                    id={data.id}
                    nombre={data.nombre}
                    stock={data.stock}
                    precio={data.precio}
                />
            ))}
        </div>
    );
}
