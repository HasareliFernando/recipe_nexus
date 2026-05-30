import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-[1.5fr_1fr_1fr_1.5fr] gap-10 max-md:grid-cols-2 max-sm:grid-cols-1">
          <div>
            <h3 className="font-serif italic text-xl font-bold text-gray-800 mb-3">
              Recipe Nexus
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-5">
              Your go-to place for discovering amazing recipes from around the
              world.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-800 no-underline text-sm hover:bg-gray-200 transition-colors"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-800 no-underline text-sm hover:bg-gray-200 transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-800 no-underline text-sm hover:bg-gray-200 transition-colors"
              >
                <FaYoutube />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-800 no-underline text-sm hover:bg-gray-200 transition-colors"
              >
                <FaPinterestP />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-base font-bold text-gray-900 mb-4">
              Quick Links
            </h4>
            <ul className="list-none p-0 m-0 space-y-2.5">
              <li>
                <Link
                  to="/"
                  className="no-underline text-sm text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/recipes"
                  className="no-underline text-sm text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Recipes
                </Link>
              </li>
              <li>
                <Link
                  to="/categories"
                  className="no-underline text-sm text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="no-underline text-sm text-gray-600 hover:text-orange-500 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="no-underline text-sm text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-bold text-gray-900 mb-4">
              Categories
            </h4>
            <ul className="list-none p-0 m-0 space-y-2.5">
              <li>
                <Link
                  to="/categories/breakfast"
                  className="no-underline text-sm text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Breakfast
                </Link>
              </li>
              <li>
                <Link
                  to="/categories/lunch"
                  className="no-underline text-sm text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Lunch
                </Link>
              </li>
              <li>
                <Link
                  to="/categories/dinner"
                  className="no-underline text-sm text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Dinner
                </Link>
              </li>
              <li>
                <Link
                  to="/categories/desserts"
                  className="no-underline text-sm text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Desserts
                </Link>
              </li>
              <li>
                <Link
                  to="/categories/drinks"
                  className="no-underline text-sm text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Drinks
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-end gap-5 max-md:items-start">
            <div className="flex gap-5">
              <Link
                to="/"
                className="no-underline text-sm text-gray-600 font-medium hover:text-orange-500"
              >
                Home
              </Link>
              <Link
                to="/contact"
                className="no-underline text-sm text-gray-600 font-medium hover:text-orange-500"
              >
                Contact
              </Link>
              <Link
                to="/about"
                className="no-underline text-sm text-gray-600 font-medium hover:text-orange-500"
              >
                About
              </Link>
            </div>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-800 no-underline text-sm hover:bg-gray-200 transition-colors"
              >
                <FaXTwitter />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-800 no-underline text-sm hover:bg-gray-200 transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-800 no-underline text-sm hover:bg-gray-200 transition-colors"
              >
                <FaYoutube />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-800 no-underline text-sm hover:bg-gray-200 transition-colors"
              >
                <FaPinterestP />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
