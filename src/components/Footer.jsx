

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        {/* Logo and About */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          <div className="mb-6 md:mb-0">
            <h1 className="text-xl font-bold">MyBrand</h1>
            <p className="mt-2 text-gray-400">
              Creating seamless web experiences with passion and expertise.
            </p>
          </div>
          
          {/* Navigation Links */}
          <div className="flex space-x-4">
            <a href="#home" className="hover:text-blue-500">Home</a>
            <a href="#about" className="hover:text-blue-500">About</a>
            <a href="#services" className="hover:text-blue-500">Services</a>
            <a href="#contact" className="hover:text-blue-500">Contact</a>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-gray-700 mt-6"></div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#facebook" className="hover:text-blue-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.676 0h-21.352c-.73 0-1.324.594-1.324 1.324v21.352c0 .73.594 1.324 1.324 1.324h11.478v-9.294h-3.128v-3.623h3.128v-2.671c0-3.096 1.894-4.785 4.66-4.785 1.324 0 2.463.099 2.795.143v3.24h-1.916c-1.505 0-1.794.716-1.794 1.763v2.31h3.588l-.468 3.623h-3.12v9.294h6.116c.73 0 1.324-.594 1.324-1.324v-21.352c0-.73-.594-1.324-1.324-1.324z" />
            </svg>
          </a>
          <a href="#twitter" className="hover:text-blue-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.556c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.723-.951.565-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.923 2.206-4.923 4.923 0 .386.044.763.127 1.124-4.092-.205-7.719-2.165-10.148-5.144-.425.724-.667 1.566-.667 2.465 0 1.701.867 3.199 2.181 4.078-.804-.026-1.56-.247-2.22-.616v.062c0 2.374 1.689 4.352 3.931 4.8-.41.111-.843.171-1.288.171-.316 0-.623-.031-.926-.088.624 1.949 2.437 3.37 4.584 3.407-1.68 1.318-3.809 2.106-6.115 2.106-.397 0-.79-.023-1.175-.068 2.181 1.397 4.768 2.211 7.548 2.211 9.049 0 13.999-7.496 13.999-13.999 0-.213-.004-.426-.014-.637.961-.694 1.796-1.562 2.457-2.549z" />
            </svg>
          </a>
          <a href="#github" className="hover:text-blue-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .5a12 12 0 0 0-3.797 23.418c.6.111.82-.262.82-.582v-2.02c-3.339.729-4.042-1.584-4.042-1.584a3.182 3.182 0 0 0-1.333-1.757c-1.091-.748.083-.733.083-.733a2.516 2.516 0 0 1 1.835 1.246c1.071 1.833 2.807 1.304 3.493.996a2.535 2.535 0 0 1 .758-1.597c-2.667-.301-5.468-1.333-5.468-5.931a4.633 4.633 0 0 1 1.245-3.215 4.31 4.31 0 0 1 .115-3.174s1.008-.32 3.3 1.221a11.321 11.321 0 0 1 6.006 0c2.291-1.541 3.298-1.221 3.298-1.221.818 1.586.326 2.756.114 3.174a4.624 4.624 0 0 1 1.245 3.215c0 4.61-2.805 5.626-5.476 5.921a2.895 2.895 0 0 1 .821 2.263v3.369c0 .319.22.696.827.578a12 12 0 0 0-3.801-23.418z" />
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 mt-6">
          &copy; {new Date().getFullYear()} MyBrand. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
