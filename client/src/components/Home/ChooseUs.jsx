import React from 'react'

const ChooseUs = () => {

  const data =[
    {
      icon: "📈",
      title: "Personalized Roadmaps",
      description:
        "Custom learning paths tailored to your goals and experience level",
    },
    {
      icon: "🧠",
      title: "Skill-based Assessment",
      description:
        "Identify your strengths and areas for growth with our proven quizzes",
    },
    {
      icon: "🎯",
      title: "Expert Guidance",
      description:
        "Receive advice from industry professionals with years of experience",
    },
    {
      icon: "📚",
      title: "Curated Resources",
      description:
        "Access a library of hand-picked learning materials and tutorials",
    },
  ]

  return (
    <>
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="inline-block text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Why CareerMentor Works
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              Our data-driven approach has helped hundred of students and
              professionals find their ideal path in the technology industry.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.map((item, index) => (
              <div key={index} className="group">
                <div className="h-full bg-gradient-to-b from-white to-gray-50 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden p-8 transform group-hover:-translate-y-2">
                  <div className="bg-blue-50 text-5xl p-4 inline-block rounded-2xl mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  </>
  )
}

export default ChooseUs