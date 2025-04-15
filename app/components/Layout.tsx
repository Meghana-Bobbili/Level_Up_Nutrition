"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface LayoutProps {
  children: React.ReactNode;
}

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Top banner */}
      <div className="bg-primary text-white text-sm py-2 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <div className="animate-marquee whitespace-nowrap">
              <span className="inline-block mr-8">🚚 Free shipping across India</span>
              <span className="inline-block mr-8">📱 Extra 15% off through the App</span>
              <span className="inline-block mr-8">⭐ Over 180k reviews & 4.5 rated</span>
              <span className="inline-block mr-8">🎁 Special offers for new customers</span>
            </div>
            <div className="animate-marquee whitespace-nowrap">
              <span className="inline-block mr-8">🚚 Free shipping across India</span>
              <span className="inline-block mr-8">📱 Extra 15% off through the App</span>
              <span className="inline-block mr-8">⭐ Over 180k reviews & 4.5 rated</span>
              <span className="inline-block mr-8">🎁 Special offers for new customers</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-12">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logo.jpg"
                  alt="Level Up Nutrition Logo"
                  width={40}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/shop" className="text-text hover:text-secondary transition-colors font-medium">Shop</Link>
              <Link href="/stages" className="text-text hover:text-secondary transition-colors font-medium">Nutrition Stages</Link>
              <Link href="/blog" className="text-text hover:text-secondary transition-colors font-medium">Blog</Link>
              <Link href="/case-studies" className="text-text hover:text-secondary transition-colors font-medium">Case Studies</Link>
              <Link href="/about" className="text-text hover:text-secondary transition-colors font-medium">About</Link>
              <Link href="/contact" className="text-text hover:text-secondary transition-colors font-medium">Contact</Link>
            </div>

            {/* Search and cart */}
            <div className="flex items-center space-x-4">
              <button className="text-text hover:text-secondary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="text-text hover:text-secondary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/images/logo.jpg"
                alt="Level Up Nutrition Logo"
                width={80}
                height={80}
                className="h-20 w-auto"
              />
            </div>
            <div className="flex items-center space-x-4 mb-4">
              <Image
                src="/images/founder.jpg"
                alt="Founder"
                width={60}
                height={60}
                className="rounded-full h-15 w-15 border-2 border-white"
              />
              <div>
                <p className="font-semibold">Dr. Sarah Johnson</p>
                <p className="text-sm opacity-90">Founder & Chief Nutritionist</p>
              </div>
            </div>
            <p className="text-sm opacity-90">Empowering athletes to reach their full potential through science-backed nutrition.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/shop" className="hover:text-accent transition-colors">Shop</Link></li>
              <li><Link href="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
              <li><Link href="/about" className="hover:text-accent transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link href="/track-order" className="hover:text-accent transition-colors">Track Order</Link></li>
              <li><Link href="/shipping" className="hover:text-accent transition-colors">Shipping Info</Link></li>
              <li><Link href="/returns" className="hover:text-accent transition-colors">Returns</Link></li>
              <li><Link href="/faq" className="hover:text-accent transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <p className="text-sm mb-4 opacity-90">Stay updated with our latest products and news</p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 rounded-custom text-text bg-white focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button className="w-full bg-secondary text-white px-4 py-2 rounded-custom font-semibold hover:bg-secondary-dark transition-colors">
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
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow bg-background-alt">
        {children}
      </main>
      <Footer />
    </div>
  );
} 