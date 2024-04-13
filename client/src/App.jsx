import { useState } from 'react';
import { Route, Routes, useLocation} from 'react-router-dom';

import NavBar from '../components/2-NavBar/navBar';

import './App.css';

function App() {


  return (
    
    <div>
    
    <Routes>

    <Route path='/' element={<NavBar/>}/>

    </Routes>


    </div>
  )
};

export default App
