import CreateAProduct from "../pages/HomePage/Navbar/a9/CreateAProduct/CreateAProduct";
import CreateAShop from "../pages/HomePage/Navbar/a9/CreateAShop/CreateAShop";

import VendorAllPlacedOrder from "../pages/VendorPage/VendorAllPlacedOrder";
import VendorAllProducts from "../pages/VendorPage/VendorAllProducts";
import VendorAllShops from "../pages/VendorPage/VendorAllShops";
import VendorProfile from "../pages/VendorPage/VendorProfile";
export const vendorPaths = [
  {
    name: "Vendor Profile",
    path: "vendor-profile",
    element: <VendorProfile />,
  },
  {
    name: "Add product",
    path: "add-product",
    element: <CreateAShop />,
  },
  {
    name: "Create-product",
    path: "create-product",
    element: <CreateAProduct />,
  },
  {
    name: "Vendor all shops",
    path: "vendor-all-shops",
    element: <VendorAllShops />,
  },
  {
    name: "Vendor all products",
    path: "vendor-all-products",
    element: <VendorAllProducts />,
  },
  {
    name: "Vendor all placed order",
    path: "vendor-all-placed-order",
    element: <VendorAllPlacedOrder />,
  },
];
