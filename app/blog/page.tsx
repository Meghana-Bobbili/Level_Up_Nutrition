import React from 'react';
import Link from 'next/link';

const articles = [
  {
    id: 1,
    title: "Beginner's Guide to Nutrition for Training",
    excerpt: "Learn the fundamentals of nutrition to support your training goals. From macronutrients to meal timing, we cover everything you need to know to get started.",
    category: "Nutrition Basics",
    author: "Sarah Johnson",
    date: "2024-03-15",
    readTime: "8 min read",
    image: "/blog/nutrition-basics.jpg"
  },
  {
    id: 2,
    title: "Why Elite Athletes Use Creatine Daily",
    excerpt: "Discover the science behind creatine supplementation and why it's a staple in elite athletes' nutrition programs. Learn about dosing, timing, and benefits.",
    category: "Supplements",
    author: "Dr. Michael Chen",
    date: "2024-03-14",
    readTime: "6 min read",
    image: "/blog/creatine.jpg"
  },
  {
    id: 3,
    title: "Top 5 Supplements for Recovery",
    excerpt: "Optimize your recovery with these essential supplements. We break down the science behind each supplement and how to use them effectively.",
    category: "Recovery",
    author: "Alex Thompson",
    date: "2024-03-13",
    readTime: "10 min read",
    image: "/blog/recovery.jpg"
  },
  {
    id: 4,
    title: "Nutrition Timing for Maximum Performance",
    excerpt: "Learn when to eat and supplement for optimal performance. Detailed guidelines for pre, during, and post-workout nutrition.",
    category: "Performance",
    author: "Emma Davis",
    date: "2024-03-12",
    readTime: "7 min read",
    image: "/blog/timing.jpg"
  }
];

const categories = [
  "All",
  "Nutrition Basics",
  "Supplements",
  "Recovery",
  "Performance",
  "Success Stories",
  "Research"
];

export default function Blog() {
  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Level Up Your Knowledge</h1>
          <p className="text-xl text-gray-600">Expert insights, nutrition tips, and success stories</p>
        </div>

        {/* Categories */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map(category => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full ${
                  category === 'All'
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-primary/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Article */}
        <div className="mb-12">
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gray-200"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <div className="mb-4">
                <span className="bg-primary px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-4">
                The Complete Guide to Sports Nutrition
              </h2>
              <p className="text-lg mb-4 max-w-2xl">
                Everything you need to know about fueling your performance, from basic principles to advanced strategies.
              </p>
              <div className="flex items-center gap-4">
                <span>By Dr. James Wilson</span>
                <span>•</span>
                <span>15 min read</span>
              </div>
            </div>
          </div>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map(article => (
            <article key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200 relative">
                {/* Image placeholder */}
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-primary text-sm font-semibold">
                    {article.category}
                  </span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-400 text-sm">{article.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  <Link href={`/blog/${article.id}`} className="hover:text-primary">
                    {article.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                    <span className="text-sm text-gray-600">{article.author}</span>
                  </div>
                  <span className="text-sm text-gray-400">{article.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-16 bg-primary/5 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-gray-600 mb-6">
            Get the latest nutrition tips and exclusive content delivered to your inbox
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
            />
            <button className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-dark transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 