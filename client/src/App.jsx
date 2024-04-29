import { useState } from 'react';
import { Route, Routes, useLocation} from 'react-router-dom';

//Componentes
import NavBar from './components/1-NavBar/navBar';
import SearchBar from './components/2-SearchBar/searchBar';

//Vistas
import Vender from './views/1-Vender/Vender'

import './App.css';

function App() {
  const { pathname } = useLocation();


  return (
    
    <div>
          {pathname != "/" && <NavBar/>}

    <Routes>

    <Route path='/Vender' element={<Vender/>}/>

    </Routes>


    </div>
  )
};

export default App
