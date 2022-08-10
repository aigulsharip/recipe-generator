import React, { useState } from "react";
import { Outlet } from "react-router-dom";

export const SearchRecipe = () => {
  const [searchItem, setSearchItem] = useState("");
  const [recipeData, setRecipeData] = useState("");
  const API_KEY = "33e71d5b3fa0499f892952e41360671a"; // sharipaigul
  //const API_KEY = "7c570415bf7948e8a71509f9598ddebe"; // nuedukz
  

  return <Outlet />;
};
