import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {CartProvider} from './components/CartContext';
import ItemListContainer from './pages/ItemListContainer';
import ProfileCard from './components/ProfileCard';
import CartWidget from './components/CartWidget';
import Error from './pages/Error';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="galeria" element={<ItemListContainer />} />
            <Route path="category/:id" element={<ItemListContainer />} />
            <Route path="cart" element={<CartWidget />} />
            <Route path="galeria/:codigo" element={<ProfileCard />} />    
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;