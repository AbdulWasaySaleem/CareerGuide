import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import { ArrowLeft, Loader, AlertCircle, Calendar, Award, BookOpen, Briefcase } from 'lucide-react';

const ViewCareer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [career, setCareer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('description');

  // Fetch data from API using id
  const fetchCareerData = async () => {
    try {
      setLoading(true);
      const response = await api.get(`/career/getCareer/${id}`);
      setCareer(response.data.career);
      setError(null);
    } catch (error) {
      console.error('Error fetching career data:', error);
      setError('Failed to load career information. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Use effect to fetch data when component mounts
  useEffect(() => {
    fetchCareerData();
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [id]);

  // Handle going back
  const handleGoBack = () => {
    navigate(-1);
  };

  // Loading state
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="p-8 bg-white rounded-lg shadow-md">
          <Loader className="w-12 h-12 animate-spin text-blue-600 mb-4 mx-auto" />
          <p className="text-gray-700 text-center font-medium">Loading career information...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="p-8 bg-white rounded-lg shadow-md max-w-md w-full">
          <AlertCircle className="w-12 h-12 text-red-500 mb-4 mx-auto" />
          <h2 className="text-xl font-bold text-center mb-2">Error</h2>
          <p className="text-red-600 text-center mb-6">{error}</p>
          <button 
            onClick={handleGoBack}
            className="w-full px-4 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </button>
        </div>
      </div>
    );
  }

  // No data state
  if (!career) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="p-8 bg-white rounded-lg shadow-md max-w-md w-full">
          <AlertCircle className="w-12 h-12 text-yellow-500 mb-4 mx-auto" />
          <h2 className="text-xl font-bold text-center mb-2">No Data Found</h2>
          <p className="text-gray-600 text-center mb-6">We couldn't find any information about this career.</p>
          <button 
            onClick={handleGoBack}
            className="w-full px-4 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </button>
        </div>
      </div>
    );
  }

  // Determine if we should render mobile or desktop tabs
  const isMobile = window.innerWidth < 768;

  // Render content based on active tab (for mobile view)
  const renderTabContent = () => {
    switch(activeTab) {
      case 'description':
        return (
          <section className="mb-8 animate-fadeIn">
            <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
              <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
              About this Career
            </h2>
            <p className="text-gray-700 leading-relaxed">{career.longDescription}</p>
          </section>
        );
      case 'prerequisites':
        return (
          <section className="mb-8 animate-fadeIn">
            <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
              <Award className="w-5 h-5 mr-2 text-blue-600" />
              Prerequisites
            </h2>
            <ul className="list-none pl-0 space-y-2">
              {career.prerequisites.map((prerequisite, index) => (
                <li key={index} className="text-gray-700 p-3 bg-blue-50 rounded-md border-l-4 border-blue-500 flex items-start">
                  <span className="font-medium text-blue-700 mr-2">{index + 1}.</span>
                  <span>{prerequisite}</span>
                </li>
              ))}
            </ul>
          </section>
        );
      case 'skills':
        return (
          <section className="mb-8 animate-fadeIn">
            <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
              <Award className="w-5 h-5 mr-2 text-blue-600" />
              Skills to Learn
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {career.skillsToLearn.map((skill, index) => (
                <div key={index} className="bg-green-50 p-4 rounded-md border border-green-200 shadow-sm hover:shadow-md transition-shadow flex items-center">
                  <span className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold mr-3">
                    {index + 1}
                  </span>
                  <p className="text-gray-700 font-medium">{skill}</p>
                </div>
              ))}
            </div>
          </section>
        );
      case 'paths':
        return (
          <section className="animate-fadeIn">
            <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
              <Briefcase className="w-5 h-5 mr-2 text-blue-600" />
              Potential Career Paths
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {career.potentialCareerPaths.map((path, index) => (
                <div key={index} className="bg-indigo-50 p-4 rounded-md border border-indigo-200 hover:shadow-md transition-shadow">
                  <p className="text-indigo-800 font-medium">{path}</p>
                </div>
              ))}
            </div>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4 md:p-8">
      {/* Top navigation bar */}
      <div className="max-w-6xl mx-auto mb-6">
        <button 
          onClick={handleGoBack}
          className="px-4 py-2 bg-white text-blue-600 rounded-md hover:bg-blue-50 flex items-center border border-blue-200 shadow-sm transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Go Back
        </button>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 md:p-8 rounded-t-lg shadow-md">
          <div className="flex flex-col md:flex-row md:items-center mb-4">
            <span className="text-5xl mr-4 mb-4 md:mb-0 bg-white text-blue-600 w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
              {career.icon}
            </span>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2">{career.title}</h1>
              <div className="flex items-center text-blue-100">
                <Calendar className="w-4 h-4 mr-1" />
                <span className="text-sm">Last updated: {new Date(career.updatedAt).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
          <p className="text-lg opacity-90 mt-4 bg-blue-700 bg-opacity-20 p-4 rounded-md border-l-4 border-white">
            {career.shortDescription}
          </p>
        </div>

        {/* Content sections */}
        <div className="bg-white shadow-md rounded-b-lg overflow-hidden">
          {/* Mobile Tabs */}
          {isMobile && (
            <div className="flex overflow-x-auto border-b border-gray-200 bg-gray-50 sticky top-0 z-10">
              <button 
                className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${activeTab === 'description' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
                onClick={() => setActiveTab('description')}
              >
                About
              </button>
              <button 
                className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${activeTab === 'prerequisites' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
                onClick={() => setActiveTab('prerequisites')}
              >
                Prerequisites
              </button>
              <button 
                className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${activeTab === 'skills' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
                onClick={() => setActiveTab('skills')}
              >
                Skills
              </button>
              <button 
                className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${activeTab === 'paths' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
                onClick={() => setActiveTab('paths')}
              >
                Career Paths
              </button>
            </div>
          )}
          
          <div className="p-6 md:p-8">
            {isMobile ? (
              renderTabContent()
            ) : (
              <>
                {/* Desktop view - show all sections */}
                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                    <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
                    About this Career
                  </h2>
                  <p className="text-gray-700 leading-relaxed">{career.longDescription}</p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                    <Award className="w-5 h-5 mr-2 text-blue-600" />
                    Prerequisites
                  </h2>
                  <ul className="list-none pl-0 space-y-2">
                    {career.prerequisites.map((prerequisite, index) => (
                      <li key={index} className="text-gray-700 p-3 bg-blue-50 rounded-md border-l-4 border-blue-500 flex items-start">
                        <span className="font-medium text-blue-700 mr-2">{index + 1}.</span>
                        <span>{prerequisite}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                    <Award className="w-5 h-5 mr-2 text-blue-600" />
                    Skills to Learn
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {career.skillsToLearn.map((skill, index) => (
                      <div key={index} className="bg-green-50 p-4 rounded-md border border-green-200 shadow-sm hover:shadow-md transition-shadow flex items-center">
                        <span className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold mr-3">
                          {index + 1}
                        </span>
                        <p className="text-gray-700 font-medium">{skill}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                    <Briefcase className="w-5 h-5 mr-2 text-blue-600" />
                    Potential Career Paths
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {career.potentialCareerPaths.map((path, index) => (
                      <div key={index} className="bg-indigo-50 p-4 rounded-md border border-indigo-200 hover:shadow-md transition-shadow">
                        <p className="text-indigo-800 font-medium">{path}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </>
            )}
          </div>
        </div>

        {/* Additional resources card */}
        <div className="bg-white shadow-md rounded-lg mt-8 p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Explore More</h2>
            
            <button 
              className="p-4 bg-indigo-50 rounded-md border border-indigo-200 hover:bg-indigo-100 transition-colors flex items-center justify-center text-indigo-700 font-medium"
            >
              Learning Resources
            </button>
          </div>
      </div>
    </div>
  );
};

export default ViewCareer;