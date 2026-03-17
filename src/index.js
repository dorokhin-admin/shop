import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Product from "./components/Product.js";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Product id={2} title="iphone 14" price={999}/>,
      <App />
  </React.StrictMode>
);