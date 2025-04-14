import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/Home/HeroSection";
import ChooseUs from "../components/Home/ChooseUs";
import TimeLine from "../components/Home/TimeLine";
import Fields from "../components/Home/Fields";
import Testimonials from "../components/Home/Testimonials";
import NewsLetter from "../components/Home/NewsLetter";

const Home = () => {
  return (
    <div className="bg-white text-gray-800 font-sans overflow-hidden">
      <HeroSection />
      <ChooseUs />
      <TimeLine />
      <Fields />
      <Testimonials />
      <NewsLetter />
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
