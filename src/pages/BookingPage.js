import React, { useState, useEffect } from "react";
import BookingForm from "../components/BookingForm";
import { fetchAPI, submitAPI } from "../api";

function BookingPage() {
  const [availableTimes, setAvailableTimes] = useState([]);

  useEffect(() => {
    setAvailableTimes(fetchAPI(new Date()));
  }, []);

  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) alert("Booking successful!");
    else alert("Booking failed, please try again.");
  };

  return (
    <div>
      <h2 className="text-center text-2xl font-bold mb-6">Book Your Table</h2>
      <BookingForm availableTimes={availableTimes} submitForm={submitForm} />
    </div>
  );
}

export default BookingPage;
