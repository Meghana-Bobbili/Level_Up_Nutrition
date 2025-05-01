"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';



const Hero = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1579758629938-03607ccdbaba?q=80&w=2070"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-background/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-text-dark mb-6">
            LevelUp your Performance with Premium Nutrition
            </h1>
            <p className="text-xl text-text-light mb-8">
            Science-backed supplements designed for athletes who demand the best. Elevate your game with our premium nutrition solutions.
            </p>
            <div className="flex space-x-4">
              <Link
                href="/nutrition_benifits.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-secondary px-8 py-3 rounded-custom font-semibold hover:bg-primary/90 transition-colors"
              >
                Brochure
              </Link>
              <Link
                href="/nutrition_benifits.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-primary text-primary px-8 py-3 rounded-custom font-semibold hover:bg-primary/10 transition-colors"
              >
                Google Docs
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-background-alt py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 bg-background-alt rounded-custom">
              <Image
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070"
                alt="Premium Quality"
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
              <p className="text-text-light">Formulated by leading sports nutritionists</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-background-alt rounded-custom">
              <Image
                src="https://images.unsplash.com/photo-1529339967086-b7b8331acb18?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Proven Results"
                width={200}
                height={200}
                className="rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-primary mb-2">Premium Quality</h3>
              <p className="text-text-light">Grass-fed whey sourced directly from the UK</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 