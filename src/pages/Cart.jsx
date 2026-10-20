import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Cart.css';

const Cart = ({ cart, onUpdateQuantity }) => {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="empty-cart-container">
        <div className="empty-cart-card">
          <span className="empty-cart-icon">🛒</span>
          <h2>Your basket is empty</h2>
          <p>Explore our fresh harvest collection and stock up your kitchen.</p>
          <Link to="/shop" className="return-shop-btn">
            Browse Catalogue
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h2 className="cart-heading">Your Grocery Basket</h2>
      <div className="cart-layout">
        
        {/* Cart Items List */}
        <div className="cart-items-column">
          {cart.map((item) => (
            <div key={item.id} className="cart-item-card" style={{ backgroundColor: item.bg || '#ffffff' }}>
              
              <div className="cart-item-image-wrapper">
                <img src={item.image} alt={item.title} className="cart-item-img" />
              </div>

              <div className="cart-item-info">
                <h4>{item.title}</h4>
                <p className="cart-item-price">${item.price.toFixed(2)} / item</p>
              </div>

              {/* Quantity Adjuster with Active + / - Handlers */}
              <div className="cart-qty-adjuster">
                <button 
                  onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button 
                  onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              {/* Instant Remove Item Button */}
              <button 
                className="cart-remove-btn" 
                onClick={() => onUpdateQuantity(item.id, 0)}
                title="Remove item"
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="cart-summary-card">
          <h3>Order Summary</h3>
          
          <div className="summary-row">
            <span>Subtotal</span>
            <span className="summary-val">${subtotal.toFixed(2)}</span>
          </div>

          <div className="summary-row">
            <span>Delivery</span>
            <span className="summary-val free-tag">Free</span>
          </div>

          <div className="summary-divider"></div>

          <div className="summary-row total-row">
            <span>Total</span>
            <span className="summary-val total-val">${subtotal.toFixed(2)}</span>
          </div>

          <button className="checkout-btn" onClick={() => alert('Order submitted successfully!')}>
            Proceed to Checkout
          </button>
        </div>

      </div>
    </div>
  );
};

export default Cart;