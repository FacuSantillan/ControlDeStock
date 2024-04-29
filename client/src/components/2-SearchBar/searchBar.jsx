import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './searchBar.css';

export default function SearchBar() {
    return (

            <div className='container-searchbar'>
                <FaSearch className='search-icon'/>
                <input className='search-bar' type="search" placeholder='Buscar' />
            </div>
            
    )
}
