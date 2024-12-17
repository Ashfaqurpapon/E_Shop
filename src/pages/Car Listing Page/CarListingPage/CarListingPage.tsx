import { Layout } from "antd";
import Sidebar from "../../../PHForm/layout/Sidebar";
import NavbarUp from "../../HomePage/Navbar/NavbarUp/NavbarUp";

import SuduCarListPage from "../SuduCarListPage/SuduCarListPage";

const CarListingPage = () => {
  // Map and filter the car data to show only available cars
  // const tableData = carsData?.data
  //   ?.filter((car) => car.status === "available")
  //   .map(
  //     ({
  //       _id,
  //       name,
  //       description,
  //       color,
  //       isElectric,
  //       features,
  //       pricePerHour,
  //       status,
  //       isDeleted,
  //       createdAt,
  //       updatedAt,
  //     }) => ({
  //       key: _id,
  //       name,
  //       description,
  //       color,
  //       isElectric,
  //       features,
  //       pricePerHour,
  //       status,
  //       isDeleted,
  //       createdAt,
  //       updatedAt,
  //     })
  //   );

  return (
    <Layout style={{ height: "100vh" }}>
      <Sidebar />
      <NavbarUp />
      <SuduCarListPage />
    </Layout>
  );
};

export default CarListingPage;
