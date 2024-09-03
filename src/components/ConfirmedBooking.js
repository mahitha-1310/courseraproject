import React from 'react';
import { Link } from 'react-router-dom';
import "../css/HeroContent.css"
function ConfirmedBooking() {
  return (
    <>
      <h2>Your booking has been confirmed!</h2>
      <p>Thank you for choosing our service. We look forward to serving you.</p>
      <Link to="/"><button className="button">Back to Home</button></Link>
    </>
  );
}

export default ConfirmedBooking;
