import React from "react";
import { Link } from "react-router-dom";
import { Users, Award, Briefcase, BookOpen, ChevronRight } from "lucide-react";

const About = () => {
  // Team data
  const teamMembers = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Chief Career Strategist",
      bio: "Former tech recruiter with 15+ years of experience at Fortune 500 companies. PhD in Industrial-Organizational Psychology.",
      avatar: "/api/placeholder/100/100"
    },
    {
      name: "Michael Chen",
      role: "Tech Industry Analyst",
      bio: "10+ years as a software engineer and team lead at Google and Microsoft. Expert in tech career trajectories and skill demands.",
      avatar: "/api/placeholder/100/100"
    },
    {
      name: "Jessica Rodriguez",
      role: "Education Director",
      bio: "Computer Science professor with expertise in curriculum development and learning pathways for aspiring tech professionals.",
      avatar: "/api/placeholder/100/100"
    },
    {
      name: "James Wilson",
      role: "Career Coach",
      bio: "Certified career counselor specializing in tech industry transitions and professional development planning.",
      avatar: "/api/placeholder/100/100"
    }
  ];



  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-blue-50 to-white z-0"></div>
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-200 rounded-full opacity-20 blur-3xl"></div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            About CareerMentor
          </h1>
          <p className="text-xl mb-8 text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to help individuals discover and pursue fulfilling careers in technology through personalized guidance and data-driven insights.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-600">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At CareerMentor, we believe everyone deserves a fulfilling career that aligns with their unique talents, interests, and values. Our mission is to empower individuals to make informed career decisions in the rapidly evolving technology landscape.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We combine cutting-edge assessment technology with human expertise to provide personalized career guidance that leads to long-term professional satisfaction and success.
              </p>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-3xl">
              <h2 className="text-3xl font-bold mb-6 text-indigo-600">Our Vision</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We envision a world where every person can discover and pursue their ideal career path in technology without confusion, uncertainty, or wasted time and resources.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                By 2030, we aim to help one million individuals worldwide find meaningful careers in technology that match their unique potential and aspirations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              These principles guide everything we do at CareerMentor
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Personalization",
                description: "We believe career guidance should be as unique as you are. No one-size-fits-all solutions."
              },
              {
                icon: "📊",
                title: "Data-Driven",
                description: "Our recommendations are based on robust data analysis and industry research."
              },
              {
                icon: "🤝",
                title: "Integrity",
                description: "We provide honest, unbiased guidance focused solely on your best interests."
              },
              {
                icon: "🚀",
                title: "Innovation",
                description: "We continuously improve our assessment technology to match evolving career landscapes."
              },
              {
                icon: "🌱",
                title: "Growth Mindset",
                description: "We believe in continuous learning and development for ourselves and our users."
              },
              {
                icon: "🌍",
                title: "Inclusivity",
                description: "We're committed to making tech careers accessible to people from all backgrounds."
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-all">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     

      {/* Team Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Career experts passionate about helping you find your path in tech
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-md transition-all">
                <div className="inline-block rounded-full overflow-hidden mb-4 border-4 border-blue-100">
                  <img src={member.avatar} alt={member.name} className="w-24 h-24 object-cover" />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-blue-600 text-sm font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-12 shadow-lg text-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <Users className="w-10 h-10" />, value: "10,000+", label: "Career Matches" },
                { icon: <Award className="w-10 h-10" />, value: "96%", label: "Satisfaction Rate" },
                { icon: <Briefcase className="w-10 h-10" />, value: "30+", label: "Industry Partners" },
                { icon: <BookOpen className="w-10 h-10" />, value: "200+", label: "Career Resources" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Discover Your Ideal Tech Career?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Take our personalized assessment and start your journey toward a fulfilling career in technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quiz"
              className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full hover:shadow-lg"
            >
              Take the Career Quiz
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 text-lg font-medium text-blue-600 bg-blue-50 border border-blue-200 rounded-full hover:bg-blue-100"
            >
              Contact Our Team
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;