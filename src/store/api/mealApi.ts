import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Meal {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strMealThumb: string;
  strTags: string | null;
  strInstructions?: string;
  [key: string]: string | null | undefined;
}

export interface Category {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

interface MealResponse {
  meals: Meal[];
}

interface FilterMealResponse {
  meals: { strMeal: string; strMealThumb: string; idMeal: string }[] | null;
}

export interface FilterParams {
  category?: string;
  area?: string;
  ingredient?: string;
  search?: string;
}

export interface Area {
  strArea: string;
}

export interface Ingredient {
  idIngredient: string;
  strIngredient: string;
}

interface CategoriesResponse {
  categories: Category[];
}

interface AreasResponse {
  meals: Area[];
}

interface IngredientsResponse {
  meals: Ingredient[];
}

export const mealApi = createApi({
  reducerPath: "mealApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_BASE_URL }),
  endpoints: (builder) => ({
    getRandomMeals: builder.query<Meal[], void>({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const results: Meal[] = [];
        for (let i = 0; i < 4; i++) {
          const result = await fetchWithBQ("random.php");
          if (result.error) return { error: result.error };
          const data = result.data as MealResponse;
          if (data.meals?.[0]) results.push(data.meals[0]);
        }
        return { data: results };
      },
    }),
    getCategories: builder.query<Category[], void>({
      query: () => "categories.php",
      transformResponse: (response: CategoriesResponse) => response.categories,
    }),
    getMealById: builder.query<Meal | null, string>({
      query: (id) => `lookup.php?i=${id}`,
      transformResponse: (response: MealResponse) =>
        response.meals?.[0] ?? null,
    }),
    getAreas: builder.query<Area[], void>({
      query: () => "list.php?a=list",
      transformResponse: (response: AreasResponse) => response.meals ?? [],
    }),
    getIngredients: builder.query<Ingredient[], void>({
      query: () => "list.php?i=list",
      transformResponse: (response: IngredientsResponse) =>
        response.meals ?? [],
    }),
    filterMeals: builder.query<Meal[], FilterParams>({
      async queryFn(params, _queryApi, _extraOptions, fetchWithBQ) {
        const { category, area, ingredient, search } = params;

        let url = "";
        if (ingredient) url = `filter.php?i=${ingredient}`;
        else if (category) url = `filter.php?c=${category}`;
        else if (area) url = `filter.php?a=${area}`;

        if (!url) {
          const result = await fetchWithBQ(`search.php?s=${search || ""}`);
          if (result.error) return { error: result.error };
          const data = result.data as MealResponse;
          return { data: data.meals ?? [] };
        }

        const result = await fetchWithBQ(url);
        if (result.error) return { error: result.error };
        const data = result.data as FilterMealResponse;
        if (!data.meals) return { data: [] };

        const meals: Meal[] = data.meals.map((m) => ({
          idMeal: m.idMeal,
          strMeal: m.strMeal,
          strMealThumb: m.strMealThumb,
          strCategory: category || "",
          strArea: area || "",
          strTags: null,
        }));
        return { data: meals };
      },
    }),
  }),
});

export const {
  useGetRandomMealsQuery,
  useGetCategoriesQuery,
  useGetMealByIdQuery,
  useGetAreasQuery,
  useGetIngredientsQuery,
  useFilterMealsQuery,
} = mealApi;
