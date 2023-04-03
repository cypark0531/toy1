import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from './home';
import About from './about';
import Nav from "./nav";
import Menu from './menu';
import './global.css';

const App = () => {
  return (
    <>
      <Nav/>
      <section className="main-content columns is-fullheight">
        <Menu/>
      <div className="container column is-10">
        <Routes>
          <Route path="" element={<Home/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </div>
    </section>
    </>
  );
};
export default App;
