// src/components/Specials.js
import React from 'react';
import '../css/Specials.css';
import image1 from "../assets/image1.jpg"
import image2 from "../assets/image2.jpg"
import image3 from "../assets/image3.jpg"

const Specials = () => {
  const specials = [
    { imgSrc: image1, title: 'Greek salad', description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ' },
    { imgSrc: image2, title: 'Bruchetta', description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ' },
    { imgSrc: image3, title: 'Lemon Dessert', description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.' },
  ];

  return (
    <section className="specials">
      <h2 className="specials-heading">Our Specials</h2>
      <div className="specials-cards">
        {specials.map((special, index) => (
          <div className="specials-card" key={index}>
            <img src={special.imgSrc} alt={special.title} className="specials-image" />
            <h3 className="specials-title">{special.title}</h3>
            <p className="specials-description">{special.description}</p>
            <b>Order a delivery</b>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Specials;
