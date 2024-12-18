import { Layout, Menu } from "antd";
// import { useAppSelector } from "../../redux/feathers/hooks";
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentUser, TUser } from "../../redux/features/carAuthSlice";
import { adminPaths } from "../../routes/admin.routes";
import { userPaths } from "../../routes/user.routes";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import { vendorPaths } from "../../routes/vendor.routes";

const { Sider } = Layout;

const userRole = {
  ADMIN: "admin",
  USER: "user",
  VENDOR: "vendor",
};

const Sidebar = () => {
  const user = useAppSelector(selectCurrentUser);

  // if (!user) {
  //   return null;
  // }
  let sidebarItems;
  if (!user) {
    // return <Navbar />;
    return null;
  }

  switch ((user as TUser)!.role) {
    case userRole.ADMIN:
      sidebarItems = sidebarItemsGenerator(adminPaths, userRole.ADMIN);
      break;
    case userRole.USER:
      sidebarItems = sidebarItemsGenerator(userPaths, userRole.USER);
      break;
    case userRole.VENDOR:
      sidebarItems = sidebarItemsGenerator(vendorPaths, userRole.VENDOR);
      break;

    default:
      break;
  }

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      style={{ height: "100vh", position: "sticky", top: "0", left: "0" }}
    >
      <div
        style={{
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
