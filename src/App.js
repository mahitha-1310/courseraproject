import './App.css';
import BookingPage from './components/BookingPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ConfirmedBooking from './components/ConfirmedBooking';
import HomePage from './components/HomePage';

function App() {
  return (
     <Router>
     <div>
     <Routes>
         <Route exact path="/" element={<HomePage />} />
         <Route exact path="/booking" element={<BookingPage />} />
         <Route exact path="/confirmed" element={<ConfirmedBooking/>}/>
       </Routes>
     </div>
   </Router>

  );
}

export default App;
