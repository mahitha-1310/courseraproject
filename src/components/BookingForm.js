import React, { useState } from 'react';
import "../css/BookingForm.css"
function BookingForm({ availableTimes, updateTimes, onSubmit  }) {

  const [formData, setFormData] = useState({
    date: '',
    time: '17:00',
    guests: 1,
    occasion: 'Birthday',
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
    if(id === "date"){
      updateTimes(value)
      console.log(availableTimes)
    }

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    console.log(formData);
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
      <label htmlFor="date">Choose date*</label>
      <input
        type="date"
        id="date"
        value={formData.date}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="time">Choose time</label>
      <select id="time" value={formData.time} onChange={handleInputChange} required>
        {availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={formData.guests}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={formData.occasion} onChange={handleInputChange} required>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input type="submit" value="Make Your Reservation" aria-label="Submit reservation form" />
    </form>
  );
}

export default BookingForm;
