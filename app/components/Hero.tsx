"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';



const Hero = () => {
  return (
    <div className="relative">
     
      {/* Main Hero Section */}
      <div className="relative h-[600px] bg-gradient-to-r from-primary to-primary-dark">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1579758629938-03607ccdbaba?q=80&w=2070"
            alt="Fitness Background"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transform Your Performance with Premium Nutrition
              </h1>
              <p className="text-lg text-white/90 mb-8">
                Science-backed supplements designed for athletes who demand the best. Elevate your game with our premium nutrition solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/shop"
                  className="bg-secondary hover:bg-secondary-dark text-white px-8 py-3 rounded-custom font-semibold transition-colors"
                >
                  Shop Now
                </Link>
                <Link 
                  href="/consultation"
                  className="bg-white hover:bg-neutral-light text-primary px-8 py-3 rounded-custom font-semibold transition-colors"
                >
                  Free Consultation
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative h-[400px] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1579758682665-53a1a614eea6?q=80&w=987"
                  alt="Premium Supplements"
                  fill
                  className="object-cover rounded-custom"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-background-alt rounded-custom">
              <Image
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070"
                alt="Natural Ingredients"
                width={200}
                height={200}
                className="rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-primary mb-2">Natural Ingredients</h3>
              <p className="text-text-light">Pure, high-quality ingredients sourced from nature's best</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-background-alt rounded-custom">
              <Image
                src="https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=2076"
                alt="Science Backed"
                width={200}
                height={200}
                className="rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-primary mb-2">Science Backed</h3>
              <p className="text-text-light">Research-proven formulations for optimal results</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-background-alt rounded-custom">
              <Image
                src="https://images.unsplash.com/photo-1574689049597-7e6ed3ca358e?q=80&w=2070"
                alt="Premium Quality"
                width={200}
                height={200}
                className="rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-primary mb-2">Premium Quality</h3>
              <p className="text-text-light">Third-party tested for purity and potency</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="bg-background-alt py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Best Sellers</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                id: 1,
                name: "Elite Whey+",
                image: "/products/whey.jpg",
                price: 49.99
              },
              {
                id: 6,
                name: "Pre-Workout Elite",
                image: "/products/whey.jpg",
                price: 44.99
              },
              {
                id: 2,
                name: "Recovery Aminos",
                image: "/products/whey.jpg",
                price: 39.99
              },
              {
                id: 5,
                name: "Omega-3 Complex",
                image: "/products/whey.jpg",
                price: 34.99
              }
            ].map((product, index) => (
              <Link 
                href={`/shop/${product.id}`} 
                key={index} 
                className="bg-white rounded-custom shadow-custom overflow-hidden group hover:scale-105 transition-transform"
              >
                <div className="relative h-48">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                  <p className="text-text-light mb-4">${product.price}</p>
                  <button className="w-full bg-secondary hover:bg-secondary-dark text-white px-4 py-2 rounded-custom font-semibold transition-colors">
                    View Details
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 