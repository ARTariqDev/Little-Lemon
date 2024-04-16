import React, { useState } from 'react';
import styles from './BookingForm.module.css'; // Import CSS Modules

const BookingForm = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  const [mobile, setMobile] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false); // Track booking success

  const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'date':
        setDate(value);
        break;
      case 'time':
        setTime(value);
        break;
      case 'guests':
        setGuests(parseInt(value)); // Convert string to number
        break;
      case 'occasion':
        setOccasion(value);
        break;
      case 'mobile':
        setMobile(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic validation
    if (!date || !time || !guests || !occasion || !mobile) {
      alert('Please fill in all required fields.');
      return;
    }

    console.log('Booking details:', { date, time, guests, occasion, mobile });
    setBookingSuccess(true); // Simulate successful booking
  };

  return (
    <form className={styles.bookingForm} onSubmit={handleSubmit}>
      <h2 className={styles.formTitle}>Make Your Reservation</h2>
      <label htmlFor="res-date">Choose date (required)</label>
      <input
        type="date"
        id="res-date"
        name="date"
        value={date}
        onChange={handleChange}
        className={`${styles.formInput} ${!date && styles.formInputError}`} // Add error class conditionally
        required // All fields are now required
      />
      <label>Choose time (required)</label>
      <div className={styles.timeOptions}>
        {availableTimes.map((timeSlot) => (
          <label key={timeSlot}>
            <input
              type="radio"
              id={`time-${timeSlot}`}
              name="time"
              value={timeSlot}
              checked={time === timeSlot}
              onChange={handleChange}
              className={styles.timeRadio}
              required // All fields are now required
            />
            {timeSlot}
          </label>
        ))}
      </div>
      <label htmlFor="guests">Number of guests (required)</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        name="guests"
        value={guests}
        onChange={handleChange}
        className={`${styles.formInput} ${!guests && styles.formInputError}`} // Add error class conditionally
        required // All fields are now required
      />
      <label htmlFor="occasion">Occasion </label>
      <select id="occasion" name="occasion" value={occasion} onChange={handleChange} className={styles.formInput} optional>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      <label htmlFor="mobile">Mobile Number (required)</label>
      <input
        type="tel" // Specify phone number input type
        id="mobile"
        name="mobile"
        value={mobile}
        onChange={handleChange}
        className={`${styles.formInput} ${!mobile && styles.formInputError}`} // Add error class conditionally
        required // All fields are now required
      />
      <input type="submit" value="Make Your reservation" className={styles.submitButton} />
      {bookingSuccess && <p className={styles.bookingSuccess}>Table Booked!</p>} {/* Display message on success */}
    </form>
  );
};

export default BookingForm;
