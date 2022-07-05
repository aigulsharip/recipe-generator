import React, { useState } from "react";
import RecipeListIng from "./RecipeListIng";
import { v4 as myNewID } from "uuid";
import popularIngredients from "../popularIngredients/popularIngredients";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import DoneIcon from "@mui/icons-material/Done";

import allIngredients from "../popularIngredients/allIngredients";

const API_KEY = "33e71d5b3fa0499f892952e41360671a"; // sharipaigul
//const API_KEY = "7c570415bf7948e8a71509f9598ddebe"; // nuedukz

const RecipesByIngredients = () => {
  const [recipeData, setRecipeData] = useState("");
  const [ingredient, setIngredient] = useState(null);
  const [ings, setIngs] = useState([]);


  const getEachIngredient = (event) => {
    setIngredient(event.target.value);
    console.log(event.target.value);
  };

  function addEachIngredient(event, value) {
    //setIngredient(value);
    console.log(value);

    //setIngredient(event.target.value);
    //console.log(event.target.value);
  }

  const handleAddIngredients = () => {
    const newIngs = { key: myNewID(), label: ingredient.name };
    /*
    var newIngs;
    if (ingredient.key == null) {
      newIngs = { key: myNewID(), label: ingredient.name };
    } else {
      newIngs = { key: ingredient.key, label: ingredient.name };
    }
    */

    //console.log(ingredients)
    setIngs(() => [...ings, newIngs]);
    //setIngs(() => [...ings, ingredient]);
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
      <h1 className="">Searching by Ingredients</h1>
     
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
        renderInput={(params) => <TextField {...params} label="Ingredients" />}
      />

      {/* <input  
        value={ingredient}
        type="text"
        placeholder="Enter Ingredient"
        onChange={getEachIngredient}
      /> */}

      <button onClick={handleAddIngredients}>Add Ingredient</button>

      <h2>Your ingredients</h2>
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

      <br />
      <br />

      <button onClick={getRecipesByIngredients}> Search Recipe </button>

      <br />

      {recipeData && <RecipeListIng recipeData={recipeData} />}
    </div>
  );
};

export default RecipesByIngredients;
