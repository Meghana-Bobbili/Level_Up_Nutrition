import React from 'react';
import Link from 'next/link';

const stages = [
  {
    name: 'Foundation',
    level: 'Beginners',
    description: 'Start your nutrition journey with the essentials. Focus on building healthy habits and understanding basic nutritional needs.',
    focus: ['General health', 'Hydration', 'Basic multivitamins'],
    products: [
      { name: 'Essential Multivitamin', price: 29.99 },
      { name: 'Hydration Plus', price: 24.99 },
      { name: 'Basic Protein', price: 39.99 }
    ],
    routine: 'Morning: Multivitamin with breakfast\nPre-workout: Hydration Plus\nPost-workout: Basic Protein'
  },
  {
    name: 'Growth',
    level: 'Intermediate',
    description: 'Level up your nutrition game with targeted supplementation for improved performance and recovery.',
    focus: ['Protein optimization', 'Creatine supplementation', 'BCAAs'],
    products: [
      { name: 'Premium Whey Isolate', price: 54.99 },
      { name: 'Pure Creatine', price: 34.99 },
      { name: 'BCAA Complex', price: 44.99 }
    ],
    routine: 'Morning: Creatine + Protein\nPre-workout: BCAAs\nPost-workout: Protein + Creatine'
  },
  {
    name: 'Performance',
    level: 'Advanced',
    description: 'Advanced nutrition strategies for serious athletes looking to maximize their potential.',
    focus: ['Nootropics', 'Advanced recovery', 'Carb cycling'],
    products: [
      { name: 'Elite Performance Stack', price: 89.99 },
      { name: 'Recovery Matrix', price: 64.99 },
      { name: 'Carb Loader', price: 49.99 }
    ],
    routine: 'Morning: Nootropics\nPre-workout: Carb Loader\nIntra-workout: BCAAs\nPost-workout: Recovery Matrix'
  },
  {
    name: 'Elite',
    level: 'Top-Level',
    description: 'Cutting-edge nutrition solutions for elite athletes pushing the boundaries of human performance.',
    focus: ['Customized stacks', 'Intra-workout formulas', 'Pre-event strategies'],
    products: [
      { name: 'Elite Stack', price: 149.99 },
      { name: 'Competition Formula', price: 79.99 },
      { name: 'Recovery Ultra', price: 89.99 }
    ],
    routine: 'Morning: Custom Stack\nPre-workout: Competition Formula\nIntra-workout: Advanced Hydration\nPost-workout: Recovery Ultra'
  }
];

export default function NutritionStages() {
  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Nutrition Stages</h1>
          <p className="text-xl text-gray-600">Find the perfect nutrition plan for your level</p>
        </div>

        <div className="space-y-12">
          {stages.map((stage, index) => (
            <div key={stage.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="md:flex md:items-center md:justify-between">
                  <div className="md:flex-1">
                    <h2 className="text-3xl font-bold text-primary mb-4">{stage.name}</h2>
                    <p className="text-lg text-gray-600 mb-6">{stage.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Focus Areas */}
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Focus Areas</h3>
                        <ul className="list-disc list-inside space-y-2">
                          {stage.focus.map(item => (
                            <li key={item} className="text-gray-600">{item}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Recommended Products */}
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Recommended Products</h3>
                        <div className="space-y-4">
                          {stage.products.map(product => (
                            <div key={product.name} className="flex justify-between items-center">
                              <span className="text-gray-600">{product.name}</span>
                              <span className="text-primary font-semibold">${product.price}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Sample Routine */}
                    <div className="mt-8">
                      <h3 className="text-xl font-semibold mb-4">Sample Routine</h3>
                      <pre className="bg-gray-50 p-4 rounded-lg text-gray-600 whitespace-pre-wrap">
                        {stage.routine}
                      </pre>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <Link
                    href={`/shop?level=${stage.level}`}
                    className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition"
                  >
                    Shop {stage.name} Products
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 