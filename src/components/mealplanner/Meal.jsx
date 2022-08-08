import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RecipeDetails from "../RecipeByIngredients/RecipeDetails";

export default function Meal({ meal }) {
  const [imageUrl, setImageUrl] = useState("");

  const API_KEY = "33e71d5b3fa0499f892952e41360671a"; // sharipaigul
  //const API_KEY = "7c570415bf7948e8a71509f9598ddebe"; // nuedukz
  //const API_KEY = "514706b6799f4d3586354e0d7c30ac5e"; //mailru


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
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="card-group text-centered">
              <div className="card shadow-lg p-3 m-3 bg-white rounded h-100 text-center">
                <img className="card-img-top" src={imageUrl} alt="Card image cap" />
                <div className="card-body">
                  <h4 className="card-title ">{meal.title}</h4>
                  <p className="card-text">
                    <ul className="instructions">
                      <li>Preparation time: {meal.readyInMinutes} minutes</li>
                      <li>Number of servings: {meal.servings}</li>
                    </ul>
                  </p>
                  <Link  to = {`/details/${meal.id}`} className="btn btn-info">Recipe Details</Link>

                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
