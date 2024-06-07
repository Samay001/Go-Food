import React from "react";
import "./home.css";
import Header from "../components/header";
import img from "../assets/main2.png";

const Home = () => {
  return (
    <div className="container-home">
      <Header />
      <div className="flex-box-home">
        <div className="text-section">
          <div className="heading-home">
            <h3 className="discount-text">Discount up to 20%</h3>
            <h1 className="discount-text">Buy Fresh And Organic Grocery Food</h1>
            <h5 className="description-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
        </div>
      </div>
    </div>
  );
};

export default Home;
