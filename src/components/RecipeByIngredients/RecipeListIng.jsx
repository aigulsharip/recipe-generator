import React, { useState, useEffect } from "react";


const RecipeListIng = ({ recipeData }) => {
  const [mealInfo, setMealInfo] = useState("");
  const API_KEY = "33e71d5b3fa0499f892952e41360671a"; // sharipaigul
  //const API_KEY = "7c570415bf7948e8a71509f9598ddebe"; // nuedukz

  const getRecipe = ({ id }) => {
    fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}&includeNutrition=false`
    )
      .then((response) => response.json())
      .then((data) => {
        //   setMealInfo(data);
        console.log(data.results.id);
      })
      .catch(() => {
        console.log("error");
      });
  };

  const getRecipes = () => {
    // https://api.spoonacular.com/recipes/informationBulk?ids=715538,716429

    let generateIDs = "";
    recipeData.forEach((element) => {
      generateIDs += element.id + ",";
    });

    fetch(
      `https://api.spoonacular.com/recipes/informationBulk?apiKey=${API_KEY}&ids=${generateIDs}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealInfo(data);
        console.log(data);
      })
      .catch(() => {
        console.log("error");
      });
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div>
      <article>
        {recipeData &&
          recipeData.map((recipe) => {
            return (
              <div key={recipe.id} className = "recipeCard">
                <h2>{recipe.title}</h2>
                <img src={recipe.image} alt={recipe.title}></img>

                {mealInfo &&
                  mealInfo.map((meal) => {
                    if (recipe.id === meal.id) {
                      return (
                        <ul>
                          <li>
                            Preparation time: {meal.readyInMinutes} minutes
                          </li>
                          <li>Number of servings: {meal.servings}</li>
                        </ul>
                      );
                    } else {
                      return <></>;
                    }
                  })}
              </div>
            );
          })}
      </article>
    </div>
  );
};

export default RecipeListIng;
