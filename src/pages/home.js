import React, { useEffect, useState } from "react";
import "./home.css";
import Header from "../components/header";
import img from "../assets/main2.png";
import FoodDetails from "../components/foodDetails";
import axios from "axios";
import leaf from "../assets/leaf.png";

const Home = () => {
  const [category, setCategory] = useState("beef");
  const [foodItems, setFoodItems] = useState([]);

  const handleCategory = (e) => {
    setCategory(e.target.innerText.trim());
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
      setFoodItems(response.data.meals);
    } 
    catch (error) {
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
            <h1 className=" main-text">
              Buy Fresh And Organic Grocery Food
            </h1>
            <h5 className="description-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h5>
            <span className="custom-span">
              <button className="custom-button">Shop Now</button>
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
          <img src={leaf} alt="main" className="responsive-image-leaf" />
        </div>
        
      </div>
      <div className="container-category">
        <div className="category-heading">
          <h3>Shop by Categories</h3>
        </div>
        <div className="category-heading">
          <h1>Top Category Of Organic Food</h1>
        </div>
        <div className="category-buttons">
          <button className="category-button" onClick={handleCategory}>beef</button>
          <button className="category-button" onClick={handleCategory}>breakfast</button>
          <button className="category-button" onClick={handleCategory}>chicken</button>
          <button className="category-button" onClick={handleCategory}>dessert</button>
          <button className="category-button" onClick={handleCategory}>seafood</button>
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
