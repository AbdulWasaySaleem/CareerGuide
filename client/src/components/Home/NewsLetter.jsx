import React from 'react'

const NewsLetter = () => {
  return (
    <>
      <section className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600"></div>

            {/* Decorative shapes */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white opacity-10 rounded-full"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white opacity-10 rounded-full"></div>

            <div className="relative px-8 py-16 text-center text-white z-10">
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="mb-8 text-blue-100 max-w-lg mx-auto">
                Subscribe to receive the latest career tips, industry insights,
                and exclusive resources.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="px-6 py-4 rounded-full w-full sm:flex-1 text-gray-800 focus:ring-4 focus:ring-blue-300 focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-blue-600 px-8 py-4 rounded-full font-medium hover:bg-blue-50 transition shadow-lg transform hover:-translate-y-1"
                >
                  Subscribe
                </button>
              </form>
              <p className="mt-6 text-sm text-blue-100">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default NewsLetter