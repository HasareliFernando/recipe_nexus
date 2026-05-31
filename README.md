# Interactive Recipe Finder

## Live Demo

**Application URL:** https://recipenexus.netlify.app/

## Design

**Figma URL:** (https://www.figma.com/design/dhNeNg2pX050elvKnywCto/Wireframe_Recipe?node-id=0-1&t=KDjppahDEj83RxqY-1)

## Repository

**GitHub URL:** https://github.com/HasareliFernando/recipe_nexus/tree/main

---

# Create .env file


## FOR MealApi
VITE_API_BASE_URL=https://www.themealdb.com/api/json/v1/1/  


## Authentication
VITE_USER_NAME=recipeadmin 
VITE_USER_PASSWORD=recipepassword@123


---

# Project Overview

 Recipe Nexus is a responsive web application that allows users to discover recipes by searching either by recipe name or by ingredient. The application provides detailed recipe information, including calories, prep cook times, ingredients and cooking instructions, and enables users to save their favorite recipes for future access.

Recipe Nexus was developed as a user-focused recipe finder application that allows users to quickly discover meals through a clean and visually appealing interface.

The application integrates with a public recipe API to fetch real-time recipe data and provides features such as recipe searching, detailed recipe views, and a persistent favorites system.

The project follows modern React development practices with reusable components, responsive layouts, and efficient state management.

---

# Design Rationale

The primary goal of this application is to help users quickly find recipes without unnecessary complexity.

### User Experience Decisions

* A search interface was chosen because searching is the main action users perform when looking for recipes.
* Large recipe images were used to make browsing visually appealing and help users identify dishes quickly.
* Consistent card layouts improve readability and create a predictable user experience.
* A dedicated favorites feature allows users to save recipes and return to them later.
* Responsive layouts ensure a seamless experience across mobile, tablet, and desktop devices.

### Design System

The interface follows a consistent design system including:

* Reusable buttons
* Recipe cards
* Typography hierarchy
* Consistent spacing
* Shared color palette
* Responsive grid system

---

# Features Implemented

### Recipe Search

* Search recipes by recipe name.
* Search recipes by ingredient.

### Recipe Listing

* Display recipe cards with images and recipe names.
* Responsive card grid layout.

### Recipe Details

* Detailed recipe page.
* Recipe image.
* Category information.
* Ingredient list.
* Cooking instructions.

### Sing in

* Sing in button.
* Username, Password Input Fields.

### Favorites System

* Add recipes to favorites.
* Remove recipes from favorites.
* Favorites persist using react persist.
* Dedicated favorites page.

### Loading States

* Loading indicators while fetching data.

### Error Handling

* User-friendly error messages.
* No-results state for empty searches.

### Responsive Design

* Mobile-friendly layout.
* Tablet support.
* Desktop optimization.

---

# Technology Stack

### Frontend

* React
* Vite
* React Router DOM

### API

* TheMealDB API

### Styling

* Tailwind CSS

### State Management

* React redux

### Data Persistence


* Redux persist

---

# Project Structure

```text
src 
├── components 
├── pages 
├── hooks 
├── context 
├── services 
├── routes 
├── assets 
└── styles
```

---
# Clone the repository

git clone https://github.com/HasareliFernando/recipe_nexus.git

# Navigate to the project
cd recipe_nexus

# Install dependencies
npm install

# Start development server
npm run dev

# Application will run on:

http://localhost:5173

# Build for Production
npm run build

# Preview production build:

npm run preview

# API Integration

# Recipe Nexus uses TheMealDB API to fetch recipe data.

## Implemented functionality includes:

### Search by Recipe Name
/search.php?s=
### Search by Ingredient
/filter.php?i=
### Recipe Details
/lookup.php?i=
### get area or ingredient list
/list.php?i=
### get categories list
/categories.php?i=


# Challenges and Solutions

### Challenge 1: Persisting Favorite Recipes

Solution:
React persist was used to store favorite recipes, ensuring that user preferences remain available even after refreshing the page.

### Challenge 2: Responsive Layout

Solution:
A mobile-first approach and responsive grid system were used to ensure consistent behavior across different screen sizes.

---

# Future Improvements

* Advanced filtering.
* Search suggestions and autocomplete.
* Dark mode support.
* Recipe sharing functionality.
* Pagination and infinite scrolling.

---

# Author

Hasareli Fernando

Frontend Developer
