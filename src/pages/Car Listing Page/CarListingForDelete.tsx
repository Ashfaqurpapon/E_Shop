import { Link } from "react-router-dom";

import availablecarImage from "./availablecar image1.webp";
import { Layout } from "antd";
import NavbarUp from "../HomePage/Navbar/NavbarUp/NavbarUp";
import {
  useDeleteCarMutation,
  useGetAllCarsQuery,
} from "../../redux/api/CarManagemntApi/carManagementApi";
const CarListingForDelete = () => {
  const { data: carsData } = useGetAllCarsQuery(undefined);
  const [deleteCar] = useDeleteCarMutation();
  //   const [selectedCar, setSelectedCar] = useFormItemStatus(null);

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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

  const deleteBtnpressed = async (carId: string) => {
    console.log("Delete button pressed");
    const res = await deleteCar({ id: carId });
    console.log(res);
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
              <Link to={`/view-car-details/${car.key}`}>
                {" "}
                <button className="book-now-btn">View More</button>
              </Link>

              <button
                className="book-now-btn"
                onClick={() => deleteBtnpressed(car.key)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CarListingForDelete;
