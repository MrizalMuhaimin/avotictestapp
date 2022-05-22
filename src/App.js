// import { useState, useEffect } from "react";
import Header from "./parts/Header/index";
import SideBar from "./parts/SideBar/index";
import Dashboard from "./pages/Dashboard/index";
import MenuEmpty from "./pages/MenuEmpty/index";


import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  // const [menu, setMenu] = useState(1);




  return (
    <div className="App bg-gray w-full min-h-screen">
      <BrowserRouter>
        <Header/>
        <SideBar/>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="menuempty" element={<MenuEmpty />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
