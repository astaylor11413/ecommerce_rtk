// App.js
import React from 'react';
import ProductList from './Components/ProductList.jsx';
import ShoppingCart from './Components/ShoppingCart.jsx';
import './App.css'
const App = () => {
  return (
 
      <div>
        <h1 className='app-heading'>E-Commerce Application</h1>
        <ProductList />
        <ShoppingCart />
      </div>

  );
};

export default App;
