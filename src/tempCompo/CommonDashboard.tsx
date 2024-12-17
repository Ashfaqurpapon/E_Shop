import "./CommonDashboard.css";
import { selectCarUser } from "../redux/features/carAuthSlice";
import { useAppSelector } from "../redux/hooks";

const CommonDashboard = () => {
  const user = useAppSelector(selectCarUser);

  return (
    <div className="common-dashboard">
      <h1 className="title dippink ">Login Information</h1>
      <h1>
        Name: <span>{user!.name}</span>
      </h1>
      <h1>
        Email: <span>{user!.email}</span>
      </h1>
      <h1>
        Phone no: <span>{user!.phone}</span>
      </h1>
      <h1>
        Address: <span>{user!.address}</span>
      </h1>
      <h1>
        Role: <span>{user!.role}</span>
      </h1>
    </div>
  );
};

export default CommonDashboard;
