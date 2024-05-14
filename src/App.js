import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Cart from './components/Cart';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <Routes>
      <Route path='/' element={<Header addToCart={addToCart} cart={cart} />} />
      <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
    </Routes>
  );
};

export default App;
