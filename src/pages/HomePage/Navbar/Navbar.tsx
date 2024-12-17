import "./Navbar.css"; // Import the CSS file

import { Layout } from "antd";
import Sidebar from "../../../PHForm/layout/Sidebar";
import NavbarUp from "./NavbarUp/NavbarUp";

import HomePage from "./a9/Home page/Home_page";

// Dummy data for featured cars

// Dummy data for customer reviews

const Navbar = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sidebar />

      <NavbarUp />
      {/* <ProductListPage /> */}
      {/* <ShopPage /> */}
      {/* <Cart /> */}
      <HomePage />
      {/* <CheckoutPage /> */}
      {/* <VOrderHistory /> */}
      {/* <COrderHistory /> */}
      {/* <RecentProducts /> */}
    </Layout>
  );
};

export default Navbar;
