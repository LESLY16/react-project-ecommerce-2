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
      <div className="cart-item-image">
        <img src={product.image || '/placeholder.png'} alt={product.name} />
      </div>
      <div className="cart-item-details">
        <h3>{product.name}</h3>
        <p className="cart-item-price">${product.price.toFixed(2)}</p>
      </div>
      <div className="cart-item-quantity">
        <button onClick={() => handleQuantityChange(quantity - 1)}>-</button>
        <span>{quantity}</span>
        <button onClick={() => handleQuantityChange(quantity + 1)}>+</button>
      </div>
      <div className="cart-item-total">
        <p>${(product.price * quantity).toFixed(2)}</p>
      </div>
      <button className="cart-item-remove" onClick={handleRemove}>
        Remove
      </button>
    </div>
  );
};

export default CartItem;
