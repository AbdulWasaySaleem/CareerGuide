import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'

const CareerCard = ({ career }) => (
  <div className="group">
    <div className="relative h-full bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden transform group-hover:-translate-y-2">
      <div className={`h-2 w-full bg-gradient-to-r ${career.color}`}></div>
      <div className="p-6">
        <div className="text-3xl mb-3">{career.icon}</div>
        <h3 className="text-lg font-semibold mb-2">{career.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{career.description}</p>
        <Link 
          to={`/careers/${career.title.toLowerCase().replace(/\s+/g, '-')}`}
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
  const careers = useMemo(() => [
    {
      title: 'Web Developer',
      icon: '🌐',
      description: 'Build responsive and interactive websites and web applications',
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Mobile Development',
      icon: '📱',
      description: 'Create applications for iOS, Android, and other mobile platforms',
      color: 'from-indigo-400 to-indigo-600'
    },
    {
      title: 'Data Science',
      icon: '📊',
      description: 'Analyze complex data and extract valuable insights',
      color: 'from-purple-400 to-purple-600'
    },
    {
      title: 'AI/ML',
      icon: '🤖',
      description: 'Develop systems that can learn and make intelligent decisions',
      color: 'from-green-400 to-green-600'
    },
    {
      title: 'Cybersecurity',
      icon: '🔒',
      description: 'Protect systems and networks from digital threats',
      color: 'from-red-400 to-red-600'
    },
    {
      title: 'Game Development',
      icon: '🎮',
      description: 'Create interactive experiences for various gaming platforms',
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      title: 'Design',
      icon: '🎨',
      description: 'Create user interfaces and experiences that are both beautiful and functional',
      color: 'from-pink-400 to-pink-600'
    },
    {
      title: 'DevOps',
      icon: '⚙️',
      description: 'Bridge development and operations to streamline software delivery',
      color: 'from-orange-400 to-orange-600'
    },
    {
      title: 'Cloud Computing',
      icon: '☁️',
      description: 'Build and manage scalable infrastructure and services in the cloud',
      color: 'from-teal-400 to-teal-600'
    },
    {
      title: 'Blockchain',
      icon: '🔗',
      description: 'Develop decentralized applications and smart contracts',
      color: 'from-blue-300 to-blue-500'
    },
    {
      title: 'Software Testing',
      icon: '✅',
      description: 'Ensure quality and reliability of software applications',
      color: 'from-indigo-300 to-indigo-500'
    },
    {
      title: 'Backend Development',
      icon: '🖥️',
      description: 'Build robust server-side applications and APIs',
      color: 'from-gray-400 to-gray-600'
    }
  ], []);

  return (
    <section className="py-16 px-4">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {careers.map((career, index) => (
            <CareerCard key={index} career={career} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default React.memo(Career);