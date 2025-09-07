import React, { useState } from 'react';
import '../App.css';

function BookingForm({ addBooking }) {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !date || !time) {
      alert("Please fill all fields!");
      return;
    }

    const newBooking = { id: Date.now(), name, date, time, guests };
    addBooking(newBooking);
    setName('');
    setDate('');
    setTime('');
    setGuests(1);
  };

  return (
    <div class="box">
    <div className="container">
      <h2>Reserve a Table</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" placeholder='Please Enter Your Name' value={name} onChange={(e) => setName(e.target.value)} required />

        <label>Date:</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />

        <label>Time:</label>
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />

        <label>Guests:</label>
        <input type="number" min="1" value={guests} onChange={(e) => setGuests(e.target.value)} required />

        <button type="submit">Book Table</button>
      </form>
    </div>
    </div>
  );
}

export default BookingForm;
