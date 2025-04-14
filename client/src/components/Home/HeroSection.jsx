import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <>
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
    </>
  )
}

export default HeroSection