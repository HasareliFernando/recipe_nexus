import {
  useGetCategoriesQuery,
  useGetAreasQuery,
  useGetIngredientsQuery,
} from "../../../store/api/mealApi";

interface FilterSidebarProps {
  selectedCategory: string;
  onCategoryChange: (value: string) => void;
  selectedArea: string;
  onAreaChange: (value: string) => void;
  selectedIngredient: string;
  onIngredientChange: (value: string) => void;
  searchText: string;
  onSearchChange: (value: string) => void;
}

const FilterSidebar = ({
  selectedCategory,
  onCategoryChange,
  selectedArea,
  onAreaChange,
  selectedIngredient,
  onIngredientChange,
  searchText,
  onSearchChange,
}: FilterSidebarProps) => {
  const { data: categories, isLoading: categoriesLoading } =
    useGetCategoriesQuery();
  const { data: areas, isLoading: areasLoading } = useGetAreasQuery();
  const { data: ingredients, isLoading: ingredientsLoading } =
    useGetIngredientsQuery();

  return (
    <aside className="w-[240px] shrink-0 max-lg:w-full">
      <h2 className="text-lg font-bold text-gray-900 mb-5 max-sm:mb-3 max-sm:text-base">
        Filter by Preference
      </h2>

      {/* Search */}
      <div className="mb-6 max-sm:mb-3">
        <h3 className="text-sm font-semibold text-gray-900 mb-3 max-sm:mb-2">
          Search
        </h3>
        <input
          type="text"
          value={searchText}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search recipes..."
          className="w-full px-3 py-2 max-sm:py-1.5 bg-amber-100 border border-amber-200 rounded-full text-sm outline-none focus:border-amber-400 placeholder:text-gray-400"
        />
      </div>

      {/* Category */}
      <div className="mb-6 max-sm:mb-3">
        <h3 className="text-sm font-semibold text-gray-900 mb-3 max-sm:mb-2">
          By Category
        </h3>
        {categoriesLoading ? (
          <div className="space-y-2 max-sm:hidden">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="h-5 bg-gray-100 rounded animate-pulse"
              ></div>
            ))}
          </div>
        ) : (
          <>
            {/* Desktop: Radio buttons */}
            <div className="space-y-2 max-h-[350px] overflow-y-auto max-sm:hidden">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="category"
                  checked={selectedCategory === ""}
                  onChange={() => onCategoryChange("")}
                  className="w-4 h-4 accent-amber-500"
                />
                <span className="text-sm text-gray-700">All</span>
              </label>
              {categories?.map((cat) => (
                <label
                  key={cat.idCategory}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="category"
                    checked={selectedCategory === cat.strCategory}
                    onChange={() => onCategoryChange(cat.strCategory)}
                    className="w-4 h-4 accent-amber-500"
                  />
                  <span className="text-sm text-gray-700">
                    {cat.strCategory}
                  </span>
                </label>
              ))}
            </div>
            {/* Mobile: Dropdown */}
            <select
              value={selectedCategory}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="hidden max-sm:block w-full px-3 pr-8 py-1.5 bg-amber-100 border border-amber-200 rounded-full text-sm outline-none focus:border-amber-400 cursor-pointer"
            >
              <option value="">All Categories</option>
              {categories?.map((cat) => (
                <option key={cat.idCategory} value={cat.strCategory}>
                  {cat.strCategory}
                </option>
              ))}
            </select>
          </>
        )}
      </div>

      {/* Area */}
      <div className="mb-6 max-sm:mb-3">
        <h3 className="text-sm font-semibold text-gray-900 mb-3 max-sm:mb-2">
          By Area
        </h3>
        {areasLoading ? (
          <div className="h-10 bg-gray-100 rounded animate-pulse"></div>
        ) : (
          <select
            value={selectedArea}
            onChange={(e) => onAreaChange(e.target.value)}
            className="w-full px-3 pr-8 py-2 bg-amber-100 border border-amber-200 rounded-full text-sm outline-none focus:border-amber-400 cursor-pointer"
          >
            <option value="">All Areas</option>
            {areas?.map((area, index) => (
              <option key={`${area.strArea}-${index}`} value={area.strArea}>
                {area.strArea}
              </option>
            ))}
          </select>
        )}
      </div>

      {/* Ingredients */}
      <div className="mb-6 max-sm:mb-3">
        <h3 className="text-sm font-semibold text-gray-900 mb-3 max-sm:mb-2">
          By Ingredient
        </h3>
        {ingredientsLoading ? (
          <div className="h-10 bg-gray-100 rounded animate-pulse"></div>
        ) : (
          <select
            value={selectedIngredient}
            onChange={(e) => onIngredientChange(e.target.value)}
            className="w-full px-3 pr-8 py-2 bg-amber-100 border border-amber-200 rounded-full text-sm outline-none focus:border-amber-400 cursor-pointer"
          >
            <option value="">All Ingredients</option>
            {ingredients?.map((ing) => (
              <option key={ing.idIngredient} value={ing.strIngredient}>
                {ing.strIngredient}
              </option>
            ))}
          </select>
        )}
      </div>
    </aside>
  );
};

export default FilterSidebar;
