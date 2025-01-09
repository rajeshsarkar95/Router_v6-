

const Home = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <header className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to My Website</h1>
          <p className="text-lg md:text-xl mb-6">
            We build modern, responsive, and user-friendly web solutions.
          </p>
          <a
            href="#services"
            className="bg-blue-800 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300"
          >
            Learn More
          </a>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-blue-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m0-4h.01M12 18c.343 0 .676-.034 1-.1m0 0a3.001 3.001 0 01-5.198 0m5.198 0H13m-4 0a3.001 3.001 0 01-5.198 0m5.198 0H11"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">High Quality</h3>
              <p>We deliver high-quality, bug-free solutions tailored to your needs.</p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-blue-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c1.38 0 2.5 1.12 2.5 2.5m-5 0a2.5 2.5 0 015 0c0 .828-.333 1.583-.874 2.125m-2.563 2.063A2.001 2.001 0 0014 16v2.062a2.005 2.005 0 00-.197.773C13.578 20.386 12.821 21 12 21s-1.578-.614-1.803-1.165a2.005 2.005 0 00-.197-.773V16a2.001 2.001 0 00-1.065-1.675m.062-.313A2.5 2.5 0 0112 8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">User-Friendly</h3>
              <p>Our interfaces are intuitive and easy to use for everyone.</p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-blue-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 3.055a9.003 9.003 0 014.245 0m.71 6.114h.048a2.003 2.003 0 01.58 3.732l.806 4.89a2.001 2.001 0 01-1.285 2.122c-.445.16-.86.228-1.267.252a8.001 8.001 0 01-1.025-15.826z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Reliable Support</h3>
              <p>We’re always here to assist, ensuring your success at every step.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="cta" className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="mb-6">Contact us today and take your first step toward digital excellence.</p>
          <a
            href="#contact"
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
