import React from 'react';
import SearchBar from '../../components/2-SearchBar/searchBar';
import Card from '../../components/3-VentaZone/Ventas'

import './Vender.css';


export default function Vender () {
    return (
        <div className="container-all">

        <h1 className="container-title"> Vender </h1>

            <SearchBar/>
            
        <Card/>

            <div className='container-button'>
                    <button className="content-button"> Agregar producto </button>
                </div>

            <div className="content-select">
            	<select>
                <option value="defaultValue" selected>categorias</option>
            		<option>Option 2</option>
            		<option>Option 3</option>
            	</select>
            	<i></i>

                

            </div>
        </div>
    )
}