import { FiClock } from "react-icons/fi";
import { MdLocalFireDepartment } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useGetRandomMealsQuery } from "../../../store/api/mealApi";

const PopularRecipes = () => {
  const { data: meals, isLoading, error } = useGetRandomMealsQuery();
  const navigate = useNavigate();

  return (
    <section className="py-20 max-sm:py-12">
      <div className="max-w-7xl mx-auto px-6 max-sm:px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 max-sm:text-2xl max-sm:mb-6">
          Popular Recipes
        </h2>

        {isLoading && (
          <div className="grid grid-cols-4 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-white rounded-xl overflow-hidden border border-gray-100 animate-pulse"
              >
                <div className="w-full h-[180px] bg-gray-200"></div>
                <div className="p-4 space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {error && (
          <p className="text-red-500 text-center">
            Failed to load recipes. Please try again later.
          </p>
        )}

        {meals && (
          <div className="grid grid-cols-4 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {meals.map((meal) => (
              <div
                key={meal.idMeal}
                onClick={() => navigate(`/recipe/${meal.idMeal}`)}
                className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
              >
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="w-full h-[180px] object-cover"
                />
                <div className="p-4">
                  <h3 className="text-base font-semibold text-gray-900 mb-2 truncate">
                    {meal.strMeal}
                  </h3>
                  <div className="flex items-center gap-4 text-gray-400 text-sm">
                    <span className="flex items-center gap-1">
                      <FiClock /> 30 mins
                    </span>
                    <span className="flex items-center gap-1">
                      <MdLocalFireDepartment /> {meal.strCategory}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PopularRecipes;
