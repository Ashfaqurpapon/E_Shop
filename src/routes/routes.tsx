import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { routeGenerator } from "../utils/routesGenerator";
import { adminPaths } from "./admin.routes";
import { userPaths } from "./user.routes";
import SignUpPage from "../AuthPages/SignUpPage";
import CarSignIn from "../AuthPages/CarSignIn";
import ProtectedRoute from "../PHForm/layout/ProtectedRoute";
import AboutUs from "../pages/AboutUs/AboutUs";
import BookingCar from "../pages/BookingCar/BookingCar";
import CarDetailsPage from "../pages/Car Details Page/CarDetailsPage";
import Navbar from "../pages/HomePage/Navbar/Navbar";
import CarListingPage from "../pages/Car Listing Page/CarListingPage/CarListingPage";
import Contact from "../pages/contact/Contact";
import UpdateCar from "../pages/CarPage/UpdateCar";
import Cart from "../pages/HomePage/Navbar/a9/Cart Functionality/Cart_Functionality";
import ShopPage from "../pages/HomePage/Navbar/a9/Shop page/ShopPage";
import ProductListPage from "../pages/HomePage/Navbar/a9/Product details page/Product_details";
import ProductDetailsPage from "../pages/HomePage/Navbar/a9/Product details page/Product_details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute role="admin">
        <App />
      </ProtectedRoute>
    ),
    children: routeGenerator(adminPaths),
  },
  {
    path: "/user",
    element: (
      <ProtectedRoute role="user">
        <App />
      </ProtectedRoute>
    ),
    children: routeGenerator(userPaths),
  },
  {
    path: "/signUp",
    element: <SignUpPage />,
  },
  {
    path: "/carSignIn",
    element: <CarSignIn />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "/bookingCar",
    element: <BookingCar />,
  },
  {
    path: "/home",
    element: <Navbar />,
  },
  {
    path: "/cars",
    element: <CarListingPage />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/view-car-details/:carId",
    element: <CarDetailsPage />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/shopName",
    element: <ShopPage />,
  },
  {
    path: "/product-details",
    element: <ProductDetailsPage />,
  },
  {
    path: "/ShopPage",
    element: <ShopPage />,
  },
]);
export default router;
