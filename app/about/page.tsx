import React from 'react';

const teamMembers = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Founder & CEO',
    bio: 'Former professional athlete and nutrition scientist with over 15 years of experience in sports nutrition.',
    image: '/team/sarah.jpg'
  },
  {
    name: 'Dr. Michael Chen',
    role: 'Head of Research & Development',
    bio: 'PhD in Nutritional Sciences, specializing in performance nutrition and supplement formulation.',
    image: '/team/michael.jpg'
  },
  {
    name: 'Emma Davis',
    role: 'Performance Nutrition Coach',
    bio: 'Certified sports nutritionist with experience working with elite athletes across multiple sports.',
    image: '/team/emma.jpg'
  }
];

const values = [
  {
    title: 'Holistic Development',
    description: 'We focus on the physical, mental, and emotional growth of athletes at all levels.'
  },
  {
    title: 'Supportive Environment',
    description: 'Creating a space of non-judgment, support, and kindness where athletes can truly flourish.'
  },
  {
    title: 'Community First',
    description: "Building a community where athletes celebrate each other's success and grow together."
  },
  {
    title: 'Science-Backed Solutions',
    description: 'Every product and recommendation is backed by rigorous scientific research and testing.'
  }
];

export default function About() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">About Level Up Nutrition</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We empower athletes from grassroots to professionals with science-backed nutrition to help them reach peak performance, build resilience, and unleash their true potential.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            <h2 className="text-3xl font-bold mb-6">Overview</h2>
            <p className="text-lg text-gray-700 mb-6">
              LevelUp is a brand that focuses on the holistic development of the athlete. Overall development includes the physical, the mental and the emotional. We want to create a space that caters to the needs of the athlete from the grassroots to the professionals.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              We believe that improvement occurs in an environment of non-judgement, support and kindness. We try to reinforce the idea of athletes enjoying each other's success and throw away any feelings of jealousy and "competitiveness" amongst each other and find solutions on how they can get better as athletes and individuals.
            </p>
            <p className="text-lg text-gray-700">
              At the end of the day sport is played for fun and it brings people together as a community.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                LevelUp Nutrition was born out of necessity. As an athlete that faced difficulty in terms of training during the Covid era, I knew if I wasn't able to get better during the lockdown, there is no way I would survive once this had ended. I had to find a way to maintain my fitness or get better.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Without an access to a gym, I had to look at alternative measures to improve my fitness and I found nutrition to be a gateway. I got in contact with a Nutritionist and within 6 months I saw my physical and mental states get elevated. Maybe, just maybe this was me "Levelling Up".
              </p>
              <p className="text-lg text-gray-700 mb-6">
                For an athlete it is important to be better than yesterday. You can only be better than yesterday if you are willing to take that one step forward and upward. It will mean putting in a little extra effort but that bit of extra effort yields an exponential change.
              </p>
              <p className="text-lg text-gray-700 font-semibold">
                And change is what we are after. You change, you evolve, you LEVEL UP!
              </p>
            </div>
            <div className="bg-gray-200 h-96 rounded-lg">
              {/* Story image placeholder */}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            At LevelUp Nutrition we want to empower athletes from the grassroots to the professionals with science-backed nutrition to help them reach peak performance, build resilience and unleash their true potential.
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Join Our Community
          </button>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-64 bg-gray-200">
                  {/* Team member image placeholder */}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards Section */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Quality Standards</h2>
            <p className="text-lg text-gray-700 mb-8">
              We maintain the highest standards in the industry, from ingredient sourcing to manufacturing and testing. Every product undergoes rigorous quality control to ensure safety, purity, and efficacy.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {['NSF Certified', 'GMP Compliant', 'Third-Party Tested', 'Research Backed'].map((standard) => (
                <div key={standard} className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full mb-4"></div>
                  <span className="font-semibold">{standard}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Level Up?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of athletes who trust Level Up Nutrition for their performance needs.
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Shop Now
          </button>
        </div>
      </section>
    </div>
  );
} 