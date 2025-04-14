import React from 'react';

const teamMembers = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Founder & Chief Science Officer',
    bio: 'PhD in Sports Nutrition, former Olympic athlete, and leading researcher in performance optimization.',
    image: '/team/sarah.jpg',
    expertise: ['Sports Nutrition', 'Performance Research', 'Athlete Development']
  },
  {
    name: 'Dr. Michael Chen',
    role: 'Head of Research & Innovation',
    bio: 'PhD in Nutritional Biochemistry, specializing in advanced supplement formulation and clinical research.',
    image: '/team/michael.jpg',
    expertise: ['Supplement Science', 'Clinical Research', 'Product Development']
  },
  {
    name: 'Emma Davis',
    role: 'Director of Performance Nutrition',
    bio: 'MS in Sports Science, certified performance nutritionist with experience across elite sports organizations.',
    image: '/team/emma.jpg',
    expertise: ['Performance Nutrition', 'Athlete Programming', 'Recovery Optimization']
  }
];

const values = [
  {
    title: 'Scientific Excellence',
    description: 'Every product and protocol is backed by rigorous research and clinical validation.',
    icon: '🔬'
  },
  {
    title: 'Performance First',
    description: 'We focus on measurable results and real-world athletic performance enhancement.',
    icon: '⚡'
  },
  {
    title: 'Innovation Driven',
    description: 'Constantly pushing boundaries in sports nutrition and performance optimization.',
    icon: '🚀'
  },
  {
    title: 'Athlete Centered',
    description: 'Solutions designed by athletes, for athletes, at every level of competition.',
    icon: '🏆'
  }
];

export default function About() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-text-dark">About Level Up Nutrition</h1>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              We're revolutionizing sports nutrition through cutting-edge research, innovative formulations, and athlete-driven development.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            <h2 className="text-4xl font-heading font-bold mb-8 text-text-dark">Our Vision</h2>
            <p className="text-lg text-text-light mb-6">
              LevelUp Nutrition is at the forefront of performance nutrition innovation. We combine advanced scientific research with real-world athletic experience to create solutions that deliver measurable results.
            </p>
            <p className="text-lg text-text-light mb-6">
              Our approach is rooted in three core principles: scientific validation, performance optimization, and athlete-centric development. We believe that true performance enhancement comes from understanding the complex interplay between nutrition, training, and recovery.
            </p>
            <p className="text-lg text-text-light">
              Every product we create undergoes rigorous testing and validation to ensure it meets the highest standards of efficacy and safety. We work directly with athletes at all levels to refine and perfect our formulations.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-bold mb-12 text-text-dark">Our Journey</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose max-w-none">
              <p className="text-lg text-text-light mb-6">
                Founded by Dr. Sarah Johnson, a former Olympic athlete and sports nutrition researcher, LevelUp Nutrition emerged from a critical gap in the sports supplement industry. While working with elite athletes, Dr. Johnson noticed that many supplements lacked proper scientific validation and real-world efficacy testing.
              </p>
              <p className="text-lg text-text-light mb-6">
                This realization led to the creation of our research-driven approach. We assembled a team of leading scientists, nutritionists, and athletes to develop products that truly enhance performance. Our first breakthrough came with our patented recovery formulation, which has since become an industry standard.
              </p>
              <p className="text-lg text-text-light mb-6">
                Today, we continue to push the boundaries of sports nutrition through ongoing research, athlete feedback, and technological innovation. Our commitment to excellence has earned us partnerships with professional sports teams and recognition from leading sports science institutions.
              </p>
              <p className="text-lg text-primary font-semibold">
                The journey continues as we strive to redefine what's possible in sports nutrition.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 h-96 rounded-custom shadow-custom flex items-center justify-center">
              <span className="text-6xl">🏃‍♂️</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-bold text-center mb-12 text-text-dark">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white p-8 rounded-custom shadow-custom text-center transform transition-all hover:scale-105">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-4">{value.title}</h3>
                <p className="text-text-light">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-heading font-bold mb-6">Our Mission</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            To revolutionize sports nutrition through scientific innovation, athlete-driven development, and uncompromising quality standards.
          </p>
          <button className="bg-white text-primary px-8 py-4 rounded-custom font-semibold hover:bg-background transition-all transform hover:scale-105 shadow-custom">
            Join Our Research Community
          </button>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-bold text-center mb-12 text-text-dark">Our Expert Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-white rounded-custom shadow-custom overflow-hidden transform transition-all hover:scale-105">
                <div className="h-64 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <span className="text-6xl">👤</span>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-heading font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-text-light mb-6">{member.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill) => (
                      <span key={skill} className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-custom">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards Section */}
      <section className="py-20 bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-heading font-bold mb-6 text-text-dark">Our Quality Standards</h2>
            <p className="text-lg text-text-light mb-12">
              We maintain the highest standards in the industry, from ingredient sourcing to manufacturing and testing. Every product undergoes rigorous quality control to ensure safety, purity, and efficacy.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { name: 'NSF Certified', icon: '🏅' },
                { name: 'GMP Compliant', icon: '📋' },
                { name: 'Third-Party Tested', icon: '🔍' },
                { name: 'Research Backed', icon: '📊' }
              ].map((standard) => (
                <div key={standard.name} className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-white rounded-custom shadow-custom flex items-center justify-center mb-4">
                    <span className="text-3xl">{standard.icon}</span>
                  </div>
                  <span className="font-semibold text-text-dark">{standard.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-heading font-bold mb-6">Ready to Elevate Your Performance?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join elite athletes worldwide who trust LevelUp Nutrition for their performance needs.
          </p>
          <button className="bg-white text-primary px-8 py-4 rounded-custom font-semibold hover:bg-background transition-all transform hover:scale-105 shadow-custom">
            Explore Our Products
          </button>
        </div>
      </section>
    </div>
  );
} 