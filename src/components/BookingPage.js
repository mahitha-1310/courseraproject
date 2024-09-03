import React,{useReducer, useEffect} from 'react';
import BookingForm from './BookingForm';
import { useNavigate } from 'react-router-dom';

const seededRandom = function (seed) {
  var m = 2**35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
      return (s = s * a % m) / m;
  };
}

const fetchAPI = function(date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for(let i = 17; i <= 23; i++) {
      if(random() < 0.5) {
          result.push(i + ':00');
      }
      if(random() < 0.5) {
          result.push(i + ':30');
      }
  }
  return result;
};

const submitAPI = function(formData) {
  return true;
};


const initialState = {
  timeSlots: [],
};

const timesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return { ...state, timeSlots: action.payload };
    default:
      return state;
  }
};

function BookingPage() {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(timesReducer, initialState);

  useEffect(() => {
    const today = new Date();
    const times= fetchAPI(today)
    dispatch({ type: 'UPDATE_TIMES', payload: times });

  }, []);

  const updateTimes = (date) => {
    const selectedDate = new Date(date);
    const times = fetchAPI(selectedDate);
    console.log(times)
    dispatch({ type: 'UPDATE_TIMES', payload: times });
  };

  const handleSubmit = (formData) => {
    const result = submitAPI(formData)
    console.log("result" , result)
      if (result === true) {
        // alert('Reservation successful!');
        navigate('/confirmed');
      } else {
        alert('Reservation failed.');
      }
    };

  return (
    <div>
      <h1>Book a Table</h1>
      <BookingForm onSubmit={handleSubmit} availableTimes={state.timeSlots} updateTimes={updateTimes}/>
    </div>
  );
}

export default BookingPage;
