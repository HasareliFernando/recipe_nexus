import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-8xl font-bold text-orange-500 mb-4">404</h1>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-8 max-w-md">
        The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-orange-500 text-white no-underline rounded-lg font-semibold hover:bg-orange-600 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
