import React  from 'react'
import ReactDOM from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import { Provider , useDispatch } from 'react-redux';

import App from './App'
import './index.css'

import index from './features/index';
const store = configureStore({
  reducer: index
});

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
)
