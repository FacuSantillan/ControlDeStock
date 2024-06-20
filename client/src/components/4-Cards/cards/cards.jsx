import React from 'react';
import productos from '../../3-VentaZone/productos';
import Card1 from '../card/card';

export default function Cards() {

    if (!Array.isArray(productos) || productos.length === 0) {
        return <div><h1>No hay reservas momentáneamente.</h1></div>;
    }

    return (
        <div>
            {productos.map((data) => (
                <Card1
                    key={data.id}
                    nombre={data.nombre}
                    stock={data.stock}
                    precio={data.precio}
                    cantidad={data.cantidad}
                    id={data.id}
                />
            ))}
        </div>
    );
}