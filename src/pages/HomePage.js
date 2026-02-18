import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/slices/productsSlice';
import { addToCart } from '../store/slices/cartSlice';
import ProductCard from '../components/ProductCard';
import './HomePage.css';

const HomePage = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (items.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, items.length]);

  const handleAddToCart = (product) => {
    dispatch(addToCart({ product, quantity: 1 }));
  };

  const featuredProducts = items.slice(0, 8);

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to E-Shop</h1>
          <p>Discover amazing products at great prices</p>
          <Link to="/products" className="cta-button">Shop Now</Link>
        </div>
      </section>

      <section className="featured-section">
        <div className="featured-container">
          <h2>Featured Products</h2>
          {loading && <div className="loading">Loading products...</div>}
          {error && <div className="error">Error: {error}</div>}
          {!loading && !error && (
            <div className="products-grid">
              {featuredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          )}
          <div className="view-all-container">
            <Link to="/products" className="view-all-btn">View All Products</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
