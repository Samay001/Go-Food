import React, { useEffect, useState } from "react";
import "./home.css";
import Header from "../components/header";
import img from "../assets/main2.png";
import FoodDetails from "../components/foodDetails";
import axios from "axios";
import leaf from "../assets/leaf.png";
import lemon from "../assets/lemon.avif";
import CustomBtn from "../components/customButton";
import {FiArrowRight } from 'react-icons/fi';

const Home = () => {
  const [category, setCategory] = useState("beef");
  const [foodItems, setFoodItems] = useState([]);

  const handleCategory = (e) => {
    const buttons = document.querySelectorAll('.cus-btn');
    buttons.forEach(button => {
      button.classList.remove('active');
    });
    setCategory(e.target.innerText.trim());
    e.target.classList.add('active');
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
      setFoodItems(response.data.meals);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <div className="container-home">
      <Header />
      <div className="flex-box-home">
        <div className="text-section">
          <div className="heading-home">
            <h3 className="discount-text">Discount up to 20%</h3>
            <h1 className="main-text">
              Buy Fresh And Organic Grocery Food
              <span className="rounded-rectangle">
                <img
                  src={lemon}
                  alt="Grocery Image" 
                  className="fruit-image"
                />
              </span>
            </h1>
            <img src={leaf} alt="main" className="responsive-image-leaf1" />
            <h5 className="description-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h5>
            <span className="custom-span">
              <button className="custom-button1">Shop Now<FiArrowRight className="dropdown-icon" /></button>
              <div className="number-container">
                <div className="number-box">
                  <div className="number">35k +</div>
                  <div className="user-text">Users</div>
                </div>
                <div className="number-box">
                  <div className="number">18k +</div>
                  <div className="user-text">Products</div>
                </div>
              </div>
            </span>
          </div>
        </div>
        <div className="image-section">
          <img src={img} alt="main" className="responsive-image" />
          <img src={leaf} alt="main" className="responsive-image-leaf2" />
          <img src={leaf} alt="main" className="responsive-image-leaf3" />
        </div>
      </div>
      <div className="container-category">
        <div className="category-heading">
          <h4>Shop by Category</h4>
        </div>
        <div className="category-heading">
          <h1>Top Category Of Organic Food</h1>
        </div>
        <div className="category-buttons">
          <CustomBtn className="cus-btn" btnName="Beef" onClick={handleCategory} />
          <CustomBtn className="cus-btn" btnName="Breakfast" onClick={handleCategory} />
          <CustomBtn className="cus-btn" btnName="Chicken" onClick={handleCategory} />
          <CustomBtn className="cus-btn" btnName="Dessert" onClick={handleCategory} />
          <CustomBtn className="cus-btn" btnName="Seafood" onClick={handleCategory} />
        </div>
        <div className="container">
          {foodItems.slice(0, 6).map((item) => (
            <FoodDetails key={item.idMeal} food={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
