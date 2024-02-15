import React from "react";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Shop from "./Components/Shop";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/Shop" element = {<Shop/>}/>
        </Routes >
      </BrowserRouter>
    </div>
  );
}
