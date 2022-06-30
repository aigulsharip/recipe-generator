import React, { useState, useEffect } from "react";

export default function Meal({ meal }) {
  const [imageUrl, setImageUrl] = useState("");

  const API_KEY = "33e71d5b3fa0499f892952e41360671a"; // sharipaigul
  //const API_KEY = "7c570415bf7948e8a71509f9598ddebe"; // nuedukz

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
    <article>
      <h1>{meal.title}</h1>
      <img src={imageUrl} alt="recipe" />

      <ul>
        <li>Preparation time: {meal.readyInMinutes} minutes</li>
        <li>Number of servings: {meal.servings}</li>
      </ul>

      <a href={meal.sourceUrl}>Go to Recipe</a>
    </article>
  );
}
