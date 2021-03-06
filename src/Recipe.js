import React from 'react';
import './Recipe.css'

const Recipe = ({title, calories, image, ingredients}) => {

  return (
    <div className="recipe">
      <h1>{title}</h1>
      <img src={image} alt={image}/>
      <p>{calories}</p>
      <ul>
        {
          ingredients.map(ingredient =>(
            <li>{ingredient.text}</li>
          ))
        }
      </ul>

    </div>
  );
}

export default Recipe;
