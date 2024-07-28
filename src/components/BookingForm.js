import React, { useState } from 'react';

function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    guests: 1,
    email: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.date) formErrors.date = "Date is required";
    if (!formData.time) formErrors.time = "Time is required";
    if (!formData.email) formErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) formErrors.email = "Email is invalid";
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      alert('Table reserved successfully!');
      // handle successful booking logic
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit} aria-label="Booking Form">
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        aria-required="true"
      />
      {errors.name && <p>{errors.name}</p>}

      <label htmlFor="date">Date</label>
      <input
        type="date"
        id="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        aria-required="true"
      />
      {errors.date && <p>{errors.date}</p>}

      <label htmlFor="time">Time</label>
      <input
        type="time"
        id="time"
        name="time"
        value={formData.time}
        onChange={handleChange}
        aria-required="true"
      />
      {errors.time && <p>{errors.time}</p>}

      <label htmlFor="guests">Number of Guests</label>
      <input
        type="number"
        id="guests"
        name="guests"
        value={formData.guests}
        onChange={handleChange}
        min="1"
        max="10"
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        aria-required="true"
      />
      {errors.email && <p>{errors.email}</p>}

      <button type="submit">Reserve a Table</button>
    </form>
  );
}

export default BookingForm;
