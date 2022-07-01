import React, { useState } from "react";
import RecipeList from "../search/RecipeList";
import RecipeListIng from "./RecipeListIng";
import Demo from "../customizedHook/demo";
import { v4 as myNewID } from "uuid";

const API_KEY = "33e71d5b3fa0499f892952e41360671a"; // sharipaigul
//const API_KEY = "7c570415bf7948e8a71509f9598ddebe"; // nuedukz

const RecipesByIngredients = () => {
  const [ingredients, setIngredients] = useState("");
  const [recipeData, setRecipeData] = useState("");

  const [ingredient, setIngredient] = useState("");
  const [ings, setIngs] = useState([]);

  const handleChange = (event) => {
    setIngredients(event.target.value);
  };

  const getEachIngredient = (event) => {
    setIngredient(event.target.value);
    console.log(event.target.value);
  };

  const handleAddIngr = () => {
    const newIngs = { key: myNewID(), label: ingredient };

    setIngs(() => [...ings, newIngs]);
  };

  const getRecipesByIngredients = () => {
    fetch(
      //`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=${ingredients}`
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=${ingredientsList}`
      

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

  let ingredientsList = "";
  ings.forEach((ingredient) => {
    ingredientsList += ingredient.label + ",";
  });
  console.log(ingredientsList)

  return (
    <div>
      <h1 className="">Searching by Ingredients</h1>

      <Demo />

      <input
        type="text"
        placeholder="Enter Ingredients"
        onChange={handleChange}
      />

      <button onClick={getRecipesByIngredients}> Search Recipe </button>

      <h1>New Input</h1>

      <input
        value={ingredient}
        type="text"
        placeholder="Enter Ingredient"
        onChange={getEachIngredient}
      />
      <button onClick={handleAddIngr}>Add Ingredient</button>

      <h2>Your ingredients</h2>
      <div>
        {ings.map((ingredient) => (
          <button key={ingredient.type} type="button">
            {ingredient.label}
          </button>
        ))}
      </div>

      <button onClick={getRecipesByIngredients}> Search Recipe </button>


      {recipeData && <RecipeListIng recipeData={recipeData} />}
    </div>
  );
};

export default RecipesByIngredients;
