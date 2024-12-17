import { selectCarUser } from "../../redux/features/carAuthSlice";
import { useAppSelector } from "../../redux/hooks";

const Myprofile = () => {
  const carUser = useAppSelector(selectCarUser);
  return (
    <div>
      <h1>My NAME : {carUser?.name}</h1>
      <h1>My address :{carUser?.address}</h1>
      <h1>My Email :{carUser?.email}</h1>
      <h1>My phone : {carUser?.phone}</h1>
      <h1>My role : {carUser?.role}</h1>
    </div>
  );
};

export default Myprofile;
