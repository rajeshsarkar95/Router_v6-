

const Contact = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <header className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl">
            We  re here to help. Feel free to reach out anytime!
          </p>
        </div>
      </header>

      {/* Contact Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Write your message"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Contact Info</h2>
              <p className="mb-4">
                Have questions or feedback? You can reach us via any of the options below.
              </p>
              <ul className="space-y-4">
                <li>
                  <strong>Email:</strong> contact@example.com
                </li>
                <li>
                  <strong>Phone:</strong> +123 456 7890
                </li>
                <li>
                  <strong>Address:</strong> 1234 Main St, Anytown, USA
                </li>
              </ul>
              <div className="mt-6">
                <h3 className="font-semibold text-lg mb-2">Follow Us:</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800"
                    aria-label="Facebook"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.255 20.493v-7.568h2.484l.374-3.117h-2.858V8.364c0-.902.25-1.517 1.54-1.517H16.2V3.811c-.66-.086-1.735-.196-2.745-.196-2.73 0-4.606 1.693-4.606 4.799v2.676H7v3.118h1.849v7.568h4.406z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800"
                    aria-label="Twitter"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22.23 5.924c-.802.354-1.66.596-2.557.703.919-.556 1.627-1.43 1.957-2.475-.861.512-1.82.881-2.84 1.083-.812-.866-1.967-1.399-3.243-1.399-2.633 0-4.582 2.476-3.986 4.954-3.24-.162-6.117-1.725-8.043-4.127-1.145 1.964-.568 4.534 1.335 5.84-.751-.024-1.458-.232-2.073-.574-.05 1.915 1.372 3.708 3.379 4.108-.593.162-1.229.198-1.872.075.525 1.604 2.063 2.736 3.891 2.77-1.416 1.11-3.198 1.775-5.139 1.775-.338 0-.675-.019-1.007-.06C2.961 20.292 6.242 21 9.748 21c9.057 0 14-7.513 14-14.032 0-.214-.005-.426-.014-.637.957-.694 1.787-1.56 2.456-2.407z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800"
                    aria-label="LinkedIn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4.983 3a2.5 2.5 0 10-.002 5.002A2.5 2.5 0 004.983 3zm-.497 6H.997v15h3.49v-15zm7.865 0h-3.53v15h3.53v-8c0-2.19.394-3.613 2.548-3.613 2.033 0 2.055 2.14 2.055 3.757v7.855h3.49V12c0-5.766-4.502-6.267-6.646-6.267-1.751 0-3.058.666-3.917 2.018v-1.801z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
