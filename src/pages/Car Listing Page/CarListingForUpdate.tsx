/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllCarsQuery } from "../../redux/api/CarManagemntApi/carManagementApi.ts";

import { Link } from "react-router-dom";
import { Layout } from "antd";
import NavbarUp from "../HomePage/Navbar/NavbarUp/NavbarUp";
import availablecarImage from "./availablecar image1.webp";

const CarListingForUpdate = () => {
  const { data: carsData } = useGetAllCarsQuery(undefined);
  const tableData = carsData?.data
    ?.filter((car) => car.status === "available")
    .map(
      ({
        _id,
        name,
        description,
        color,
        isElectric,
        features,
        pricePerHour,
        status,
        isDeleted,
        createdAt,
        updatedAt,
      }) => ({
        key: _id,
        name,
        description,
        color,
        isElectric,
        features,
        pricePerHour,
        status,
        isDeleted,
        createdAt,
        updatedAt,
      })
    );
  console.log(carsData);

  (car: {
    key: any;
    name?: string;
    description?: string;
    color?: string;
    isElectric?: boolean;
    features?: string[];
    pricePerHour?: number;
    status?: string;
    isDeleted?: boolean;
    createdAt?: string;
    updatedAt?: string;
  }) => {
    // Set the selected car details

    console.log(car);
    console.log("View details is pressed");

    // setSelectedCar(car);
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <NavbarUp />
      <div className="car-listing-page">
        <h2 className="Available_Cars">Available Cars</h2>
        <div className="cars-grid">
          {tableData?.map((car) => (
            <div key={car.key} className="car-card">
              <img
                src={availablecarImage} // Replace with actual image source if available
                alt={car.name}
              />
              <h3>{car.name}</h3>
              <p>{car.description}</p>
              <p className="price">${car.pricePerHour}/hour</p>
              {/* <button
                  className="book-now-btn"
                  onClick={() => handleViewMore(car)}
                >
                  View More
                </button> */}

              <Link to={`/update-car-details/${car.key}`}>
                {" "}
                <button className="book-now-btn">Update This</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CarListingForUpdate;
