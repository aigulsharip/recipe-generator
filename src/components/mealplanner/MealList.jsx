import React from 'react';
import Meal from './Meal';


export default function MealList({mealData}) {
    const nutrients = mealData.nutrients;


    return (
        <div>
            <section className='nurtients'>
                <h1>Macros</h1>
                <ul>
                    <li>Calories: {nutrients.calories.toFixed(0)}</li>
                    <li>Carbohydrates: {nutrients.carbohydrates.toFixed(0)}</li>
                    <li>Fat: {nutrients.fat.toFixed(0)}</li>
                    <li>Protein: {nutrients.protein.toFixed(0)}</li>

                </ul>
            </section>

            <section className="meals">
                {mealData.meals.map((meal) =>{return <Meal key = {meal.id} meal ={meal} />})}

            </section>

        </div>

    )
} 