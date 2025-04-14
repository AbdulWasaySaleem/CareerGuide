import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-white text-gray-800 font-sans overflow-hidden">
      {/* Hero Section - More fluid with curved shapes and dynamic elements */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 z-0"></div>
        {/* Decorative circles */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-200 rounded-full opacity-20 blur-3xl"></div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Find Your Perfect Tech Career Path
          </h1>
          <p className="text-lg md:text-xl mb-10 text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Take our personalized assessment to discover which Software
            Engineering or Computer Science career aligns with your unique
            talents and passions.
          </p>
          <Link
            to="/quiz"
            className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full hover:shadow-lg transform transition hover:-translate-y-1 hover:scale-105"
          >
            Start Your Career Journey
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              ></path>
            </svg>
          </Link>
        </div>
      </section>

      {/* Why Choose Us - More organic design with curved cards */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="inline-block text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Why CodePath Works
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              Our data-driven approach has helped thousands of students and
              professionals find their ideal path in the technology industry.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "📈",
                title: "Personalized Roadmaps",
                description:
                  "Custom learning paths tailored to your goals and experience level",
              },
              {
                icon: "🧠",
                title: "Skill-based Assessment",
                description:
                  "Identify your strengths and areas for growth with our proven quizzes",
              },
              {
                icon: "🎯",
                title: "Expert Guidance",
                description:
                  "Receive advice from industry professionals with years of experience",
              },
              {
                icon: "📚",
                title: "Curated Resources",
                description:
                  "Access a library of hand-picked learning materials and tutorials",
              },
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="h-full bg-gradient-to-b from-white to-gray-50 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden p-8 transform group-hover:-translate-y-2">
                  <div className="bg-blue-50 text-5xl p-4 inline-block rounded-2xl mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Flowing timeline design */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="inline-block text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              How It Works
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              Our simple four-step process helps you navigate your tech career
              journey
            </p>
          </div>

          <div className="relative">
            {/* Flowing timeline line */}
            <div className="hidden lg:block absolute left-0 right-0 top-28 h-1 bg-gradient-to-r from-blue-200 via-indigo-200 to-blue-200 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
              {[
                {
                  step: 1,
                  icon: "🧪",
                  title: "Take the Quiz",
                  description:
                    "Answer questions about your skills and preferences",
                },
                {
                  step: 2,
                  icon: "🧭",
                  title: "Get Suggestions",
                  description: "Receive career paths that match your profile",
                },
                {
                  step: 3,
                  icon: "📘",
                  title: "Access Resources",
                  description: "Start building skills with guided materials",
                },
                {
                  step: 4,
                  icon: "💼",
                  title: "Explore Jobs",
                  description: "Find positions that align with your new skills",
                },
              ].map((item, index) => (
                <div key={index} className="group">
                  <div className="h-full bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center text-center transform group-hover:-translate-y-2">
                    <div className="relative">
                      <div className="absolute inset-0 bg-blue-100 blur-md rounded-full"></div>
                      <div className="relative bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full w-16 h-16 flex items-center justify-center mb-4 text-white font-bold text-xl">
                        {item.step}
                      </div>
                    </div>
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="inline-block text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Explore Career Paths
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              Discover various specializations in the tech industry and find
              your perfect fit
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Web Developer",
                icon: "🌐",
                description:
                  "Build responsive and interactive websites and web applications",
                color: "from-blue-400 to-blue-600",
              },
              {
                title: "Mobile App Developer",
                icon: "📱",
                description:
                  "Create applications for iOS, Android, and other mobile platforms",
                color: "from-indigo-400 to-indigo-600",
              },
              {
                title: "Data Scientist",
                icon: "📊",
                description:
                  "Analyze complex data and extract valuable insights",
                color: "from-purple-400 to-purple-600",
              },
              {
                title: "AI/ML Engineer",
                icon: "🤖",
                description:
                  "Develop systems that can learn and make decisions",
                color: "from-green-400 to-green-600",
              },
              {
                title: "Cybersecurity Analyst",
                icon: "🔒",
                description:
                  "Protect systems and networks from digital threats",
                color: "from-red-400 to-red-600",
              },
              {
                title: "Game Developer",
                icon: "🎮",
                description:
                  "Create interactive experiences for various gaming platforms",
                color: "from-yellow-400 to-yellow-600",
              },
            ].map((career, index) => (
              <div key={index} className="group">
                <div className="relative h-full bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden transform group-hover:-translate-y-2">
                  {/* Top color accent */}
                  <div
                    className={`h-2 w-full bg-gradient-to-r ${career.color}`}
                  ></div>
                  <div className="p-8">
                    <div className="text-4xl mb-4">{career.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">
                      {career.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {career.description}
                    </p>
                    <Link
                      to="/careers"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium group"
                    >
                      Learn More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Redirect button to careers */}
          <div className="text-center">
            <Link to="/careers">
              <button className="mt-10 px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full hover:shadow-lg transform transition hover:-translate-y-1 hover:scale-105">
                View All Career Paths
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Fluid, overlapping design */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full opacity-20 blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-200 rounded-full opacity-20 blur-3xl transform translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="inline-block text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Success Stories
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              See how CodePath has helped professionals like you find their
              perfect career
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "The career quiz was spot-on! I'm now a front-end developer and loving every minute of it.",
                name: "Alex Johnson",
                role: "Front-End Developer",
              },
              {
                quote:
                  "CodePath helped me transition from marketing to data science with a clear learning path.",
                name: "Sarah Chen",
                role: "Data Scientist",
              },
              {
                quote:
                  "I was unsure which direction to take in tech. Now I'm a successful mobile developer!",
                name: "Miguel Rodriguez",
                role: "iOS Developer",
              },
            ].map((testimonial, index) => (
              <div key={index} className="group">
                <div className="h-full bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 transform group-hover:-translate-y-2">
                  <div className="text-5xl text-indigo-200 mb-4">❝</div>
                  <p className="text-gray-700 mb-6">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full w-12 h-12 flex items-center justify-center mr-4 text-white font-medium">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-blue-600 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section - Modern, floating design */}
      <section className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600"></div>

            {/* Decorative shapes */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white opacity-10 rounded-full"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white opacity-10 rounded-full"></div>

            <div className="relative px-8 py-16 text-center text-white z-10">
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="mb-8 text-blue-100 max-w-lg mx-auto">
                Subscribe to receive the latest career tips, industry insights,
                and exclusive resources.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="px-6 py-4 rounded-full w-full sm:flex-1 text-gray-800 focus:ring-4 focus:ring-blue-300 focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-blue-600 px-8 py-4 rounded-full font-medium hover:bg-blue-50 transition shadow-lg transform hover:-translate-y-1"
                >
                  Subscribe
                </button>
              </form>
              <p className="mt-6 text-sm text-blue-100">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Clean, focused design */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10">
            <h2 className="inline-block text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Ready to Find Your Path?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Take the first step toward your ideal tech career. Our assessment
              takes just 5 minutes and can help guide your professional journey.
            </p>
          </div>
          <Link
            to="/quiz"
            className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full hover:shadow-lg transform transition hover:-translate-y-1 hover:scale-105"
          >
            Take the Career Quiz
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              ></path>
            </svg>
          </Link>
          <div className="mt-10 flex justify-center space-x-4">
            <span className="text-gray-500">
              Over 10,000 successful matches
            </span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-500">Free assessment</span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-500">5-minute quiz</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
