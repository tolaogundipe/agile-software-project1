// RecipeCard.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./RecipeCard.css";

const RecipeCard = ({ id, title, image, time, difficulty }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/recipe/${id}`);
  };

  return (
    <div className="recipe-card" onClick={handleClick}>
      <img src={image} alt={title} className="recipe-card-image" />
      <div className="recipe-card-content">
        <h3>{title}</h3>
        <p>Time: {time} minutes</p>
        <p>Difficulty: {difficulty}</p>
      </div>
    </div>
  );
};

export default RecipeCard;
