import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from './home';
import About from './about';
import Nav from "./nav";
import Menu from './menu';
import './global.css';
import data from './json/data.json';

const App = () => {
  return (
    <>
      <Nav/>
      <Home home={data.home}/>
    </>
  );
};
export default App;
