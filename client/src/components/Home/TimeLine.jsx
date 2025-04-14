import React from 'react'

const TimeLine = () => {
  return (
    <>
      <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="inline-block text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              How It Works
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              Our simple four-step process helps you navigate your tech career
              journey
            </p>
          </div>

          <div className="relative">
            {/* Flowing timeline line */}
            <div className="hidden lg:block absolute left-0 right-0 top-28 h-1 bg-gradient-to-r from-blue-200 via-indigo-200 to-blue-200 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
              {[
                {
                  step: 1,
                  icon: "🧪",
                  title: "Take the Quiz",
                  description:
                    "Answer questions about your skills and preferences",
                },
                {
                  step: 2,
                  icon: "🧭",
                  title: "Get Suggestions",
                  description: "Receive career paths that match your profile",
                },
                {
                  step: 3,
                  icon: "📘",
                  title: "Access Resources",
                  description: "Start building skills with guided materials",
                },
                {
                  step: 4,
                  icon: "💼",
                  title: "Explore Jobs",
                  description: "Find positions that align with your new skills",
                },
              ].map((item, index) => (
                <div key={index} className="group">
                  <div className="h-full bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center text-center transform group-hover:-translate-y-2">
                    <div className="relative">
                      <div className="absolute inset-0 bg-blue-100 blur-md rounded-full"></div>
                      <div className="relative bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full w-16 h-16 flex items-center justify-center mb-4 text-white font-bold text-xl">
                        {item.step}
                      </div>
                    </div>
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TimeLine