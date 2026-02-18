import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/slices/cartSlice';
import './ProductsPage.css';

// Sample product data
const products = [
  { id: 1, name: 'Product 1', price: 29.99, image: '/placeholder.png', description: 'Great product' },
  { id: 2, name: 'Product 2', price: 39.99, image: '/placeholder.png', description: 'Amazing product' },
  { id: 3, name: 'Product 3', price: 49.99, image: '/placeholder.png', description: 'Fantastic product' },
  { id: 4, name: 'Product 4', price: 19.99, image: '/placeholder.png', description: 'Awesome product' },
];

const ProductsPage = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart({ product, quantity: 1 }));
  };

  return (
    <div className="products-page">
      <div className="products-container">
        <h1>Products</h1>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <p className="product-price">${product.price.toFixed(2)}</p>
                <button
                  className="add-to-cart-btn"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
