import { useParams } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import Navbar from "../../components/common/Navbar/Navbar";
import Footer from "../../components/common/Footer/Footer";
import RecipeHero from "../../components/recipe/RecipeHero/RecipeHero";
import IngredientsList from "../../components/recipe/IngredientsList/IngredientsList";
import Instructions from "../../components/recipe/Instructions/Instructions";
import CommentForm from "../../components/recipe/CommentForm/CommentForm";
import CommentList from "../../components/recipe/CommentList/CommentList";
import { useGetMealByIdQuery, Meal } from "../../store/api/mealApi";
import { useFavourites } from "../../hooks/useFavourites";
import comments from "../../data/comments.json";

const extractIngredients = (meal: Meal): string[] => {
  const ingredients: string[] = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && ingredient.trim()) {
      ingredients.push(`${measure?.trim() || ""} ${ingredient.trim()}`.trim());
    }
  }
  return ingredients;
};

const extractInstructions = (meal: Meal): string[] => {
  if (!meal.strInstructions) return [];
  return meal.strInstructions
    .split(/\r?\n/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
};

const getRatingFromId = (id: string) => {
  const num = parseInt(id, 10) || 0;
  return (num % 5) + 1;
};

const getReviewCountFromId = (id: string) => {
  const num = parseInt(id, 10) || 0;
  return ((num * 7) % 200) + 10;
};

const RecipeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data: meal, isLoading } = useGetMealByIdQuery(id ?? "");
  const { isFavourite, toggleFavourite, isLoggedIn } = useFavourites();

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 max-w-5xl mx-auto px-6 py-10 w-full max-sm:px-4">
          <div className="animate-pulse space-y-6">
            <div className="flex gap-6 max-md:flex-col">
              <div className="w-[100px] h-[100px] bg-gray-200 rounded-xl"></div>
              <div className="flex-1 space-y-3">
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                <div className="h-32 bg-gray-200 rounded"></div>
              </div>
            </div>
            <div className="h-8 bg-gray-200 rounded w-1/3"></div>
            <div className="grid grid-cols-2 gap-10 max-md:grid-cols-1">
              <div className="space-y-2">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-4 bg-gray-200 rounded"></div>
                ))}
              </div>
              <div className="space-y-2">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="h-4 bg-gray-200 rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!meal) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <p className="text-gray-500 text-lg">Recipe not found.</p>
        </main>
        <Footer />
      </div>
    );
  }

  const ingredients = extractIngredients(meal);
  const instructions = extractInstructions(meal);
  const favourited = isFavourite(meal.idMeal);

  const handleToggleFavourite = () => {
    toggleFavourite({
      idMeal: meal.idMeal,
      strMeal: meal.strMeal,
      strMealThumb: meal.strMealThumb,
      strCategory: meal.strCategory,
      strArea: meal.strArea,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-5xl mx-auto px-6 py-10 w-full max-sm:px-4">
        {/* Recipe Hero - Image, Rating, Info Table, Title */}
        <RecipeHero
          title={meal.strMeal}
          rating={getRatingFromId(meal.idMeal)}
          reviewCount={getReviewCountFromId(meal.idMeal)}
          prepTime="20 min"
          cookTime="20 min"
          calorieCount={20}
          servings={4}
          ingredientCount={ingredients.length}
          category={meal.strCategory}
          image={meal.strMealThumb}
        />

        {/* Favourite Button */}
        <div className="mb-6">
          <button
            onClick={handleToggleFavourite}
            disabled={!isLoggedIn}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 text-sm font-semibold transition-colors ${
              !isLoggedIn
                ? "border-gray-200 bg-gray-50 text-gray-300 cursor-not-allowed"
                : favourited
                  ? "border-red-500 bg-red-50 text-red-500 cursor-pointer"
                  : "border-gray-300 bg-white text-gray-600 hover:border-red-500 hover:text-red-500 cursor-pointer"
            }`}
          >
            {favourited ? <FaHeart size={16} /> : <FiHeart size={16} />}
            {!isLoggedIn
              ? "Login to Favourite"
              : favourited
                ? "Added to Favourites"
                : "Add to Favourites"}
          </button>
        </div>

        {/* Ingredients + Instructions */}
        <div className="grid grid-cols-[1fr_1.5fr] gap-10 max-md:grid-cols-1 max-md:gap-8">
          <IngredientsList title={meal.strMeal} items={ingredients} />
          <Instructions steps={instructions} />
        </div>

        {/* Comment Form */}
        <CommentForm />

        {/* Comment List */}
        <CommentList comments={comments} />
      </main>

      <Footer />
    </div>
  );
};

export default RecipeDetail;
