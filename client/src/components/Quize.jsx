import React, { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import {
  Star,
  StarHalf,
  ChevronRight,
  BarChart3,
  RefreshCw,
} from "lucide-react";
import api from "../services/api";

const Quiz = () => {
  // Original state variables
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [initialLoading, setInitialLoading] = useState(true);
  const [error, setError] = useState(null);
  const [fieldPoints, setFieldPoints] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [recommendedField, setRecommendedField] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const [difficulty, setDifficulty] = useState("easy");
  const [answeredCount, setAnsweredCount] = useState(0);
  const [interimResultShown, setInterimResultShown] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  // New state variables for the countdown
  const [quizReady, setQuizReady] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [showCountdown, setShowCountdown] = useState(false);

  const QUESTIONS_BEFORE_INTERIM_RESULTS = 10;
  const COLORS = [
    "#4F46E5",
    "#06B6D4",
    "#10B981",
    "#F59E0B",
    "#EF4444",
    "#8B5CF6",
  ];

  const fetchQuiz = async (page = 1, resetQuestions = false) => {
    try {
      setLoading(true);
      const response = await api.get("/questions/allQuestions", {
        params: {
          difficulty,
          page,
          limit: 10, // Fetch 10 questions at a time
        },
      });

      if (resetQuestions) {
        setQuestions(response.data.data);
        setCurrentQuestionIndex(0);
      } else {
        setQuestions((prev) => [...prev, ...response.data.data]);
      }

      setTotalQuestions(response.data.total);
      setHasMore(response.data.hasMore);
      setCurrentPage(response.data.currentPage);

      // Initialize fieldPoints with all available fields if first load
      if (resetQuestions || Object.keys(fieldPoints).length === 0) {
        const fields = {};
        response.data.data.forEach((question) => {
          question.options.forEach((option) => {
            if (option.field && !fields[option.field]) {
              fields[option.field] = 0;
            }
          });
        });
        setFieldPoints(fields);
      }

      setLoading(false);
      setInitialLoading(false);

      // Once questions are loaded, we can show the countdown
      if (!quizReady) {
        setShowCountdown(true);
      }
    } catch (error) {
      console.log("Something went wrong", error);
      setError("Failed to load quiz questions");
      setLoading(false);
      setInitialLoading(false);
    }
  };

  const [savingResults, setSavingResults] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [saveError, setSaveError] = useState(null);

  const saveResults = async () => {
    try {
      // Check if user is logged in
      const authString = localStorage.getItem('auth');
      let token = null;
      
      if (authString) {
        try {
          const auth = JSON.parse(authString);
          token = auth?.token;
        } catch (error) {
          console.error('Error parsing auth from localStorage:', error);
        }
      }
      
      if (!token) {
        setSaveError('Please log in to save your results');
        return;
      }
      
      setSavingResults(true);
      setSaveError(null);
      
      // Make sure we have results to save
      if (!recommendedField || Object.keys(fieldPoints).length === 0) {
        setSaveError('No quiz results to save');
        return;
      }
      
      // Extract question IDs from answered questions
      const questionIds = questions.slice(0, answeredCount).map(question => question._id);
      
      // Call the API to save results - token will be added by the interceptor
      const response = await api.post('/users/saveResult', {
        questionIds,
        fieldPoints,
        recommendedField
      });
      
      setSaveSuccess(true);
    } catch (error) {
      console.error('Error saving quiz results:', error);
      
      // Handle different error types
      if (error.response) {
        // Server responded with error status
        setSaveError(error.response.data.message || `Error ${error.response.status}: Failed to save results`);
      } else if (error.request) {
        // Request was made but no response received
        setSaveError('Network error. Please check your connection.');
      } else {
        // Something else went wrong
        setSaveError('Failed to save results. Please try again.');
      }
    } finally {
      setSavingResults(false);
    }
  };

  useEffect(() => {
    fetchQuiz(1, true);
  }, [difficulty]);

  // Effect for countdown timer
  useEffect(() => {
    let timer;
    if (showCountdown && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
    } else if (showCountdown && countdown === 0) {
      // When countdown reaches 0, start the quiz
      setQuizReady(true);
      setShowCountdown(false);
    }

    return () => clearTimeout(timer);
  }, [countdown, showCountdown]);

  // --------------------------------------------------
  useEffect(() => {
    if (showResults) {
      // Add a slight delay before fading in for a smooth animation
      setTimeout(() => setFadeIn(true), 100);
    } else {
      setFadeIn(false);
    }
  }, [showResults]);

  const handleDifficultyChange = (newDifficulty) => {
    if (newDifficulty !== difficulty) {
      setDifficulty(newDifficulty);
      setAnsweredCount(0);
      setShowResults(false);
      setInterimResultShown(false);

      // Reset all field points
      const resetPoints = {};
      Object.keys(fieldPoints).forEach((field) => {
        resetPoints[field] = 0;
      });
      setFieldPoints(resetPoints);
    }
  };

  const loadMoreQuestions = async () => {
    if (hasMore) {
      await fetchQuiz(currentPage + 1);
    }
  };

  const handleOptionSelect = (option) => {
    // Update points for the selected field
    setFieldPoints((prev) => ({
      ...prev,
      [option.field]: (prev[option.field] || 0) + option.points,
    }));

    const newAnsweredCount = answeredCount + 1;
    setAnsweredCount(newAnsweredCount);

    // Check if we should show interim results
    if (
      newAnsweredCount === QUESTIONS_BEFORE_INTERIM_RESULTS &&
      !interimResultShown
    ) {
      calculateRecommendedField();
      setShowResults(true);
      setInterimResultShown(true);
      return;
    }

    // Continue to next question
    proceedToNextQuestion();
  };

  const proceedToNextQuestion = () => {
    // Move to next question
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // If no more questions are available in current set
      if (hasMore) {
        loadMoreQuestions().then(() => {
          setCurrentQuestionIndex((prev) => prev + 1);
        });
      } else {
        calculateRecommendedField();
        setShowResults(true);
      }
    }
  };

  const calculateRecommendedField = () => {
    // Find field with highest points
    let maxPoints = -1;
    let maxField = "";

    Object.entries(fieldPoints).forEach(([field, points]) => {
      if (points > maxPoints) {
        maxPoints = points;
        maxField = field;
      }
    });

    setRecommendedField(maxField);
  };

  const continueQuiz = () => {
    setShowResults(false);

    // If current questions are exhausted, load more
    if (currentQuestionIndex >= questions.length - 1 && hasMore) {
      loadMoreQuestions().then(() => {
        setCurrentQuestionIndex((prev) => prev + 1);
      });
    } else {
      proceedToNextQuestion();
    }
  };

  const restartQuiz = () => {
    // Reset all states to initial values
    setCurrentQuestionIndex(0);
    setShowResults(false);
    setRecommendedField("");
    setAnsweredCount(0);
    setInterimResultShown(false);
    setFadeIn(false);
    setQuizReady(false);
    setCountdown(3);
    setShowCountdown(true);

    // Reset all field points to zero
    const resetPoints = {};
    Object.keys(fieldPoints).forEach((field) => {
      resetPoints[field] = 0;
    });
    setFieldPoints(resetPoints);

    // Reload first page of questions
    fetchQuiz(1, true);
  };

  // Generate chart data
  const getChartData = () => {
    return Object.entries(fieldPoints)
      .filter(([_, points]) => points > 0) // Only include fields with points
      .map(([field, points]) => ({
        name: field,
        value: points,
      }))
      .sort((a, b) => b.value - a.value); // Sort by points (highest first)
  };

  // Calculate field star ratings (normalized on a 1-5 scale based on relative points)
  const getFieldRatings = () => {
    const maxPoints = Math.max(...Object.values(fieldPoints));

    return Object.entries(fieldPoints)
      .filter(([_, points]) => points > 0) // Only include fields with points
      .map(([field, points]) => {
        // Calculate a rating from 1-5 stars based on proportion of max points
        const rating = maxPoints > 0 ? 1 + (points / maxPoints) * 4 : 0;
        return { field, rating, points };
      })
      .sort((a, b) => b.points - a.points); // Sort by points (highest first)
  };

  const renderStarRating = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={`full-${i}`}
          className="inline-block text-yellow-400"
          size={18}
          fill="currentColor"
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <StarHalf
          key="half"
          className="inline-block text-yellow-400"
          size={18}
          fill="currentColor"
        />
      );
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star
          key={`empty-${i}`}
          className="inline-block text-gray-300"
          size={18}
        />
      );
    }

    return stars;
  };

  const getProgressPercentage = () => {
    return questions.length > 0
      ? ((currentQuestionIndex + 1) / questions.length) * 100
      : 0;
  };

  const getAccuracyLevel = () => {
    if (answeredCount >= 20)
      return { label: "Highly Accurate", color: "text-green-600" };
    if (answeredCount >= 15)
      return { label: "Very Accurate", color: "text-blue-600" };
    if (answeredCount >= 10)
      return { label: "Moderately Accurate", color: "text-yellow-600" };
    return { label: "Initial Assessment", color: "text-gray-600" };
  };

  if (initialLoading) {
    return (
      <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg text-center">
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
          <div className="h-6 bg-gray-200 rounded w-full"></div>
          <div className="space-y-3">
            <div className="h-12 bg-gray-200 rounded"></div>
            <div className="h-12 bg-gray-200 rounded"></div>
            <div className="h-12 bg-gray-200 rounded"></div>
            <div className="h-12 bg-gray-200 rounded"></div>
          </div>
        </div>
        <p className="mt-4 text-gray-600">Loading your personalized quiz...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
        <div className="text-center py-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4">
            <svg
              className="w-8 h-8 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <p className="text-xl font-bold mb-2 text-red-600">
            Oops! Something went wrong
          </p>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={() => fetchQuiz(1, true)}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition flex items-center justify-center mx-auto"
          >
            <RefreshCw size={16} className="mr-2" />
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg text-center">
        <p className="text-lg text-gray-600">No quiz questions available</p>
      </div>
    );
  }

  // Show countdown animation before questions
  if (showCountdown) {
    return (
      <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg text-center">
        <div className="py-16">
          <div className="flex items-center justify-center">
            <div className="relative w-40 h-40">
              {/* Circular progress */}
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#EEF2FF"
                  strokeWidth="8"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#4F46E5"
                  strokeWidth="8"
                  strokeDasharray="283"
                  strokeDashoffset={283 - 283 * ((3 - countdown) / 3)}
                  className="transition-all duration-1000 ease-linear"
                />
              </svg>
              {/* Countdown number */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl font-bold text-blue-600">
                  {countdown}
                </span>
              </div>
            </div>
          </div>
          <h2 className="text-2xl font-bold mt-8 text-gray-800">Get Ready!</h2>
          <p className="mt-2 text-gray-600">
            Your career path quiz is about to begin...
          </p>
        </div>
      </div>
    );
  }

  if (showResults) {
    const chartData = getChartData();
    const fieldRatings = getFieldRatings();
    const accuracyLevel = getAccuracyLevel();

    return (
      <div
        className={`max-w-4xl mx-auto mt-10 transition-opacity duration-500 ${
          fadeIn ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6">
            <h2 className="text-2xl font-bold text-center">
              Your Career Path Results
            </h2>
            <p className="text-center text-blue-100 mt-1">
              Based on {answeredCount} questions
            </p>
          </div>

          {/* Recommended Field Card */}
          <div className="p-6">
            <div className="bg-blue-50 p-5 rounded-xl border border-blue-100 mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                  Recommended Field
                </span>
                <span
                  className={`text-sm font-medium ${accuracyLevel.color} bg-opacity-20 px-3 py-1 rounded-full`}
                >
                  {accuracyLevel.label}
                </span>
              </div>
              <h3 className="text-3xl font-bold text-gray-800">
                {recommendedField}
              </h3>
            </div>

            {/* Chart Section */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <BarChart3 size={20} className="mr-2 text-blue-600" />
                Field Compatibility
              </h3>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={chartData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) =>
                          `${name} ${(percent * 100).toFixed(0)}%`
                        }
                      >
                        {chartData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `${value} points`} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Field Ratings Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {fieldRatings.map(({ field, rating, points }) => (
                <div
                  key={field}
                  className="bg-gray-50 p-4 rounded-lg border border-gray-100"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-800">{field}</span>
                    <span className="text-sm text-gray-600 bg-gray-200 px-2 py-1 rounded">
                      {points} points
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex">{renderStarRating(rating)}</div>
                    <span className="ml-2 text-sm text-gray-500">
                      ({rating.toFixed(1)})
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {hasMore && (
                <button
                  onClick={continueQuiz}
                  className="w-full py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-lg hover:from-indigo-700 hover:to-blue-700 transition shadow-md flex items-center justify-center"
                >
                  <span className="mr-2">Answer More Questions</span>
                  <ChevronRight size={18} />
                </button>
              )}

              <button
                onClick={restartQuiz}
                className={`w-full py-3 ${
                  hasMore
                    ? "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    : "bg-gradient-to-r from-indigo-600 to-blue-600 text-white hover:from-indigo-700 hover:to-blue-700"
                } rounded-lg transition shadow-md flex items-center justify-center`}
              >
                <RefreshCw size={18} className="mr-2" />
                <span>Start New Quiz</span>
              </button>
            </div>

            <div className="mt-4">
              <button
                onClick={saveResults}
                disabled={savingResults || saveSuccess}
                className={`w-full py-3 ${
                  savingResults
                    ? "bg-gray-300"
                    : "bg-green-600 hover:bg-green-700"
                } text-white rounded-lg transition shadow-md flex items-center justify-center`}
              >
                {savingResults
                  ? "Saving..."
                  : saveSuccess
                  ? "Results Saved!"
                  : "Save My Results"}
              </button>

              {saveError && (
                <p className="text-red-500 text-sm mt-2 text-center">
                  {saveError}
                </p>
              )}

              {saveSuccess && (
                <div className="mt-2 text-center text-sm text-green-600 bg-green-50 p-3 rounded-lg">
                  Your results have been successfully saved!
                </div>
              )}
            </div>

            {/* Accuracy Note */}
            {hasMore && (
              <div className="mt-6 text-center text-sm text-gray-500 bg-gray-50 p-3 rounded-lg">
                Answer more questions to improve the accuracy of your results.
                <br />
                More questions = More accurate prediction
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  const saveResultsButton = (
    <button
      onClick={saveResults}
      disabled={savingResults || saveSuccess}
      className={`w-full py-3 ${
        savingResults ? "bg-gray-300" : "bg-green-600 hover:bg-green-700"
      } text-white rounded-lg transition shadow-md flex items-center justify-center mt-4`}
    >
      {savingResults
        ? "Saving..."
        : saveSuccess
        ? "Results Saved!"
        : "Save My Results"}
    </button>
  );

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-5">
          <h2 className="text-xl font-bold text-center">Career Path Quiz</h2>
          <p className="text-center text-blue-100 text-sm mt-1">
            Discover your ideal tech career path
          </p>
        </div>

        {/* Difficulty selector */}
        <div className="flex justify-center -mt-4">
          <div
            className="inline-flex rounded-lg shadow-md bg-white"
            role="group"
          >
            <button
              type="button"
              onClick={() => handleDifficultyChange("easy")}
              className={`px-6 py-2 text-sm font-medium rounded-l-lg transition ${
                difficulty === "easy"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              Easy
            </button>
            <button
              type="button"
              onClick={() => handleDifficultyChange("medium")}
              className={`px-6 py-2 text-sm font-medium rounded-r-lg transition ${
                difficulty === "medium"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              Medium
            </button>
          </div>
        </div>

        <div className="p-6">
          {/* Progress indicators */}
          <div className="mb-6">
            <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
              <div>
                <span className="font-medium">{currentQuestionIndex + 1}</span>
                <span className="mx-1">/</span>
                <span>{questions.length}</span>
                <span className="ml-1 text-gray-400">Questions</span>
              </div>
              <div>
                <span className="font-medium">{answeredCount}</span> answered
                {hasMore && (
                  <span className="text-blue-600 ml-1">
                    • {totalQuestions - questions.length} more available
                  </span>
                )}
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${getProgressPercentage()}%` }}
              ></div>
            </div>

            {answeredCount < QUESTIONS_BEFORE_INTERIM_RESULTS && (
              <div className="mt-2 text-xs text-gray-500 text-right">
                Results will show after{" "}
                {QUESTIONS_BEFORE_INTERIM_RESULTS - answeredCount} more
                questions
              </div>
            )}
          </div>

          {/* Question */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-5 rounded-xl mb-6 border border-blue-100">
            <div className="flex justify-between text-sm mb-2">
              <span className="inline-flex items-center text-blue-700 bg-blue-100 px-2.5 py-0.5 rounded-full">
                <span className="inline-block w-1.5 h-1.5 bg-blue-700 rounded-full mr-1.5"></span>
                {currentQuestion.category}
              </span>
              <span className="capitalize text-gray-600 bg-white px-2.5 py-0.5 rounded-full border border-gray-200">
                {difficulty} level
              </span>
            </div>
            <h2 className="text-xl font-bold text-gray-800">
              {currentQuestion.questionText}
            </h2>
          </div>

          {/* Options */}
          <div className="space-y-3 mb-4">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionSelect(option)}
                disabled={loading}
                className={`
                  w-full text-left p-4 border border-gray-200 rounded-xl
                  transition duration-150 ease-in-out
                  ${
                    loading
                      ? "opacity-70 cursor-not-allowed"
                      : "hover:bg-blue-50 hover:border-blue-300 hover:shadow-md"
                  }
                `}
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center mr-3 text-sm font-medium text-gray-600">
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span>{option.text}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Loading indicator */}
          {loading && currentQuestionIndex >= questions.length - 1 && (
            <div className="flex items-center justify-center py-3 text-gray-600">
              <div className="inline-block animate-spin rounded-full h-5 w-5 border-2 border-gray-300 border-t-blue-600 mr-2"></div>
              Loading more questions...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
