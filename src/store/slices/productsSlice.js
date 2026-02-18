import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// API base URL
const API_BASE = 'https://jsonplaceholder.typicode.com';

// Helper function to map post to product
const mapPostToProduct = (post) => {
  // Generate deterministic price from post ID
  const price = ((post.id * 17 + 13) % 200) + 9.99;
  
  // Map userId to categories
  const categoryMap = {
    1: 'Electronics',
    2: 'Clothing',
    3: 'Books',
    4: 'Home & Garden',
    5: 'Sports',
    6: 'Electronics',
    7: 'Clothing',
    8: 'Books',
    9: 'Home & Garden',
    10: 'Sports'
  };
  
  return {
    id: post.id,
    title: post.title,
    description: post.body,
    price: parseFloat(price.toFixed(2)),
    image: `https://picsum.photos/seed/${post.id}/400/300`,
    category: categoryMap[post.userId] || 'Electronics',
    userId: post.userId
  };
};

// Async thunks
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_BASE}/posts`);
      if (!response.ok) throw new Error('Failed to fetch products');
      const posts = await response.json();
      return posts.map(mapPostToProduct);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchProductById = createAsyncThunk(
  'products/fetchProductById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_BASE}/posts/${id}`);
      if (!response.ok) throw new Error('Failed to fetch product');
      const post = await response.json();
      return mapPostToProduct(post);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createProduct = createAsyncThunk(
  'products/createProduct',
  async (productData, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_BASE}/posts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: productData.title,
          body: productData.description,
          userId: productData.userId || 1
        })
      });
      if (!response.ok) throw new Error('Failed to create product');
      const post = await response.json();
      return mapPostToProduct({ ...post, id: Date.now() }); // Use timestamp for unique ID
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateProduct = createAsyncThunk(
  'products/updateProduct',
  async ({ id, productData }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_BASE}/posts/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id,
          title: productData.title,
          body: productData.description,
          userId: productData.userId || 1
        })
      });
      if (!response.ok) throw new Error('Failed to update product');
      const post = await response.json();
      return mapPostToProduct(post);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    selectedProduct: null,
    loading: false,
    error: null,
    searchTerm: '',
    selectedCategory: 'All'
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    clearSelectedProduct: (state) => {
      state.selectedProduct = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Fetch products
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Fetch product by ID
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedProduct = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Create product
      .addCase(createProduct.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      // Update product
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.items.findIndex(p => p.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      });
  }
});

export const { setSearchTerm, setSelectedCategory, clearSelectedProduct } = productsSlice.actions;
export default productsSlice.reducer;
