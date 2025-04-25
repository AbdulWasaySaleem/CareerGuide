import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Home, Search, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 flex items-center justify-center px-4 overflow-hidden">
      <div
        className={`text-center max-w-2xl transition-all duration-700 transform ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {/* Animated illustration */}
        <div className="mb-8 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-40 h-40 bg-blue-500 rounded-full opacity-10 animate-pulse"></div>
          </div>

          <div className="relative flex justify-center mb-4">
            <div className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-bounce">
              4
            </div>
            <div className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              0
            </div>
            <div className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 animate-bounce delay-75">
              4
            </div>
          </div>

          <div className="relative flex justify-center">
            <div
              className={`p-4 bg-white rounded-full shadow-lg mb-6 transform ${
                isLoaded ? "scale-100" : "scale-0"
              } transition-transform duration-500 delay-300`}
            >
              <AlertTriangle size={50} className="text-yellow-500" />
            </div>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Page Not Found
          </span>
        </h2>

        <p className="text-gray-600 text-lg mb-8 mx-auto max-w-lg">
          Oops! The page you're looking for has wandered off into the digital
          void. Let's get you back on track.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-medium rounded-xl hover:shadow-lg transition duration-300 flex items-center justify-center gap-2 hover:-translate-y-1 transform"
          >
            <Home size={20} />
            <span>Go Home</span>
          </Link>
        </div>
        <Link to={"/contact"}>
          <div className="mt-12 text-sm text-gray-500">
            <p>
              Lost? Need help?{" "}
              <a href="#contact" className="text-blue-600 hover:underline">
                Contact support
              </a>
              .
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
