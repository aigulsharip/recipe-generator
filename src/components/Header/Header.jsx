import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MealPlanner from "../mealplanner/MealPlanner";
import RecipesByIngredients from "../RecipeByIngredients/RecipesByIngredients";
import { SearchRecipe } from "../search/SearchRecipe";
import RandomRecipe from "../RandomRecipe/RandomRecipe";
import RecipeList from "../search/RecipeList";

const Header = () => {
  const [searchItem, setSearchItem] = useState("");
  const [recipeData, setRecipeData] = useState("");
  //const API_KEY = "33e71d5b3fa0499f892952e41360671a"; // sharipaigul
  const API_KEY = "7c570415bf7948e8a71509f9598ddebe"; // nuedukz

  const handleChange = (event) => {
    setSearchItem(event.target.value);
    console.log(event.target.value)
  };

  const getRecipes = () => {
    console.log("checking")
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${searchItem}`
    )
      .then((response) => response.json())
      .then((data) => {
        setRecipeData(data);
        console.log(data);
      })
      .catch(() => {
        console.log("Error");
      });
  };

  return (
    <div>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Recipe App
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
            <div className="d-flex" role="search" style={{ marginLeft: "550px" }}>
              <input
                className="form-control me-2"
                placeholder="Search Recipes"
                aria-label="Search"
                onChange={handleChange}
              />
              <button className="btn btn-outline-success" onClick={getRecipes}  >
                Search
              </button>
            </div>
           
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

      {recipeData && <RecipeList recipeData={recipeData} />}

    </div>
  );
};

export default Header;
