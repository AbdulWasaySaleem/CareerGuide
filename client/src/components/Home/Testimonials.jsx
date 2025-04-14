import React from 'react'

const Testimonials = () => {
  return (
    <>
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full opacity-20 blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-200 rounded-full opacity-20 blur-3xl transform translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="inline-block text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Success Stories
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              See how CodePath has helped professionals like you find their
              perfect career
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "The career quiz was spot-on! I'm now a front-end developer and loving every minute of it.",
                name: "Alex Johnson",
                role: "Front-End Developer",
              },
              {
                quote:
                  "CodePath helped me transition from marketing to data science with a clear learning path.",
                name: "Sarah Chen",
                role: "Data Scientist",
              },
              {
                quote:
                  "I was unsure which direction to take in tech. Now I'm a successful mobile developer!",
                name: "Miguel Rodriguez",
                role: "iOS Developer",
              },
            ].map((testimonial, index) => (
              <div key={index} className="group">
                <div className="h-full bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 transform group-hover:-translate-y-2">
                  <div className="text-5xl text-indigo-200 mb-4">❝</div>
                  <p className="text-gray-700 mb-6">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full w-12 h-12 flex items-center justify-center mr-4 text-white font-medium">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-blue-600 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonials