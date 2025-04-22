import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BarChart, Bar, XAxis, ResponsiveContainer, Tooltip, CartesianGrid } from "recharts";
import api from "../../services/api";
import { Calendar, Award, User, Clock, ArrowRight, ChevronRight, LogOut, Settings, AlertCircle, Clipboard, Book, TrendingUp } from "lucide-react";

const UserDashboard = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [quizResults, setQuizResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");
  const [showDropdown, setShowDropdown] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const storedAuth = localStorage.getItem("auth");
    if (!storedAuth) {
      navigate("/login");
      return;
    }

    const { user } = JSON.parse(storedAuth);
    setUserInfo(user);

    const fetchDashboardData = async () => {
      try {
        const response = await api.get("/users/getResult");
        const results = response.data?.data;
        if (Array.isArray(results)) {
          setQuizResults(results.reverse()); // latest first
        }
      } catch (err) {
        console.error("Error fetching quiz result:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [navigate]);

  const getChartData = (result) => {
    if (!result?.fieldPoints) return [];
    
    return Object.entries(result.fieldPoints).map(([field, points]) => ({
      name: field,
      points: points
    }));
  };

  const getLatestResult = () => {
    return quizResults.length > 0 ? quizResults[0] : null;
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getTotalQuizzesTaken = () => {
    return quizResults.length;
  };

  const getProgressStatus = () => {
    const total = getTotalQuizzesTaken();
    if (total === 0) return "Not Started";
    if (total === 1) return "Beginner";
    if (total < 5) return "In Progress";
    return "Advanced";
  };

  const getStatusColor = () => {
    const status = getProgressStatus();
    switch (status) {
      case "Not Started": return "text-gray-600";
      case "Beginner": return "text-blue-600";
      case "In Progress": return "text-yellow-600";
      case "Advanced": return "text-green-600";
      default: return "text-indigo-600";
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-600 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-700 font-medium">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Top Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-indigo-700">Career Compass</h1>
            </div>
            
            {/* User Menu */}
            <div className="relative">
              <button 
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 focus:outline-none transition"
              >
                <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-medium">
                  {userInfo?.name?.charAt(0).toUpperCase()}
                </div>
                <span className="hidden md:block font-medium">{userInfo?.name}</span>
              </button>
              
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 border border-gray-200">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="font-medium text-sm">{userInfo?.name}</p>
                    <p className="text-xs text-gray-500 truncate">{userInfo?.email}</p>
                  </div>
                  <button onClick={() => {setActiveTab("profile"); setShowDropdown(false);}} className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <Settings className="w-4 h-4 mr-2" /> Settings
                  </button>
                  <button onClick={handleLogout} className="flex items-center w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                    <LogOut className="w-4 h-4 mr-2" /> Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-6 md:px-6 lg:px-8">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-indigo-700 to-purple-700 rounded-2xl p-6 mb-8 text-white shadow-xl">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Welcome back, {userInfo?.name} 👋</h2>
              <p className="opacity-90 text-sm md:text-base">Here's an overview of your progress and career recommendations</p>
            </div>
            <button 
              onClick={() => navigate("/quiz")} 
              className="bg-white text-indigo-700 px-5 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition flex items-center justify-center"
            >
              <span>Take New Quiz</span> <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
          <div className="bg-white p-5 md:p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="flex items-center">
              <div className="bg-blue-50 p-3 rounded-full mr-4">
                <Award className="text-blue-600 w-6 h-6" />
              </div>
              <div className="flex-1">
                <p className="text-gray-500 text-sm">Recommended Field</p>
                <p className="font-bold text-lg truncate max-w-full">
                  {getLatestResult()?.recommendedField || "Take a quiz"}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-5 md:p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="flex items-center">
              <div className="bg-green-50 p-3 rounded-full mr-4">
                <Calendar className="text-green-600 w-6 h-6" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Quizzes Taken</p>
                <p className="font-bold text-lg">{getTotalQuizzesTaken()}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-5 md:p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="flex items-center">
              <div className="bg-purple-50 p-3 rounded-full mr-4">
                <User className="text-purple-600 w-6 h-6" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Progress Status</p>
                <p className={`font-bold text-lg ${getStatusColor()}`}>{getProgressStatus()}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Tab Selection Dropdown */}
        <div className="md:hidden mb-4">
          <select 
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value)}
            className="w-full p-3 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="overview">Overview</option>
            <option value="history">Quiz History</option>
            <option value="profile">Profile</option>
          </select>
        </div>

        {/* Tabs Navigation (Desktop) */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="hidden md:flex border-b">
            <button 
              className={`flex items-center flex-1 py-4 px-6 text-center font-medium ${activeTab === 'overview' ? 'text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50' : 'text-gray-500 hover:bg-gray-50'}`}
              onClick={() => setActiveTab('overview')}
            >
              <TrendingUp className="w-5 h-5 mr-2" /> Overview
            </button>
            <button 
              className={`flex items-center flex-1 py-4 px-6 text-center font-medium ${activeTab === 'history' ? 'text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50' : 'text-gray-500 hover:bg-gray-50'}`}
              onClick={() => setActiveTab('history')}
            >
              <Clipboard className="w-5 h-5 mr-2" /> Quiz History
            </button>
            <button 
              className={`flex items-center flex-1 py-4 px-6 text-center font-medium ${activeTab === 'profile' ? 'text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50' : 'text-gray-500 hover:bg-gray-50'}`}
              onClick={() => setActiveTab('profile')}
            >
              <User className="w-5 h-5 mr-2" /> Profile
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-4 md:p-6">
            {activeTab === 'overview' && (
              <div>
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-indigo-600" /> 
                  Your Latest Results
                </h3>
                
                {getLatestResult() ? (
                  <div>
                    <div className="mb-6 p-4 md:p-6 bg-indigo-50 border border-indigo-100 rounded-lg transition hover:shadow-md">
                      <div className="flex flex-col md:flex-row md:items-center mb-6">
                        <div className="flex items-center mb-4 md:mb-0">
                          <div className="bg-indigo-100 p-2 rounded-full mr-3">
                            <Award className="text-indigo-600 w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Top Recommendation</p>
                            <p className="font-bold text-xl text-indigo-700">{getLatestResult().recommendedField}</p>
                          </div>
                        </div>
                        <div className="md:ml-auto flex items-center">
                          <Clock className="w-4 h-4 text-gray-500 mr-2" />
                          <p className="text-sm text-gray-700">{formatDate(getLatestResult().createdAt)}</p>
                        </div>
                      </div>
                      
                      <div className="h-64 md:h-72">
                        <p className="text-sm text-gray-600 mb-2 font-medium">Field Score Breakdown</p>
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={getChartData(getLatestResult())} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
                            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                            <Tooltip 
                              contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb' }}
                              cursor={{ fill: 'rgba(99, 102, 241, 0.1)' }}
                            />
                            <Bar 
                              dataKey="points" 
                              fill="#6366f1" 
                              radius={[4, 4, 0, 0]} 
                              barSize={40}
                              animationDuration={800}
                            />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>

                    {/* Recommendation Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                      <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                        <Book className="text-blue-600 w-5 h-5 mb-2" />
                        <h4 className="font-medium mb-1">Learning Resources</h4>
                        <p className="text-sm text-gray-600 mb-3">Custom resources for {getLatestResult().recommendedField}</p>
                        <button className="text-blue-600 text-sm font-medium flex items-center hover:underline">
                          Explore resources <ChevronRight className="w-4 h-4 ml-1" />
                        </button>
                      </div>
                      
                      <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                        <TrendingUp className="text-green-600 w-5 h-5 mb-2" />
                        <h4 className="font-medium mb-1">Career Paths</h4>
                        <p className="text-sm text-gray-600 mb-3">Possible career journeys based on your profile</p>
                        <button className="text-green-600 text-sm font-medium flex items-center hover:underline" onClick={() => navigate("/careers")}>
                          View paths <ChevronRight className="w-4 h-4 ml-1" />
                        </button>
                      </div>
                      
                      <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
                        <User className="text-purple-600 w-5 h-5 mb-2" />
                        <h4 className="font-medium mb-1">Skill Analysis</h4>
                        <p className="text-sm text-gray-600 mb-3">Detailed breakdown of your strengths</p>
                        <button className="text-purple-600 text-sm font-medium flex items-center hover:underline">
                          See analysis <ChevronRight className="w-4 h-4 ml-1" />
                        </button>
                      </div>
                    </div>

                    <div className="text-center">
                      <button 
                        className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 shadow-md hover:shadow-lg transition flex items-center mx-auto"
                      >
                        <span>View Detailed Recommendations</span> <ArrowRight className="ml-2 w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl text-center shadow-sm hover:shadow-md transition">
                    <div className="bg-yellow-100 p-3 rounded-full inline-flex mb-4">
                      <AlertCircle className="text-yellow-600 w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-medium mb-2">No quiz results found</h4>
                    <p className="text-gray-600 mb-6 max-w-md mx-auto">Take your first quiz to get personalized field recommendations and start your career planning journey</p>
                    <button 
                      onClick={() => navigate("/quiz")} 
                      className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-yellow-600 shadow-md hover:shadow-lg transition"
                    >
                      Start First Quiz
                    </button>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'history' && (
              <div>
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <Clipboard className="w-5 h-5 mr-2 text-indigo-600" />
                  Your Quiz History
                </h3>
                
                {quizResults.length === 0 ? (
                  <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl text-center shadow-sm">
                    <AlertCircle className="text-yellow-600 w-6 h-6 mx-auto mb-3" />
                    <p className="text-gray-600">No quiz results found. Take your first quiz to see history.</p>
                    <button 
                      onClick={() => navigate("/quiz")} 
                      className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition"
                    >
                      Take Quiz
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {quizResults.map((result, index) => (
                      <div
                        key={result._id}
                        className="bg-white border border-gray-200 rounded-xl p-4 md:p-5 hover:shadow-md transition"
                      >
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                          <div className="mb-3 md:mb-0">
                            <div className="flex items-center">
                              <span className="inline-flex items-center justify-center w-6 h-6 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full mr-2">
                                #{quizResults.length - index}
                              </span>
                              <span className="text-sm text-gray-500">{formatDate(result.createdAt)}</span>
                            </div>
                            <h4 className="text-lg font-semibold mt-1">
                              Recommended: <span className="text-indigo-600">{result.recommendedField}</span>
                            </h4>
                          </div>
                          <button className="text-sm text-indigo-600 font-medium flex items-center self-start md:self-center hover:underline">
                            View details <ChevronRight className="w-4 h-4 ml-1" />
                          </button>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                          {Object.entries(result.fieldPoints || {}).map(([field, points]) => (
                            <div
                              key={field}
                              className={`p-3 rounded-lg text-center ${
                                field === result.recommendedField
                                  ? "bg-indigo-100 text-indigo-800 border border-indigo-200"
                                  : points > 0
                                  ? "bg-green-50 text-green-800 border border-green-100"
                                  : "bg-gray-50 text-gray-600 border border-gray-100"
                              }`}
                            >
                              <p className="font-medium text-xs sm:text-sm truncate">{field}</p>
                              <p className="text-lg font-bold">{points}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'profile' && (
              <div>
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <User className="w-5 h-5 mr-2 text-indigo-600" />
                  Your Profile
                </h3>
                
                <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 shadow-sm hover:shadow-md transition">
                  <div className="flex flex-col md:flex-row md:items-center mb-6 pb-6 border-b border-gray-100">
                    <div className="flex items-center mb-4 md:mb-0">
                      <div className="bg-indigo-100 p-5 rounded-full mr-4 flex items-center justify-center">
                        <span className="text-2xl font-bold text-indigo-600">{userInfo?.name?.charAt(0).toUpperCase()}</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-medium">{userInfo?.name}</h4>
                        <p className="text-gray-500">{userInfo?.email}</p>
                      </div>
                    </div>
                    <div className="md:ml-auto flex items-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Active Account
                      </span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h5 className="font-medium mb-4 text-gray-700">Account Information</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <p className="text-xs text-gray-500">Full Name</p>
                        <p className="font-medium">{userInfo?.name}</p>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <p className="text-xs text-gray-500">Email Address</p>
                        <p className="font-medium break-words">{userInfo?.email}</p>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <p className="text-xs text-gray-500">Account Status</p>
                        <p className="font-medium text-green-600">Active</p>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <p className="text-xs text-gray-500">Member Since</p>
                        <p className="font-medium">{formatDate(userInfo?.createdAt) || "N/A"}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="flex-1 bg-indigo-600 text-white px-4 py-2.5 rounded-lg font-medium hover:bg-indigo-700 shadow-sm hover:shadow transition flex items-center justify-center">
                      <Settings className="w-4 h-4 mr-2" /> Edit Profile
                    </button>
                    <button className="flex-1 bg-gray-100 text-gray-700 px-4 py-2.5 rounded-lg font-medium hover:bg-gray-200 shadow-sm hover:shadow transition flex items-center justify-center">
                      <span>Change Password</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;