import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { userSelector } from "../Redux/Features/selector";

function PrivateRoute() {
  const userInfo = useSelector(userSelector);
  console.log(userInfo);
  return userInfo ? <Outlet /> : <Navigate to="/" replace />;
}
export default PrivateRoute;
