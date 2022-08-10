import React, { useState } from "react";
import "./randomrecipe.css";

const API_KEY = "33e71d5b3fa0499f892952e41360671a"; // sharipaigul
//const API_KEY = "7c570415bf7948e8a71509f9598ddebe"; // nuedukz
//const API_KEY = "514706b6799f4d3586354e0d7c30ac5e"; //mailru

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
    <div className="App">
      <div class="card text-center mt-3">
        <div class="card-header">
          <h3>Looking for insperation?</h3>
        </div>
        <div class="card-body">
          <button className="btn btn-primary" onClick={getRandomRecipe}>
            Generate Recipe
          </button>
        </div>
      </div>
      <div className="m-5">
        {recipeData &&
          recipeData.recipes.map((recipe) => {
            return (
              <div key={recipe.id}>
                <h2 className="text-center">{recipe.title}</h2>
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="rounded mx-auto d-block "
                ></img>
                <h5 className="fw-bold mt-2">Characterics:</h5>
                <p className="">
                  Preparation time: {recipe.readyInMinutes} minutes
                </p>
                <p>Number of servings: {recipe.servings}</p>

                <p className="mt-2">
                  Gluten-free: {recipe.glutenFree ? "yes" : "no"}
                </p>
                <p>Vegan: {recipe.vegan ? "yes" : "no"}</p>
                <p>Vegatarian: {recipe.vegetarian ? "yes" : "no"}</p>

                <h5 className="fw-bold">Ingredients:</h5>
                {recipe.extendedIngredients.map((ingredients) => (
                  <p key={ingredients.id}>
                    {ingredients.nameClean} - {ingredients.amount}{" "}
                    {ingredients.unit}
                  </p>
                ))}

                <h5 className="fw-bold">Instructions:</h5>
                {recipe.analyzedInstructions[0].steps.map((steps) => (
                  <p key={steps.number}>
                    {steps.number}. {steps.step}
                  </p>
                ))}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default RandomRecipe;
