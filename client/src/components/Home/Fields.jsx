import React from 'react'
import { Link } from 'react-router-dom'

const Fields = () => {
  return (
    <>
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
    </>
  )
}

export default Fields