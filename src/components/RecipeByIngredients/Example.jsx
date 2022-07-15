import React from "react";



const Example = () => {
  return (
    <div>
      <div class="card text-center">
        <div class="card-header">Featured</div>
        <div class="row">
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="card-footer text-muted">2 days ago</div>
      </div>

      {/* <div className="main">
        <h1>Find recipes by your ingredients here</h1>
        <div className="main_box">
          <div className="search_box">
            Here is text and input search
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
            <button onClick={handleAddIngredients}>Add Ingredient</button>
            <br />
            <br />
            <button onClick={getRecipesByIngredients}> Search Recipe </button>
          </div>

          <div class="your_ings_box">
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
          </div>
        </div>
      </div>


       */}
    </div>
  );
};

export default Example;
