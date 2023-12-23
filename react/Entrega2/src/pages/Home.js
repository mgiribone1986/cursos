import { Outlet } from "react-router-dom"
import React from 'react';
import NavBar from '../components/NavBar';

function Home() {
  return (
    <div>
      <NavBar />
        <div>
        <h1>Hola</h1>
        </div>
        <div>
            <Outlet />
        </div>
    </div>
  )
}

export default Home;
