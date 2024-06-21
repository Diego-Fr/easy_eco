import React, { useEffect } from 'react';
import './App.css';
import Home from './pages/home/Home';
import Home2 from './pages/home/Home2';
import baseHeader from './baseHeader'; //js do header


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import DispHidri from './pages/disp_hidri/DispHidri';
import Header from './components/header/Header';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home2/>
  },
  {
    path: "/disp_hidrica",
    element: <DispHidri/>
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
