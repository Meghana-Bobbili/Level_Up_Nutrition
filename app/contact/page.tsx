import React from 'react';

const contactInfo = {
  email: 'support@levelupnutrition.com',
  phone: '1-800-LEVEL-UP',
  hours: 'Monday - Friday: 9AM - 6PM EST',
  address: '123 Performance Drive, Fitness City, FC 12345'
};

const faqs = [
  {
    question: 'What is your shipping policy?',
    answer: 'We offer free shipping on orders over $50. Standard shipping takes 3-5 business days.'
  },
  {
    question: 'Do you offer international shipping?',
    answer: 'Yes, we ship to most countries. International shipping rates and times vary by location.'
  },
  {
    question: 'What is your return policy?',
    answer: 'We offer a 30-day money-back guarantee on all unopened products.'
  },
  {
    question: 'Are your products third-party tested?',
    answer: 'Yes, all our products undergo rigorous third-party testing for quality and purity.'
  }
];

export default function Contact() {
  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">
            We're here to help with any questions about our products or your order
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  >
                    <option value="">Select a subject</option>
                    <option value="order">Order Inquiry</option>
                    <option value="product">Product Question</option>
                    <option value="support">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information & FAQs */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-primary">Email</h3>
                  <p className="text-gray-600">{contactInfo.email}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-primary">Phone</h3>
                  <p className="text-gray-600">{contactInfo.phone}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-primary">Business Hours</h3>
                  <p className="text-gray-600">{contactInfo.hours}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-primary">Address</h3>
                  <p className="text-gray-600">{contactInfo.address}</p>
                </div>
              </div>
            </div>

            {/* FAQs */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index}>
                    <h3 className="font-semibold text-primary mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Chat */}
            <div className="bg-primary/5 p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold mb-4">Need Immediate Help?</h2>
              <p className="text-gray-600 mb-6">
                Our support team is available for live chat during business hours
              </p>
              <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition">
                Start Live Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 