import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/slices/cartSlice';
import './ProductsPage.css';

// Expanded product data with individual placeholder images
const products = [
  { id: 1, name: 'Classic Shirt', price: 29.99, image: '/products/product-1.svg', description: 'Comfortable cotton shirt' },
  { id: 2, name: 'Running Shoes', price: 89.99, image: '/products/product-2.svg', description: 'Lightweight running shoes' },
  { id: 3, name: 'Smart Watch', price: 199.99, image: '/products/product-3.svg', description: 'Keep track of your fitness' },
  { id: 4, name: 'Backpack', price: 49.99, image: '/products/product-4.svg', description: 'Durable travel backpack' },
  { id: 5, name: 'Sunglasses', price: 19.99, image: '/products/product-5.svg', description: 'Stylish UV protection' },
  { id: 6, name: 'Headphones', price: 59.99, image: '/products/product-6.svg', description: 'Noise cancelling headphones' },
  { id: 7, name: 'Water Bottle', price: 14.99, image: '/products/product-7.svg', description: 'Insulated stainless steel' },
  { id: 8, name: 'Jeans', price: 39.99, image: '/products/product-8.svg', description: 'Comfort fit denim' },
  { id: 9, name: 'Coffee Mug', price: 9.99, image: '/products/product-9.svg', description: 'Ceramic mug for hot drinks' },
  { id: 10, name: 'Bluetooth Speaker', price: 79.99, image: '/products/product-10.svg', description: 'Portable speaker with bass' },
  { id: 11, name: 'Hat', price: 12.99, image: '/products/product-11.svg', description: 'Casual cap for sunny days' },
  { id: 12, name: 'Notebook', price: 6.99, image: '/products/product-12.svg', description: 'Ruled notebook for notes' },
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
