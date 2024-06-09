import React from "react";
import PropTypes from "prop-types";
import "./style/foodDetails.css";

const FoodDetails = ({ food }) => {
  return (
    <div className="food-item">
      <img src={food.strMealThumb} alt={food.strMeal} className="food-image" />
      <div className="food-info">
        <h3>{food.strMeal}</h3>
        <button className="add-to-cart-button">Add to Cart</button>
      </div>
    </div>
  );
};

FoodDetails.propTypes = {
  food: PropTypes.object.isRequired,
};

export default FoodDetails;
