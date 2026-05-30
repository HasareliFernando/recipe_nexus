import { useState } from "react";
import Navbar from "../../components/common/Navbar/Navbar";
import Footer from "../../components/common/Footer/Footer";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 flex items-center justify-center py-16 px-6 max-sm:py-10 max-sm:px-4">
        <div className="max-w-4xl w-full bg-gray-100 rounded-2xl overflow-hidden flex max-md:flex-col">
          {/* Image */}
          <div className="w-1/2 hidden md:block">
            <img
              src="https://www.themealdb.com/images/media/meals/5sgsob1763196284.jpg"
              alt="Delicious meal"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Sign Up Form */}
          <div className="w-1/2 bg-gray-200 p-10 max-md:w-full max-md:p-6">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-6 italic">
              Register
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Username
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-3 py-2 bg-white border-b-2 border-gray-300 outline-none text-sm focus:border-orange-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 bg-white border-b-2 border-gray-300 outline-none text-sm focus:border-orange-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 bg-white border-b-2 border-gray-300 outline-none text-sm focus:border-orange-500 transition-colors"
                />
              </div>
              <div className="flex justify-center pt-2">
                <button
                  type="submit"
                  className="px-8 py-2.5 bg-orange-500 text-white border-none rounded-md text-sm font-semibold cursor-pointer hover:bg-orange-600 transition-colors"
                >
                  Sign Up
                </button>
              </div>
            </form>

            {/* Social login */}
            <div className="flex justify-center gap-3 mt-8">
              <div className="w-10 h-10 rounded-full bg-gray-500"></div>
              <div className="w-10 h-10 rounded-full bg-gray-500"></div>
              <div className="w-10 h-10 rounded-full bg-gray-500"></div>
              <div className="w-10 h-10 rounded-full bg-gray-500"></div>
              <div className="w-10 h-10 rounded-full bg-gray-500"></div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Register;
