import React from 'react';
import Link from 'next/link';
import type { NextPage } from 'next';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
}

const articles: Article[] = [
  {
    id: 1,
    title: "Advanced Performance Nutrition Strategies",
    excerpt: "Explore cutting-edge nutrition protocols used by elite athletes. Learn about nutrient timing, supplementation stacks, and recovery optimization.",
    category: "Performance",
    author: "Dr. Sarah Johnson",
    date: "2024-04-15",
    readTime: "12 min read",
    image: "/blog/performance.jpg",
    tags: ["Performance", "Research", "Elite Athletes"]
  },
  {
    id: 2,
    title: "The Science of Recovery Nutrition",
    excerpt: "Dive deep into the latest research on post-exercise nutrition. Discover optimal recovery protocols and evidence-based supplement strategies.",
    category: "Recovery",
    author: "Dr. Michael Chen",
    date: "2024-04-14",
    readTime: "10 min read",
    image: "/blog/recovery.jpg",
    tags: ["Recovery", "Research", "Science"]
  },
  {
    id: 3,
    title: "Optimizing Pre-Workout Nutrition",
    excerpt: "Master your pre-workout nutrition with science-backed strategies. Learn about timing, composition, and supplementation for peak performance.",
    category: "Performance",
    author: "Emma Davis",
    date: "2024-04-13",
    readTime: "8 min read",
    image: "/blog/preworkout.jpg",
    tags: ["Performance", "Nutrition", "Training"]
  },
  {
    id: 4,
    title: "Advanced Supplementation Protocols",
    excerpt: "Comprehensive guide to evidence-based supplementation. From dosing to timing, learn how to maximize the benefits of performance supplements.",
    category: "Supplements",
    author: "Dr. James Wilson",
    date: "2024-04-12",
    readTime: "15 min read",
    image: "/blog/supplements.jpg",
    tags: ["Supplements", "Research", "Protocols"]
  }
];

const categories: string[] = [
  "All",
  "Performance",
  "Recovery",
  "Supplements",
  "Research",
  "Case Studies",
  "Protocols"
];

const Blog: NextPage = () => {
  return (
    <div className="bg-background min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-heading font-bold mb-4 text-text-dark">Performance Insights</h1>
          <p className="text-xl text-text-light">Expert research, advanced protocols, and performance optimization strategies</p>
        </div>

        {/* Categories */}
        <div className="mb-16">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map(category => (
              <button
                key={category}
                className={`px-6 py-3 rounded-custom font-semibold transition-all ${
                  category === 'All'
                    ? 'bg-primary text-white shadow-custom'
                    : 'bg-white text-text hover:bg-primary/10 hover:text-primary shadow-custom'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Article */}
        <div className="mb-16">
          <div className="relative h-[500px] rounded-custom overflow-hidden shadow-custom">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-12 text-white">
              <div className="mb-6">
                <span className="bg-primary px-4 py-2 rounded-custom text-sm font-semibold">
                  Featured Research
                </span>
              </div>
              <h2 className="text-4xl font-heading font-bold mb-6">
                The Future of Performance Nutrition
              </h2>
              <p className="text-xl mb-8 max-w-2xl">
                Cutting-edge research and innovative approaches to performance optimization through advanced nutrition science.
              </p>
              <div className="flex items-center gap-6">
                <span className="font-semibold">By Dr. Sarah Johnson</span>
                <span>•</span>
                <span>20 min read</span>
              </div>
            </div>
          </div>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map(article => (
            <article key={article.id} className="bg-white rounded-custom shadow-custom overflow-hidden transform transition-all hover:scale-105">
              <div className="h-64 bg-gradient-to-br from-primary/20 to-accent/20 relative flex items-center justify-center">
                <span className="text-6xl">📚</span>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-primary text-sm font-semibold">
                    {article.category}
                  </span>
                  <span className="text-text-light">•</span>
                  <span className="text-text-light text-sm">{article.readTime}</span>
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4">
                  <Link href={`/blog/${article.id}`} className="hover:text-primary transition-colors">
                    {article.title}
                  </Link>
                </h3>
                <p className="text-text-light mb-6 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {article.tags.map(tag => (
                    <span key={tag} className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-custom">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <span className="text-lg">👤</span>
                    </div>
                    <span className="text-sm text-text-light">{article.author}</span>
                  </div>
                  <span className="text-sm text-text-light">{article.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-20 bg-gradient-to-br from-primary/10 to-accent/10 rounded-custom p-12 text-center shadow-custom">
          <h3 className="text-3xl font-heading font-bold mb-4 text-text-dark">Stay Ahead of the Game</h3>
          <p className="text-text-light text-xl mb-8">
            Get exclusive access to cutting-edge research and performance insights
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-6 py-4 rounded-custom border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
            <button className="bg-primary text-white px-8 py-4 rounded-custom font-semibold hover:bg-primary-dark transition-all transform hover:scale-105 shadow-custom">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog; 