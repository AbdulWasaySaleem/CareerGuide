import React from "react";
import { Link } from "react-router-dom";
import { Users, Award, Briefcase, BookOpen, ChevronRight } from "lucide-react";

const About = () => {
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
            CareerMentor is a modern platform built to help individuals explore
            meaningful tech careers. We guide you with personalized insights,
            smart tools, and expert support—so you never feel lost on your
            journey.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-600">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We believe everyone deserves a career that excites and empowers
                them. CareerMentor exists to help individuals confidently
                navigate the ever-changing tech landscape through tailored
                guidance and real-world insights.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We blend cutting-edge assessment tools with human support to
                help people discover paths that truly fit who they are and where
                they want to go.
              </p>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-3xl">
              <h2 className="text-3xl font-bold mb-6 text-indigo-600">
                Our Vision
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We imagine a future where anyone, anywhere, can discover their
                potential and access the tech career they deserve—without
                barriers, guesswork, or wasted time.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                By 2030, we’re committed to helping over one million people
                worldwide build successful careers in technology that align with
                their passion and purpose.
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
              These principles shape every decision, product, and interaction at
              CareerMentor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Personalization",
                description:
                  "Every person’s career journey is unique. We offer guidance tailored to you—not a generic roadmap.",
              },
              {
                icon: "📊",
                title: "Data-Driven",
                description:
                  "Our insights come from real industry trends and behavioral data, not just intuition.",
              },
              {
                icon: "🤝",
                title: "Integrity",
                description:
                  "We give honest advice that puts your long-term success above everything else.",
              },
              {
                icon: "🚀",
                title: "Innovation",
                description:
                  "We’re always improving our tools to keep up with tech’s rapid pace—and yours.",
              },
              {
                icon: "🌱",
                title: "Growth Mindset",
                description:
                  "We believe that growth is a lifelong journey—for you, and for us.",
              },
              {
                icon: "🌍",
                title: "Inclusivity",
                description:
                  "Tech should be for everyone. We work to open doors for people from all backgrounds.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-all"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
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
                {
                  icon: <Users className="w-10 h-10" />,
                  value: "10,000+",
                  label: "Career Matches Made",
                },
                {
                  icon: <Award className="w-10 h-10" />,
                  value: "96%",
                  label: "User Satisfaction Rate",
                },
                {
                  icon: <Briefcase className="w-10 h-10" />,
                  value: "30+",
                  label: "Tech Industry Partners",
                },
                {
                  icon: <BookOpen className="w-10 h-10" />,
                  value: "200+",
                  label: "Curated Career Resources",
                },
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
          <h2 className="text-3xl font-bold mb-6">
            Ready to Discover Your Ideal Tech Career?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Take our free career assessment to uncover roles that match your
            interests, skills, and personality—then take the next step with
            confidence.
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
