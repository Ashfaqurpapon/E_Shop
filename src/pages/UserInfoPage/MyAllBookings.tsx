import React from "react";
import { useGetMyBookingsQuery } from "../../redux/api/UserManagemntsApi/UserManagemntsApi";
import "./MyAllBookings.css";
import im from "./availablecar image1.webp";

const MyAllBookings: React.FC = () => {
  const { data: bookingData } = useGetMyBookingsQuery(undefined);

  const tableData = bookingData?.data?.map((booking) => {
    const {
      _id,
      createdAt,
      date,
      startTime,
      endTime,
      totalCost,
      updatedAt,
      carId,
      user,
    } = booking;

    return {
      key: _id,
      carName: carId.name,
      carDescription: carId.description,
      carColor: carId.color,
      carFeatures: carId.features,
      carPricePerHour: carId.pricePerHour,
      carStatus: carId.status,
      carIsElectric: carId.isElectric,
      carIsDeleted: carId.isDeleted,
      carCreatedAt: carId.createdAt,
      carUpdatedAt: carId.updatedAt,
      createdAt,
      date,
      startTime,
      endTime,
      totalCost,
      updatedAt,
      // Assuming 'image' is the property in carId that holds the image URL
      userName: user.name,
      userEmail: user.email,
      userPhone: user.phone,
      userAddress: user.address,
    };
  });

  return (
    <div className="my-all-bookings-page">
      <h2>My All Bookings</h2>
      <div className="bookings-grid">
        {tableData?.map((booking) => (
          <BookingCard key={booking.key} booking={booking} />
        ))}
      </div>
    </div>
  );
};

const BookingCard: React.FC<{ booking: any }> = ({ booking }) => {
  return (
    <div className="booking-card">
      <h3>{booking.carName}</h3>
      <img src={im} alt={booking.carName} className="car-image" />
      <p>{booking.carDescription}</p>
      <p>
        <strong>Color:</strong> {booking.carColor}
      </p>
      <p>
        <strong>Features:</strong> {booking.carFeatures.join(", ")}
      </p>
      <p>
        <strong>Price per Hour:</strong> ${booking.carPricePerHour}
      </p>
      <p>
        <strong>Status:</strong> {booking.carStatus}
      </p>
      <p>
        <strong>Electric:</strong> {booking.carIsElectric ? "Yes" : "No"}
      </p>

      <p>
        <strong>Date:</strong> {new Date(booking.date).toLocaleDateString()}
      </p>
      <p>
        <strong>Start Time:</strong> {booking.startTime}
      </p>
      <p>
        <strong>Total Cost:</strong> ${booking.totalCost}
      </p>
      <p>
        <strong>Booked by:</strong> {booking.userName}
      </p>
      <p>
        <strong>Email:</strong> {booking.userEmail}
      </p>
      <p>
        <strong>Phone:</strong> {booking.userPhone}
      </p>
      <p>
        <strong>Address:</strong> {booking.userAddress}
      </p>
    </div>
  );
};

export default MyAllBookings;
