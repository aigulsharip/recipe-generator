import { textAlign } from "@mui/system";
import React, { useState } from "react";
import RecipeListIng from "../RecipeByIngredients/RecipeListIng";

//const API_KEY = "33e71d5b3fa0499f892952e41360671a"; // sharipaigul
//const API_KEY = "7c570415bf7948e8a71509f9598ddebe"; // nuedukz
const API_KEY = "514706b6799f4d3586354e0d7c30ac5e"; //mailru

const RandomRecipe = () => {
  const [recipeData, setRecipeData] = useState("");

  const getRandomRecipe = () => {
    fetch(`https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}`)
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
    <div className="container" style={{ width: "700px" }}>
      <div className="card text-center mt-3">
        <div className="card-header">
          <h3>Looking for insperation?</h3>
        </div>
        <div className="card-body">
          <button className="btn btn-primary" onClick={getRandomRecipe}>
            {" "}
            Generate Recipe{" "}
          </button>
        </div>
      </div>

      {recipeData &&
        recipeData.recipes.map((recipe) => {
          return (
            <div key={recipe.id}>
              <h2 className="text-center">{recipe.title}</h2>
              <p className="text-right">Preparation time: {recipe.readyInMinutes} minutes Number of servings: {recipe.servings}</p>
              <img src={recipe.image} alt={recipe.title}></img>
              
              <p>Gluten-free: {recipe.glutenFree ? "yes" : "no"}</p>
              <p>Vegan: {recipe.vegan ? "yes" : "no"}</p>
              <p>Vegatarian: {recipe.vegetarian ? "yes" : "no"}</p>

              <h5>Ingredients:</h5>
              {recipe.extendedIngredients.map((ingredients) => (
                
                <p key={ingredients.id}>
                  {ingredients.nameClean} - {ingredients.amount} {ingredients.unit}
                </p>
              ))}

              <h5>Instructions:</h5>
              {recipe.analyzedInstructions[0].steps.map((steps) => (
                <p key={steps.number}>
                  {steps.number}. {steps.step}
                </p>
              ))}
            </div>
          );
        })}
    </div>
  );
};

export default RandomRecipe;
