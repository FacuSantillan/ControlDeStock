import { useState } from 'react';
import { Route, Routes, useLocation} from 'react-router-dom';

import NavBar from './components/1-NavBar/navBar';

import './App.css';

function App() {
  const { pathname } = useLocation();


  return (
    
    <div>
          {pathname != "/" && <NavBar/>}

    <Routes>



    </Routes>


    </div>
  )
};

export default App
