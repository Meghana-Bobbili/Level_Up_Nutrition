"use client";

import React, { useState } from 'react';
import Link from 'next/link';

interface LayoutProps {
  children: React.ReactNode;
}

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-primary font-bold text-2xl hover:text-primary-dark transition-colors">
              Level Up Nutrition
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-primary-dark focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/shop" className="text-gray-700 hover:text-primary transition-colors font-medium">Shop</Link>
            <Link href="/stages" className="text-gray-700 hover:text-primary transition-colors font-medium">Nutrition Stages</Link>
            <Link href="/blog" className="text-gray-700 hover:text-primary transition-colors font-medium">Blog</Link>
            <Link href="/case-studies" className="text-gray-700 hover:text-primary transition-colors font-medium">Case Studies</Link>
            <Link href="/about" className="text-gray-700 hover:text-primary transition-colors font-medium">About</Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary transition-colors font-medium">Contact</Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          <Link href="/shop" className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md">Shop</Link>
          <Link href="/stages" className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md">Nutrition Stages</Link>
          <Link href="/blog" className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md">Blog</Link>
          <Link href="/case-studies" className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md">Case Studies</Link>
          <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md">About</Link>
          <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-gradient-to-br from-primary to-primary-dark text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold text-xl mb-4">Level Up Nutrition</h3>
          <p className="text-sm opacity-90">Empowering athletes to reach their full potential through science-backed nutrition.</p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="/shop" className="hover:text-white/80 transition-colors">Shop</Link></li>
            <li><Link href="/blog" className="hover:text-white/80 transition-colors">Blog</Link></li>
            <li><Link href="/about" className="hover:text-white/80 transition-colors">About</Link></li>
            <li><Link href="/contact" className="hover:text-white/80 transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Support</h4>
          <ul className="space-y-2">
            <li><Link href="/track-order" className="hover:text-white/80 transition-colors">Track Order</Link></li>
            <li><Link href="/shipping" className="hover:text-white/80 transition-colors">Shipping Info</Link></li>
            <li><Link href="/returns" className="hover:text-white/80 transition-colors">Returns</Link></li>
            <li><Link href="/faq" className="hover:text-white/80 transition-colors">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Newsletter</h4>
          <p className="text-sm mb-4 opacity-90">Stay updated with our latest products and news</p>
          <div className="space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="w-full bg-white text-primary px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-white/20 text-center">
        <p className="text-sm opacity-90">&copy; {new Date().getFullYear()} Level Up Nutrition. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow bg-white">
        {children}
      </main>
      <Footer />
    </div>
  );
} 