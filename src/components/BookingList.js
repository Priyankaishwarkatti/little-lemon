import React from 'react';

function BookingList({ bookings }) {
  return (
    <div className="booking-list">
      <h2>Current Bookings</h2>
      {bookings.length === 0 ? (
        <p>No bookings yet!!</p>
      ) : (
        bookings.map((booking) => (
          <div className="booking-item" key={booking.id}>
            <h3>{booking.name}</h3>
            <p>{booking.date} at {booking.time}</p>
            <p>Guests: {booking.guests}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default BookingList;
