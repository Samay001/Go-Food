import React from "react";
import PropTypes from "prop-types";
import "./style/foodDetails.css";
import {FiArrowRight } from 'react-icons/fi';

const FoodDetails = ({ food }) => {
  return (
    <div className="food-item">
      <span className="container1">
        <img src={food.strMealThumb} alt={food.strMeal} className="food-image" />
      </span>
      <span className="container2">
        <div className="partition1">
          <span><h3>{food.strMeal}</h3></span>
          <span><p>$8.45</p></span>
        </div>
        <div className="partition2">
          <span><h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5></span>
          <span><button>Shop Now <FiArrowRight className="dropdown-icon" /></button></span>
        </div>
      </span>
    </div>
  );
};

FoodDetails.propTypes = {
  food: PropTypes.object.isRequired,
};

export default FoodDetails;