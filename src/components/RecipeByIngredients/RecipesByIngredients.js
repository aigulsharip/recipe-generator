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
import RecipeCard from "./RecipeCard";


const API_KEY = "33e71d5b3fa0499f892952e41360671a"; // sharipaigul
//const API_KEY = "7c570415bf7948e8a71509f9598ddebe"; // nuedukz
//const API_KEY = "514706b6799f4d3586354e0d7c30ac5e"; //mailru


const RecipesByIngredients = () => {
  const [recipeData, setRecipeData] = useState([]);
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
          <div className="card text-center">
            <div className="card-header ">
              <h3>Find recipes by your ingredients here</h3>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div style={{ minHeight: "200px" }} className="card">
                  <div className="card-body border-0">
                    <h6 className="card-title">
                      Tell us what ingredients you have
                    </h6>

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
                      className="btn btn-primary mt-3"
                      onClick={handleAddIngredients}
                    >
                      Add Ingredient
                    </button>
                    <br />
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div style={{ minHeight: "200px" }} className="card">
                  <div className="card-body">
                    <h6 className="card-title">Your ingredients: </h6>
                    <div>
                      {ings.length !== 0 ? (
                        <div>
                          {ings.map((ingredient) => (
                            <Chip
                              key={ingredient.key}
                              color="success"
                              onDelete={() =>
                                handleDeleteIngredients(ingredient)
                              }
                              label={ingredient.label}
                            />
                          ))}
                          <br />

                          <a
                            href="#"
                            className="btn btn-primary mt-3"
                            onClick={getRecipesByIngredients}
                          >
                            Search Recipe
                          </a>
                        </div>
                      ) : (
                        <div>
                          <h6 className="text-muted">No ingredients</h6>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="col-2"></div>
      </div>

      <br />

      <br />

      <div className="container" >
        <h1>Popular Ingredients</h1>
        <div style = {{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gridColumnGap: "0.5rem", gridRowGap:"0.5rem", margin: "1rem"}}>
        {popularIngredients.map((chipToAdd) => (
        <Chip
          key={chipToAdd.key}
          color="primary"
          deleteIcon={<DoneIcon />}
          onDelete={() => handleAddIngredientsFromList(chipToAdd)}
          label={chipToAdd.label}
        />
      ))}
      </div>
      <RecipeCard recipeData={recipeData} />
      </div>

      

      
    </div>
  );
};


export default RecipesByIngredients;
