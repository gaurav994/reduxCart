
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import index from './features/index';
import ProductListing from './components/productsListing/ProductListing';
import Cart from './components/cart/Cart';

const store = configureStore({
  reducer: index
});


function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path='/'  element={<ProductListing/>} />
        <Route path='/cart'  element={<Cart/>} />
      </Routes>
      </BrowserRouter>

    </Provider>
  )
}

export default App
