import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Test from "./pages/test";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/test" element={<Test/>} />
      </Routes>
  );
}

export default App;
