import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookingForm from './components/BookingForm';
import BookingList from './components/BookingList';
import './App.css';

// Import images (place these in /src/assets/)
import logo from './assets/logo.jpg';
// import heroImage from './assets/hero.jpg';

function Home() {
  return (
    <div className="home-container">
      <div className="hero">
        <div className="hero-text">
          <h1>Welcome to Little Lemon</h1>
          <p>Your favorite place to book a cozy table!</p>
          <Link to="/reserve" className="btn">Reserve Now</Link>
        </div>
      </div>
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
      {/* Navbar with logo */}
      <header className="navbar">
        <Link to="/">
          <img src={logo} alt="Little Lemon Logo" className="logo" />
        </Link>
        <Navbar />
      </header>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookings" element={<BookingList bookings={bookings} />} />
        <Route path="/reserve" element={<BookingForm addBooking={addBooking} />} />
      </Routes>
    </Router>
  );
}

export default App;
