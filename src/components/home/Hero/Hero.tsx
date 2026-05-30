import { Link } from "react-router-dom";
import heroCards from "../../../data/heroCards.json";

const Hero = () => {
  return (
    <section className="bg-orange-50/60 py-16 max-sm:py-10">
      <div className="max-w-7xl mx-auto px-6 flex items-center gap-16 max-md:flex-col max-md:gap-10 max-sm:px-4">
        <div className="flex-1">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-4 max-md:text-3xl max-sm:text-2xl">
            Explore 10,000+ recipes tailored to your taste
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed max-sm:text-base max-sm:mb-6">
            Find global cuisines with calories, prep time, and full recipe
            details.
          </p>
          <Link
            to="/recipes"
            className="inline-block px-7 py-3.5 bg-orange-500 text-white no-underline rounded-lg text-base font-semibold hover:bg-orange-600 transition-colors"
          >
            Find a Recipe
          </Link>
        </div>
        <div className="flex-1 max-md:w-full">
          <div className="grid grid-cols-2 gap-3">
            {heroCards.map((card, index) => (
              <div
                key={card.title}
                className={`relative rounded-xl overflow-hidden ${index === 0 ? "row-span-2" : ""}`}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                  className={`w-full object-cover ${index === 0 ? "h-full min-h-[300px] max-sm:min-h-[220px]" : "h-[140px] max-sm:h-[100px]"}`}
                />
                <span
                  className={`absolute ${index === 0 ? "bottom-12 left-3" : "top-2 left-2"} ${card.badgeColor} text-white text-xs font-semibold px-2 py-0.5 rounded`}
                >
                  {card.badge}
                </span>
                <div
                  className={`${index === 0 ? "absolute bottom-0 left-0 right-0" : ""} bg-white p-${index === 0 ? "3" : "2"}`}
                >
                  <p className="text-sm font-bold text-gray-900">
                    {card.title}
                  </p>
                  <p className="text-xs text-gray-500">{card.info}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
