import React from 'react';
import '../styles/ProductCard.css';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card" style={{ backgroundColor: product.bg }}>
      <span className="discount-tag">{product.discount}</span>
      
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.title} 
          className="product-img" 
        />
      </div>

      <div className="product-details">
        <h3>{product.title}</h3>
        <p className="product-sub">{product.subtitle}</p>
        <div className="card-footer">
          <span className="product-price">${product.price.toFixed(1)}</span>
          <button className="add-action-btn" onClick={() => onAddToCart(product, 1)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;