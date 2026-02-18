import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductById } from '../store/slices/productsSlice';
import { fetchReviews } from '../store/slices/reviewsSlice';
import { addToCart } from '../store/slices/cartSlice';
import ReviewList from '../components/ReviewList';
import './ProductDetailPage.css';

const ProductDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const { selectedProduct, loading: productLoading, error: productError } = useSelector(
    (state) => state.products
  );
  const { items: reviews, loading: reviewsLoading, error: reviewsError } = useSelector(
    (state) => state.reviews
  );

  useEffect(() => {
    dispatch(fetchProductById(id));
    dispatch(fetchReviews(id));
  }, [dispatch, id]);

  const handleAddToCart = () => {
    if (selectedProduct) {
      dispatch(addToCart({ product: selectedProduct, quantity }));
      alert('Product added to cart!');
    }
  };

  if (productLoading) {
    return <div className="product-detail-loading">Loading product...</div>;
  }

  if (productError) {
    return <div className="product-detail-error">Error: {productError}</div>;
  }

  if (!selectedProduct) {
    return <div className="product-detail-error">Product not found</div>;
  }

  return (
    <div className="product-detail-page">
      <div className="product-detail-container">
        <Link to="/products" className="back-link">← Back to Products</Link>

        <div className="product-detail-content">
          <div className="product-detail-image-section">
            <img src={selectedProduct.image} alt={selectedProduct.title} />
          </div>

          <div className="product-detail-info">
            <span className="product-category">{selectedProduct.category}</span>
            <h1>{selectedProduct.title}</h1>
            <p className="product-description">{selectedProduct.description}</p>
            <div className="product-price-section">
              <span className="product-price">${selectedProduct.price}</span>
            </div>

            <div className="product-actions">
              <div className="quantity-selector">
                <label>Quantity:</label>
                <div className="quantity-controls">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                  <span>{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
              </div>
              <button className="add-to-cart-btn" onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <div className="reviews-section">
          <ReviewList reviews={reviews} loading={reviewsLoading} error={reviewsError} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
