import React from 'react';
import '../css/HeroContent.css';
import heroimage from "../assets/heroimage.jpg"
import { Link } from 'react-router-dom';

const HeroContent = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-heading">Little Lemon</h1>
        <h2 className="hero-subheading">Chicago</h2>
        <p className="hero-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <Link to="/booking"><button className="button">Reserve a Table</button></Link>
      </div>
      <div className="hero-image">
        <img src={heroimage} alt="Hero" />
      </div>
    </section>
  );
};

export default HeroContent;
