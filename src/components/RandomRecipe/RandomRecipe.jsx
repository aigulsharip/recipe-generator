import { textAlign } from "@mui/system";
import React, { useState } from "react";
import RecipeListIng from "../RecipeByIngredients/RecipeListIng";

const API_KEY = "33e71d5b3fa0499f892952e41360671a"; // sharipaigul
//const API_KEY = "7c570415bf7948e8a71509f9598ddebe"; // nuedukz

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
    <div>
      <div className="card text-center mt-3" >
        <div className="card-header">
          <h3>Looking for insperation?</h3>
        </div>
        <div className="card-body">
          
          <button onClick={getRandomRecipe}> Generate Recipe </button>
        </div>
      </div>


      {recipeData &&
        recipeData.recipes.map((recipe) => {
          return (
            <div key={recipe.id}>
              <h2>{recipe.title}</h2>
              <img src={recipe.image} alt={recipe.title}></img>
              <p>Preparation time: {recipe.readyInMinutes} minutes</p>
              <p>Number of servings: {recipe.servings}</p>
              <p>Gluten-free: {recipe.glutenFree ? "yes" : "no"}</p>
              <p>Vegan: {recipe.vegan ? "yes" : "no"}</p>
              <p>Vegatarian: {recipe.vegetarian ? "yes" : "no"}</p>
              <h5>Ingredients:</h5>
              {recipe.extendedIngredients.map((ingredients) => (
                <p key={ingredients.id}>
                  {ingredients.nameClean} - {ingredients.amount}{" "}
                  {ingredients.unit}
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

      <br />
    </div>
  );
};

export default RandomRecipe;
