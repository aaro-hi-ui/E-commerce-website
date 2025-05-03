import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import ProductGrid from '../components/product/ProductGrid';
import { mockProducts } from '../data/mockData';
import { Filter, Search, SlidersHorizontal, ChevronDown, X } from 'lucide-react';
import { IProduct } from '../types';

const ProductsPage: React.FC = () => {
  const { category } = useParams<{ category?: string }>();
  const location = useLocation();
  const [products, setProducts] = useState<IProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [sortOption, setSortOption] = useState('featured');

  // Get all available brands from products
  const allBrands = [...new Set(mockProducts.map(product => product.brand))];

  useEffect(() => {
    // Parse query params
    const params = new URLSearchParams(location.search);
    const discount = params.get('discount') === 'true';
    const sort = params.get('sort');
    
    if (sort) {
      setSortOption(sort);
    }

    // Filter products based on category or other criteria
    let filtered = [...mockProducts];
    
    if (category) {
      filtered = filtered.filter(product => product.category.toLowerCase() === category.toLowerCase());
      document.title = `${category.charAt(0).toUpperCase() + category.slice(1)} Products - Aventramart`;
    } else {
      document.title = 'All Products - Aventramart';
    }
    
    if (discount) {
      filtered = filtered.filter(product => product.discount > 0);
      document.title = 'Hot Deals - Aventramart';
    }
    
    setProducts(filtered);
    setFilteredProducts(filtered);
  }, [category, location.search]);

  useEffect(() => {
    let filtered = [...products];
    
    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(
        product =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply price range filter
    filtered = filtered.filter(
      product => product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Apply brand filter
    if (selectedBrands.length > 0) {
      filtered = filtered.filter(product => selectedBrands.includes(product.brand));
    }
    
    // Apply sorting
    switch (sortOption) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered.sort((a, b) => (a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1));
        break;
      case 'discount':
        filtered.sort((a, b) => b.discount - a.discount);
        break;
      default:
        // featured - no specific sorting
        break;
    }
    
    setFilteredProducts(filtered);
  }, [products, searchTerm, priceRange, selectedBrands, sortOption]);

  const handleBrandSelection = (brand: string) => {
    setSelectedBrands(prevBrands =>
      prevBrands.includes(brand)
        ? prevBrands.filter(b => b !== brand)
        : [...prevBrands, brand]
    );
  };

  const clearFilters = () => {
    setSearchTerm('');
    setPriceRange([0, 1000]);
    setSelectedBrands([]);
    setSortOption('featured');
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {category
              ? `${category.charAt(0).toUpperCase() + category.slice(1)} Products`
              : location.search.includes('discount=true')
              ? 'Hot Deals & Promotions'
              : 'All Products'}
          </h1>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-gray-600">
              Showing {filteredProducts.length} of {mockProducts.length} products
            </p>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsFiltersOpen(!isFiltersOpen)}
                className="md:hidden flex items-center space-x-1 py-2 px-4 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50"
              >
                <Filter className="h-4 w-4" />
                <span>Filters</span>
              </button>
              <div className="flex items-center space-x-2">
                <SlidersHorizontal className="h-4 w-4 text-gray-500" />
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="border-none text-gray-700 focus:outline-none focus:ring-0 py-2 pr-8 appearance-none bg-right"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest First</option>
                  <option value="discount">Biggest Discount</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters - Desktop */}
          <div className="hidden md:block w-full md:w-64 shrink-0">
            <div className="sticky top-24 bg-white rounded-lg border border-gray-200 shadow-sm p-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold text-gray-900">Filters</h2>
                {(searchTerm || priceRange[0] > 0 || priceRange[1] < 1000 || selectedBrands.length > 0) && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-emerald-600 hover:text-emerald-700"
                  >
                    Clear all
                  </button>
                )}
              </div>
              
              <div className="border-t border-gray-200 py-4">
                <h3 className="font-medium text-gray-900 mb-2">Search</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                  />
                  <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
              </div>
              
              <div className="border-t border-gray-200 py-4">
                <h3 className="font-medium text-gray-900 mb-2">Price Range</h3>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm text-gray-600">
                    ${priceRange[0]} - ${priceRange[1]}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                  className="w-full accent-emerald-600 mb-2"
                />
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full accent-emerald-600"
                />
              </div>
              
              <div className="border-t border-gray-200 py-4">
                <h3 className="font-medium text-gray-900 mb-2">Brands</h3>
                <div className="space-y-2 max-h-44 overflow-y-auto">
                  {allBrands.map(brand => (
                    <label key={brand} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand)}
                        onChange={() => handleBrandSelection(brand)}
                        className="rounded text-emerald-600 focus:ring-emerald-500 mr-2"
                      />
                      <span className="text-gray-700">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile Filters */}
          {isFiltersOpen && (
            <div className="fixed inset-0 bg-black/50 z-50 md:hidden flex items-end">
              <div className="bg-white rounded-t-2xl p-4 w-full max-h-[80vh] overflow-y-auto">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-bold text-gray-900">Filters</h2>
                  <button onClick={() => setIsFiltersOpen(false)}>
                    <X className="h-6 w-6 text-gray-700" />
                  </button>
                </div>
                
                <div className="border-t border-gray-200 py-4">
                  <h3 className="font-medium text-gray-900 mb-2">Search</h3>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search products..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                    />
                    <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  </div>
                </div>
                
                <div className="border-t border-gray-200 py-4">
                  <h3 className="font-medium text-gray-900 mb-2">Price Range</h3>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm text-gray-600">
                      ${priceRange[0]} - ${priceRange[1]}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                    className="w-full accent-emerald-600 mb-2"
                  />
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-emerald-600"
                  />
                </div>
                
                <div className="border-t border-gray-200 py-4">
                  <h3 className="font-medium text-gray-900 mb-2">Brands</h3>
                  <div className="space-y-2">
                    {allBrands.map(brand => (
                      <label key={brand} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedBrands.includes(brand)}
                          onChange={() => handleBrandSelection(brand)}
                          className="rounded text-emerald-600 focus:ring-emerald-500 mr-2"
                        />
                        <span className="text-gray-700">{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div className="mt-4 flex flex-col gap-2">
                  <button
                    onClick={() => setIsFiltersOpen(false)}
                    className="w-full bg-emerald-600 text-white font-medium py-3 px-4 rounded-lg hover:bg-emerald-700 transition-colors"
                  >
                    Apply Filters
                  </button>
                  <button
                    onClick={clearFilters}
                    className="w-full bg-gray-200 text-gray-700 font-medium py-3 px-4 rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {/* Products */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <ProductGrid products={filteredProducts} />
            ) : (
              <div className="text-center py-16 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-medium text-gray-700 mb-2">No products found</h3>
                <p className="text-gray-500 mb-4">Try adjusting your search or filter criteria</p>
                <button
                  onClick={clearFilters}
                  className="bg-emerald-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;