import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from './home';
import About from './about';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="" element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </div>
  );
};
export default App;
