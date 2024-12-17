import "./CarDetailsPage.css";
import { useNavigate, useParams } from "react-router-dom";

import {
  useBookACarMutation,
  useGetSingleCarQuery,
} from "../../redux/api/CarManagemntApi/carManagementApi.ts";
import { CarTypes } from "../../types/CarTypes";
import { useState } from "react";
import { Layout } from "antd";
import Sidebar from "../../PHForm/layout/Sidebar";
import NavbarUp from "../HomePage/Navbar/NavbarUp/NavbarUp";
import im from "./availablecar image1.webp";
import { toast } from "sonner";
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentUser, TUser } from "../../redux/features/carAuthSlice";

const CarDetailsPage = () => {
  const { carId } = useParams();
  const navigate = useNavigate();
  const [bookACar] = useBookACarMutation();

  const user = useAppSelector(selectCurrentUser) as TUser;
  let shouldShowBookButton = false;
  if (!user) {
    shouldShowBookButton = true;
  } else {
    shouldShowBookButton = user.role == "user";
  }

  const { data, error, isLoading } = useGetSingleCarQuery(carId as string);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    time: "",
    date: "",
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading car data</div>;
  }

  const fetchedCar = data?.data as CarTypes;

  const car = {
    name: fetchedCar.name,
    description: fetchedCar.description,
    color: fetchedCar.color,
    isElectric: fetchedCar.isElectric,
    features: fetchedCar.features,
    pricePerHour: fetchedCar.pricePerHour,
    status: fetchedCar.status,
    createdAt: fetchedCar.updatedAt,
    updatedAt: fetchedCar.updatedAt,
  };
  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    const toastId = toast.loading("Booking.....");
    e.preventDefault();
    try {
      const userInfo = {
        carId: fetchedCar._id,
        date: formData.date,
        startTime: formData.time,
      };

      const res = await bookACar(userInfo);
      console.log("Limon booked successfully");
      console.log(res);

      toast.success("Successfully booked car", { id: toastId, duration: 3000 });
      navigate(`/cars`);
    } catch (err) {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };

  const bookButtonPressed = () => {
    if (!user) {
      navigate("/carSignIn");
    }
    setShowForm(!showForm);
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <Sidebar />
      <NavbarUp />
      <div className="car-details-page">
        <h2>{car.name}</h2>
        <div className="car-details-container">
          <img src={im} alt={car.name} />
          <div className="car-info">
            <p>
              <strong>Description:</strong> {car.description}
            </p>
            <p>
              <strong>Color:</strong> {car.color}
            </p>
            <p>
              <strong>Electric:</strong> {car.isElectric ? "Yes" : "No"}
            </p>
            <p>
              <strong>Features:</strong> {car.features.join(", ")}
            </p>
            <p>
              <strong>Price Per Hour:</strong> ${car.pricePerHour}
            </p>
            <p>
              <strong>Status:</strong> {car.status}
            </p>
            <p>
              <strong>Created At:</strong>{" "}
              {new Date(car.createdAt).toLocaleDateString()}
            </p>
            <p>
              <strong>Updated At:</strong>{" "}
              {new Date(car.updatedAt).toLocaleDateString()}
            </p>
          </div>
        </div>
        {shouldShowBookButton ? (
          <button className="book-now-btn" onClick={() => bookButtonPressed()}>
            Book Now
          </button>
        ) : (
          <h1></h1>
        )}
        {showForm && (
          <form className="booking-form" onSubmit={handleSubmit}>
            <h3>Book the Car</h3>
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
            <div>
              <label htmlFor="date">Date (DD/MM/YYYY):</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
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
    </Layout>
  );
};

export default CarDetailsPage;
