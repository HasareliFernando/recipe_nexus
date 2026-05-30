import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import Recipes from "../pages/Recipes/Recipes";
import RecipeDetail from "../pages/RecipeDetail/RecipeDetail";
import Favourites from "../pages/Favourites/Favourites";
import NotFound from "../pages/NotFound/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/recipe/:id" element={<RecipeDetail />} />
      <Route path="/favourites" element={<Favourites />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
