import React from 'react';

const contactInfo = {
  email: 'support@levelupnutrition.com',
  phone: '1-800-LEVEL-UP',
  hours: 'Monday - Friday: 9AM - 6PM EST',
  address: '123 Performance Drive, Fitness City, FC 12345',
  social: {
    instagram: '@levelupnutrition',
    twitter: '@levelupnutrition',
    linkedin: 'LevelUp Nutrition'
  }
};

const faqs = [
  {
    question: 'What makes LevelUp Nutrition different?',
    answer: 'Our products are developed through rigorous scientific research and athlete testing. We focus on clinically effective dosages and patented ingredients for maximum performance enhancement.'
  },
  {
    question: 'Are your supplements third-party tested?',
    answer: 'Yes, all our products undergo comprehensive third-party testing for purity, potency, and banned substances. We maintain NSF Certified for Sport® certification.'
  },
  {
    question: 'Do you offer personalized nutrition plans?',
    answer: 'Yes, we provide customized nutrition programming through our Performance Nutrition Plans, tailored to your specific goals and training regimen.'
  },
  {
    question: 'What is your shipping and return policy?',
    answer: 'We offer free shipping on orders over $75. All unopened products can be returned within 30 days for a full refund.'
  }
];

export default function Contact() {
  return (
    <div className="bg-background min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-heading font-bold mb-4 text-text-dark">Get in Touch</h1>
          <p className="text-xl text-text-light">
            Our team of performance experts is ready to help you achieve your goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <div className="bg-white p-8 rounded-custom shadow-custom">
              <h2 className="text-3xl font-heading font-bold mb-6 text-text-dark">Send us a message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-light mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-custom focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-light mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-custom focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-text-light mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-200 rounded-custom focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="">Select a subject</option>
                    <option value="performance">Performance Optimization</option>
                    <option value="product">Product Information</option>
                    <option value="nutrition">Nutrition Planning</option>
                    <option value="order">Order Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-light mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-custom focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="How can we help you achieve peak performance?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-4 rounded-custom font-semibold hover:bg-primary-dark transition-all transform hover:scale-105 shadow-custom"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information & FAQs */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-white p-8 rounded-custom shadow-custom">
              <h2 className="text-3xl font-heading font-bold mb-6 text-text-dark">Contact Information</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-primary mb-1">Email</h3>
                  <p className="text-text-light">{contactInfo.email}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Phone</h3>
                  <p className="text-text-light">{contactInfo.phone}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Business Hours</h3>
                  <p className="text-text-light">{contactInfo.hours}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Address</h3>
                  <p className="text-text-light">{contactInfo.address}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Social Media</h3>
                  <div className="flex gap-4 mt-2">
                    <a href="#" className="text-primary hover:text-primary-dark">Instagram</a>
                    <a href="#" className="text-primary hover:text-primary-dark">Twitter</a>
                    <a href="#" className="text-primary hover:text-primary-dark">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQs */}
            <div className="bg-white p-8 rounded-custom shadow-custom">
              <h2 className="text-3xl font-heading font-bold mb-6 text-text-dark">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                    <h3 className="font-semibold text-primary mb-2">{faq.question}</h3>
                    <p className="text-text-light">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Chat */}
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-custom text-center">
              <h2 className="text-2xl font-heading font-bold mb-4 text-text-dark">Need Immediate Support?</h2>
              <p className="text-text-light mb-6">
                Our performance experts are available for live chat during business hours
              </p>
              <button className="bg-primary text-white px-8 py-4 rounded-custom font-semibold hover:bg-primary-dark transition-all transform hover:scale-105 shadow-custom">
                Start Live Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 