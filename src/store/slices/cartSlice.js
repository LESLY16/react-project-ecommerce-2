import { createSlice } from '@reduxjs/toolkit';

// Load cart from localStorage
const loadCartFromStorage = () => {
  try {
    const serializedCart = localStorage.getItem('cart');
    if (serializedCart === null) {
      return { items: [], totalAmount: 0, totalItems: 0 };
    }
    return JSON.parse(serializedCart);
  } catch (error) {
    return { items: [], totalAmount: 0, totalItems: 0 };
  }
};

// Save cart to localStorage
const saveCartToStorage = (cart) => {
  try {
    const serializedCart = JSON.stringify(cart);
    localStorage.setItem('cart', serializedCart);
  } catch (error) {
    // Ignore write errors
  }
};

// Calculate totals
const calculateTotals = (items) => {
  // Ensure items is an array
  if (!items || !Array.isArray(items)) {
    return { totalAmount: 0, totalItems: 0 };
  }
  const totalAmount = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  return { totalAmount: parseFloat(totalAmount.toFixed(2)), totalItems };
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: loadCartFromStorage(),
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity = 1 } = action.payload;
      // Ensure items array exists
      if (!state.items || !Array.isArray(state.items)) {
        state.items = [];
      }
      const existingItem = state.items.find(item => item.product.id === product.id);
      
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ product, quantity });
      }
      
      const totals = calculateTotals(state.items);
      state.totalAmount = totals.totalAmount;
      state.totalItems = totals.totalItems;
      saveCartToStorage(state);
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      // Ensure items array exists
      if (!state.items || !Array.isArray(state.items)) {
        state.items = [];
      }
      state.items = state.items.filter(item => item.product.id !== productId);
      
      const totals = calculateTotals(state.items);
      state.totalAmount = totals.totalAmount;
      state.totalItems = totals.totalItems;
      saveCartToStorage(state);
    },
    updateQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      // Ensure items array exists
      if (!state.items || !Array.isArray(state.items)) {
        state.items = [];
      }
      const item = state.items.find(item => item.product.id === productId);
      
      if (item && quantity > 0) {
        item.quantity = quantity;
      }
      
      const totals = calculateTotals(state.items);
      state.totalAmount = totals.totalAmount;
      state.totalItems = totals.totalItems;
      saveCartToStorage(state);
    },
    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
      state.totalItems = 0;
      saveCartToStorage(state);
    }
  }
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
