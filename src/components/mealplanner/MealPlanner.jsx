import React, { useState } from "react";
import MealList from "./MealList";
import "./mealplanner.css";

const MealPlanner = () => {
  const [mealData, setMealData] = useState();
  const [calories, setCalories] = useState(2000);
  //const API_KEY = "33e71d5b3fa0499f892952e41360671a"; // sharipaigul
  //const API_KEY = "7c570415bf7948e8a71509f9598ddebe"; // nuedukz
  const API_KEY = "514706b6799f4d3586354e0d7c30ac5e"; //mailru


  function handleChange(event) {
    setCalories(event.target.value);
  }
  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=${API_KEY}&timeFrame=day&targetCalories=${calories}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
        console.log(data);
      })
      .catch(() => {
        console.log("Error");
      });
  }
  return (
    <div className="App">
      <div class="card text-center mt-3">
        <div class="card-header"><h3>Meal planner for day</h3></div>
        <div class="card-body">
          
          <p class="card-text">
            Please enter the maximum number of calories 
          </p>
         
          <section className="controls">
            <input
              type="number"
              placeholder="Enter calories (e.g 2000)"
              onChange={handleChange}
            ></input>
          </section>

          <button className="btn btn-primary" onClick={getMealData}>
            {" "}
            Get Daily Meal
          </button>
        </div>
      </div>

      {mealData && <MealList mealData={mealData} />}
    </div>
  );
};

export default MealPlanner;
