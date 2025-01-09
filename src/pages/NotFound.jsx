
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold text-blue-600">404</h1>
      <p className="text-xl mt-4">Oops! The page youre looking for doesnt exist.</p>
      <p className="text-gray-500 mt-2">It seems youve landed on an invalid URL.</p>
      <Link
        to="/"
        className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
