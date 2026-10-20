import { useState } from 'react';
import '../styles/ProductCard.css';

export default function ProductCard({ product, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => setQuantity((prev) => Math.max(1, prev - 1));
  const handleIncrement = () => setQuantity((prev) => prev + 1);

  const handleInputChange = (e) => {
    const val = parseInt(e.target.value, 10);
    if (!isNaN(val) && val >= 1) {
      setQuantity(val);
    } else if (e.target.value === '') {
      setQuantity('');
    }
  };

  return (
    <div className="product-card">
      <div className="card-image-wrapper">
        <img src={product.image} alt={product.title} loading="lazy" />
      </div>
      
      {/* Product titles from FakeStore can be very long, our CSS clamps them to 2 lines */}
      <h3 title={product.title}>{product.title}</h3>
      <div className="card-price">${product.price.toFixed(2)}</div>

      <div className="card-actions">
        <div className="quantity-stepper">
          <button onClick={handleDecrement} aria-label="Decrease quantity">-</button>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={handleInputChange}
            onBlur={() => quantity === '' && setQuantity(1)}
          />
          <button onClick={handleIncrement} aria-label="Increase quantity">+</button>
        </div>
        <button
          className="add-cart-btn"
          onClick={() => onAddToCart(product, Number(quantity) || 1)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}