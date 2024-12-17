import { Link } from "react-router-dom";
import "./SuduCarListPage.css";

import availablecarImage from "./availablecar image1.webp";

import { useGetAllCarsQuery } from "../../../redux/api/CarManagemntApi/carManagementApi";
const SuduCarListPage = () => {
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

  return (
    <div className="fixed_weight">
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

              <Link to={`/view-car-details/${car.key}`}>
                {" "}
                <button className="book-now-btn">View More</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuduCarListPage;
