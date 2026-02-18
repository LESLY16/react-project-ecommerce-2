import React from 'react';
import './ReviewList.css';

const ReviewList = ({ reviews, loading, error }) => {
  if (loading) {
    return <div className="reviews-loading">Loading reviews...</div>;
  }

  if (error) {
    return <div className="reviews-error">Error loading reviews: {error}</div>;
  }

  if (!reviews || reviews.length === 0) {
    return <div className="reviews-empty">No reviews yet.</div>;
  }

  return (
    <div className="review-list">
      <h3 className="reviews-title">Customer Reviews</h3>
      {reviews.map((review) => (
        <div key={review.id} className="review-item">
          <div className="review-header">
            <strong className="review-name">{review.name}</strong>
            <span className="review-email">{review.email}</span>
          </div>
          <p className="review-body">{review.body}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
