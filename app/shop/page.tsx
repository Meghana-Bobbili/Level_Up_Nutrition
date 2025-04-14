import React from 'react';

const products = [
  {
    id: 1,
    name: 'Elite Whey+',
    description: 'Fuel your muscles with 25g of clean whey protein per scoop.',
    price: 49.99,
    category: 'Protein',
    goal: 'Muscle Gain',
    level: 'Pro',
    image: '/products/whey.jpg'
  },
  // More products will be added here
];

const filters = {
  goals: ['Energy', 'Recovery', 'Muscle Gain', 'Fat Loss'],
  types: ['Protein', 'Creatine', 'Hydration', 'Vitamins'],
  levels: ['Beginner', 'Intermediate', 'Pro']
};

export default function Shop() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold mb-8">Shop</h1>
        
        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Filters</h2>
              
              {/* Goals Filter */}
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Goals</h3>
                {filters.goals.map(goal => (
                  <div key={goal} className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      id={`goal-${goal}`}
                      className="mr-2"
                    />
                    <label htmlFor={`goal-${goal}`}>{goal}</label>
                  </div>
                ))}
              </div>

              {/* Product Type Filter */}
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Product Type</h3>
                {filters.types.map(type => (
                  <div key={type} className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      id={`type-${type}`}
                      className="mr-2"
                    />
                    <label htmlFor={`type-${type}`}>{type}</label>
                  </div>
                ))}
              </div>

              {/* Athlete Level Filter */}
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Athlete Level</h3>
                {filters.levels.map(level => (
                  <div key={level} className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      id={`level-${level}`}
                      className="mr-2"
                    />
                    <label htmlFor={`level-${level}`}>{level}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="col-span-1 md:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {products.map(product => (
                <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="h-48 bg-gray-200"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-primary font-semibold">${product.price}</span>
                      <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 