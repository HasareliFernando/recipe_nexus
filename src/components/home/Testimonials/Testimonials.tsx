import { FaStar } from "react-icons/fa";
import reviews from "../../../data/reviews.json";

const Testimonials = () => {
  return (
    <section className="py-20 max-sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 max-sm:px-4">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12 max-sm:text-2xl max-sm:mb-8">
          Hear From Our Users
        </h2>
        <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="p-6 border border-gray-100 rounded-xl text-center"
            >
              <div className="flex justify-center gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-orange-500 text-base" />
                ))}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                {review.text}
              </p>
              <div className="flex items-center gap-3 justify-center">
                <img
                  src={review.avatar}
                  alt={review.user}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex flex-col text-left">
                  <span className="text-sm font-semibold text-gray-900">
                    {review.user}
                  </span>
                  <span className="text-xs text-gray-400">
                    {review.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
