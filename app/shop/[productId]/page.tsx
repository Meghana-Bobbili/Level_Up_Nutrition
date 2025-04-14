"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { products, Product } from '@/app/shop/page';
import { notFound } from 'next/navigation';
import { Tab } from '@headlessui/react';
import { FaTruck, FaShieldAlt, FaLeaf, FaStar, FaStarHalf, FaCamera } from 'react-icons/fa';
import { BiPackage } from 'react-icons/bi';
import { GiMuscleUp, GiBrain } from 'react-icons/gi';
import { MdScience } from 'react-icons/md';

export default function ProductPage({ params }: { params: { productId: string } }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedTab, setSelectedTab] = useState(0);
  const [isSubscription, setIsSubscription] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [selectedFlavor, setSelectedFlavor] = useState('');

  const product = products.find((p: Product) => p.id === parseInt(params.productId));
  
  if (!product) {
    notFound();
  }

  // Mock data - in real app would come from API/database
  const productImages = [
    '/products/whey.jpg',
    '/products/whey.jpg',
    '/products/whey.jpg',
    '/products/whey.jpg'
  ];

  const benefits = [
    { icon: <GiMuscleUp className="w-6 h-6" />, text: "Increases muscle strength" },
    { icon: <GiBrain className="w-6 h-6" />, text: "Enhances mental focus" },
    { icon: <MdScience className="w-6 h-6" />, text: "Scientifically proven formula" }
  ];

  const faqs = [
    { q: "When should I take this?", a: "For best results, take within 30 minutes post-workout." },
    { q: "Is it safe for daily use?", a: "Yes, our formula is designed for daily consumption." },
    { q: "How long does one container last?", a: `${product.nutritionFacts.servingsPerContainer} servings per container.` }
  ];

  const mockReviews = [
    {
      rating: 5,
      user: "John D.",
      date: "2024-02-15",
      goal: "Muscle Gain",
      comment: "Great results after 1 month of use!",
      image: "/products/whey.jpg"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div 
            className="relative aspect-square cursor-zoom-in"
            onMouseEnter={() => setIsZoomed(true)}
            onMouseLeave={() => setIsZoomed(false)}
          >
            <div className={`relative w-full h-full transition-transform duration-300 ${isZoomed ? 'scale-125' : ''}`}>
              <Image
                src={productImages[selectedImageIndex]}
                alt={product.name}
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {productImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImageIndex(idx)}
                className={`relative aspect-square rounded-lg overflow-hidden border-2 ${
                  selectedImageIndex === idx ? 'border-primary' : 'border-transparent'
                }`}
              >
                <Image src={img} alt={`${product.name} view ${idx + 1}`} fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-text">{product.name}</h1>
          
          <div className="flex items-center space-x-4">
            <div className="flex text-yellow-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar key={i} className={i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'} />
              ))}
            </div>
            <span className="text-text-light">({product.reviews} reviews)</span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-3xl font-bold text-primary">${product.price}</span>
            {product.price > 40 && (
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                Save 10% with subscription
              </span>
            )}
          </div>

          {/* Subscribe & Save */}
          <div className="bg-background-alt rounded-lg p-4">
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={isSubscription}
                onChange={(e) => setIsSubscription(e.target.checked)}
                className="form-checkbox h-5 w-5 text-primary rounded"
              />
              <div>
                <span className="font-medium">Subscribe & Save 10%</span>
                <p className="text-sm text-text-light">Delivered monthly. Cancel anytime.</p>
              </div>
            </label>
          </div>

          {/* Flavor Selection */}
          <div>
            <h3 className="font-medium mb-2">Select Flavor</h3>
            <div className="grid grid-cols-2 gap-2">
              {product.flavors.map((flavor) => (
                <button
                  key={flavor}
                  onClick={() => setSelectedFlavor(flavor)}
                  className={`border rounded-lg py-2 px-4 transition-colors ${
                    selectedFlavor === flavor
                      ? 'border-primary bg-primary/10'
                      : 'border-border hover:border-primary'
                  }`}
                >
                  {flavor}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity & Add to Cart */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 border border-border rounded-lg hover:border-primary"
                >
                  -
                </button>
                <span className="w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 border border-border rounded-lg hover:border-primary"
                >
                  +
                </button>
              </div>
              <span className="text-text-light">
                {product.nutritionFacts.servingsPerContainer} servings per container
              </span>
            </div>
            <button 
              className="w-full bg-primary text-white py-4 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
              disabled={!selectedFlavor}
            >
              Add to Cart - ${((isSubscription ? 0.9 : 1) * product.price * quantity).toFixed(2)}
            </button>
          </div>

          {/* Quick Highlights */}
          <div className="flex flex-wrap gap-2">
            {product.details.map((detail) => (
              <span key={detail} className="px-3 py-1 bg-background-alt rounded-full text-sm">
                ✓ {detail}
              </span>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="border-t border-border pt-6 space-y-4">
            <div className="flex items-center space-x-2">
              <FaTruck className="text-green-600" />
              <span>Free shipping over $50 | Ships in 24 hrs</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaShieldAlt />
              <span>30-Day Money Back Guarantee</span>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <FaLeaf className="text-green-600" />
                <span>USDA Organic</span>
              </div>
              <div className="flex items-center space-x-2">
                <BiPackage />
                <span>NSF Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-16">
        <Tab.Group>
          <Tab.List className="flex space-x-1 border-b border-border">
            {['Details', 'Ingredients', 'Nutrition Facts', 'Benefits', 'FAQs'].map((tab) => (
              <Tab
                key={tab}
                className={({ selected }: { selected: boolean }) =>
                  `px-6 py-3 text-sm font-medium focus:outline-none ${
                    selected
                      ? 'border-b-2 border-primary text-primary'
                      : 'text-text-light hover:text-text'
                  }`
                }
              >
                {tab}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-8">
            <Tab.Panel className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">What it is</h3>
                <p className="text-text-light">{product.description}</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">How to use</h3>
                <p className="text-text-light">
                  Mix one serving with 8-12 oz of water or your favorite beverage. 
                  For best results, consume within 30 minutes post-workout.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Who it's for</h3>
                <p className="text-text-light">
                  Perfect for {product.goal.toLowerCase()} focused individuals at the {product.level.toLowerCase()} level.
                </p>
              </div>
            </Tab.Panel>
            <Tab.Panel className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {product.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <MdScience className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium">{detail}</h4>
                      <p className="text-sm text-text-light">
                        Scientific evidence supports the effectiveness of this ingredient.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">Nutrition Facts</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 py-2 border-b">
                    <div>Serving Size</div>
                    <div>{product.nutritionFacts.servingSize}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-2 border-b">
                    <div>Servings Per Container</div>
                    <div>{product.nutritionFacts.servingsPerContainer}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-2 border-b">
                    <div>Calories</div>
                    <div>{product.nutritionFacts.calories}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-2 border-b">
                    <div>Protein</div>
                    <div>{product.nutritionFacts.protein}g</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-2 border-b">
                    <div>Total Carbohydrates</div>
                    <div>{product.nutritionFacts.carbs}g</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-2">
                    <div>Total Fat</div>
                    <div>{product.nutritionFacts.fat}g</div>
                  </div>
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-4 bg-background-alt rounded-lg">
                    <div className="text-primary">{benefit.icon}</div>
                    <p className="font-medium">{benefit.text}</p>
                  </div>
                ))}
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="space-y-6">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="border-b border-border pb-4">
                    <h4 className="font-medium mb-2">{faq.q}</h4>
                    <p className="text-text-light">{faq.a}</p>
                  </div>
                ))}
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>

      {/* Reviews Section */}
      <div className="mt-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Customer Reviews</h2>
          <button className="flex items-center space-x-2 text-primary">
            <FaCamera />
            <span>Write a Review</span>
          </button>
        </div>

        {/* Review Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="text-4xl font-bold">{product.rating}</div>
              <div>
                <div className="flex text-yellow-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar key={i} className={i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'} />
                  ))}
                </div>
                <div className="text-text-light">{product.reviews} reviews</div>
              </div>
            </div>
            
            {/* Rating Breakdown */}
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((stars) => (
                <div key={stars} className="flex items-center space-x-2">
                  <div className="w-12">{stars} stars</div>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full">
                    <div 
                      className="h-full bg-yellow-400 rounded-full"
                      style={{ width: `${Math.random() * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Review Filters */}
          <div className="space-y-4">
            <div className="flex space-x-4">
              <button className="px-4 py-2 border border-border rounded-lg hover:border-primary">
                All Reviews
              </button>
              <button className="px-4 py-2 border border-border rounded-lg hover:border-primary">
                With Photos
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <select className="w-full p-2 border border-border rounded-lg">
                <option>Filter by goal</option>
                <option>Muscle Gain</option>
                <option>Weight Loss</option>
                <option>Performance</option>
              </select>
              <select className="w-full p-2 border border-border rounded-lg">
                <option>Sort by date</option>
                <option>Highest rated</option>
                <option>Lowest rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Review List */}
        <div className="space-y-8">
          {mockReviews.map((review, idx) => (
            <div key={idx} className="border-b border-border pb-8">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex text-yellow-400 mb-2">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <h4 className="font-medium">{review.user}</h4>
                  <div className="text-sm text-text-light">
                    <span>Verified Purchase</span> • <span>{review.goal}</span> • <span>{review.date}</span>
                  </div>
                </div>
                {review.image && (
                  <div className="relative w-20 h-20">
                    <Image src={review.image} alt="Review photo" fill className="object-cover rounded-lg" />
                  </div>
                )}
              </div>
              <p className="mt-4">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 