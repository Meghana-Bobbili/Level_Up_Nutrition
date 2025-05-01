import Image from 'next/image';
import Link from 'next/link';
import Hero from './components/Hero';
import dynamic from 'next/dynamic';

const SwiperComponent = dynamic(() => import('@/app/components/SwiperComponent'), {
  ssr: false
});

export default function Home() {
  return (
    <div>
      <Hero />
      {/* Additional home page content */}
      <div className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Why Choose Level Up Nutrition?</h2>
            <p className="text-text-light max-w-2xl mx-auto">Our commitment to athlete development and performance driven supplementation sets us apart in the nutrition industry.</p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {[
              { number: "50K+", label: "Happy Customers" },
              { number: "100%", label: "Natural and clean Ingredients" },
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
          <SwiperComponent />

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