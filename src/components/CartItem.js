import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../store/slices/cartSlice';
import './CartItem.css';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const { product, quantity } = item;

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity > 0) {
      dispatch(updateQuantity({ productId: product.id, quantity: newQuantity }));
    }
  };

  const handleRemove = () => {
    dispatch(removeFromCart(product.id));
  };

  return (
    <div className="cart-item">
      <img src={product.image} alt={product.title} className="cart-item-image" />
      <div className="cart-item-details">
        <h3 className="cart-item-title">{product.title}</h3>
        <p className="cart-item-category">{product.category}</p>
        <p className="cart-item-price">${product.price}</p>
      </div>
      <div className="cart-item-actions">
        <div className="quantity-controls">
          <button onClick={() => handleQuantityChange(quantity - 1)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => handleQuantityChange(quantity + 1)}>+</button>
        </div>
        <button className="remove-btn" onClick={handleRemove}>Remove</button>
      </div>
      <div className="cart-item-total">
        ${(product.price * quantity).toFixed(2)}
      </div>
    </div>
  );
};

export default CartItem;
