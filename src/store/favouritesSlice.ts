import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FavouriteMeal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
  strArea: string;
}

interface FavouritesState {
  items: FavouriteMeal[];
}

const initialState: FavouritesState = {
  items: [],
};

const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addFavourite(state, action: PayloadAction<FavouriteMeal>) {
      if (!state.items.some((m) => m.idMeal === action.payload.idMeal)) {
        state.items.push(action.payload);
      }
    },
    removeFavourite(state, action: PayloadAction<string>) {
      state.items = state.items.filter((m) => m.idMeal !== action.payload);
    },
    toggleFavourite(state, action: PayloadAction<FavouriteMeal>) {
      const index = state.items.findIndex(
        (m) => m.idMeal === action.payload.idMeal,
      );
      if (index >= 0) {
        state.items.splice(index, 1);
      } else {
        state.items.push(action.payload);
      }
    },
  },
});

export const { addFavourite, removeFavourite, toggleFavourite } =
  favouritesSlice.actions;
export default favouritesSlice.reducer;
