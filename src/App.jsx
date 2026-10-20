import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleAddToCart = (product, quantity) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.id === product.id);
      const qtyToAdd = Number(quantity) || 1;
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += qtyToAdd;
        return updated;
      }
      return [...prevCart, { ...product, quantity: qtyToAdd }];
    });
  };

  const handleUpdateQuantity = (id, newQty) => {
    if (newQty <= 0) {
      setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    } else {
      setCart((prevCart) =>
        prevCart.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
      );
    }
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar 
          cartCount={totalItems} 
          searchQuery={searchQuery} 
          onSearchChange={setSearchQuery} 
        />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route 
              path="/shop" 
              element={
                <Shop 
                  onAddToCart={handleAddToCart} 
                  searchQuery={searchQuery} 
                />
              } 
            />
            <Route 
              path="/cart" 
              element={
                <Cart 
                  cart={cart} 
                  onUpdateQuantity={handleUpdateQuantity} 
                />
              } 
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;