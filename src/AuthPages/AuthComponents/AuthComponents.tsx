import { useDispatch } from "react-redux";
import {
  carUserlogout,
  selectCurrentUser,
} from "../../redux/features/carAuthSlice";
import { useAppSelector } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

const AuthComponents = () => {
  const user = useAppSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOut = () => {
    console.log("user");
    console.log(user);
    dispatch(carUserlogout());
    navigate("/home");
  };

  const handleLogIn = () => {
    dispatch(carUserlogout());
    navigate("/carSignIn");
  };

  if (user) {
    return <Button onClick={() => handleOut()}>Log Out</Button>;
  } else {
    return <Button onClick={() => handleLogIn()}>Sign in</Button>;
  }
};

export default AuthComponents;
