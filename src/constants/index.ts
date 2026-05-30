export const APP_NAME = "Recipe Nexus";

export const ROUTES = {
  HOME: "/",
  RECIPES: "/recipes",
  CATEGORIES: "/categories",
  ABOUT: "/about",
  CONTACT: "/contact",
  REGISTER: "/register",
  SIGNIN: "/signin",
} as const;

export const NAV_LINKS = [
  { label: "Home", path: ROUTES.HOME },
  { label: "Recipes", path: ROUTES.RECIPES },
  { label: "Categories", path: ROUTES.CATEGORIES },
  { label: "About", path: ROUTES.ABOUT },
  { label: "Contact", path: ROUTES.CONTACT },
] as const;
