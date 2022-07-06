import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MealPlanner from "../mealplanner/MealPlanner";
import RecipesByIngredients from "../RecipeByIngredients/RecipesByIngredients";
import { SearchRecipe } from "../search/SearchRecipe";
import RandomRecipe from "../RandomRecipe/RandomRecipe";

const Header = () => {
  return (
    <div>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Navbar
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
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Search by keyword
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="searchByIngredients">
                  Search By Ingredients
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
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
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<SearchRecipe />} />
          <Route exact path="/mealplanner" element={<MealPlanner />} />
          <Route
            exact
            path="/searchByIngredients"
            element={<RecipesByIngredients />}
          />
          <Route exact path="/Randomrecipe" element={<RandomRecipe />} />
          
        </Routes>
      </Router>
    </div>
  );
};

export default Header;
