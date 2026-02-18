import { createSlice } from '@reduxjs/toolkit';

// Load auth from localStorage
const loadAuthFromStorage = () => {
  try {
    const serializedAuth = localStorage.getItem('auth');
    if (serializedAuth === null) {
      return { user: null, isAuthenticated: false, loading: false, error: null };
    }
    const auth = JSON.parse(serializedAuth);
    return { ...auth, loading: false, error: null };
  } catch (error) {
    return { user: null, isAuthenticated: false, loading: false, error: null };
  }
};

// Save auth to localStorage
const saveAuthToStorage = (user, isAuthenticated) => {
  try {
    const serializedAuth = JSON.stringify({ user, isAuthenticated });
    localStorage.setItem('auth', serializedAuth);
  } catch (error) {
    // Ignore write errors
  }
};

const authSlice = createSlice({
  name: 'auth',
  initialState: loadAuthFromStorage(),
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
      state.error = null;
      saveAuthToStorage(action.payload, true);
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
      localStorage.removeItem('auth');
    },
    registerStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    registerSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
      state.error = null;
      saveAuthToStorage(action.payload, true);
    },
    registerFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

// Async action creators (mock implementation)
export const login = (email, password) => async (dispatch) => {
  dispatch(loginStart());
  
  // Simulate API call
  setTimeout(() => {
    // Mock validation - accept any email/password
    if (email && password) {
      dispatch(loginSuccess({
        id: Date.now(),
        name: email.split('@')[0],
        email: email
      }));
    } else {
      dispatch(loginFailure('Invalid credentials'));
    }
  }, 500);
};

export const register = (name, email, password) => async (dispatch) => {
  dispatch(registerStart());
  
  // Simulate API call
  setTimeout(() => {
    if (name && email && password) {
      dispatch(registerSuccess({
        id: Date.now(),
        name: name,
        email: email
      }));
    } else {
      dispatch(registerFailure('Registration failed'));
    }
  }, 500);
};

export const { loginStart, loginSuccess, loginFailure, logout, registerStart, registerSuccess, registerFailure } = authSlice.actions;
export default authSlice.reducer;
