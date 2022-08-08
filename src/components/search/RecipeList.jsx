import React, { useState, useEffect } from "react";
import Link from "react-dom";

const RecipeList = ({ recipeData }) => {
  const [mealInfo, setMealInfo] = useState("");
  const API_KEY = "33e71d5b3fa0499f892952e41360671a"; // sharipaigul
  //const API_KEY = "7c570415bf7948e8a71509f9598ddebe"; // nuedukz

  // const getRecipe = ({ id }) => {
  //   fetch(
  //     `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}&includeNutrition=false`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       //   setMealInfo(data);
  //       console.log(data.results.id);
  //     })
  //     .catch(() => {
  //       console.log("error");
  //     });
  // };

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

  // useEffect(() => {
  //   getRecipes();
  // }, []);

  return (
    <div
      class="card-group"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gridAutoRows: "55 0px",
        gridColumnGap: "1rem",
        gridRowGap: "1rem",
      }}
    >
      {console.log(recipeData)}
      {recipeData &&
        recipeData.length > 0 &&
        recipeData.map((recipe) => (
          <div
            key={recipe.id}
            className="card shadow-lg p-3 m-3 bg-white rounded h-100 text-center"
          >
            <img
              className="card-img-top"
              src={recipe.image}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">{recipe.title}</h5>
              {mealInfo &&
                mealInfo.map((meal) => {
                  if (recipe.id === meal.id) {
                    return (
                      <ul>
                        <li>Preparation time: {meal.readyInMinutes} minutes</li>
                        <li>Number of servings: {meal.servings}</li>
                      </ul>
                    );
                  } else {
                    return <></>;
                  }
                })}

              <button class="btn btn-info">Recipe Details</button>

              {/* <Link  to = {`/details/${recipe.id}`} className="btn btn-info">Recipe Details</Link> */}
            </div>
          </div>
        ))}
    </div>
  );
};

export default RecipeList;
