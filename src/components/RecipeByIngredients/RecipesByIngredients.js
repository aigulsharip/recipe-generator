import React, { useState } from "react";
import RecipeListIng from "./RecipeListIng";
import { v4 as myNewID } from "uuid";
import popularIngredients from "../popularIngredients/popularIngredients";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import DoneIcon from "@mui/icons-material/Done";
import "./recipesbyings.css";
import allIngredients from "../popularIngredients/allIngredients";

//const API_KEY = "33e71d5b3fa0499f892952e41360671a"; // sharipaigul
const API_KEY = "7c570415bf7948e8a71509f9598ddebe"; // nuedukz

const RecipesByIngredients = () => {
  const [recipeData, setRecipeData] = useState("");
  const [ingredient, setIngredient] = useState(null);
  const [ings, setIngs] = useState([]);

  const handleAddIngredients = () => {
    const newIngs = { key: myNewID(), label: ingredient.name };
    setIngs(() => [...ings, newIngs]);
  };

  const handleAddIngredientsFromList = (chipToAdd) => {
    console.log(chipToAdd);
    setIngs(() => [...ings, chipToAdd]);
  };
  const handleDeleteIngredients = (chipToDelete) => {
    setIngs((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  let ingredientsList = "";
  ings.forEach((ingredient) => {
    ingredientsList += ingredient.label + ",";
  });
  console.log(ingredientsList);

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

  return (
    <div>
      <div className="row mt-3">
        <div className="col-2"></div>
        <div className="col-8">
          <div class="card text-center bg-info">
            <div class="card-header ">
              <h1>Find recipes by your ingredients here</h1>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <div class="card">
                  <div class="card-body border-0">
                    <h5 class="card-title">
                      Tell us what ingredients you have
                    </h5>

                    <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={allIngredients}
                      getOptionLabel={(option) => option.name}
                      onChange={(event, value) => {
                        setIngredient(value);
                        console.log(value);
                      }}
                      freeSolo
                      renderInput={(params) => (
                        <TextField {...params} label="Ingredients" />
                      )}
                    />
                    <button
                      className="btn btn-primary "
                      onClick={handleAddIngredients}
                    >
                      Add Ingredient
                    </button>

                    <button
                      className="btn btn-success"
                      onClick={getRecipesByIngredients}
                    >
                      Search Recipe
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Your ingredients: </h5>
                    <div>
                      {ings.length !== 0 ?
                       <div>
                       {ings.map((ingredient) => (
                        <Chip
                          key={ingredient.key}
                          color="success"
                          onDelete={() => handleDeleteIngredients(ingredient)}
                          label={ingredient.label}
                        />
                      ))}
                       </div>
                       
                      :
                      <h6 className="text-muted">No ingredients</h6>}
                        
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="card-footer text-muted">Any Footer</div>
          </div>
        </div>
        <div className="col-2"></div>
      </div>

      <br />

      <br />

      <h1>The List of Popular Ingredients</h1>

      {popularIngredients.map((chipToAdd) => (
        <Chip
          key={chipToAdd.key}
          color="primary"
          deleteIcon={<DoneIcon />}
          onDelete={() => handleAddIngredientsFromList(chipToAdd)}
          label={chipToAdd.label}
        />
      ))}

      {recipeData && <RecipeListIng recipeData={recipeData} />}
    </div>
  );
};

export default RecipesByIngredients;
