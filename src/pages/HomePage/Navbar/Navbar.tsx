import "./Navbar.css"; // Import the CSS file

import HomeImage from "./Car Website – 1@2x.png";
import { Layout } from "antd";
import Sidebar from "../../../PHForm/layout/Sidebar";
import NavbarUp from "./NavbarUp/NavbarUp";

import SuduCarListPage from "../../Car Listing Page/SuduCarListPage/SuduCarListPage";
import { Link } from "react-router-dom";
import ProductListPage from "./a9/Product details page/Product_details";
import ShopPage from "./a9/Shop page/ShopPage";
import CartFunctionality from "./a9/Cart Functionality/Cart_Functionality";
import HomePage from "./a9/Home page/Home_page";
import CheckoutPage from "./a9/CheckoutPage/CheckoutPage";
import VOrderHistory from "./a9/VOrder History/VOrder History";
import COrderHistory from "./a9/COrder History/COrder History";
import RecentProducts from "./a9/Recent Products Page/Recent Products Page";
import Cart from "./a9/Cart Functionality/Cart_Functionality";

// Dummy data for featured cars

// Dummy data for customer reviews
const customerReviews = [
  {
    id: 1,
    name: "Salman F Rahman",
    review: "Excellent service and great selection of cars!",
    rating: 5,
  },
  {
    id: 2,
    name: "Harun Uncle",
    review: "Affordable prices and friendly staff. Highly recommended!",
    rating: 4,
  },
  {
    id: 3,
    name: "Hasina",
    review: "The booking process was smooth and hassle-free.",
    rating: 5,
  },
  {
    id: 4,
    name: "Baker Vhai",
    review: "The booking process was smooth and hassle-free.",
    rating: 5,
  },
  {
    id: 5,
    name: "Tourist",
    review: "The booking process was smooth and hassle-free.",
    rating: 5,
  },
];

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
