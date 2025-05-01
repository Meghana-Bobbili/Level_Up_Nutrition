"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const questions = [
  {
    id: 1,
    question: "What's your current fitness level?",
    options: [
      { text: "Just starting my fitness journey", stage: "Foundation" },
      { text: "Regular workout routine", stage: "Growth" },
      { text: "Consistent training for over a year", stage: "Performance" },
      { text: "Competitive athlete/Advanced training", stage: "Elite" }
    ]
  },
  {
    id: 2,
    question: "What are your primary fitness goals?",
    options: [
      { text: "Build healthy habits & general wellness", stage: "Foundation" },
      { text: "Muscle growth & strength", stage: "Growth" },
      { text: "Athletic performance", stage: "Performance" },
      { text: "Competition & peak performance", stage: "Elite" }
    ]
  },
  {
    id: 3,
    question: "How much time can you dedicate to your nutrition plan?",
    options: [
      { text: "Basic daily supplements", stage: "Foundation" },
      { text: "Structured meal & supplement timing", stage: "Growth" },
      { text: "Detailed nutrition & supplement planning", stage: "Performance" },
      { text: "Comprehensive nutrition programming", stage: "Elite" }
    ]
  }
];

const stages = [
  {
    name: 'Foundation',
    level: 'Beginners',
    description: 'Start your nutrition journey with the essentials. Focus on building healthy habits and understanding basic nutritional needs.',
    focus: ['General health', 'Hydration', 'Basic multivitamins'],
    products: [
      { name: 'Essential Multivitamin', price: 29.99, id: 3 },
      { name: 'Hydration Plus', price: 24.99, id: 4 },
      { name: 'Basic Protein', price: 39.99, id: 1 }
    ],
    routine: 'Morning: Multivitamin with breakfast\nPre-workout: Hydration Plus\nPost-workout: Basic Protein',
    image: 'https://images.unsplash.com/photo-1579722820308-d3e789c3c4bf?w=800&auto=format&fit=crop&q=60',
    color: 'from-blue-500 to-blue-600',
    benefits: [
      "Perfect for beginners starting their fitness journey",
      "Essential nutrients for overall health",
      "Simple, easy-to-follow supplement routine",
      "Basic hydration and recovery support"
    ]
  },
  {
    name: 'Growth',
    level: 'Intermediate',
    description: 'Level up your nutrition game with targeted supplementation for improved performance and recovery.',
    focus: ['Protein optimization', 'Creatine supplementation', 'BCAAs'],
    products: [
      { name: 'Premium Whey Isolate', price: 54.99, id: 1 },
      { name: 'Pure Creatine', price: 34.99, id: 2 },
      { name: 'BCAA Complex', price: 44.99, id: 5 }
    ],
    routine: 'Morning: Creatine + Protein\nPre-workout: BCAAs\nPost-workout: Protein + Creatine',
    image: 'https://images.unsplash.com/photo-1579722820791-a4a3b96c7b92?w=800&auto=format&fit=crop&q=60',
    color: 'from-green-500 to-green-600',
    benefits: [
      "Optimized for muscle growth and recovery",
      "Enhanced strength and performance",
      "Strategic supplement timing",
      "Improved workout energy and endurance"
    ]
  },
  {
    name: 'Performance',
    level: 'Advanced',
    description: 'Advanced nutrition strategies for serious athletes looking to maximize their potential.',
    focus: ['Nootropics', 'Advanced recovery', 'Carb cycling'],
    products: [
      { name: 'Elite Performance Stack', price: 89.99, id: 6 },
      { name: 'Recovery Matrix', price: 64.99, id: 2 },
      { name: 'Carb Loader', price: 49.99, id: 7 }
    ],
    routine: 'Morning: Nootropics\nPre-workout: Carb Loader\nIntra-workout: BCAAs\nPost-workout: Recovery Matrix',
    image: 'https://images.unsplash.com/photo-1579722821273-0f6c932f4d3b?w=800&auto=format&fit=crop&q=60',
    color: 'from-purple-500 to-purple-600',
    benefits: [
      "Advanced performance optimization",
      "Comprehensive recovery support",
      "Mental focus and clarity",
      "Strategic nutrient timing"
    ]
  },
  {
    name: 'Elite',
    level: 'Top-Level',
    description: 'Cutting-edge nutrition solutions for elite athletes pushing the boundaries of human performance.',
    focus: ['Customized stacks', 'Intra-workout formulas', 'Pre-event strategies'],
    products: [
      { name: 'Elite Stack', price: 149.99, id: 8 },
      { name: 'Competition Formula', price: 79.99, id: 9 },
      { name: 'Recovery Ultra', price: 89.99, id: 10 }
    ],
    routine: 'Morning: Custom Stack\nPre-workout: Competition Formula\nIntra-workout: Advanced Hydration\nPost-workout: Recovery Ultra',
    image: 'https://images.unsplash.com/photo-1579722819451-2e4fadc3c265?w=800&auto=format&fit=crop&q=60',
    color: 'from-red-500 to-red-600',
    benefits: [
      "Competition-ready formulations",
      "Peak performance optimization",
      "Maximum recovery and adaptation",
      "Elite-level supplementation"
    ]
  }
];

export default function NutritionStages() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [recommendedStage, setRecommendedStage] = useState<string | null>(null);
  const [showAllStages, setShowAllStages] = useState(false);
  const [selectedStage, setSelectedStage] = useState<string | null>(null);

  const handleAnswer = (stageName: string) => {
    const newAnswers = [...answers, stageName];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Find most common stage in answers
      const stageCounts = newAnswers.reduce((acc, stage) => {
        acc[stage] = (acc[stage] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

      const recommendedStage = Object.entries(stageCounts)
        .reduce((a, b) => (a[1] > b[1] ? a : b))[0];

      setRecommendedStage(recommendedStage);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setRecommendedStage(null);
    setShowAllStages(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Discover your Edge
          </h1>
          <p className="text-xl text-gray-600">
            {!recommendedStage 
              ? "Answer a few questions to find the perfect nutrition plan for your needs"
              : "Here's your recommended nutrition plan"}
          </p>
        </motion.div>

        {!recommendedStage && !showAllStages && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="mb-8">
                <div className="flex justify-between mb-4">
                  <span className="text-sm text-gray-500">Question {currentQuestion + 1} of {questions.length}</span>
                  <button 
                    onClick={() => setShowAllStages(true)}
                    className="text-primary hover:text-primary-dark"
                  >
                    Skip to all plans
                  </button>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div 
                    className="h-2 bg-primary rounded-full transition-all duration-300"
                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  />
                </div>
              </div>
              
              <h2 className="text-2xl font-bold mb-6">{questions[currentQuestion].question}</h2>
              <div className="space-y-4">
                {questions[currentQuestion].options.map((option) => (
                  <button
                    key={option.text}
                    onClick={() => handleAnswer(option.stage)}
                    className="w-full p-4 text-left rounded-lg border-2 border-gray-200 hover:border-primary hover:bg-primary/5 transition-colors"
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {(recommendedStage || showAllStages) && (
          <div className="space-y-8">
            {recommendedStage && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold mb-4">Your Recommended Plan</h2>
                <button 
                  onClick={resetQuiz}
                  className="text-primary hover:text-primary-dark"
                >
                  Retake quiz
                </button>
              </motion.div>
            )}

            <div className="flex flex-col space-y-6">
              {stages.map((stage, index) => (
                <motion.div
                  key={stage.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-white rounded-2xl shadow-xl overflow-hidden ${recommendedStage === stage.name ? 'ring-2 ring-primary ring-offset-2' : ''}`}
                >
                  <div className="flex">
                    <div className="w-1/3 relative">
                      <Image
                        src={stage.image}
                        alt={stage.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="w-2/3 p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h2 className="text-2xl font-bold mb-2">{stage.name}</h2>
                          <p className="text-sm text-gray-500">{stage.level}</p>
                        </div>
                        <button
                          onClick={() => setSelectedStage(selectedStage === stage.name ? null : stage.name)}
                          className={`text-primary hover:text-primary-dark transition-colors ${selectedStage === stage.name ? 'font-bold' : ''}`}
                        >
                          {selectedStage === stage.name ? 'Show Less' : 'Show More'}
                        </button>
                      </div>
                      <p className="text-gray-600 mt-4">{stage.description}</p>

                      {selectedStage === stage.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="mt-6 space-y-6"
                        >
                          <div>
                            <h3 className="text-lg font-semibold mb-3">Key Benefits</h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {stage.benefits.map((benefit, i) => (
                                <li key={i} className="flex items-start space-x-2">
                                  <span className="text-primary mt-0.5">✓</span>
                                  <span className="text-sm text-gray-600 flex-1">{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h3 className="text-lg font-semibold mb-3">Recommended Products</h3>
                            <div className="space-y-3">
                              {stage.products.map(product => (
                                <Link 
                                  href={`/shop/${product.id}`}
                                  key={product.name}
                                  className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:border-primary/20 hover:bg-primary/5 transition-colors"
                                >
                                  <span className="text-gray-800">{product.name}</span>
                                  <div className="flex items-center space-x-2">
                                    <span className="text-primary font-semibold">${product.price}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h3 className="text-lg font-semibold mb-3">Daily Routine</h3>
                            <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                              {stage.routine.split('\n').map((line, index) => (
                                <div key={index} className="flex items-start space-x-3">
                                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                                  <p className="text-sm text-gray-600 flex-1">{line}</p>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h3 className="text-lg font-semibold mb-3">Focus Areas</h3>
                            <div className="flex flex-wrap gap-2">
                              {stage.focus.map((item, index) => (
                                <span 
                                  key={index}
                                  className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary/10 text-primary"
                                >
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>

                          <Link
                            href={`/shop?stage=${stage.name}`}
                            className="block w-full text-center bg-primary text-white mt-6 px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                          >
                            Get Started with {stage.name}
                          </Link>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}