import COrderHistory from "../pages/HomePage/Navbar/a9/COrder History/COrder History";
import RecentProducts from "../pages/HomePage/Navbar/a9/Recent Products Page/Recent Products Page";

export const userPaths = [
  {
    name: "Recent Products",
    path: "recentProducts",
    element: <RecentProducts />,
  },
  {
    name: "COrderHistory",
    path: "COrderHistory",
    element: <COrderHistory />,
  },
];
