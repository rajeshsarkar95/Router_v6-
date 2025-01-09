import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <NavLink to="/" className="hover:text-gray-300">
            MyLogo
          </NavLink>
        </div>

        {/* Links */}
        <ul className="flex space-x-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-blue-300" : "hover:text-gray-300")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "text-blue-300" : "hover:text-gray-300")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) => (isActive ? "text-blue-300" : "hover:text-gray-300")}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "text-blue-300" : "hover:text-gray-300")}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
