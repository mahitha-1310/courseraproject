import { render, screen, fireEvent } from '@testing-library/react';
import BookingPage from './components/BookingPage';
import React from 'react';
import BookingForm from './components/BookingForm';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ConfirmedBooking from './components/ConfirmedBooking';
import Specials from './components/Specials';

test('header in booking form', () => {
  render(<Specials/>)
  const heading = screen.getByText("Our Specials");
  expect(heading).toBeInTheDocument();
})

describe('BookingForm', () => {
  it('should call updateTimes with the selected date', () => {
    const mockUpdateTimes = jest.fn();
    render(
      <BookingForm availableTimes={['17:00', '18:00']} updateTimes={mockUpdateTimes} />
    );
    const dateInput = screen.getByLabelText(/Choose date/i);
    const selectedDate = '2024-09-15';
    fireEvent.change(dateInput, { target: { value: selectedDate } });
    expect(mockUpdateTimes).toHaveBeenCalledWith(selectedDate);
  });
});


describe('ConfirmedBooking Component', () => {
  test('navigates to the home page when "Back to Home" button is clicked', () => {
    render(
      <MemoryRouter initialEntries={['/confirmed-booking']}>
        <Routes>
          <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
          <Route path="/" element={<div>Home Page</div>} />
        </Routes>
      </MemoryRouter>
    );

    const backButton = screen.getByText(/Back to Home/i);

    fireEvent.click(backButton);

    expect(screen.getByText(/Home Page/i)).toBeInTheDocument();
  });
});

