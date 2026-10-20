import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import '../styles/Shop.css';

const CATEGORIES = ['All Products', "men's clothing", "women's clothing", 'electronics', 'jewelery'];

export default function Shop({ onAddToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All Products');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        // Fetching data from FakeStore API as required by TOP guidelines[cite: 3]
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch shop products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = activeCategory === 'All Products'
    ? products
    : products.filter((p) => p.category === activeCategory);

  if (loading) {
    return (
      <div className="shop-page container">
        <div className="loading-container">
          <div className="loading-cart">🛒</div>
          <div className="loading-text">Loading fresh products...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="shop-page container">
        <div className="error-message">Error loading products: {error}</div>
      </div>
    );
  }

  return (
    <div className="shop-page container">
      <div className="shop-header">
        <h2>Our <span>Products</span></h2>
      </div>

      <div className="category-filters">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`filter-pill ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
}