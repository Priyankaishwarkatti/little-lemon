import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookingForm from './components/BookingForm';
import BookingList from './components/BookingList';
import './App.css';

function Home() {
  return (
    <div className="container">
      <h1>Welcome to Little Lemon</h1>
      <p>Your favorite place to book a cozy table!</p>
    </div>
  );
}

function App() {
  const [bookings, setBookings] = useState([]);

  const addBooking = (newBooking) => {
    setBookings([...bookings, newBooking]);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookings" element={<BookingList bookings={bookings} />} />
        <Route path="/reserve" element={<BookingForm addBooking={addBooking} />} />
      </Routes>
    </Router>
  );
}

export default App;
