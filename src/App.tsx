import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Cart from './pages/cart/Cart';
import SingleProduct from './pages/singleProduct/SingleProduct';
import Storepage from './pages/shop/Storepage';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Storepage/>}/>
          <Route path='product' element={<SingleProduct/>} />
          <Route path='cart' element={<Cart />} />
        </Routes>
        
       
      </BrowserRouter>
      
    </div>
  );
}

export default App;
