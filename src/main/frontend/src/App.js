import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from './home';
import About from './about';
import Nav from "./nav";
import './global.css';
const App = () => {
  return (
    <>
      <Nav/>
      <section class="main-content columns is-fullheight">
      <div class="container column is-10">
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
