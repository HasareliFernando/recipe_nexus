import Navbar from "../../components/common/Navbar/Navbar";
import Footer from "../../components/common/Footer/Footer";
import RecipeCard from "../../components/common/RecipeCard/RecipeCard";
import { useFavourites } from "../../hooks/useFavourites";

const getRatingFromId = (id: string) => {
  const num = parseInt(id, 10) || 0;
  return (num % 5) + 1;
};

const getReviewCountFromId = (id: string) => {
  const num = parseInt(id, 10) || 0;
  return ((num * 7) % 200) + 10;
};

const Favourites = () => {
  const { favourites } = useFavourites();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-6 py-8 w-full max-sm:px-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">My Favourites</h1>

        {favourites.length === 0 ? (
          <div className="flex flex-col items-center justify-center flex-1 min-h-[400px] text-center">
            <p className="text-gray-500 text-lg">No favourites yet</p>
            <p className="text-gray-400 text-sm mt-1">
              Start adding recipes to your favourites
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-5 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
            {favourites.map((meal) => (
              <RecipeCard
                key={meal.idMeal}
                id={meal.idMeal}
                title={meal.strMeal}
                description={
                  meal.strCategory && meal.strArea
                    ? `${meal.strCategory} • ${meal.strArea}`
                    : meal.strCategory || meal.strArea || ""
                }
                rating={getRatingFromId(meal.idMeal)}
                reviewCount={getReviewCountFromId(meal.idMeal)}
                image={meal.strMealThumb}
              />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Favourites;
