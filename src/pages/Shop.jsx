import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import '../styles/Shop.css';

import carrotImg from '../assets/carrot.jpg';
import capsicumImg from '../assets/capsicum.jpg';
import mustardImg from '../assets/mustard.jpg';
import radishImg from '../assets/radish.jpg';

const MOCK_GROCERIES = [
  { id: 1, title: 'Fresh Carrot', subtitle: 'organic, 1 kg', price: 2.9, discount: '58% OFF', bg: '#d8f3dc', image: carrotImg },
  { id: 2, title: 'Red Capsicum', subtitle: 'crisp (loose), 1 kg', price: 3.4, discount: '30% OFF', bg: '#e3f2fd', image: capsicumImg },
  { id: 3, title: 'Mustard Greens', subtitle: 'farm fresh, 1 kg', price: 1.9, discount: '19% OFF', bg: '#d8f3dc', image: mustardImg },
  { id: 4, title: 'Fresh Radish', subtitle: 'purple, 1 kg', price: 2.5, discount: '18% OFF', bg: '#e3f2fd', image: radishImg }
];

const Shop = ({ onAddToCart, searchQuery }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProducts(MOCK_GROCERIES);
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  // Filter items matching title or subtitle
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <div className="loader-container">
        <div className="cart-loader-wrapper">
          <span className="cart-icon">🛒</span>
          <div className="cart-track"></div>
        </div>
        <p className="loading-text">Stocking the aisles...</p>
      </div>
    );
  }

  return (
    <div className="shop-page">
      <h2 className="catalog-heading">Catalogue</h2>

      {filteredProducts.length === 0 ? (
        <div className="no-results">
          <p>No items found matching "<strong>{searchQuery}</strong>"</p>
        </div>
      ) : (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;