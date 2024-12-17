import RecentProducts from "../pages/HomePage/Navbar/a9/Recent Products Page/Recent Products Page";
import MyAllBookings from "../pages/UserInfoPage/MyAllBookings";
import UserDashboard from "../tempCompo/UserDashboard";
export const userPaths = [
  {
    name: "Recent Products",
    path: "recentProducts",
    element: <RecentProducts />,
  },
  {
    name: "My All Bookings",
    path: "my-all-bookings",
    element: <MyAllBookings />,
  },
];
