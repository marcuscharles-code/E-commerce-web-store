import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import LoginSignUp from './Pages/LoginSignUp';
import Products from './Pages/Products';
import Hero from './Components/Hero/Hero';

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Hero />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory category="men" />} />
          <Route path='/womens' element={<ShopCategory category="women" />} />
          <Route path='/kids' element={<ShopCategory category="kid" />} />
          <Route path='/product' element={<product />}>
            <Route path=':productId' element={<product />}></Route>
          </Route>
          <Route path='/cart' element={<cart/>}/>
          <Route path='/Login' element={<LoginSignUp/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
