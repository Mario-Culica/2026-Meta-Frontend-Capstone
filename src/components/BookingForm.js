import React, { useState } from "react";

function BookingForm() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Table booked for ${name} on ${date} at ${time} for ${guests} guests.`);
    // aici poți adăuga logica de trimitere la server / localStorage
  };

  return (
    <section className="booking-form">
      <h2>Book a Table</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            value={date}
            required
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <label>
          Time:
          <input
            type="time"
            value={time}
            required
            onChange={(e) => setTime(e.target.value)}
          />
        </label>
        <label>
          Guests:
          <input
            type="number"
            min="1"
            max="10"
            value={guests}
            required
            onChange={(e) => setGuests(e.target.value)}
          />
        </label>
        <button type="submit">Reserve Table</button>
      </form>
    </section>
  );
}

export default BookingForm;