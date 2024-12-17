import { ReactNode } from "react";
// import { useAppSelector } from "../../redux/feathers/hooks";
import { Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  carUserlogout,
  selectCurrentUser,
  TUser,
} from "../../redux/features/carAuthSlice";

// import { useCurrentToken } from "../../redux/feathers/auth/authSlice";

type TprotectedRoute = {
  children: ReactNode;
  role: string;
};

const ProtectedRoute = ({ children, role }: TprotectedRoute) => {
  const user = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();

  if (!user) {
    console.log("Unsigned user");
    return <Navigate to="/" replace={true} />;
  } else if ((user as TUser).role != role) {
    dispatch(carUserlogout());
    return <Navigate to="/carSignIn" replace={true} />;
  }

  return children;
};

export default ProtectedRoute;
