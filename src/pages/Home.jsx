import { Link } from 'react-router-dom';
import '../styles/Home.css';

export default function Home() {
  return (
    <div className="home-hero">
      <div className="hero-content">
        <h1>
          Discover Your <br />
          <span>Next Favorite</span> <br />
          Item Today
        </h1>
        <p>
          Explore our curated collection of premium electronics, stylish apparel, and elegant jewelry designed for your modern lifestyle.
        </p>
        <Link to="/shop" className="hero-btn">
          Explore Collection
        </Link>
      </div>
    </div>
  );
}