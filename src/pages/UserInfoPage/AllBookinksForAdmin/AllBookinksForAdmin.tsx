import { toast } from "sonner";
import {
  useReturnACarMutation,
  useSearchBookingsByCarIDandDateQuery,
} from "../../../redux/api/BookingManagmentApi/BookingManagmentApi";
import im from "../availablecar image1.webp";
import { useState } from "react";

const AllBookinksForAdmin: React.FC = () => {
  const { data: bookingData } = useSearchBookingsByCarIDandDateQuery(undefined);
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
      <h2>All Bookings</h2>
      <div className="bookings-grid">
        {tableData?.map((booking) => (
          <BookingCard key={booking.key} booking={booking} />
        ))}
      </div>
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BookingCard: React.FC<{ booking: any }> = ({ booking }) => {
  const [returnCar] = useReturnACarMutation();
  const [formData, setFormData] = useState({
    time: "",
  });

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    const toastId = toast.loading("Booking.....");
    e.preventDefault();
    try {
      const userInfo = {
        bookingId: booking.key,
        endTime: formData.time,
      };

      const res = await returnCar(userInfo);
      console.log("Papon booked successfully");
      console.log(userInfo);
      console.log(res);

      toast.success("Successfully turn off booking", {
        id: toastId,
        duration: 3000,
      });
    } catch (err) {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };
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
      {true && (
        <form className="booking-form" onSubmit={handleSubmit}>
          <h3>Turn end This Booking ? </h3>
          <div>
            <label htmlFor="time">Time:</label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default AllBookinksForAdmin;
