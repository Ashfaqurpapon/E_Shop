import CarListingForDelete from "../pages/Car Listing Page/CarListingForDelete";
import CarListingForUpdate from "../pages/Car Listing Page/CarListingForUpdate";
import CreateCar from "../pages/CarPage/CreateCar";
import AllBookinksForAdmin from "../pages/UserInfoPage/AllBookinksForAdmin/AllBookinksForAdmin";
import AdminDashboard from "../tempCompo/AdminDashboard";

export const adminPaths = [
  {
    name: "My Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "Car Management",
    children: [
      {
        name: "Create A Car",
        path: "creat-a-car",
        element: <CreateCar />,
      },
      {
        name: "Update A Car",
        path: "update-a-car",
        element: <CarListingForUpdate />,
      },
      {
        name: "Delete Cars",
        path: "delete-a-car",
        element: <CarListingForDelete />,
      },
    ],
  },
  {
    name: "Bookings Management",
    children: [
      {
        name: "Get all bookings",
        path: "get-all-bookings",
        element: <AllBookinksForAdmin />,
      },
    ],
  },
];

// export const adminRoutes = adminPaths.reduce((acc: TRoute[], item) => {
//   if (item.path && item.element) {
//     acc.push({
//       path: item.path,
//       element: item.element,
//     });
//   }

//   if (item.children) {
//     item.children.forEach((child) => {
//       acc.push({
//         path: child.path,
//         element: child.element,
//       });
//     });
//   }

//   return acc;
// }, []);
