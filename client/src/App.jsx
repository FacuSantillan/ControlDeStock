import { useState } from 'react';
import { Route, Routes, useLocation} from 'react-router-dom';

//Componentes
import NavBar from './components/1-NavBar/navBar';
import SearchBar from './components/2-SearchBar/searchBar';

//Vistas


import './App.css';

function App() {
  const { pathname } = useLocation();


  return (
    
    <div>
          {pathname != "/" && <NavBar/>}
          {pathname === "/Vender" && <SearchBar/>}

    <Routes>

      

    </Routes>


    </div>
  )
};

export default App
