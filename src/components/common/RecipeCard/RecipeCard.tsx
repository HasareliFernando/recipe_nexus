import { Link } from "react-router-dom";
import { FaStar, FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { useFavourites } from "../../../hooks/useFavourites";

interface RecipeCardProps {
  id?: number | string;
  title: string;
  description: string;
  rating: number;
  reviewCount: number;
  image?: string;
}

const RecipeCard = ({
  id = 1,
  title,
  description,
  rating,
  reviewCount,
  image,
}: RecipeCardProps) => {
  const { isFavourite, toggleFavourite, isLoggedIn } = useFavourites();
  const idStr = String(id);
  const favourited = isFavourite(idStr);

  const handleFavourite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavourite({
      idMeal: idStr,
      strMeal: title,
      strMealThumb: image || "",
      strCategory: description.split(" • ")[0] || "",
      strArea: description.split(" • ")[1] || "",
    });
  };

  return (
    <Link to={`/recipe/${id}`} className="no-underline">
      <div className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-[180px] object-cover"
          />
        ) : (
          <div className="w-full h-[180px] bg-gray-200 flex items-center justify-center">
            <svg
              width="60"
              height="60"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#bbb"
              strokeWidth="1"
            >
              <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8Z" />
            </svg>
          </div>
        )}
        <div className="p-4">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-gray-900 mb-1">
                {title}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                {description}
              </p>
            </div>
            <button
              onClick={handleFavourite}
              disabled={!isLoggedIn}
              className={`ml-2 transition-colors bg-transparent border-none ${isLoggedIn ? "cursor-pointer text-gray-400 hover:text-red-500" : "cursor-not-allowed text-gray-200"}`}
            >
              {favourited && isLoggedIn ? (
                <FaHeart size={16} className="text-red-500" />
              ) : (
                <FiHeart size={16} />
              )}
            </button>
          </div>
          <div className="flex items-center gap-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`text-xs ${i < rating ? "text-amber-400" : "text-gray-200"}`}
              />
            ))}
            <span className="text-xs text-gray-400 ml-1">({reviewCount})</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
