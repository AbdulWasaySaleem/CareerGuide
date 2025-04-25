import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import api from '../../services/api'

const Fields = () => {
  const [careers, setCareers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const navigate=useNavigate()

  const fetchCareers = async () => {
    try {
      const response = await api.get('/career/getAllCareer')
      if (response.data.success) {
        setCareers(response.data.data.slice(0, 6))
      } else {
        setError('Failed to load careers')
      }      
    } catch (error) {
      console.error(error)
      setError('Error fetching careers')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCareers()
  }, [])

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="inline-block text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Explore Career Paths
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Discover various specializations in the tech industry and find your perfect fit
          </p>
        </div>

        {loading ? (
          <div className="text-center text-gray-500">Loading careers...</div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {careers.map((career) => (
              <div key={career._id} className="group">
                <div className="relative h-full bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden transform group-hover:-translate-y-2">
                  <div className="h-2 w-full bg-gradient-to-r from-blue-400 to-blue-600"></div>
                  <div className="p-8">
                    <div className="text-4xl mb-4">{career.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{career.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{career.shortDescription}</p>
                    <button
                      onClick={()=>{navigate(`/careers/${career._id}`)}}
                      type="button"
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
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center">
          <Link to="/careers">
            <button className="mt-10 px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full hover:shadow-lg transform transition hover:-translate-y-1 hover:scale-105">
              View All Career Paths
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Fields
