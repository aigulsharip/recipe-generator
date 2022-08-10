import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipeList from "./RecipeList";
import "./searchrecipe.css"

export const SearchedItem = () => {
  const API_KEY = "33e71d5b3fa0499f892952e41360671a"; // sharipaigul

  const { searchItemParam } = useParams();
  const [recipeData, setRecipeData] = useState([]);

  const getRecipes = () => {
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${searchItemParam}`
    )
      .then((response) => response.json())
      .then((data) => {
        setRecipeData(data.results);
        console.log("data.results", data.results);
      })
      .catch(() => {
        console.log("Error");
      });
  };

  useEffect(() => {
    if (searchItemParam) {
      getRecipes();
    }
  }, [searchItemParam]);

  console.log(searchItemParam);
  if (!searchItemParam) return <>Item parameter not found</>;

  return (
    <div className="main">
      <section className="meals">
        {recipeData && <RecipeList recipeData={recipeData} />}
      </section>
    </div>
  );
};
