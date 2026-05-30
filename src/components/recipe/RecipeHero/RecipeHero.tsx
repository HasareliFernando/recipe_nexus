import { FaStar } from "react-icons/fa";
import { FiClock, FiUsers } from "react-icons/fi";
import { MdLocalFireDepartment } from "react-icons/md";
import { BiCategory, BiFoodMenu } from "react-icons/bi";
import { IoTimerOutline } from "react-icons/io5";

interface RecipeHeroProps {
  title: string;
  rating: number;
  reviewCount: number;
  prepTime: string;
  cookTime: string;
  calorieCount: number;
  servings: number;
  ingredientCount: number;
  category: string;
  image?: string;
}

const RecipeHero = ({
  title,
  rating,
  reviewCount,
  prepTime,
  cookTime,
  calorieCount,
  servings,
  ingredientCount,
  category,
  image,
}: RecipeHeroProps) => {
  return (
    <div className="mb-10">
      {/* Hero Banner */}
      <div className="relative rounded-2xl overflow-hidden mb-6">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-[300px] max-sm:h-[200px] object-cover"
          />
        ) : (
          <div className="w-full h-[300px] max-sm:h-[200px] bg-gray-200 flex items-center justify-center">
            <svg
              width="80"
              height="80"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#bbb"
              strokeWidth="1"
            >
              <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8Z" />
            </svg>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-4 left-5 right-5">
          <h1 className="text-3xl font-bold text-white max-sm:text-xl">
            {title}
          </h1>
          <div className="flex items-center gap-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`text-sm ${i < rating ? "text-amber-400" : "text-gray-300"}`}
              />
            ))}
            <span className="text-sm text-gray-200 ml-1">({reviewCount})</span>
          </div>
        </div>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-3 max-sm:grid-cols-2 gap-3">
        <div className="flex items-center gap-3 bg-orange-50 rounded-xl px-4 py-3">
          <div className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center">
            <FiClock className="text-orange-500" />
          </div>
          <div>
            <span className="text-xs text-gray-500 block">Prep Time</span>
            <span className="text-sm font-semibold text-gray-900">
              {prepTime}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-orange-50 rounded-xl px-4 py-3">
          <div className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center">
            <IoTimerOutline className="text-orange-500" />
          </div>
          <div>
            <span className="text-xs text-gray-500 block">Cook Time</span>
            <span className="text-sm font-semibold text-gray-900">
              {cookTime}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-orange-50 rounded-xl px-4 py-3">
          <div className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center">
            <MdLocalFireDepartment className="text-orange-500" />
          </div>
          <div>
            <span className="text-xs text-gray-500 block">Calories</span>
            <span className="text-sm font-semibold text-gray-900">
              {calorieCount}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-orange-50 rounded-xl px-4 py-3">
          <div className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center">
            <FiUsers className="text-orange-500" />
          </div>
          <div>
            <span className="text-xs text-gray-500 block">Servings</span>
            <span className="text-sm font-semibold text-gray-900">
              {servings}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-orange-50 rounded-xl px-4 py-3">
          <div className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center">
            <BiCategory className="text-orange-500" />
          </div>
          <div>
            <span className="text-xs text-gray-500 block">Category</span>
            <span className="text-sm font-semibold text-orange-500">
              {category}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-orange-50 rounded-xl px-4 py-3">
          <div className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center">
            <BiFoodMenu className="text-orange-500" />
          </div>
          <div>
            <span className="text-xs text-gray-500 block">Ingredients</span>
            <span className="text-sm font-semibold text-gray-900">
              {ingredientCount}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeHero;
