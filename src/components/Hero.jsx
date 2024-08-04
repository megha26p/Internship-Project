import React from 'react';
import './Hero.css';  // Ensure you have the corresponding CSS file
import One from '../assets/Hero1.png';
import Two from '../assets/Hero2.png';
import Feature from "./ProductsPage";
import Profile from "./Profile";
import Contact from "./Contact";

const Homepage = () => {
  return (
    <>
      <div className="homepage-container">
        <div className="text-section">
          <h1>'As interesting <br /> as a plant'</h1>
        </div>
        <div className="image-section">
          <img src={Two} alt="Plant 2" className="image-right" />
          <img src={One} alt="Plant 1" className="image-left" />
        </div>
      </div>
      <Feature/>
      <Profile/>
      <Contact/>
    </>
  );
};

export default Homepage;
