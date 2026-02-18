import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, setSearchTerm, setSelectedCategory } from '../store/slices/productsSlice';
import { addToCart } from '../store/slices/cartSlice';
import ProductCard from '../components/ProductCard';
import './ProductsPage.css';

const ProductsPage = () => {
  const dispatch = useDispatch();
  const { items, loading, error, searchTerm, selectedCategory } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (items.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, items.length]);

  const categories = ['All', 'Electronics', 'Clothing', 'Books', 'Home & Garden', 'Sports'];

  const filteredProducts = useMemo(() => {
    let filtered = items;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter((product) => product.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [items, searchTerm, selectedCategory]);

  const handleAddToCart = (product) => {
    dispatch(addToCart({ product, quantity: 1 }));
  };

  const handleSearchChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  const handleCategoryChange = (category) => {
    dispatch(setSelectedCategory(category));
  };

  return (
    <div className="products-page">
      <div className="products-container">
        <h1>Our Products</h1>

        <div className="filters-section">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>

          <div className="category-filters">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {loading && <div className="loading">Loading products...</div>}
        {error && <div className="error">Error: {error}</div>}

        {!loading && !error && filteredProducts.length === 0 && (
          <div className="no-products">No products found</div>
        )}

        {!loading && !error && filteredProducts.length > 0 && (
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
