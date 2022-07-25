import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const [recipeData, setRecipeData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  //const API_KEY = "33e71d5b3fa0499f892952e41360671a"; // sharipaigul
  //const API_KEY = "7c570415bf7948e8a71509f9598ddebe"; // nuedukz
  const API_KEY = "514706b6799f4d3586354e0d7c30ac5e"; //mailru


  useEffect(() => {
    if (recipeId) {
      setLoading(true);
      fetch(
        `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${API_KEY}&includeNutrition=false`
      )
        .then((response) => response.json())
        .then((data) => {
          setRecipeData(data);
          console.log(data);
          setLoading(false);
          setError(false);
        })
        .catch(() => {
          console.log("error");
          setLoading(false);
          setError(true);
        });
    }
  }, [recipeId]);

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error</div>;
  return (
    <div>
      <div>
        <h2 className="text-center">{recipeData.title}</h2>
        <p className="text-right">
          Preparation time: {recipeData.readyInMinutes} minutes Number of
          servings: {recipeData.servings}
        </p>
        <img src={recipeData.image} alt={recipeData.title}></img>

        <p>Gluten-free: {recipeData.glutenFree ? "yes" : "no"}</p>
        <p>Vegan: {recipeData.vegan ? "yes" : "no"}</p>
        <p>Vegatarian: {recipeData.vegetarian ? "yes" : "no"}</p>

        {/* <h5>Ingredients:</h5>
         {recipeData.extendedIngredients.map((ingredients) => (
          <p key={ingredients.id}>
            {ingredients.nameClean} - {ingredients.amount} {ingredients.unit}
          </p>
        ))}
       

        <h5>Instructions:</h5>
        {recipeData.analyzedInstructions[0].steps.map((steps) => (
          <p key={steps.number}>
            {steps.number}. {steps.step}
          </p>
        ))}  */}
      </div>
    </div>
  );
};

export default RecipeDetails;
