import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const FeatureSection = () => {
  return (
    <section className="py-20 max-sm:py-12">
      <div className="max-w-7xl mx-auto px-6 max-sm:px-4">
        <div className="bg-orange-50 rounded-2xl p-12 flex items-center gap-16 max-md:flex-col max-md:p-8 max-md:gap-8 relative overflow-hidden">
          <div className="flex-1 z-10">
            <p className="text-orange-500 text-sm font-semibold uppercase tracking-wide mb-2">
              New Collection
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-3 max-sm:text-2xl">
              Delicious recipes,
              <br />
              made for you
            </h2>
            <p className="text-base text-gray-600 mb-6 leading-relaxed">
              Get personalized recipe recommendations
              <br />
              based on your preferences.
            </p>
            <Link
              to="/recipes"
              className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white border-none rounded-lg text-sm font-semibold no-underline hover:bg-orange-600 transition-colors"
            >
              Read More <span>→</span>
            </Link>
          </div>
          <div className="flex-1 flex justify-center relative z-10">
            <div className="relative">
              <img
                src="https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg"
                alt="Tomato Basil Pasta"
                className="w-[300px] h-[220px] object-cover rounded-xl max-sm:w-[240px] max-sm:h-[180px]"
              />
              {/* Chef's Pick Badge */}
              <div className="absolute bottom-4 right-4 bg-white rounded-lg shadow-md px-3 py-2">
                <p className="text-xs font-semibold text-orange-500 mb-0.5">
                  🍽 Chef's Pick
                </p>
                <p className="text-sm font-bold text-gray-900 mb-0.5">
                  Tomato Basil Pasta
                </p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-xs text-amber-400" />
                  ))}
                  <span className="text-xs text-gray-600 ml-1">4.8</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
