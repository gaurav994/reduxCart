import { useEffect } from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider , useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ProductListing from './components/productsListing/ProductListing';
import Cart from './components/cart/Cart';
import { FETCH_ALL_PRODUCTS } from './features/products';
import { FETCH_USER_CART } from './features/cart';



function App() {
  const disptach = useDispatch();

  useEffect(() => {
      // dispatch fetch product list event to store
      disptach(FETCH_ALL_PRODUCTS());
      
      // dispatch fetch cart list event to store
      disptach(FETCH_USER_CART(5));
  }); 

  return (
      <BrowserRouter>
      <Routes>
        <Route path='/'  element={<ProductListing/>} />
        <Route path='/cart'  element={<Cart/>} />
      </Routes>
      </BrowserRouter>
  )
}

export default App
