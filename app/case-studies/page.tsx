"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const caseStudies = [
  {
    id: 1,
    name: "John's Strength Journey",
    category: "Strength & Muscle",
    duration: "6 months",
    goal: "Muscle Mass",
    results: {
      muscleGain: "12kg muscle mass",
      strengthIncrease: "80% strength increase",
      recovery: "40% faster recovery"
    },
    products: ["Elite Whey+", "Creatine Power", "BCAA Complex"],
    testimonial: "The personalized nutrition plan and supplement regime transformed my training. I've achieved more in 6 months than in my previous 2 years of training.",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&auto=format&fit=crop&q=60",
    stats: [
      { label: "Bench Press", before: "60kg", after: "100kg" },
      { label: "Body Weight", before: "70kg", after: "82kg" },
      { label: "Body Fat", before: "20%", after: "12%" }
    ]
  },
  {
    id: 2,
    name: "Sarah's Performance Evolution",
    category: "Athletic Performance",
    duration: "8 months",
    goal: "Marathon Preparation",
    results: {
      endurance: "45% endurance increase",
      recovery: "50% faster recovery",
      performance: "Personal best in marathon"
    },
    products: ["Pre-Workout Elite", "Hydration Plus", "Recovery Matrix"],
    testimonial: "The supplements and nutrition guidance helped me shatter my previous records. I completed my first marathon with better energy levels throughout.",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&auto=format&fit=crop&q=60",
    stats: [
      { label: "5K Time", before: "28min", after: "22min" },
      { label: "Recovery Time", before: "48hrs", after: "24hrs" },
      { label: "Weekly Distance", before: "20km", after: "50km" }
    ]
  },
  {
    id: 3,
    name: "Mike's Transformation Story",
    category: "Weight Management",
    duration: "12 months",
    goal: "Fat Loss & Muscle Tone",
    results: {
      weightLoss: "25kg fat loss",
      muscleGain: "8kg muscle gain",
      energy: "100% energy increase"
    },
    products: ["Fat Burner Plus", "Lean Protein", "Multivitamin Pro"],
    testimonial: "The comprehensive approach to nutrition and supplementation made my transformation possible. I've never felt better or more confident.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&auto=format&fit=crop&q=60",
    stats: [
      { label: "Weight", before: "110kg", after: "85kg" },
      { label: "Waist Size", before: "42inch", after: "34inch" },
      { label: "Body Fat", before: "32%", after: "15%" }
    ]
  },
  {
    id: 4,
    name: "Emma's Elite Journey",
    category: "Competition Prep",
    duration: "4 months",
    goal: "Competition Ready",
    results: {
      placement: "1st place in competition",
      muscleDefinition: "Exceptional conditioning",
      strength: "Maintained strength while cutting"
    },
    products: ["Elite Stack", "Competition Formula", "Recovery Ultra"],
    testimonial: "The elite-level supplements and precise nutrition timing were crucial for my competition prep. I achieved my best conditioning ever.",
    image: "https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?w=800&auto=format&fit=crop&q=60",
    stats: [
      { label: "Stage Weight", before: "65kg", after: "58kg" },
      { label: "Body Fat", before: "18%", after: "10%" },
      { label: "Muscle Mass", before: "45%", after: "48%" }
    ]
  }
];

const categories = ["All", "Strength & Muscle", "Athletic Performance", "Weight Management", "Competition Prep"];

export default function CaseStudies() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCase, setSelectedCase] = useState<number | null>(null);

  const filteredCases = selectedCategory === "All" 
    ? caseStudies 
    : caseStudies.filter(study => study.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Success Stories
          </h1>
          <p className="text-lg sm:text-xl text-gray-600">
            Real results from real people using our nutrition solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-8 sm:mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`w-full px-4 py-3 rounded-lg text-sm font-semibold transition-colors shadow-sm
                ${selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredCases.map((study) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl overflow-hidden"
            >
              <div className="relative h-48 sm:h-64">
                <Image
                  src={study.image}
                  alt={study.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-4 sm:p-6 text-white">
                    <h2 className="text-xl sm:text-2xl font-bold mb-2">{study.name}</h2>
                    <div className="flex items-center gap-3 sm:gap-4 text-sm">
                      <span>{study.category}</span>
                      <span>•</span>
                      <span>{study.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
                  {Object.entries(study.results).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-primary font-bold text-sm sm:text-base">{value}</div>
                      <div className="text-xs sm:text-sm text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedCase(selectedCase === study.id ? null : study.id)}
                  className="w-full text-left"
                >
                  <p className="text-gray-600 text-sm sm:text-base mb-4 line-clamp-2">
                    "{study.testimonial}"
                  </p>
                </button>

                {selectedCase === study.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="space-y-4 sm:space-y-6"
                  >
                    <div>
                      <h3 className="font-semibold mb-2 sm:mb-3 text-base sm:text-lg">Transformation Stats</h3>
                      <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="text-gray-500">
                              <th className="text-left text-xs sm:text-sm">Metric</th>
                              <th className="text-center text-xs sm:text-sm">Before</th>
                              <th className="text-center text-xs sm:text-sm">After</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            {study.stats.map((stat) => (
                              <tr key={stat.label}>
                                <td className="py-2 text-xs sm:text-sm">{stat.label}</td>
                                <td className="text-center text-gray-500 text-xs sm:text-sm">{stat.before}</td>
                                <td className="text-center text-primary font-semibold text-xs sm:text-sm">{stat.after}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2 sm:mb-3 text-base sm:text-lg">Products Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {study.products.map((product) => (
                          <span
                            key={product}
                            className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs sm:text-sm"
                          >
                            {product}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      href="/stages"
                      className="inline-block w-full text-center bg-primary text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-primary-dark transition text-sm sm:text-base"
                    >
                      Start Your Transformation
                    </Link>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 