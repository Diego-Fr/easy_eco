import React from 'react';
import './App.css';
import Home from './pages/home/Home';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home/>
  },
  {
    path: "/",
    element: <Home/>
  }
]);


function App() {
  return (
    <div className="App">

      <RouterProvider router={router} />

    </div>
  );
}

export default App;
