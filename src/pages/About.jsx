import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <header className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg md:text-xl">
            Discover our story, mission, and what drives us to create remarkable solutions.
          </p>
        </div>
      </header>

      {/* About Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Who We Are</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Image */}
            <div>
              <img
                src="https://via.placeholder.com/600x400"
                alt="About Us"
                className="rounded-lg shadow-md"
              />
            </div>
            {/* Text */}
            <div>
              <p className="text-lg mb-4">
                We are a passionate team of developers and designers dedicated to building
                user-centric web applications. Since our founding, weve been committed to delivering
                innovative solutions that empower businesses to thrive in the digital age.
              </p>
              <p className="text-lg">
                Our journey began with a simple mission: to create websites that combine functionality
                with beauty. Today, weve expanded our expertise to include modern technologies like
                React, Tailwind CSS, and Next.js.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="text-center">
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
                    d="M9 12h6m2 0a6 6 0 11-12 0 6 6 0 0112 0zm3 0h-2a6 6 0 00-6-6V5a3 3 0 016 0v7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p>We embrace creativity and continuously evolve with modern technology.</p>
            </div>
            {/* Value 2 */}
            <div className="text-center">
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
                    d="M12 8c1.38 0 2.5 1.12 2.5 2.5m-5 0a2.5 2.5 0 015 0 1 1 0 01-2 0m0 0V10m1 4v1.5m-4 0h.01m0 0c-.59.5-.96.888-1.96 1.5M11 3v2M6.3 7.3l1.4 1.4M3 12h2m0 0h0v1m8-6v1m7.7 7.3l-1.4 1.4m1.7-7h-2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p>We prioritize honesty and uphold the highest ethical standards in all our work.</p>
            </div>
            {/* Value 3 */}
            <div className="text-center">
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
                    d="M3 10h4m4-2h8l1-5h2M5 20H3m4 0H3m8-2l5-6M6 16h0M5 3l4 5m9-2h0"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p>We deliver high-quality solutions tailored to your needs and expectations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Know More About Us?</h2>
          <p className="mb-6">Contact us today to learn how we can help your business grow.</p>
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

export default About;
