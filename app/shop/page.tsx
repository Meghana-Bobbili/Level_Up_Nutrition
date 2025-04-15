"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import type { NextPage } from 'next';
import { FaStar, FaFilter } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  goal: string;
  level: string;
  image: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  flavors: string[];
  details: string[];
  nutritionFacts: {
    servingSize: string;
    servingsPerContainer: number;
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Elite Whey+',
    description: 'Fuel your muscles with 25g of clean whey protein per scoop.',
    price: 49.99,
    category: 'Protein',
    goal: 'Muscle Gain',
    level: 'Pro',
    image: '/products/whey.jpg',
    rating: 4.8,
    reviews: 124,
    inStock: true,
    flavors: ['Vanilla', 'Chocolate'],
    details: ['Gluten-free', 'Non-GMO'],
    nutritionFacts: {
      servingSize: '30g',
      servingsPerContainer: 24,
      calories: 150,
      protein: 25,
      carbs: 5,
      fat: 5
    }
  },
  {
    id: 2,
    name: 'Recovery Aminos',
    description: 'Essential amino acids for faster recovery and reduced muscle soreness.',
    price: 39.99,
    category: 'Amino Acids',
    goal: 'Recovery',
    level: 'Intermediate',
    image: '/products/whey.jpg',
    rating: 4.6,
    reviews: 89,
    inStock: true,
    flavors: ['Lemon', 'Berry'],
    details: ['Gluten-free', 'Non-GMO'],
    nutritionFacts: {
      servingSize: '15g',
      servingsPerContainer: 30,
      calories: 100,
      protein: 10,
      carbs: 5,
      fat: 0
    }
  },
  {
    id: 3,
    name: 'ElectroFuel',
    description: 'Advanced electrolyte formula with 5 key minerals for optimal hydration.',
    price: 29.99,
    category: 'Hydration',
    goal: 'Energy',
    level: 'Beginner',
    image: '/products/whey.jpg',
    rating: 4.9,
    reviews: 156,
    inStock: true,
    flavors: ['Lemon', 'Mango'],
    details: ['Gluten-free', 'Non-GMO'],
    nutritionFacts: {
      servingSize: '20g',
      servingsPerContainer: 20,
      calories: 100,
      protein: 0,
      carbs: 20,
      fat: 0
    }
  },
  {
    id: 4,
    name: 'Creatine Monohydrate',
    description: 'Pure creatine monohydrate for increased strength and power output.',
    price: 24.99,
    category: 'Creatine',
    goal: 'Performance',
    level: 'Pro',
    image: '/products/whey.jpg',
    rating: 4.7,
    reviews: 203,
    inStock: true,
    flavors: ['Unflavored'],
    details: ['Gluten-free', 'Non-GMO'],
    nutritionFacts: {
      servingSize: '3g',
      servingsPerContainer: 100,
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0
    }
  },
  {
    id: 5,
    name: 'Omega-3 Complex',
    description: 'High-potency fish oil with EPA and DHA for joint and heart health.',
    price: 34.99,
    category: 'Vitamins',
    goal: 'Recovery',
    level: 'Intermediate',
    image: '/products/whey.jpg',
    rating: 4.5,
    reviews: 67,
    inStock: true,
    flavors: ['Taste of the Sea'],
    details: ['Gluten-free', 'Non-GMO', 'High EPA/DHA'],
    nutritionFacts: {
      servingSize: '1g',
      servingsPerContainer: 60,
      calories: 10,
      protein: 0,
      carbs: 0,
      fat: 1
    }
  },
  {
    id: 6,
    name: 'Pre-Workout Elite',
    description: 'Advanced pre-workout formula with clinically dosed ingredients.',
    price: 44.99,
    category: 'Pre-Workout',
    goal: 'Energy',
    level: 'Pro',
    image: '/products/whey.jpg',
    rating: 4.8,
    reviews: 178,
    inStock: true,
    flavors: ['Blue Raspberry', 'Fruit Punch', 'Watermelon'],
    details: ['Sugar-free', 'Beta-Alanine', 'Caffeine'],
    nutritionFacts: {
      servingSize: '15g',
      servingsPerContainer: 30,
      calories: 5,
      protein: 0,
      carbs: 1,
      fat: 0
    }
  }
];

interface PriceRange {
  label: string;
  min: number;
  max: number;
}

const filters = {
  goals: ['Energy', 'Recovery', 'Muscle Gain', 'Fat Loss', 'Performance'],
  categories: ['Protein', 'Creatine', 'Hydration', 'Vitamins', 'Pre-Workout', 'Amino Acids'],
  levels: ['Beginner', 'Intermediate', 'Pro'],
  priceRanges: [
    { label: 'Under $25', min: 0, max: 25 },
    { label: '$25 - $50', min: 25, max: 50 },
    { label: '$50+', min: 50, max: Infinity }
  ],
  ratings: [4, 4.5, 5]
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

export default function ShopPage() {
  const searchParams = useSearchParams();
  const [selectedFilters, setSelectedFilters] = useState({
    category: searchParams.get('category') || '',
    goal: searchParams.get('goal') || '',
    level: '',
    priceRange: null as PriceRange | null,
    rating: null as number | null
  });
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortBy, setSortBy] = useState('featured');

  // Apply filters and sorting
  useEffect(() => {
    let result = [...products];

    // Apply category filter
    if (selectedFilters.category) {
      result = result.filter(p => p.category === selectedFilters.category);
    }

    // Apply goal filter
    if (selectedFilters.goal) {
      result = result.filter(p => p.goal === selectedFilters.goal);
    }

    // Apply level filter
    if (selectedFilters.level) {
      result = result.filter(p => p.level === selectedFilters.level);
    }

    // Apply price range filter
    if (selectedFilters.priceRange) {
      result = result.filter(p => 
        p.price >= selectedFilters.priceRange!.min && 
        p.price <= selectedFilters.priceRange!.max
      );
    }

    // Apply rating filter
    if (selectedFilters.rating) {
      result = result.filter(p => p.rating >= selectedFilters.rating!);
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'reviews':
        result.sort((a, b) => b.reviews - a.reviews);
        break;
      default:
        // 'featured' - keep original order
        break;
    }

    setFilteredProducts(result);
  }, [selectedFilters, sortBy]);

  const clearFilters = () => {
    setSelectedFilters({
      category: '',
      goal: '',
      level: '',
      priceRange: null,
      rating: null
    });
  };

  const FilterSection = ({ title, items, selected, onSelect }: any) => (
    <div className="mb-6">
      <h3 className="font-medium mb-3">{title}</h3>
      <div className="space-y-2">
        {items.map((item: any) => (
          <button
            key={typeof item === 'object' ? item.label : item}
            onClick={() => onSelect(typeof item === 'object' ? item : item)}
            className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
              selected === (typeof item === 'object' ? item.label : item)
                ? 'bg-primary text-white'
                : 'hover:bg-background-alt'
            }`}
          >
            {typeof item === 'object' ? item.label : item}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">Shop Premium Supplements</h1>
          <p className="text-text-light max-w-2xl mx-auto">
            Discover our range of high-quality supplements designed for peak performance
          </p>
        </div>

        {/* Mobile Filter Button */}
        <div className="lg:hidden mb-4">
          <button
            onClick={() => setShowMobileFilters(true)}
            className="w-full flex items-center justify-center space-x-2 bg-primary text-white px-4 py-2 rounded-lg"
          >
            <FaFilter />
            <span>Show Filters</span>
          </button>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className={`
            fixed lg:relative top-0 left-0 h-full w-80 bg-white lg:bg-transparent z-50 
            transform transition-transform duration-300 lg:transform-none
            ${showMobileFilters ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            overflow-y-auto lg:w-64 p-6 lg:p-0
          `}>
            {/* Mobile Close Button */}
            <button
              onClick={() => setShowMobileFilters(false)}
              className="lg:hidden absolute top-4 right-4 text-2xl"
            >
              <IoClose />
            </button>

            <div className="sticky top-4">
              {/* Sort Dropdown */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Sort By</h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full p-2 border border-border rounded-lg"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="reviews">Most Reviewed</option>
                </select>
              </div>

              {/* Filter Sections */}
              <FilterSection
                title="Categories"
                items={filters.categories}
                selected={selectedFilters.category}
                onSelect={(category: string) => 
                  setSelectedFilters(prev => ({
                    ...prev,
                    category: prev.category === category ? '' : category
                  }))
                }
              />

              <FilterSection
                title="Goals"
                items={filters.goals}
                selected={selectedFilters.goal}
                onSelect={(goal: string) =>
                  setSelectedFilters(prev => ({
                    ...prev,
                    goal: prev.goal === goal ? '' : goal
                  }))
                }
              />

              <FilterSection
                title="Experience Level"
                items={filters.levels}
                selected={selectedFilters.level}
                onSelect={(level: string) =>
                  setSelectedFilters(prev => ({
                    ...prev,
                    level: prev.level === level ? '' : level
                  }))
                }
              />

              <FilterSection
                title="Price Range"
                items={filters.priceRanges}
                selected={selectedFilters.priceRange?.label}
                onSelect={(range: { label: string; min: number; max: number }) =>
                  setSelectedFilters(prev => ({
                    ...prev,
                    priceRange: prev.priceRange?.label === range.label ? null : range
                  }))
                }
              />

              <div className="mb-6">
                <h3 className="font-medium mb-3">Minimum Rating</h3>
                <div className="space-y-2">
                  {filters.ratings.map(rating => (
                    <button
                      key={rating}
                      onClick={() => setSelectedFilters(prev => ({
                        ...prev,
                        rating: prev.rating === rating ? null : rating
                      }))}
                      className={`flex items-center space-x-2 w-full px-3 py-2 rounded-lg transition-colors ${
                        selectedFilters.rating === rating
                          ? 'bg-primary text-white'
                          : 'hover:bg-background-alt'
                      }`}
                    >
                      <div className="flex text-yellow-400">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <FaStar
                            key={i}
                            className={i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}
                          />
                ))}
              </div>
                      <span>& Up</span>
                    </button>
                  ))}
                  </div>
              </div>

              {/* Clear Filters Button */}
              {(selectedFilters.category || selectedFilters.goal || selectedFilters.level || 
                selectedFilters.priceRange || selectedFilters.rating) && (
                <button
                  onClick={clearFilters}
                  className="w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Active Filters */}
            {(selectedFilters.category || selectedFilters.goal || selectedFilters.level || 
              selectedFilters.priceRange || selectedFilters.rating) && (
              <div className="mb-6 flex flex-wrap gap-2">
                {selectedFilters.category && (
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                    {selectedFilters.category}
                  </span>
                )}
                {selectedFilters.goal && (
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                    {selectedFilters.goal}
                  </span>
                )}
                {selectedFilters.level && (
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                    {selectedFilters.level}
                  </span>
                )}
                {selectedFilters.priceRange && (
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                    {selectedFilters.priceRange.label}
                  </span>
                )}
                {selectedFilters.rating && (
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                    {selectedFilters.rating}+ Stars
                  </span>
                )}
              </div>
            )}

            {/* Results Count */}
            <p className="mb-6 text-text-light">
              Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
            </p>

            {/* Products */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <Link href={`/shop/${product.id}`} key={product.id} className="group">
                  <div className="bg-background-alt rounded-lg p-4 transition-transform hover:scale-105">
                    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 mb-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <h3 className="text-lg font-medium text-text mb-2">{product.name}</h3>
                    <p className="text-text-light text-sm mb-2">{product.category}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-primary font-bold">${product.price}</span>
                      <div className="flex items-center">
                        <div className="flex text-yellow-400">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <FaStar
                              key={i}
                              className={i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}
                            />
                          ))}
                        </div>
                        <span className="ml-2 text-text-light text-sm">({product.reviews})</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* No Results */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl text-text-light">No products match your selected filters.</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 