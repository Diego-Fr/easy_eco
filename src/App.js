import React, { useEffect } from 'react';
import './App.css';
import Home from './pages/home/Home';
import baseHeader from './baseHeader'; //js do header


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import DispHidri from './pages/disp_hidri/DispHidri';
import Header from './components/header/Header';
import Map from './pages/map/Map';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Map/>
  },
  {
    path: "/disp_hidrica",
    element: <DispHidri/>
  },
  {
    path: "/mapa",
    element: <Map/>
  }
]);


function App() {
  
  useEffect(()=>{
    baseHeader()  //js do header
  })

  return (
    <div className="App">
      <Header></Header>
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
