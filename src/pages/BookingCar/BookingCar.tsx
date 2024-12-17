import React, { useState } from "react";
import "./BookingCar.css"; // Import the CSS file

type Car = {
  id: number;
  name: string;
  image: string;
  description: string;
  price: string;
};

const BookingCar: React.FC = () => {
  const [location, setLocation] = useState<string>("");
  const [pickUpDate, setPickUpDate] = useState<string>("");
  const [dropOffDate, setDropOffDate] = useState<string>("");
  const [carType, setCarType] = useState<string>("");
  const [availableCars, setAvailableCars] = useState<Car[]>([]);

  const Car = [
    {
      id: 1,
      name: "Toyota Camry",
      image: "https://via.placeholder.com/150",
      description: "A reliable and comfortable sedan.",
      price: "$50/day",
    },
    {
      id: 2,
      name: "BMW 3 Series",
      image: "https://via.placeholder.com/150",
      description: "A luxury car with top-notch performance.",
      price: "$100/day",
    },
    {
      id: 3,
      name: "Ford Mustang",
      image: "https://via.placeholder.com/150",
      description: "An iconic car with powerful performance.",
      price: "$120/day",
    },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Logic to filter cars based on search criteria
    // For now, we'll just display the dummy cars
    setAvailableCars(Car);
  };

  return (
    <div className="booking-car-container">
      <h2>Book Your Car</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter your location"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="pickUpDate">Pick-Up Date:</label>
          <input
            type="date"
            id="pickUpDate"
            value={pickUpDate}
            onChange={(e) => setPickUpDate(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="dropOffDate">Drop-Off Date:</label>
          <input
            type="date"
            id="dropOffDate"
            value={dropOffDate}
            onChange={(e) => setDropOffDate(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="carType">Car Type:</label>
          <select
            id="carType"
            value={carType}
            onChange={(e) => setCarType(e.target.value)}
            required
          >
            <option value="">Select Car Type</option>
            <option value="Economy">Economy</option>
            <option value="Luxury">Luxury</option>
            <option value="SUV">SUV</option>
            <option value="Convertible">Convertible</option>
          </select>
        </div>

        <button type="submit" className="booking-submit-btn">
          Search Cars
        </button>
      </form>
      {/* Display available cars */}

      {availableCars.length > 0 && (
        <div className="available-cars">
          <h3>Available Cars</h3>
          <div className="cars-list">
            {availableCars.map((car) => (
              <div key={car.id} className="car-card">
                <img src={car.image} alt={car.name} />
                <h4>{car.name}</h4>
                <p>{car.description}</p>
                <p className="price">{car.price}</p>
                <button className="book-now-btn">Book Now</button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingCar;
