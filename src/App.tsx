import AppRoutes from "./AppRoutes";
import Header from "./Dashboard/Header";
import SideNav from "./Dashboard/SideNav";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
export default function App() {
  return (
    <>
      <ToastContainer />
      <div className="flex justify-between">
        <SideNav />
        <div className="w-full">
          <Header />
          <AppRoutes />
        </div>
      </div>
    </>
  );
}
