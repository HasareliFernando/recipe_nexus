import { useState } from "react";
import Navbar from "../../components/common/Navbar/Navbar";
import Footer from "../../components/common/Footer/Footer";
import FilterSidebar from "../../components/recipes/FilterSidebar/FilterSidebar";
import RecipeCard from "../../components/common/RecipeCard/RecipeCard";
import ActiveFilters from "../../components/common/ActiveFilters/ActiveFilters";
import Pagination from "../../components/common/Pagination/Pagination";
import { useFilterMealsQuery } from "../../store/api/mealApi";

const getRatingFromId = (id: string) => {
  const num = parseInt(id, 10) || 0;
  return (num % 5) + 1;
};

const getReviewCountFromId = (id: string) => {
  const num = parseInt(id, 10) || 0;
  return ((num * 7) % 200) + 10;
};

const ITEMS_PER_PAGE = 9;

const Recipes = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [selectedIngredient, setSelectedIngredient] = useState("");
  const [searchText, setSearchText] = useState("");

  const { data: meals = [], isLoading } = useFilterMealsQuery({
    category: selectedCategory,
    area: selectedArea,
    ingredient: selectedIngredient,
    search: searchText,
  });

  const totalPages = Math.ceil(meals.length / ITEMS_PER_PAGE);
  const paginatedMeals = meals.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const handleRemoveFilter = (index: number) => {
    const filter = computedFilters[index];
    if (filter.startsWith("Search: ")) setSearchText("");
    else if (filter.startsWith("Category: ")) setSelectedCategory("");
    else if (filter.startsWith("Area: ")) setSelectedArea("");
    else if (filter.startsWith("Ingredient: ")) setSelectedIngredient("");
    setCurrentPage(1);
  };

  // Build active filters list from selections
  const computedFilters: string[] = [];
  if (searchText) computedFilters.push(`Search: ${searchText}`);
  if (selectedCategory) computedFilters.push(`Category: ${selectedCategory}`);
  if (selectedArea) computedFilters.push(`Area: ${selectedArea}`);
  if (selectedIngredient)
    computedFilters.push(`Ingredient: ${selectedIngredient}`);

  const handleCategoryChange = (val: string) => {
    setSelectedCategory(val);
    setSelectedArea("");
    setSelectedIngredient("");
    setSearchText("");
    setCurrentPage(1);
  };
  const handleAreaChange = (val: string) => {
    setSelectedArea(val);
    setSelectedCategory("");
    setSelectedIngredient("");
    setSearchText("");
    setCurrentPage(1);
  };
  const handleIngredientChange = (val: string) => {
    setSelectedIngredient(val);
    setSelectedCategory("");
    setSelectedArea("");
    setSearchText("");
    setCurrentPage(1);
  };
  const handleSearchChange = (val: string) => {
    setSearchText(val);
    setSelectedCategory("");
    setSelectedArea("");
    setSelectedIngredient("");
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-6 py-8 w-full max-sm:px-4">
        <div className="flex gap-8 max-lg:flex-col">
          {/* Sidebar */}
          <FilterSidebar
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
            selectedArea={selectedArea}
            onAreaChange={handleAreaChange}
            selectedIngredient={selectedIngredient}
            onIngredientChange={handleIngredientChange}
            searchText={searchText}
            onSearchChange={handleSearchChange}
          />

          {/* Main content */}
          <div className="flex-1">
            {/* Active Filters */}
            <div className="mb-6">
              <ActiveFilters
                filters={computedFilters}
                onRemove={handleRemoveFilter}
              />
            </div>

            {/* Recipe Grid */}
            {isLoading ? (
              <div className="grid grid-cols-3 gap-5 max-md:grid-cols-2 max-sm:grid-cols-1">
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl overflow-hidden border border-gray-100 animate-pulse"
                  >
                    <div className="w-full h-[180px] bg-gray-200"></div>
                    <div className="p-4 space-y-2">
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-3 bg-gray-200 rounded w-full"></div>
                      <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : paginatedMeals.length === 0 ? (
              <div className="flex flex-col items-center justify-center flex-1 min-h-[400px] text-center">
                <p className="text-gray-500 text-lg">No recipes found</p>
                <p className="text-gray-400 text-sm mt-1">
                  Try a different filter
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-5 max-md:grid-cols-2 max-sm:grid-cols-1">
                {paginatedMeals.map((meal) => (
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

            {/* Pagination */}
            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Recipes;
