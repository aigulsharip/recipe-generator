import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MealPlanner from "../mealplanner/MealPlanner";
import RecipesByIngredients from "../RecipeByIngredients/RecipesByIngredients";
import RandomRecipe from "../RandomRecipe/RandomRecipe";
import RecipeDetails from "../RecipeByIngredients/RecipeDetails";
import { SearchRecipe } from "../search/SearchRecipe";

import "bootstrap/dist/css/bootstrap.min.css";
import { SearchedItem } from "../search/SearchedItem";
const Header = () => {
  const [searchItem, setSearchItem] = useState("");
  const API_KEY = "33e71d5b3fa0499f892952e41360671a"; // sharipaigul
  //const API_KEY = "7c570415bf7948e8a71509f9598ddebe"; // nuedukz

  const handleChange = (event) => {
    setSearchItem(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
          <a className="navbar-brand" href="#">
            Recipe Generator
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="searchByIngredients">
                  Search By Ingredients
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/mealplanner">
                  Meal Planner
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/randomrecipe">
                  Random Recipe
                </a>
              </li>
            </ul>
            <div className="d-flex" role="search">
              <input
                className="form-control me-2"
                placeholder="Search Recipes"
                aria-label="Search"
                onChange={handleChange}
              />
              <Link
                className="btn btn-outline-success"
                // onClick={getRecipes}
                to={`/searchrecipe/${searchItem}`}
              >
                Search
              </Link>
            </div>
          </div>
        </nav>
        <Routes>
          <Route exact path="/" element={<RecipesByIngredients />} />
          <Route exact path="/mealplanner" element={<MealPlanner />} />
          <Route
            exact
            path="/searchByIngredients"
            element={<RecipesByIngredients />}
          />
          <Route exact path="/randomrecipe" element={<RandomRecipe />} />
          <Route exact path="/searchrecipe" element={<SearchRecipe />}>
            <Route path=":searchItemParam" element={<SearchedItem />} />
          </Route>
          <Route exact path="/details/:recipeId" element={<RecipeDetails />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Header;
