import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Test from "./pages/test";
import { CartProvider } from './context/cartContext';

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/test" element={<Test/>} />
      </Routes>
    </CartProvider>
  );
}

export default App;
