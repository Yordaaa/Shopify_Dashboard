import { Route, Routes } from "react-router-dom";
import ProductListPage from "./Dashboard/ProductListPage";
import Cart from "./Dashboard/Cart";
import Connect from "./Dashboard/Connect";
import SendProduct from "./Dashboard/SendProduct";
import SideNav from "./Dashboard/SideNav";
import Header from "./Dashboard/Header";

function AppRoutes() {
  return (
    <div className="flex justify-between">
      <SideNav />
      <div className="w-full">
        <Header />
        <Routes>
          <Route path="/" element={<Connect />} />
          <Route path="/product" element={<ProductListPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/sendproduct" element={<SendProduct />} />
        </Routes>
      </div>
    </div>
  );
}

export default AppRoutes;
