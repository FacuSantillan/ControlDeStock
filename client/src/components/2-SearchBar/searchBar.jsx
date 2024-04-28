import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './searchBar.css';

export default function SearchBar() {
    return (
        <div className="container-all">

            <div className='container-searchbar'>
                <FaSearch className='search-icon'/>
                <input className='search-bar' type="search" placeholder='Buscar' />
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
