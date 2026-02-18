import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`} className="product-link">
        <img src={product.image} alt={product.title} className="product-image" />
        <div className="product-info">
          <span className="product-category">{product.category}</span>
          <h3 className="product-title">{product.title}</h3>
          <p className="product-description">{product.description.substring(0, 80)}...</p>
          <div className="product-footer">
            <span className="product-price">${product.price}</span>
          </div>
        </div>
      </Link>
      <button 
        className="add-to-cart-btn"
        onClick={(e) => {
          e.preventDefault();
          onAddToCart(product);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
