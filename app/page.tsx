import Image from 'next/image';
import Link from 'next/link';
import Hero from './components/Hero';


export default function Home() {
  return (
    <div>
      <Hero />
      {/* Additional home page content */}
      <div className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Why Choose Level Up Nutrition?</h2>
            <p className="text-text-light max-w-2xl mx-auto">Our commitment to quality, science, and your success sets us apart in the nutrition industry.</p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {[
              { number: "50K+", label: "Happy Customers" },
              { number: "100%", label: "Natural Ingredients" },
              { number: "4.8/5", label: "Customer Rating" },
              { number: "24/7", label: "Expert Support" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-background-alt rounded-custom">
                <div className="text-3xl font-bold text-secondary mb-2">{stat.number}</div>
                <div className="text-text-light">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Categories Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">Shop by Category</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Performance",
                  description: "Pre-workout, BCAAs, and recovery supplements",
                  image: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?w=800&auto=format&fit=crop&q=60",
                  categories: ["Pre-Workout", "Amino Acids"],
                  goal: "Performance"
                },
                {
                  title: "Wellness",
                  description: "Vitamins, minerals, and daily essentials",
                  image: "https://images.unsplash.com/photo-1616196334218-dd7c6d2d1c6b?w=800&auto=format&fit=crop&q=60",
                  categories: ["Vitamins", "Hydration"],
                  goal: "Recovery"
                },
                {
                  title: "Protein",
                  description: "Whey, plant-based, and protein snacks",
                  image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=800&auto=format&fit=crop&q=60",
                  categories: ["Protein"],
                  goal: "Muscle Gain"
                }
              ].map((category, index) => (
                <Link 
                  key={index} 
                  href={`/shop?category=${category.categories[0]}&goal=${category.goal}`}
                  className="relative group cursor-pointer overflow-hidden rounded-custom"
                >
                  <div className="relative h-64">
                    <div className="absolute inset-0 bg-primary/50 group-hover:bg-primary/70 transition-colors z-10" />
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-20 p-6">
                      <h4 className="text-xl font-bold mb-2">{category.title}</h4>
                      <p className="text-center text-sm">{category.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Best Sellers Section */}
          {/* <BestSellers /> */}

          {/* Testimonials */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">What Our Customers Say</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "The quality and results are unmatched. Truly the best supplements I've ever used.",
                  author: "Michael R.",
                  role: "Professional Athlete"
                },
                {
                  quote: "Amazing customer service and fast shipping. The products have helped me reach my fitness goals.",
                  author: "Sarah K.",
                  role: "Fitness Enthusiast"
                },
                {
                  quote: "Clean ingredients and transparent labeling. I trust Level Up Nutrition with my daily supplements.",
                  author: "David M.",
                  role: "Personal Trainer"
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-custom shadow-custom">
                  <div className="text-accent mb-4">★★★★★</div>
                  <p className="text-text-light mb-4">{testimonial.quote}</p>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-text-light">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 