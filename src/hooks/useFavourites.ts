import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";
import toast from "react-hot-toast";
import type { RootState } from "../store/store";
import {
  addFavourite,
  removeFavourite,
  toggleFavourite,
} from "../store/favouritesSlice";
import type { FavouriteMeal } from "../store/favouritesSlice";

export type { FavouriteMeal } from "../store/favouritesSlice";

export const useFavourites = () => {
  const dispatch = useDispatch();
  const favourites = useSelector((state: RootState) => state.favourites.items);
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  const isFavourite = useCallback(
    (idMeal: string) => favourites.some((m) => m.idMeal === idMeal),
    [favourites],
  );

  const handleToggleFavourite = useCallback(
    (meal: FavouriteMeal) => {
      if (!isLoggedIn) return;
      const exists = favourites.some((m) => m.idMeal === meal.idMeal);
      dispatch(toggleFavourite(meal));
      if (exists) {
        toast.success(`Removed "${meal.strMeal}" from favourites`);
      } else {
        toast.success(`Added "${meal.strMeal}" to favourites`);
      }
    },
    [dispatch, isLoggedIn, favourites],
  );

  const handleAddFavourite = useCallback(
    (meal: FavouriteMeal) => {
      if (!isLoggedIn) return;
      dispatch(addFavourite(meal));
      toast.success(`Added "${meal.strMeal}" to favourites`);
    },
    [dispatch, isLoggedIn],
  );

  const handleRemoveFavourite = useCallback(
    (idMeal: string) => {
      if (!isLoggedIn) return;
      dispatch(removeFavourite(idMeal));
      toast.success("Removed from favourites");
    },
    [dispatch, isLoggedIn],
  );

  return {
    favourites,
    isLoggedIn,
    addFavourite: handleAddFavourite,
    removeFavourite: handleRemoveFavourite,
    isFavourite,
    toggleFavourite: handleToggleFavourite,
  };
};
