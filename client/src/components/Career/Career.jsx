import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Loader } from 'lucide-react';
import api from '../../services/api';

// Color mapping for different career types
const getColorScheme = (index) => {
  const colorSchemes = [
    "from-blue-500 to-indigo-500",
    "from-teal-500 to-green-500",
    "from-purple-500 to-pink-500",
    "from-red-500 to-orange-500",
    "from-yellow-500 to-amber-500",
    "from-emerald-500 to-teal-500",
    "from-fuchsia-500 to-purple-500",
    "from-cyan-500 to-blue-500"
  ];
  return colorSchemes[index % colorSchemes.length];
};

const CareerCard = ({ career, colorScheme }) => (
  <div className="group">
    <div className="relative h-full bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden transform group-hover:-translate-y-2">
      <div className={`h-2 w-full bg-gradient-to-r ${colorScheme}`}></div>
      <div className="p-6">
        <div className="text-3xl mb-3">{career.icon}</div>
        <h3 className="text-lg font-semibold mb-2">{career.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{career.shortDescription}</p>
        <Link 
          to={`/careers/${career._id}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium group"
        >
          Learn More
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  </div>
);

const Career = () => {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const fetchCareers = async () => {
      try {
        const response = await api.get('/career/getAllCareer');
    
        if (response.data && Array.isArray(response.data.data)) {
          setCareers(response.data.data);
        } else {
          setError('Failed to fetch careers');
        }
      } catch (err) {
        setError('Error connecting to the server');
        console.error('Error fetching careers:', err);
      } finally {
        setLoading(false);
      }
    };
    

    fetchCareers();
  }, []);

  const filteredCareers = careers.filter(career => 
    career.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    career.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <Loader className="animate-spin mx-auto mb-4 text-blue-600" size={40} />
          <p className="text-gray-600">Loading career options...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="bg-red-50 p-6 rounded-lg shadow-md text-center max-w-md">
          <div className="text-red-600 text-xl mb-2">Error Loading Data</div>
          <p className="text-gray-700">{error}</p>
          <button 
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            onClick={() => window.location.reload()}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="inline-block text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Explore Career Paths
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Discover various specializations in the tech industry and find your perfect fit
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-10">
          <div className="flex items-center bg-white rounded-full shadow-md overflow-hidden">
            <div className="pl-4 text-gray-400">
              <Search size={20} />
            </div>
            <input
              type="text"
              placeholder="Search career paths..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full p-4 focus:outline-none text-gray-700"
            />
          </div>
        </div>

        {/* Career Cards */}
        {filteredCareers.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">No career paths found matching your search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCareers.map((career, index) => (
              <CareerCard 
                key={career._id} 
                career={career} 
                colorScheme={getColorScheme(index)}
              />
            ))}
          </div>
        )}

        {/* Empty state when no careers are available */}
        {careers.length === 0 && !loading && !error && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">No career paths available at the moment.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default React.memo(Career);