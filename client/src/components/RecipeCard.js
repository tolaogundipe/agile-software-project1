// RecipeCard.js
import React from 'react';
import './RecipeCard.css';

const RecipeCard = ({ title, image, time, difficulty }) => {
  return (
    <div className="recipe-card">
      <img src={image} alt={title} className="recipe-card-image" />
      <div className="recipe-card-content">
        <a href='/recipe-page'><h3>{title}</h3></a>
        <p>Time: {time}</p>
        <p>Difficulty: {difficulty}</p>
      </div>
    </div>
  );
};

export default RecipeCard;
