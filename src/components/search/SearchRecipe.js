import React, { useState } from "react";
import RecipeList from "./RecipeList";
export const SearchRecipe = () => {
  const [searchItem, setSearchItem] = useState("");
  const [recipeData, setRecipeData] = useState("");
  const API_KEY = "33e71d5b3fa0499f892952e41360671a"; // sharipaigul
  //const API_KEY = "7c570415bf7948e8a71509f9598ddebe"; // nuedukz

  const handleChange = (event) => {
    setSearchItem(event.target.value);
  };

  const getRecipes = () => {
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
      <input
        type="text"
        placeholder="Search Recipe"
        onChange={handleChange}
      ></input>

      <button onClick={getRecipes}> Search Recipe </button>

      {recipeData && <RecipeList recipeData={recipeData} />}

      {/*         
        {recipeData && recipeData.results.map((recipe) => {return (
            <div key = {recipe.id}>
            <h5>{recipe.title}</h5>
            <img src= {recipe.image}></img>
            </div>
            
        )}
        )} */}
    </div>
  );
};
