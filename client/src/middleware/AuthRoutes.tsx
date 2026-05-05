import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../context/UserContext";

export const AuthorizedRoutes = () => {
  const store = useContext(Context);

  return store.isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export const UnauthorizedRoutes = () => {
  const store = useContext(Context);

  return !store.isAuth ? <Outlet /> : <Navigate to="/profile" />;
};

// export default PrivateRoutes;
