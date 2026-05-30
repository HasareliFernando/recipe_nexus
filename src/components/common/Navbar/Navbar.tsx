import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { FiUser } from "react-icons/fi";
import type { RootState } from "../../../store/store";
import { logout } from "../../../store/authSlice";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn, username } = useSelector(
    (state: RootState) => state.auth,
  );

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(e.target as Node)
      ) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    if (path === "/recipes")
      return pathname === "/recipes" || pathname.startsWith("/recipe/");
    return pathname.startsWith(path);
  };

  const linkClass = (path: string) =>
    `no-underline text-sm font-medium transition-colors ${isActive(path) ? "text-orange-500" : "text-gray-600 hover:text-orange-500"}`;

  const mobileLinkClass = (path: string) =>
    `no-underline text-base font-medium block py-1 ${isActive(path) ? "text-orange-500" : "text-gray-600"}`;

  return (
    <nav className="py-4 bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link
          to="/"
          className="font-serif italic text-2xl font-bold text-gray-800 no-underline"
        >
          Recipe Nexus
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex list-none gap-8 m-0 p-0">
          <li>
            <Link to="/" className={linkClass("/")}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/recipes" className={linkClass("/recipes")}>
              Recipes
            </Link>
          </li>
          <li>
            <Link to="/categories" className={linkClass("/categories")}>
              Categories
            </Link>
          </li>
          <li>
            <Link to="/about" className={linkClass("/about")}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className={linkClass("/contact")}>
              Contact
            </Link>
          </li>
        </ul>

        <div className="hidden md:flex gap-3 items-center">
          {isLoggedIn ? (
            <div className="relative" ref={userMenuRef}>
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center text-white cursor-pointer border-none hover:bg-orange-600 transition-colors"
              >
                <FiUser size={18} />
              </button>
              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                  <p className="px-4 py-2 text-sm font-medium text-gray-700 border-b border-gray-100">
                    Hi, {username}
                  </p>
                  <Link
                    to="/favourites"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 no-underline"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    My Favourites
                  </Link>
                  <button
                    onClick={() => {
                      dispatch(logout());
                      navigate("/");
                      setUserMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50 bg-transparent border-none cursor-pointer"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              {pathname !== "/register" && (
                <Link
                  to="/register"
                  className="px-5 py-2 border-2 border-orange-500 bg-transparent text-orange-500 rounded-md font-semibold text-sm hover:bg-orange-50 transition-colors no-underline"
                >
                  Register
                </Link>
              )}
              {pathname !== "/signin" && (
                <Link
                  to="/signin"
                  className="px-5 py-2 border-2 border-orange-500 bg-orange-500 text-white rounded-md font-semibold text-sm hover:bg-orange-600 hover:border-orange-600 transition-colors no-underline"
                >
                  Sign In
                </Link>
              )}
            </>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-2xl text-gray-800 bg-transparent border-none cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 mt-4 px-6 py-4 space-y-4 bg-white">
          <ul className="list-none p-0 m-0 space-y-3">
            <li>
              <Link
                to="/"
                className={mobileLinkClass("/")}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/recipes"
                className={mobileLinkClass("/recipes")}
                onClick={() => setIsOpen(false)}
              >
                Recipes
              </Link>
            </li>
            <li>
              <Link
                to="/categories"
                className={mobileLinkClass("/categories")}
                onClick={() => setIsOpen(false)}
              >
                Categories
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={mobileLinkClass("/about")}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={mobileLinkClass("/contact")}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="flex flex-col gap-3 pt-2">
            {isLoggedIn ? (
              <>
                <span className="text-sm font-medium text-gray-700">
                  Hi, {username}
                </span>
                <Link
                  to="/favourites"
                  className="px-5 py-2.5 border-2 border-orange-500 bg-transparent text-orange-500 rounded-md font-semibold text-sm text-center no-underline"
                  onClick={() => setIsOpen(false)}
                >
                  My Favourites
                </Link>
                <button
                  onClick={() => {
                    dispatch(logout());
                    navigate("/");
                    setIsOpen(false);
                  }}
                  className="px-5 py-2.5 border-2 border-orange-500 bg-orange-500 text-white rounded-md font-semibold text-sm text-center cursor-pointer"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                {pathname !== "/register" && (
                  <Link
                    to="/register"
                    className="flex-1 px-5 py-2.5 border-2 border-orange-500 bg-transparent text-orange-500 rounded-md font-semibold text-sm text-center no-underline"
                    onClick={() => setIsOpen(false)}
                  >
                    Register
                  </Link>
                )}
                {pathname !== "/signin" && (
                  <Link
                    to="/signin"
                    className="flex-1 px-5 py-2.5 border-2 border-orange-500 bg-orange-500 text-white rounded-md font-semibold text-sm text-center no-underline"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign In
                  </Link>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
