import { Navigate, Outlet } from "react-router-dom";
const useAuth = () => {
  const user = localStorage.getItem("user");
  return user ? true : false;
};

const PrivateRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
