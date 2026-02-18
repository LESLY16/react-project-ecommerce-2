import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_BASE = 'https://jsonplaceholder.typicode.com';

export const fetchReviews = createAsyncThunk(
  'reviews/fetchReviews',
  async (productId, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_BASE}/posts/${productId}/comments`);
      if (!response.ok) throw new Error('Failed to fetch reviews');
      const comments = await response.json();
      return comments;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: {
    items: [],
    loading: false,
    error: null
  },
  reducers: {
    clearReviews: (state) => {
      state.items = [];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchReviews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { clearReviews } = reviewsSlice.actions;
export default reviewsSlice.reducer;
