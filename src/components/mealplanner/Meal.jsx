import React, { useState, useEffect } from "react";

export default function Meal({ meal }) {
  const [imageUrl, setImageUrl] = useState("");

  //const API_KEY = "33e71d5b3fa0499f892952e41360671a"; // sharipaigul
  const API_KEY = "7c570415bf7948e8a71509f9598ddebe"; // nuedukz

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=${API_KEY}&includeNutrition=false`
    )
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.image);
      })
      .catch(() => {
        console.log("error");
      });
  }, [meal.id]);

  return (
    <div>
{/*     
      <h1>{meal.title}</h1>
      <img src={imageUrl} alt="recipe" />

      <ul className="instructions">
        <li>Preparation time: {meal.readyInMinutes} minutes</li>
        <li>Number of servings: {meal.servings}</li>
      </ul> */}
      {/* <a href={meal.sourceUrl}>Go to Recipe</a> */}
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="card-group text-centered">
              <div class="card shadow-lg p-3 m-3 bg-white rounded h-100 text-center">
                <img class="card-img-top" src={imageUrl} alt="Card image cap" />
                <div class="card-body">
                  <h4 class="card-title ">{meal.title}</h4>
                  <p class="card-text">
                    <ul className="instructions">
                      <li>Preparation time: {meal.readyInMinutes} minutes</li>
                      <li>Number of servings: {meal.servings}</li>
                    </ul>
                  </p>
                  <button class= "btn btn-info">
                    Recipe Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
