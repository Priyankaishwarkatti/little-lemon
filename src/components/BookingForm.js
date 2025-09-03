import React, { useState } from "react";

function BookingForm({ availableTimes, submitForm }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date || !time || guests < 1) {
      alert("Please fill all fields correctly!");
      return;
    }
    submitForm({ date, time, guests, occasion });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-xl space-y-4"
    >
      <label className="block">
        Date:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
      </label>

      <label className="block">
        Time:
        <select
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full border p-2 rounded"
          required
        >
          <option value="">Select Time</option>
          {availableTimes.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>

      <label className="block">
        Number of guests:
        <input
          type="number"
          min="1"
          max="10"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
      </label>

      <label className="block">
        Occasion:
        <select
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          className="w-full border p-2 rounded"
        >
          <option value="">Select Occasion</option>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
      </label>

      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 rounded-lg"
      >
        Book Now
      </button>
    </form>
  );
}

export default BookingForm;
