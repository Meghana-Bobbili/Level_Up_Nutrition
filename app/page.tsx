import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Elevate Your Performance Through{' '}
              <span className="text-primary">Holistic Development</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              At LevelUp Nutrition, we focus on the complete athlete - physical, mental, and emotional. From grassroots to professionals, we're here to help you evolve and level up.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/shop" 
                className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition-all transform hover:scale-105 shadow-lg">
                Shop Now
              </Link>
              <Link href="/stages" 
                className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary/5 transition-all transform hover:scale-105 shadow-lg">
                Explore Your Level
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Development Pillars Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Holistic Development</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Physical',
                description: 'Science-backed nutrition and supplements to support your training and recovery.',
                icon: '💪'
              },
              {
                title: 'Mental',
                description: 'Resources and support to build mental resilience and focus.',
                icon: '🧠'
              },
              {
                title: 'Emotional',
                description: "Creating a supportive community where athletes celebrate each other's success.",
                icon: '❤️'
              }
            ].map((pillar) => (
              <div key={pillar.title} 
                className="bg-white p-8 rounded-xl shadow-lg text-center transform transition-all hover:scale-105 hover:shadow-xl">
                <div className="text-4xl mb-4">{pillar.icon}</div>
                <h3 className="text-xl font-semibold text-primary mb-4">{pillar.title}</h3>
                <p className="text-gray-600">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Featured Products</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Discover our premium selection of science-backed supplements designed for optimal performance
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Elite Whey+ Protein",
                price: 49.99,
                description: "Premium whey protein with 25g protein per serving",
                image: "🥛",
                tag: "Best Seller"
              },
              {
                name: "Pre-Workout Max",
                price: 39.99,
                description: "Advanced pre-workout formula for peak performance",
                image: "💪",
                tag: "New"
              },
              {
                name: "Recovery Matrix",
                price: 54.99,
                description: "Complete post-workout recovery blend",
                image: "🔄",
                tag: "Popular"
              },
              {
                name: "Omega-3 Ultra",
                price: 29.99,
                description: "High-quality fish oil for brain and joint health",
                image: "🐟",
                tag: "Essential"
              }
            ].map((product) => (
              <div key={product.name} 
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl">
                <div className="p-6">
                  <div className="text-4xl mb-4 flex justify-center">{product.image}</div>
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full">
                      {product.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-bold">${product.price}</span>
                    <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-dark transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nutrition Plans Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Nutrition Plans</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Tailored nutrition plans to help you achieve your performance goals
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter Plan",
                price: 29.99,
                period: "month",
                features: [
                  "Basic nutrition guidelines",
                  "Meal planning templates",
                  "Essential supplements guide",
                  "Weekly email support"
                ],
                recommended: false
              },
              {
                name: "Performance Plan",
                price: 49.99,
                period: "month",
                features: [
                  "Advanced nutrition strategy",
                  "Custom meal plans",
                  "Supplement timing guide",
                  "24/7 chat support",
                  "Monthly consultation"
                ],
                recommended: true
              },
              {
                name: "Elite Plan",
                price: 99.99,
                period: "month",
                features: [
                  "Pro nutrition programming",
                  "Personalized meal plans",
                  "Advanced supplement stack",
                  "Priority 24/7 support",
                  "Weekly consultations",
                  "Performance tracking"
                ],
                recommended: false
              }
            ].map((plan) => (
              <div key={plan.name} 
                className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl relative ${
                  plan.recommended ? 'border-2 border-primary' : ''
                }`}>
                {plan.recommended && (
                  <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 rounded-bl-lg text-sm font-semibold">
                    Recommended
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-3xl font-bold">${plan.price}</span>
                    <span className="text-gray-600">/{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    plan.recommended
                      ? 'bg-primary text-white hover:bg-primary-dark'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}>
                    Choose Plan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Best Sellers</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Our most popular products loved by athletes worldwide
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Complete Performance Stack",
                price: 149.99,
                description: "Our ultimate performance bundle including protein, pre-workout, and recovery supplements",
                image: "🏆",
                savings: "Save 20%"
              },
              {
                name: "Creatine Monohydrate Plus",
                price: 34.99,
                description: "Pure creatine monohydrate with enhanced absorption formula",
                image: "💎",
                savings: "Best Value"
              },
              {
                name: "Vitamin Performance Pack",
                price: 44.99,
                description: "Comprehensive vitamin and mineral blend for athletes",
                image: "🌟",
                savings: "Most Popular"
              }
            ].map((product) => (
              <div key={product.name} 
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl">
                <div className="p-6">
                  <div className="text-4xl mb-4 flex justify-center">{product.image}</div>
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary text-white rounded-full">
                      {product.savings}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-bold">${product.price}</span>
                    <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-dark transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/shop" 
              className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition-all transform hover:scale-105 shadow-lg">
              View All Products
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Community Values Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Community Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Non-Judgement',
                description: 'A welcoming space for athletes of all levels to grow and improve.',
                icon: '🤝'
              },
              {
                title: 'Support & Kindness',
                description: 'Building each other up and celebrating collective achievements.',
                icon: '🌟'
              },
              {
                title: 'Continuous Growth',
                description: 'Taking that one step forward each day to become better than yesterday.',
                icon: '📈'
              }
            ].map((value) => (
              <div key={value.title} 
                className="bg-white p-8 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-xl">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-primary mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Join Our Community</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Get expert nutrition tips, community updates, and exclusive content to support your journey.</p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Latest Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "The Holistic Approach to Athletic Development",
                excerpt: "Discover how combining physical, mental, and emotional development can elevate your performance.",
                image: "/blog/holistic.jpg"
              },
              {
                title: "Building a Supportive Athletic Community",
                excerpt: "Learn how community support and positive reinforcement lead to better athletic outcomes.",
                image: "/blog/community.jpg"
              },
              {
                title: "Your Journey to Leveling Up",
                excerpt: "Start your transformation with our comprehensive guide to holistic athletic development.",
                image: "/blog/journey.jpg"
              }
            ].map((post) => (
              <div key={post.title} 
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/30 relative">
                  {/* Placeholder for blog post image */}
                  <div className="absolute inset-0 flex items-center justify-center text-primary text-4xl">
                    📚
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link href="/blog" 
                    className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors">
                    Read More 
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 